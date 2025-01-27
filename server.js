const express = require("express");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // Generar nombres únicos para archivos

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de multer para manejar archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueName); // Generar un nombre único para el archivo
  },
});

const upload = multer({ storage });

// Ruta para manejar la subida de archivos
app.post("/upload-pdf", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  // Construir la URL del archivo guardado (esto asume que el servidor servirá la carpeta `uploads`)
  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;

  res.status(200).json({ url: fileUrl });
});

// Servir archivos de la carpeta 'uploads'
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
