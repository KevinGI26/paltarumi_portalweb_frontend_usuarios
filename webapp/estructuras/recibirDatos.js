sap.ui.define(["paltarumi/portalweb/usuario/model/formatter"], function (formatter) {
  "use strict";
  return {
    obtenerListaUsuarios: function (data, sociedad) {
      let modData = [];
      if (data) {
        data.forEach(function (item, index) {
          //;

          let obj = {
            idUsuario: item.ID,
            nombres: item.NOMBRE,
            apellidos: item.APELLIDO,
            correo: item.CORREO,
            tipoDeEmisor: item.CODIGO_TIPO_EMISOR,
            tipoDeEmisorDesc: item.TIPO_EMISOR, //formatter.formatTextEmisor(item.TIPO_EMISOR),
            listaCodRolesDescripcion: item.LISTA_ROLES,
            listaRolesDescripcion: item.LISTA_ROLES_DESCRIPCION,
            razonSocial: item.RAZON_SOCIAL,
            usuario: item.USUARIO,
            ruc: item.USUARIO,
            fechaDeCreacion: item.CREATED_AT,
            estado: item.ID_ESTADO,
            estadoDesc: formatter.formatTextEstado(item.ID_ESTADO),
            sociedad: sociedad,

            //idUsuario: index + 1,
          };
          modData.push(obj);
        });
      }

      return modData;
    },
    obtenerDatosMaestrosSelect: function (data) {
      let modData = [];
      if (data) {
        if (data.length > 0) {
          modData.push({ key: "0", text: "--Seleccione--" });
        }
        data.forEach(function (item, index) {
          //;
          let obj = {
            key: item.CODIGO_MAESTRO_DETALLE,
            text: item.CAMPO,
            //idUsuario: index + 1,
          };
          modData.push(obj);
        });
      }
      return modData;
    },
    obtenerDatosMaestrosMultiple: function (data) {
      let modData = [];
      if (data) {
        data.forEach(function (item, index) {
          //;
          let obj = {
            key: item.CODIGO_MAESTRO_DETALLE,
            text: item.CAMPO,
            //idUsuario: index + 1,
          };
          modData.push(obj);
        });
      }
      return modData;
    },
    obtenerDatosMaestrosMultipleRoles: function (data) {
      
      let modData = [];
      if (data) {
        data.forEach(function (item, index) {
          //;
          let obj = {
            key: item.CODIGO_MAESTRO_DETALLE,
            text: item.CAMPO,
            //idUsuario: index + 1,
          };
          modData.push(obj);
        });
      }
      return modData;
    },

    obtenerDatoSociedad: function (data) {
      let modData = [];
      if (data) {
        data.forEach(function (item) {
          let obj = {
            // codigo: item.CODIGO_MAESTRO_DETALLE,
            // descripcion: item.DESCRIPCION,
            // ruc: item.VALOR,
            // sociedad: item.CAMPO,

            codigo: item.VALOR,
            descripcion: item.DESCRIPCION,
            ruc: item.CAMPO,
            sociedad: item.VALOR,
          };
          modData.push(obj);
        });
      }
      return modData;
    },

    obtenerDatosMaestrosSimpleSeleccion: function (data) {
      let modData = [];
      
      if (data) {
        modData.push({ key: "0", text: "---Seleccione---" });
        data.forEach(function (item, index) {
          //;

          let obj = {
            key: item.VALOR,
            text: item.DESCRIPCION,
          };
          modData.push(obj);
        });
      }
      return modData;
    },

    obtenerDatosMaestrosSimpleSeleccionTipoEmisor: function (data) {
      
      let modData = [];
      if (data) {
        // modData.push({ key: "0", text: "---Seleccione---" });
        data.forEach(function (item, index) {
          //;
          let obj = {
            // key: item.VALOR,
            // text: item.CAMPO,
            key: item.VALOR,
            text: item.DESCRIPCION,
          };
          modData.push(obj);
        });
      }
      return modData;
    },

    obtenerRolesXUsuario: function (data) {
      let modData = [];
      if (data) {
        data.forEach(function (item) {
          let obj = {
            codigo: item.CODIGO_MAESTRO_DETALLE,
            rol: item.NOMBRE_ROL,
          };
          modData.push(obj);
        });
      }
      return modData;
    },
    obtenerKeysRolesXUsuario: function (data) {
      let modData = [];
      if (data) {
        data.forEach(function (item) {
          modData.push(item.CODIGO_MAESTRO_DETALLE);
        });
      }
      return modData;
    },
  };
});
