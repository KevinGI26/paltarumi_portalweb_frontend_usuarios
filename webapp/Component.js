sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  "use strict";
  return UIComponent.extend("paltarumi.portalweb.usuario.Component", {  // ← CAMBIAR de "app.Usuario.Component"
    metadata: {
      manifest: "json"
    },
    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
    }
  });
});