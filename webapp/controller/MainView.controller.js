sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"sap/m/MessageBox",
		"paltarumi/portalweb/usuario/model/formatter"
	],
	function (Controller, JSONModel, MessageBox, formatter) {
		"use strict";

		return Controller.extend("paltarumi.portalweb.usuario.controller.MainView", {
			formatter: formatter,

			onInit: function () {
				var oLocalModel = new JSONModel({
					listaUsuarios: [
						{
							id: 1,
							nombres: "Roberto",
							apellidos: "Sánchez Flores",
							correo: "rsanchez@paltarumi.com.pe",
							tipoDeEmisorDesc: "Emisor",
							ruc: "20123456789",
							razonSocial: "Paltarumi S.A.C.",
							fechaDeCreacion: new Date(2025, 0, 15)
						},
						{
							id: 2,
							nombres: "Catalina",
							apellidos: "Mendoza Peña",
							correo: "cmendoza@copeinca.com.pe",
							tipoDeEmisorDesc: "Cliente",
							ruc: "20987654321",
							razonSocial: "COPEINCA S.A.C.",
							fechaDeCreacion: new Date(2025, 1, 20)
						},
						{
							id: 3,
							nombres: "Javier",
							apellidos: "Gutierrez López",
							correo: "jgutierrez@sanfernando.pe",
							tipoDeEmisorDesc: "Proveedor",
							ruc: "20555666777",
							razonSocial: "San Fernando S.A.",
							fechaDeCreacion: new Date(2025, 2, 10)
						},
						{
							id: 4,
							nombres: "Sandra",
							apellidos: "Rodríguez Callejo",
							correo: "srodriguez@pacasmayo.com.pe",
							tipoDeEmisorDesc: "Emisor",
							ruc: "20111222333",
							razonSocial: "Pacasmayo S.A.A.",
							fechaDeCreacion: new Date(2025, 3, 5)
						},
						{
							id: 5,
							nombres: "Miguel",
							apellidos: "Vargas Quispe",
							correo: "mvargas@jrc.com.mx",
							tipoDeEmisorDesc: "Cliente",
							ruc: "20888999000",
							razonSocial: "JRC México S.A. de C.V.",
							fechaDeCreacion: new Date(2025, 4, 12)
						},
						{
							id: 6,
							nombres: "Laura",
							apellidos: "Torres Morales",
							correo: "ltorres@smi.com.pe",
							tipoDeEmisorDesc: "Proveedor",
							ruc: "20444555666",
							razonSocial: "San Miguel Industrias S.A.",
							fechaDeCreacion: new Date(2025, 5, 8)
						}
					],
					cantidadRegTotales: 6,
					growingThresholdTable: 20,
					botonesHabilitados: true,
					infoUsuario: {
						NOMBRE: "Carlos",
						APELLIDO: "Peralta",
						USUARIO: "cperalta"
					},
					datosSociedad: {
						codigo: "PE001",
						descripcion: "Paltarumi Peru"
					},
					codSocElegida: "PE001",
					listaRol: [
						{ key: "ADM", text: "Administrador" },
						{ key: "GES", text: "Gestor" },
						{ key: "USR", text: "Usuario" },
						{ key: "VIS", text: "Visitante" }
					],
					listaTipoEmisor: [
						{ key: "E", text: "Emisor" },
						{ key: "C", text: "Cliente" },
						{ key: "P", text: "Proveedor" }
					],
					filtroRoles: [],
					filtrosTipoEmisor: [],
					filtroBuscar: "",
					listaMultipleTipoEmisor: [
						{ key: "E", text: "Emisor" },
						{ key: "C", text: "Cliente" },
						{ key: "P", text: "Proveedor" }
					],
					aRolesXUsuario: [
						{ codigo: "ADM", rol: "Administrador" },
						{ codigo: "GES", rol: "Gestor" },
						{ codigo: "USR", rol: "Usuario Estándar" }
					],
					usuario: {
						roles: [],
						valueStateRoles: "None",
						usuario: "",
						valueStateUsuario: "None",
						razonSocial: "",
						selectTipoEmisor: "",
						correo: "",
						valueStateCorreo: "None",
						nombres: "",
						valueStateNombres: "None",
						apellidos: "",
						valueStateApellidos: "None"
					}
				});

				this.getView().setModel(oLocalModel, "localModel");
			},

			onSearch: function () {
				// Implementar búsqueda
			},

			onLimpiarFiltros: function () {
				// Implementar limpieza de filtros
			},

			onFilterChange: function () {
				// Implementar cambio de filtros
			},

			onAfterVariantLoad: function () {
				// Implementar después de cargar variante
			},

			onChangeSociedad: function () {
				// Implementar cambio de sociedad
			},

			handleSelectionChangeMV: function () {
				// Implementar selección de roles
			},

			handleSelectionFinishMV: function () {
				// Implementar fin de selección de roles
			},

			onAddUser: function () {
				var oView = this.getView();
				var oModel = oView.getModel("localModel");

				// Limpiar formulario
				oModel.setProperty("/usuario", {
					roles: [],
					valueStateRoles: "None",
					usuario: "",
					valueStateUsuario: "None",
					razonSocial: "",
					selectTipoEmisor: "",
					correo: "",
					valueStateCorreo: "None",
					nombres: "",
					valueStateNombres: "None",
					apellidos: "",
					valueStateApellidos: "None"
				});

				if (!this._oDialog) {
					sap.ui.core.Fragment.load({
						id: oView.getId(),
						name: "paltarumi.portalweb.usuario.view.CreateUserDialog",
						controller: this
					}).then(function (oDialog) {
						oView.addDependent(oDialog);
						oDialog.open();
					}.bind(this));
				} else {
					this._oDialog.open();
				}
			},

			onSaveUser: function () {
				var oView = this.getView();
				var oModel = oView.getModel("localModel");
				var oUsuario = oModel.getProperty("/usuario");
				var bValid = true;

				// Validar campos requeridos
				if (!oUsuario.roles || oUsuario.roles.length === 0) {
					oModel.setProperty("/usuario/valueStateRoles", "Error");
					bValid = false;
				} else {
					oModel.setProperty("/usuario/valueStateRoles", "None");
				}

				if (!oUsuario.correo) {
					oModel.setProperty("/usuario/valueStateCorreo", "Error");
					bValid = false;
				} else {
					oModel.setProperty("/usuario/valueStateCorreo", "None");
				}

				if (!oUsuario.nombres) {
					oModel.setProperty("/usuario/valueStateNombres", "Error");
					bValid = false;
				} else {
					oModel.setProperty("/usuario/valueStateNombres", "None");
				}

				if (!oUsuario.apellidos) {
					oModel.setProperty("/usuario/valueStateApellidos", "Error");
					bValid = false;
				} else {
					oModel.setProperty("/usuario/valueStateApellidos", "None");
				}

				if (!bValid) {
					MessageBox.error("Por favor, completa todos los campos requeridos");
					return;
				}

				// Crear nuevo usuario
				var aUsuarios = oModel.getProperty("/listaUsuarios");
				var iNewId = Math.max(...aUsuarios.map(u => u.id), 0) + 1;

				var oNewUser = {
					id: iNewId,
					nombres: oUsuario.nombres,
					apellidos: oUsuario.apellidos,
					correo: oUsuario.correo,
					tipoDeEmisorDesc: oUsuario.selectTipoEmisor || "Emisor",
					ruc: "",
					razonSocial: oUsuario.razonSocial || "",
					fechaDeCreacion: new Date()
				};

				aUsuarios.push(oNewUser);
				oModel.setProperty("/listaUsuarios", aUsuarios);
				oModel.setProperty("/cantidadRegTotales", aUsuarios.length);

				MessageBox.success("Usuario creado correctamente");
				this.onCancelDialog();
			},

			onCancelDialog: function () {
				var oView = this.getView();
				var oDialog = oView.byId("createUserDialog");
				if (oDialog) {
					oDialog.close();
				}
			},

			onDeleteSelectedUser: function () {
				MessageBox.confirm("¿Desea eliminar el usuario seleccionado?", {
					onClose: function (sAction) {
						if (sAction === MessageBox.Action.OK) {
							MessageBox.success("Usuario eliminado correctamente");
						}
					}
				});
			},

			onDataExport: function () {
				MessageBox.information("Exportando datos...");
			},

			onConfigurarColumnas: function () {
				MessageBox.information("Configurar Columnas");
			},

			onShowRoles: function (oEvent) {
				// Implementar mostrar roles
			},

			onPressEditUser: function (oEvent) {
				MessageBox.information("Editar Usuario");
			},

			updateStartedTablePagination: function () {
				// Implementar actualización de paginación
			}
		});
	}
);
