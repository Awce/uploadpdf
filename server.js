const express = require("express");
const bodyParser = require("body-parser");
const PdfPrinter = require("pdfmake");
const vfsFonts = require("pdfmake/build/vfs_fonts"); // Importar las fuentes embebidas

const app = express();
app.use(bodyParser.json());

// Asegurar que vfsFonts está definido correctamente
const fonts = vfsFonts.pdfMake ? vfsFonts.pdfMake.vfs : vfsFonts.vfs;

// Crear instancia de PdfPrinter con la fuente Helvetica (que está embebida)
const printer = new PdfPrinter({
  Helvetica: {
    normal: "Helvetica",
    bold: "Helvetica-Bold",
    italics: "Helvetica-Oblique",
    bolditalics: "Helvetica-BoldOblique",
  },
});

// Asignar correctamente las fuentes embebidas
printer.vfs = fonts;

// Endpoint para generar PDF
app.post("/generate-pdf", (req, res) => {
  const { title, content } = req.body;

  const docDefinition = {
    content: [
      { text: title, style: "header" },
      { text: content, style: "body" },
    ],
    styles: {
      header: { fontSize: 18, bold: true, margin: [0, 10, 0, 10] },
      body: { fontSize: 12, margin: [0, 5, 0, 5] },
    },
    defaultStyle: {
      font: "Helvetica", // Usamos la fuente Helvetica
    },
  };

  // Generar PDF como stream
  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  let chunks = [];
  pdfDoc.on("data", (chunk) => chunks.push(chunk));
  pdfDoc.on("end", () => {
    const pdfBuffer = Buffer.concat(chunks);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=generated.pdf");
    res.send(pdfBuffer);
  });
  pdfDoc.end();
});

// Inicia el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
