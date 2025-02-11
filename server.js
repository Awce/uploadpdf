require("dotenv").config();
const express = require("express");
const QRCode = require("qrcode");
const bwipjs = require("bwip-js");
const bodyParser = require("body-parser");
const PdfPrinter = require("pdfmake");
const ExcelJS = require("exceljs");
const generatePdfContent = require("./utils/pdfTemplate");
const generateExcelContent = require("./utils/excelTemplate");

const app = express();
const port = process.env.PORT || 3000;

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
        'attachment; filename="documento.pdf"'
      );
      res.send(pdfBuffer);
    });
    pdfDoc.end();
  } catch (error) {
    console.error("⚠️ Error generando PDF:", error.message);
    res.status(500).send("Error interno del servidor");
  }
});

// 🔹 Endpoint para generar archivo Excel
app.post("/generate-excel", async (req, res) => {
  try {
    const { columns, data } = req.body;

    // Validación básica
    if (!columns || !data) {
      return res.status(400).send("Faltan columnas o datos en el JSON.");
    }

    const workbook = await generateExcelContent({ columns, data });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", 'attachment; filename="datos.xlsx"');

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("⚠️ Error generando Excel:", error.message);
    res.status(500).send("Error interno del servidor");
  }
});

// 🔹 Endpoint para generar código QR
app.get("/generate-qr", async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send("URL is required");
  }
  try {
    const qrCodeData = await QRCode.toDataURL(url);
    const imgBuffer = Buffer.from(
      qrCodeData.replace(/^data:image\/png;base64,/, ""),
      "base64"
    );
    res.setHeader("Content-Type", "image/png");
    res.send(imgBuffer);
  } catch (err) {
    res.status(500).send("Error generating QR code");
  }
});

// 🔹 Endpoint para generar código de barras
app.get("/generate-barcode", async (req, res) => {
  const text = req.query.text || "123456789012";
  try {
    const png = await bwipjs.toBuffer({
      bcid: "code128",
      text: text,
      scale: 2,
      height: 100,
      includetext: true,
      textxalign: "center",
    });
    res.setHeader("Content-Type", "image/png");
    res.send(png);
  } catch (err) {
    res.status(500).send("Error generating barcode");
  }
});

// 🔹 Iniciar servidor
app.listen(port, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${port}`);
});
