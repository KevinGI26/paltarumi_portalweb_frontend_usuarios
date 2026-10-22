sap.ui.define(
  ["sap/ui/model/json/JSONModel", "sap/ui/Device"],
  /**
   * provide app-view type models (as in the first "V" in MVVC)
   *
   * @param {typeof sap.ui.model.json.JSONModel} JSONModel
   * @param {typeof sap.ui.Device} Device
   *
   * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
   */
  function (JSONModel, Device) {
    "use strict";

    return {
      createDeviceModel: function () {
        const oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode("OneWay");
        return oModel;
      },
      localModel: function () {
        const oParam = {
          botonesHabilitados: false,
          usuario: {
            nombre: "Guillermo Eduardo Narvaez Muggish",
            sociedad: "MATILDE BLASS S.A.C",
            ruc: "20606610425",
          },

          paginaActualObtenerCabecera: 1,
          ultimaActualObtenerCabecera: 0,
          visibleButton: false,

          selectListaRUC: "0",
          selectedRowRol: {},
          selectListaSociedad: "0",
          selectExportData: "1",
          selectListaRol: "0",
          listaUsuarios: [],
          growingThresholdTable: 20,
          cantidadRegTotales: 0,
          selectTipoEmisor: "0",
          exportData: [
            {
              id: "0",
              name: "--Seleccione--",
            },
            {
              id: "1",
              name: "Microsoft Excel (*.xlsx)",
            },
          ],
          comboTipoEmisor: [
            {
              id: "0",
              name: "Seleccione el tipo de emisor",
            },
            {
              id: "1",
              name: "Emisor Físico",
            },
            {
              id: "2",
              name: "Emisor Electrónico",
            },
          ],
          usuario: {
            id: "",
            nombres: "",
            validNombres: null,
            valueStateNombres: "None",
            apellidos: "",
            validApellidos: null,
            valueStateApellidos: "None",

            correo: "",
            validCorreo: null,
            valueStateCorreo: "None",

            sociedad: 0,
            tipoDeEmisor: "",
            ruc: "",
            validUsuario: null,
            valueStateUsuario: "None",

            razonSocial: "",
            // validRazonSocial: null,
            // valueStateRazonSocial: "None",

            estado: "",
            roles: [],
            validRoles: null,
            valueStateRoles: "None",
            validSociedad: null,
            valueStateSociedad: "None",
            selectTipoEmisor: "0",
          },
          filtroRoles: [],
          filtrosTipoEmisor: [],
          filtroBuscar: "",
          nuevoUsuario: {
            id: null,
            nombres: "",
            validNombres: null,
            valueStateNombres: "None",
            apellidos: "",
            correo: "",
            sociedad: 0,
            tipoDeEmisor: "",
            usuario: "",
            validUsuario: null,
            valueStateUsuario: "None",
            razonSocial: "",
            validRazonSocial: null,
            estado: "",
            roles: [],
            validRoles: null,
            valueStateRoles: "None",
            validSociedad: null,
            valueStateSociedad: "None",
            selectTipoEmisor: "0",
          },
          actualizarUsuario: {
            id: "",
            nombres: "",
            validNombres: null,
            valueStateNombres: "None",
            apellidos: "",
            correo: "",
            sociedad: 0,
            tipoDeEmisor: "",
            usuario: "",
            validUsuario: null,
            valueStateUsuario: "None",
            razonSocial: "",
            validRazonSocial: null,
            estado: "",
            roles: [],
            validRoles: null,
            valueStateRoles: "None",
            validSociedad: null,
            valueStateSociedad: "None",
            selectTipoEmisor: "0",
          },
          listaRol: [],
          listaTipoEmisor: [],
          listaMultipleTipoEmisor: [],
          listaSociedad: [
            { key: "0", text: "--Seleccione Sociedad---" },
            { key: "1", text: "1001- LA CALERA S.A.C" },
            { key: "2", text: "1002 LA PEPINILLA SAC" },
          ],
          listSocieties: [
            {
              cod_society: "pe10",
              society: "Sociedad10",
            },

            {
              cod_society: "pe20",
              society: "Sociedad20",
            },
          ],
          codSocElegida: "",
        };
        const oModel = new JSONModel(oParam);
        return oModel;
      },
    };
  }
);
