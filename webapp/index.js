sap.ui.getCore().attachInit(function () {
  sap.ui.require(
    ["sap/ui/core/ComponentContainer"],
    function (ComponentContainer) {
      new ComponentContainer({
        name: "paltarumi.portalweb.usuario",
        async: true,
      }).placeAt("content");
    }
  );
});
