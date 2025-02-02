# Nombre del script: Subir PDF y guardar URL

# Variables iniciales
Set Variable [ $url ; "http://localhost:3000/upload-pdf" ] 

# Generar encabezado para la solicitud HTTP POST
Set Variable [ $headers ; 
"Content-Type: multipart/form-data; boundary=" & $boundary
]

# Construir el cuerpo de la solicitud
Set Variable [ $body ; 
"--" & $boundary & ¶ &
"Content-Disposition: form-data; name=\"file\"; filename=\"archivo.pdf\"" & ¶ &
"Content-Type: application/pdf" & ¶ &
¶ &
GetAsText ( ArchivoPDF ) & ¶ &
"--" & $boundary & "--" & ¶
]

# Realizar la solicitud HTTP POST
Insert From URL [ Select ; With dialog: Off ; Target: URLArchivo ; 
   URL: $url ; 
   cURL options: 
      "-X POST " & 
      "-H " & Quote ( $headers ) & " " & 
      "--data-binary @" & Quote ( $body )
]

# Validar respuesta
If [ IsEmpty ( URLArchivo ) ]
   Show Custom Dialog [ "Error"; "La subida del archivo falló. Inténtalo de nuevo." ]
Else
   Show Custom Dialog [ "Éxito"; "El archivo se subió correctamente. URL: " & URLArchivo ]
End If

