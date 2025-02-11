const generateTableBody = (detalles) => {
  const header = [
    { text: "Cantidad", style: "tableHeader" },
    { text: "Descripción", style: "tableHeader" },
    { text: "Detalles Adicionales", style: "tableHeader" },
  ];

  const rows = detalles.map((item) => [
    item.cantidad || "N/A",
    item.descripcion || "N/A",
    item.adicionales ||
      item.configuracion ||
      item.marca ||
      item.modelo ||
      item.notas ||
      "N/A",
  ]);

  return [header, ...rows];
};

module.exports = generateTableBody;
