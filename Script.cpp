Case(
	$tipoSolicitud = "Equipos Informáticos";
	JSONSetElement(
		$json;
        [
			"detalles[" & $i - 1 & "].id";
			GetValue( $conceptos; $i );
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].equipo";
			Sol_f_SolicitudesItems__POR::SolIte_ReservaUsuario;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].usuario";
			Sol_f_SolicitudesItems__POR::SolIte_UsuarioNuevo;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].correo";
			Sol_f_SolicitudesItems__POR::SolIte_UsuarioRequiereCorreo;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].cuenta";
			Sol_f_SolicitudesItems__POR::SolIte_UsuarioCuentaCorreo;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].descripcion";
			Sol_f_SolicitudesItems__POR::SoItel_cDe;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].configuracion";
			Sol_f_SolicitudesItems__POR::SolIte_ConfiguracionEquipo;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].tipo";
			Sol_f_SolicitudesItems__POR::SolIte_TipoEquipo;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].gama";
			Sol_f_SolicitudesItems__POR::SolIte_Gama;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].cantidad";
			Sol_f_SolicitudesItems__POR::SolIte_Cantidad;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].marca";
			Sol_f_SolicitudesItems__POR::SolIte_Marca;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].modelo";
			Sol_f_SolicitudesItems__POR::SolIte_Modelo;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].dockstation";
			Sol_f_SolicitudesItems__POR::SolIte_DockStation;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].sistema";
			Sol_f_SolicitudesItems__POR::SolIte_SistemaOerativo;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].idioma";
			Sol_f_SolicitudesItems__POR::SolIte_IdiomaSistemaOerativo;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].procesador";
			Sol_f_SolicitudesItems__POR::SolIte_Procesador;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].almacenamiento";
			Sol_f_SolicitudesItems__POR::SolIte_Almacenamiento;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].memoria";
			Sol_f_SolicitudesItems__POR::SolIte_Memoria;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].color";
			Sol_f_SolicitudesItems__POR::SolIte_Color;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].software";
			Sol_f_SolicitudesItems__POR::SolIte_SoftwareComplementario;
			JSONString
		]
	);
	$tipoSolicitud = "Software / Licencias";
	JSONSetElement(
		$json;
        [
			"detalles[" & $i - 1 & "].id";
			GetValue( $conceptos; $i );
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].descripcion";
			Sol_f_SolicitudesItems__POR::SoItel_cDe;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].cantidad";
			Sol_f_SolicitudesItems__POR::SolIte_Cantidad;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].notas";
			Sol_f_SolicitudesItems__POR::SolIte_NotasSoftware;
			JSONString
		];
		[
			"detalles[" & $i - 1 & "].software";
			Sol_f_SolicitudesItems__POR::SolIte_SoftwareComplementario;
			JSONString
		]
	);
	$tipoSolicitud = "Periféricos";
	Case(
		Sol_f_SolicitudesItems__POR::SoItel_TipoPeriferico = "Tablet";
		JSONSetElement(
			$json;
            [
			"detalles[" & $i - 1 & "].id";
			GetValue( $conceptos; $i );
			JSONString
		    ];
			[
				"detalles[" & $i - 1 & "].descripcion";
				Sol_f_SolicitudesItems__POR::SoItel_cDe;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].cantidad";
				Sol_f_SolicitudesItems__POR::SolIte_Cantidad;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].marca";
				Sol_f_SolicitudesItems__POR::SolIte_Marca;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].modelo";
				Sol_f_SolicitudesItems__POR::SolIte_Modelo;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].procesador";
				Sol_f_SolicitudesItems__POR::SolIte_Procesador;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].almacenamiento";
				Sol_f_SolicitudesItems__POR::SolIte_Almacenamiento;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].memoria";
				Sol_f_SolicitudesItems__POR::SolIte_Memoria;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].color";
				Sol_f_SolicitudesItems__POR::SolIte_Color;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].notas";
				Sol_f_SolicitudesItems__POR::SolIte_Notas;
				JSONString
			]
		);
		Sol_f_SolicitudesItems__POR::SoItel_TipoPeriferico = "Monitor";
		JSONSetElement(
			$json;
            [
			"detalles[" & $i - 1 & "].id";
			GetValue( $conceptos; $i );
			JSONString
		    ];
			[
				"detalles[" & $i - 1 & "].descripcion";
				Sol_f_SolicitudesItems__POR::SoItel_cDe;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].cantidad";
				Sol_f_SolicitudesItems__POR::SolIte_Cantidad;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].marca";
				Sol_f_SolicitudesItems__POR::SolIte_Marca;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].modelo";
				Sol_f_SolicitudesItems__POR::SolIte_Modelo;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].idioma";
				Sol_f_SolicitudesItems__POR::SolIte_IdiomaTeclado;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].conexion";
				Sol_f_SolicitudesItems__POR::SolIte_Conexion;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].color";
				Sol_f_SolicitudesItems__POR::SolIte_Color;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].notas";
				Sol_f_SolicitudesItems__POR::SolIte_Notas;
				JSONString
			]
		);
		Sol_f_SolicitudesItems__POR::SoItel_TipoPeriferico = "Teclado";
		JSONSetElement(
			$json;
            [
			"detalles[" & $i - 1 & "].id";
			GetValue( $conceptos; $i );
			JSONString
		    ];
			[
				"detalles[" & $i - 1 & "].descripcion";
				Sol_f_SolicitudesItems__POR::SoItel_cDe;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].cantidad";
				Sol_f_SolicitudesItems__POR::SolIte_Cantidad;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].marca";
				Sol_f_SolicitudesItems__POR::SolIte_Marca;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].modelo";
				Sol_f_SolicitudesItems__POR::SolIte_Modelo;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].tamaño";
				Sol_f_SolicitudesItems__POR::SolIte_Tamanio;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].conexion";
				Sol_f_SolicitudesItems__POR::SolIte_Conexion;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].color";
				Sol_f_SolicitudesItems__POR::SolIte_Color;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].notas";
				Sol_f_SolicitudesItems__POR::SolIte_Notas;
				JSONString
			]
		);
		Sol_f_SolicitudesItems__POR::SoItel_TipoPeriferico = "Ratón";
		JSONSetElement(
			$json;
            [
			"detalles[" & $i - 1 & "].id";
			GetValue( $conceptos; $i );
			JSONString
		    ];
			[
				"detalles[" & $i - 1 & "].descripcion";
				Sol_f_SolicitudesItems__POR::SoItel_cDe;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].cantidad";
				Sol_f_SolicitudesItems__POR::SolIte_Cantidad;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].marca";
				Sol_f_SolicitudesItems__POR::SolIte_Marca;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].modelo";
				Sol_f_SolicitudesItems__POR::SolIte_Modelo;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].conexion";
				Sol_f_SolicitudesItems__POR::SolIte_Conexion;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].color";
				Sol_f_SolicitudesItems__POR::SolIte_Color;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].notas";
				Sol_f_SolicitudesItems__POR::SolIte_Notas;
				JSONString
			]
		);
		Sol_f_SolicitudesItems__POR::SoItel_TipoPeriferico = "Disco duro";
		JSONSetElement(
			"{}";
            [
			"detalles[" & $i - 1 & "].id";
			GetValue( $conceptos; $i );
			JSONString
		    ];
			[
				"detalles[" & $i - 1 & "].descripcion";
				Sol_f_SolicitudesItems__POR::SoItel_cDe;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].cantidad";
				Sol_f_SolicitudesItems__POR::SolIte_Cantidad;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].marca";
				Sol_f_SolicitudesItems__POR::SolIte_Marca;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].modelo";
				Sol_f_SolicitudesItems__POR::SolIte_Modelo;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].conexion";
				Sol_f_SolicitudesItems__POR::SolIte_Conexion;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].almacenamiento";
				Sol_f_SolicitudesItems__POR::SolIte_Almacenamiento;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].color";
				Sol_f_SolicitudesItems__POR::SolIte_Color;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].notas";
				Sol_f_SolicitudesItems__POR::SolIte_Notas;
				JSONString
			]
		);
		Sol_f_SolicitudesItems__POR::SoItel_TipoPeriferico = "Otros";
		JSONSetElement(
			$json;
            [
			"detalles[" & $i - 1 & "].id";
			GetValue( $conceptos; $i );
			JSONString
		    ];
			[
				"detalles[" & $i - 1 & "].descripcion";
				Sol_f_SolicitudesItems__POR::SoItel_cDe;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].cantidad";
				Sol_f_SolicitudesItems__POR::SolIte_Cantidad;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].marca";
				Sol_f_SolicitudesItems__POR::SolIte_Marca;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].modelo";
				Sol_f_SolicitudesItems__POR::SolIte_Modelo;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].descripcion";
				Sol_f_SolicitudesItems__POR::SolIte_NombreConfiguracionEquipo;
				JSONString
			];
			[
				"detalles[" & $i - 1 & "].notas";
				Sol_f_SolicitudesItems__POR::SolIte_Notas;
				JSONString
			]
		);
		""
	);
	""
)