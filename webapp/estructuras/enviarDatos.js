sap.ui.define([], function () {
  "use strict";

  return {
    registrarUsuario: function (oUsuario) {
      return {
        nombres: oUsuario.nombres,
        apellidos: oUsuario.apellidos,
        correo: oUsuario.correo,
        sociedad: oUsuario.sociedad,
        tipoDeEmisor: oUsuario.tipoDeEmisor,
        usuario: oUsuario.usuario,
        razonSocial: oUsuario.razonSocial,
        roles: oUsuario.roles,
        ruc: oUsuario.ruc,
        estado: oUsuario.estado || "1",
      };
    },

    actualizarUsuario: function (oUsuario) {
      return {
        idUsuario: oUsuario.idUsuario,
        nombres: oUsuario.nombres,
        apellidos: oUsuario.apellidos,
        correo: oUsuario.correo,
        sociedad: oUsuario.sociedad,
        tipoDeEmisor: oUsuario.tipoDeEmisor,
        usuario: oUsuario.usuario,
        razonSocial: oUsuario.razonSocial,
        roles: oUsuario.roles,
        ruc: oUsuario.ruc,
        estado: oUsuario.estado,
      };
    },

    eliminarUsuario: function (aUsuarios) {
      return {
        usuarios: aUsuarios.map((u) => ({
          idUsuario: u.idUsuario,
        })),
      };
    },

    onFiltrarTabla: function (sBuscar, aRoles) {
      return {
        buscar: sBuscar,
        roles: aRoles,
      };
    },

    obtenerRolesXUsuario: function (idUsuario) {
      return {
        idUsuario: idUsuario,
      };
    },

    procesoObtenerRazonSocialXRuc: function (sRuc) {
      return {
        ruc: sRuc,
      };
    },
  };
});
