sap.ui.define([], function () {
  "use strict";

  const codigoProyecto = "wz-usuario";
  const isLocal = false;
  const token = "";

  return {
    codigoProyecto: codigoProyecto,
    isLocal: isLocal,
    token: token,
    services: {
      // Usuarios
      procesoObtenerUsuarios: `/api/usuario/obtenerUsuarios`,
      procesoObtenerUsuariosPaginado: `/api/usuario/obtenerUsuariosPaginado`,
      procesoRegistrarUsuario: `/api/usuario/registrarUsuario`,
      procesoActualizarUsuario: `/api/usuario/actualizarUsuario`,
      procesoObtenerUsuarioRolXUsuario: `/api/usuario/obtenerRolesXUsuario`,
      onFiltrarTabla: `/api/usuario/filtrar`,
      eliminarUsuario: `/api/usuario/eliminarUsuario`,

      // Maestros
      procesoObtenerRolesXUsuario: `/api/usuario/obtenerRolesXUsuario`,
      procesoObtenerRoles: `/api/maestros/obtenerRoles`,
      procesoObtenerSociedades: `/api/maestros/obtenerSociedades`,
      procesoObtenerTiposEmisor: `/api/maestros/obtenerTiposEmisor`,

      // Validaciones
      procesoValidarCorreoXUsuarioObtIDP: `/api/usuario/validarCorreo`,
      procesoValidarCorreoXRucObtIDP: `/api/usuario/validarCorreoXRuc`,
      procesoObtenerRazonSocialXRucAutoRegistro: `/api/terceros/obtenerRazonSocialXRuc`,
    },
  };
});
