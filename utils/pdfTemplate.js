// const getBase64Image = require("../utils/imageHelper"); // Para descargar imágenes
// const generateTableBody = require("../utils/generateTableBody"); // Para generar el cuerpo de la tabla

// // Función para generar la estructura del PDF
// const generatePdfContent = async (data) => {
//   const {
//     autorizante,
//     departamento,
//     email_autorizante,
//     solicitante,
//     puesto,
//     email_solicitante,
//     empresa,
//     web,
//     cif,
//     direccion_fiscal,
//     direccion_entrega,
//     email_empresa,
//     fecha_solicitud,
//     fecha_deseada,
//     fecha_maxima,
//     solicitud_no,
//     detalles,
//     observaciones,
//   } = data;

//   // Descargar logo en base64
//   const logoBase64 = await getBase64Image(
//     "https://mrhouston.net/wp-content/uploads/2020/02/logo_web.png"
//   );

//   return {
//     content: [
//       // 🔹 Cabecera con 2 columnas (Logo + Número de Solicitud)
//       {
//         columns: [
//           logoBase64
//             ? { image: logoBase64, width: 120 }
//             : { text: "LOGO NO DISPONIBLE", style: "errorText" },

//           {
//             stack: [
//               {
//                 text: `Solicitud No. ${solicitud_no}`,
//                 style: "solicitudHeader",
//               },
//               {
//                 text: "Fechas Importantes",
//                 style: "subheader",
//                 margin: [0, 10, 0, 5],
//               },
//               {
//                 ul: [
//                   {
//                     text: `📅 Fecha de solicitud: ${fecha_solicitud}`,
//                     margin: [0, 2],
//                   },
//                   {
//                     text: `🚀 Fecha deseada: ${fecha_deseada}`,
//                     margin: [0, 2],
//                   },
//                   { text: `⚠️ Fecha máxima: ${fecha_maxima}`, margin: [0, 2] },
//                 ],
//               },
//             ],
//             alignment: "right",
//             width: "60%",
//           },
//         ],
//         margin: [0, 0, 0, 10],
//       },

//       // 🔹 Datos Generales
//       {
//         canvas: [
//           {
//             type: "line",
//             x1: 0,
//             y1: 0,
//             x2: 515,
//             y2: 0,
//             lineWidth: 2,
//             color: "#ED6000",
//           },
//         ],
//       },
//       { text: "Datos Generales", style: "subheader" },
//       {
//         columns: [
//           { text: `Autorizante: ${autorizante}`, width: "50%" },
//           { text: `Departamento: ${departamento}`, width: "50%" },
//         ],
//       },
//       {
//         columns: [
//           { text: `Email: ${email_autorizante}`, width: "50%" },
//           { text: `Solicitante: ${solicitante}`, width: "50%" },
//         ],
//       },
//       {
//         columns: [
//           { text: `Puesto: ${puesto}`, width: "50%" },
//           { text: `Email: ${email_solicitante}`, width: "50%" },
//         ],
//       },

//       // 🔹 Empresa
//       {
//         canvas: [
//           {
//             type: "line",
//             x1: 0,
//             y1: 0,
//             x2: 515,
//             y2: 0,
//             lineWidth: 2,
//             color: "#ED6000",
//           },
//         ],
//       },
//       { text: "\nEmpresa", style: "subheader" },
//       { text: `Empresa: ${empresa}`, margin: [0, 5, 0, 5] },
//       { text: `Web: ${web}`, margin: [0, 5, 0, 5] },
//       { text: `CIF: ${cif}`, margin: [0, 5, 0, 5] },
//       { text: `Dirección Fiscal: ${direccion_fiscal}`, margin: [0, 5, 0, 5] },
//       {
//         text: `Dirección de Entrega: ${direccion_entrega}`,
//         margin: [0, 5, 0, 5],
//       },
//       { text: `Email: ${email_empresa}`, margin: [0, 5, 0, 10] },

//       // 🔹 Detalles de la Solicitud
//       {
//         canvas: [
//           {
//             type: "line",
//             x1: 0,
//             y1: 0,
//             x2: 515,
//             y2: 0,
//             lineWidth: 2,
//             color: "#ED6000",
//           },
//         ],
//       },
//       { text: "\nDetalles de la Solicitud", style: "subheader" },
//       {
//         table: {
//           headerRows: 1,
//           widths: ["20%", "50%", "30%"],
//           body: generateTableBody(detalles),
//         },
//         layout: "lightHorizontalLines",
//       },

//       // 🔹 Observaciones
//       { text: `\nObservaciones: ${observaciones}`, margin: [0, 10, 0, 0] },
//     ],

//     // 🔹 Estilos
//     styles: {
//       solicitudHeader: {
//         fontSize: 16,
//         bold: true,
//         color: "#ED6000",
//         margin: [0, 0, 0, 5],
//       },
//       header: {
//         fontSize: 16,
//         bold: true,
//         alignment: "center",
//         margin: [0, 0, 0, 10],
//       },
//       subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
//       tableHeader: { bold: true, fontSize: 12, color: "black" },
//       errorText: {
//         fontSize: 12,
//         color: "red",
//         bold: true,
//         alignment: "center",
//       },
//     },
//     defaultStyle: { font: "Helvetica" },
//   };
// };

