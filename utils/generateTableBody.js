/**
 * Genera el cuerpo de la tabla de detalles en el PDF.
 * @param {Array} detalles - Lista de objetos con los detalles de la solicitud.
//  * @returns {Array} - Cuerpo de la tabla en formato PDFMake.
//  */
// const generateTableBody = (detalles) => {
//   const header = [
//     { text: "Cantidad", style: "tableHeader" },
//     { text: "Descripción", style: "tableHeader" },
//     { text: "Tipo", style: "tableHeader" },
//   ];

//   const rows = detalles.map((item) => [
//     item.cantidad || "N/A",
//     item.descripcion || item.software || "N/A",
//     item.tipo_solicitud || "N/A",
//   ]);

//   return [header, ...rows];
// };

// module.exports = generateTableBody;

const generateTableBody = (detalles) => {
  const header = [
    { text: "Cantidad", style: "tableHeader" },
    { text: "Descripción", style: "tableHeader" },
    { text: "Detalles Adicionales", style: "tableHeader" },
  ];

  const rows = detalles.map((item) => [
    item.cantidad || "N/A",
    item.descripcion || "N/A",
    item.software ||
      item.configuracion ||
      item.marca ||
      item.modelo ||
      item.notas ||
      "N/A",
  ]);

  return [header, ...rows];
};

module.exports = generateTableBody;
