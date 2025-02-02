const axios = require("axios");

/**
 * Descarga una imagen y la convierte a Base64.
 * @param {string} url - URL de la imagen a descargar.
 * @returns {Promise<string|null>} - Imagen en formato Base64 o null si hay error.
 */
const getBase64Image = async (url) => {
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    return `data:image/png;base64,${Buffer.from(response.data).toString(
      "base64"
    )}`;
  } catch (error) {
    console.error("⚠️ Error al descargar la imagen:", error.message);
    return null;
  }
};

module.exports = getBase64Image;
