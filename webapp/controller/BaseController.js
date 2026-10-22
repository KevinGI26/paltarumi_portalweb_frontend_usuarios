sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
  ],
  function (Controller, UIComponent, History) {
    "use strict";

    return Controller.extend("paltarumi.portalweb.usuario.controller.BaseController", {
      getRouter: function () {
        return UIComponent.getRouterFor(this);
      },

      getModel: function (sName) {
        return this.getView().getModel(sName);
      },

      setModel: function (oModel, sName) {
        return this.getView().setModel(oModel, sName);
      },

      getResourceBundle: function () {
        return this.getOwnerComponent().getModel("i18n").getResourceBundle();
      },

      onNavBack: function () {
        var sPreviousHash = History.getInstance().getPreviousHash();
        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          this.getRouter().navTo("main", {}, true);
        }
      },

      obtenerUrlRedirectLogin: function () {
        const href = window.location.href;
        const urlActual = new URL(href);
        const pathname = urlActual.pathname;
        const rutaDestructurada = pathname.split("/");
        const codigoProyecto = rutaDestructurada[1];
        const urlRedirect = `/${codigoProyecto}/login`;
        return urlRedirect;
      },
    });
  }
);
