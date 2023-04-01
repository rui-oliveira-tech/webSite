const path = require("path");
const pdfCvRouter = require('express').Router();
const pdf = require('html-pdf');
const config = require('../config');
const fs = require('fs');

const pdfTemplate = require('./documents');


const validatePdfCvType = (req, res, next) => {
   const { type } = req.params;
   if (!config.pdfCv.includes(type)) {
      res.status(404).json({ message: "This type does not exist!" });
   }
   next();
}

pdfCvRouter.post('/create/:type', validatePdfCvType, (req, res, next) => {
   const { type } = req.params;
   const tmpPath = path.join(__dirname, "../tmp");
   pdf.create(pdfTemplate(req.body), {}).toFile(`RuiOliveira_CV-${type}.pdf`, (err) => {
      if (err) {
         res.send(Promise.reject());
      }

      res.send(Promise.resolve());
   });
});

/* pdfCvRouter.get('/fetch-cv-pdf', (req, res) => {
   const { type } = req.params;
   console.log("test")
   res.sendFile(`${__dirname}/RuiOliveira_CV-${type}.pdf`)
}) */


pdfCvRouter.get('/fetch/:type', validatePdfCvType, async function (req, res, next) {
   const { type } = req.params;
   const fileName = `RuiOliveira_CV-${type}.pdf`;
   const publicBasePath = path.join(__dirname, "../client/public");
   const tmp = __dirname;
   const tmpPath = path.join(__dirname, "../tmp");
   const outputPath = path.join(tmpPath, fileName);

   console.log(outputPath)

   var file = fs.createReadStream(outputPath, 'binary');
   var stat = fs.statSync(outputPath);
   res.setHeader('Content-Length', stat.size);
   res.setHeader("content-disposition", `attachment; filename="${fileName}";`);
   res.setHeader("content-type", "application/pdf");
   //file.pipe(res);
   res.end();

   console.log()
   //res.download(tmpPath, function (err) {
   //   if (err) {
   //       console.log("Error");
   //       console.log(err);
   //   } else {
   //       console.log("Success");
   //   }    
   /* 
      const myVcard = await getVcard(type, fileName);
      if (myVcard != null) {
         res.send(myVcard);
         res.sendFile(`${__dirname}/RuiOliveira_CV-${type}.pdf`)
      } else {
         res.status(500).json({ message: "Could not create requested pdf!" });
      } */
   //});


   /* pdfCvRouter.get('/fetch', async function (req, res, next) {
        console.log("aqui")
            res.status(500).json({ message: "Could not create requested pdf!" });
   }); */
});

module.exports = pdfCvRouter;