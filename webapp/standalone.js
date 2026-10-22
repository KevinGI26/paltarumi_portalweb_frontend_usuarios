sap.ui.require(["sap/ui/core/ComponentContainer"], function (ComponentContainer) {
  new ComponentContainer({
    name: "paltarumi.portalweb.usuario",
    id: "container",
    manifest: true,
    async: true
  }).placeAt("content");
});
