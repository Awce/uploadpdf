const express = require("express");
const bodyParser = require("body-parser");
const PdfPrinter = require("pdfmake");
const generatePdfContent = require("./utils/pdfTemplate"); // 📂 Importamos el diseño del PDF

const app = express();
app.use(bodyParser.json());

const fonts = {
  Helvetica: {
    normal: "Helvetica",
    bold: "Helvetica-Bold",
    italics: "Helvetica-Oblique",
    bolditalics: "Helvetica-BoldOblique",
  },
};

const printer = new PdfPrinter(fonts);

// 🔹 Endpoint para generar el PDF
app.post("/generate-pdf", async (req, res) => {
  try {
    const docDefinition = await generatePdfContent(req.body);
    const pdfDoc = printer.createPdfKitDocument(docDefinition);

    let chunks = [];
    pdfDoc.on("data", (chunk) => chunks.push(chunk));
    pdfDoc.on("end", () => {
      const pdfBuffer = Buffer.concat(chunks);
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        'attachment; filename="solicitud.pdf"'
      );
      res.send(pdfBuffer);
    });

    pdfDoc.end();
  } catch (error) {
    console.error("⚠️ Error generando PDF:", error.message);
    res.status(500).send("Error interno del servidor");
  }
});

// 🔹 Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
