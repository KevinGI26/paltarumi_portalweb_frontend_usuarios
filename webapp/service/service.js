sap.ui.define(
  [
    "sap/ui/core/BusyIndicator",
  ],
  function (BusyIndicator) {
    "use strict";

    return {
      servicePost: async function (sServiceUrl, oData, oController) {
        BusyIndicator.show(0);
        try {
          const response = await fetch(sServiceUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${oController.getView().getModel("localModel").getProperty("/token")}`,
            },
            body: JSON.stringify(oData),
          });

          const result = await response.json();
          BusyIndicator.hide();
          return result;
        } catch (error) {
          BusyIndicator.hide();
          console.error("Error en el servicio:", error);
          return { code: 0, message: error.message };
        }
      },

      serviceGet: async function (sServiceUrl, oData, oController) {
        BusyIndicator.show(0);
        try {
          const queryParams = new URLSearchParams(oData).toString();
          const url = queryParams ? `${sServiceUrl}?${queryParams}` : sServiceUrl;

          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${oController.getView().getModel("localModel").getProperty("/token")}`,
            },
          });

          const result = await response.json();
          BusyIndicator.hide();
          return result;
        } catch (error) {
          BusyIndicator.hide();
          console.error("Error en el servicio:", error);
          return { code: 0, message: error.message };
        }
      },
    };
  }
);
