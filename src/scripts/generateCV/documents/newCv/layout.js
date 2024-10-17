import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cssIconsTemplate = path.resolve(__dirname, './icons/css/fontello-embedded.css');
const cssTemplate = path.resolve(__dirname, './cvCss.css');

