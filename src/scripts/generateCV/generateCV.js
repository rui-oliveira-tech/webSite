import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import deepMerge from '../../util/deepMerge.js';
import pdfTemplate from './documents/newCv/index.js'; 
import { defaultLanguage, supportedLngs } from '../../resource/lngs/langs.js';
import getLink from '../../resource/link.js';
import { fileURLToPath } from 'url'; 


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const getTranslations = (locale) => {
  if (!supportedLngs.includes(locale)) {
    throw new Error(`Locale "${locale}" not supported`);
  }

  const localeFilePath = path.join(__dirname, `../../messages/${locale}.json`);
  const defaultLocaleFilePath = path.join(__dirname, `../../messages/${defaultLanguage}.json`);

  const localeJson = JSON.parse(fs.readFileSync(localeFilePath, 'utf8'));
  const defaultLocaleJson = locale === defaultLanguage ? {} : JSON.parse(fs.readFileSync(defaultLocaleFilePath, 'utf8'));

  return { messages: deepMerge(defaultLocaleJson, localeJson) };
};

const generateHTML = async (lang, translationKeys, outputDirectory) => {
  const cvHtml = pdfTemplate({ currentLanguageCode: lang, cvData: translationKeys, getLink: getLink });
  const htmlFilePath = path.join(outputDirectory, `RuiOliveira_CV-${lang.toUpperCase()}.html`);

  // Save the HTML file
  fs.writeFileSync(htmlFilePath, cvHtml, 'utf8');
  console.log(`HTML file generated for ${lang}`);
};

const generatePDF = async (browser, lang, translationKeys, outputDirectory) => {
  const cvHtml = pdfTemplate({ currentLanguageCode: lang, cvData: translationKeys, getLink: getLink });
  const options = {
    format: 'Letter',
    zoomFactor: "1",
    orientation: 'portrait',
    margin: {
      top: '8mm',
      bottom: '8mm',
      left: '8mm',
      right: '8mm',
    },
    displayHeaderFooter: false, 
    footerTemplate: `<div style="font-size: 10px; text-align: center; width: 100%;">
      <p>Rui Oliveira &mdash; <a href="https://www.rui-oliveira.com/${lang}" class="icon-globe-1">www.rui-oliveira.com</a> &mdash; +32474127175</p>
      <div>${translationKeys.expressions.page} <span class="pageNumber"></span> of <span class="totalPages"></span></div>
    </div>`,
    headerTemplate: '<header></header>', 
    printBackground: true, 
  };

  const page = await browser.newPage();
  await page.setContent(cvHtml, { waitUntil: 'networkidle0' });
  await page.pdf({ ...options, path: path.join(outputDirectory, `RuiOliveira_CV-${lang.toUpperCase()}.pdf`) });
  console.log(`PDF generated for ${lang}`);
  await page.close();
};

const generateCV = async () => {
  const outputDirectory = process.env.OUTPUT_DIR || "public/resource";
  const outputDirectoryTemp = process.env.OUTPUT_DIR || ".temp";

  fs.mkdirSync(outputDirectory, { recursive: true });

  const browser = await puppeteer.launch();
  const supportedLngsKeys = Object.fromEntries(supportedLngs.map(lang => {
    try {
      return [lang, getTranslations(lang).messages];
    } catch (err) {
      console.error(err.message);
      return [lang, null];
    }
  }));

  try {
    await Promise.all(supportedLngs.map(async (lang) => {
      const translationKeys = supportedLngsKeys[lang];
      if (translationKeys) {
        await generateHTML(lang, translationKeys, outputDirectoryTemp); 
        await generatePDF(browser, lang, translationKeys, outputDirectory); 
      }
    }));
  } catch (err) {
    console.error('Error generating CVs:', err);
  } finally {
    await browser.close();
  }
};

// Start the CV generation process
generateCV().catch(console.error);
