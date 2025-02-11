const ExcelJS = require("exceljs");

const generateExcelContent = async ({ columns, data }) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Datos");

  // Definir las columnas según el JSON recibido
  worksheet.columns = columns;

  // Agregar datos al Excel
  data.forEach((row) => worksheet.addRow(row));

  return workbook;
};

module.exports = generateExcelContent;