// // Exportar la función
// module.exports = generatePdfContent;

const getBase64Image = require("../utils/imageHelper");
const generateTableBody = require("../utils/generateTableBody");

const generatePdfContent = async (data) => {
  const {
    autorizante,
    departamento,
    email_autorizante,
    solicitante,
    puesto,
    email_solicitante,
    empresa,
    web,
    cif,
    direccion_fiscal,
    direccion_entrega,
    email_empresa,
    fecha_solicitud,
    fecha_deseada,
    fecha_maxima,
    solicitud_no,
    detalles,
    observaciones,
    presupuesto,
  } = data;

  // Descargar logo en base64
  const logoBase64 = await getBase64Image(
    "https://mrhouston.net/wp-content/uploads/2020/02/logo_web.png"
  );

  return {
    content: [
      // 🔹 Cabecera con 2 columnas (Logo + Número de Solicitud)
      {
        columns: [
          logoBase64
            ? { image: logoBase64, width: 120 }
            : { text: "LOGO NO DISPONIBLE", style: "errorText" },

          {
            stack: [
              {
                text: `Solicitud No. ${solicitud_no}`,
                style: "solicitudHeader",
              },
              {
                text: "Fechas Importantes",
                style: "subheader",
                margin: [0, 10, 0, 5],
              },
              {
                ul: [
                  {
                    text: `📅 Fecha de solicitud: ${fecha_solicitud}`,
                    margin: [0, 2],
                  },
                  {
                    text: `🚀 Fecha deseada: ${fecha_deseada}`,
                    margin: [0, 2],
                  },
                  { text: `⚠️ Fecha máxima: ${fecha_maxima}`, margin: [0, 2] },
                ],
              },
            ],
            alignment: "right",
            width: "60%",
          },
        ],
        margin: [0, 0, 0, 10],
      },

      // 🔹 Datos Generales
      {
        canvas: [
          {
            type: "line",
            x1: 0,
            y1: 0,
            x2: 515,
            y2: 0,
            lineWidth: 2,
            color: "#ED6000",
          },
        ],
      },
      { text: "Datos Generales", style: "subheader" },
      {
        columns: [
          { text: `Autorizante: ${autorizante}`, width: "50%" },
          { text: `Departamento: ${departamento}`, width: "50%" },
        ],
      },
      {
        columns: [
          { text: `Email: ${email_autorizante}`, width: "50%" },
          { text: `Solicitante: ${solicitante}`, width: "50%" },
        ],
      },
      {
        columns: [
          { text: `Puesto: ${puesto}`, width: "50%" },
          { text: `Email: ${email_solicitante}`, width: "50%" },
        ],
      },

      // 🔹 Empresa
      {
        canvas: [
          {
            type: "line",
            x1: 0,
            y1: 0,
            x2: 515,
            y2: 0,
            lineWidth: 2,
            color: "#ED6000",
          },
        ],
      },
      { text: "\nEmpresa", style: "subheader" },
      { text: `Empresa: ${empresa}`, margin: [0, 5, 0, 5] },
      { text: `Web: ${web}`, margin: [0, 5, 0, 5] },
      { text: `CIF: ${cif}`, margin: [0, 5, 0, 5] },
      { text: `Dirección Fiscal: ${direccion_fiscal}`, margin: [0, 5, 0, 5] },
      {
        text: `Dirección de Entrega: ${direccion_entrega}`,
        margin: [0, 5, 0, 5],
      },
      { text: `Email: ${email_empresa}`, margin: [0, 5, 0, 10] },

      // 🔹 Detalles de la Solicitud
      {
        canvas: [
          {
            type: "line",
            x1: 0,
            y1: 0,
            x2: 515,
            y2: 0,
            lineWidth: 2,
            color: "#ED6000",
          },
        ],
      },
      { text: "\nDetalles de la Solicitud", style: "subheader" },
      {
        table: {
          headerRows: 1,
          widths: ["10%", "40%", "50%"],
          body: generateTableBody(detalles),
        },
        layout: "lightHorizontalLines",
      },

      // 🔹 Observaciones y Presupuesto
      {
        canvas: [
          {
            type: "line",
            x1: 0,
            y1: 0,
            x2: 515,
            y2: 0,
            lineWidth: 2,
            color: "#ED6000",
          },
        ],
      },
      { text: "\nInformación Adicional", style: "subheader" },
      { text: `Observaciones: ${observaciones}`, margin: [0, 5, 0, 5] },
      { text: `Presupuesto aprobado: ${presupuesto}`, margin: [0, 5, 0, 5] },
    ],

    // 🔹 Estilos
    styles: {
      solicitudHeader: {
        fontSize: 16,
        bold: true,
        color: "#ED6000",
        margin: [0, 0, 0, 5],
      },
      header: {
        fontSize: 16,
        bold: true,
        alignment: "center",
        margin: [0, 0, 0, 10],
      },
      subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
      tableHeader: { bold: true, fontSize: 12, color: "black" },
      errorText: {
        fontSize: 12,
        color: "red",
        bold: true,
        alignment: "center",
      },
    },
    defaultStyle: { font: "Helvetica" },
  };
};

module.exports = generatePdfContent;
