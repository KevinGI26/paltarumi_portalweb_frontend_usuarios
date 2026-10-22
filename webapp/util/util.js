sap.ui.define(
  [
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/export/Spreadsheet",
    "sap/ui/export/library",
  ],
  function (MessageBox, MessageToast, Spreadsheet, exportLibrary) {
    "use strict";

    const EdmType = exportLibrary.EdmType;

    return {
      utilPopUps: {
        messageBox: function (sMessage, sType, fnCallback) {
          if (sType === "E") {
            MessageBox.error(sMessage, {
              onClose: fnCallback,
            });
          } else if (sType === "A") {
            MessageBox.alert(sMessage, {
              onClose: fnCallback,
            });
          } else if (sType === "W") {
            MessageBox.warning(sMessage, {
              onClose: fnCallback,
            });
          } else {
            MessageBox.information(sMessage, {
              onClose: fnCallback,
            });
          }
        },

        messageToast: function (sMessage) {
          MessageToast.show(sMessage);
        },
      },

      utilHttp: {
        validarRespuestaServicio: function (oResponse, sSuccessMsg) {
          if (oResponse.code === 1) {
            if (sSuccessMsg) {
              MessageToast.show(sSuccessMsg);
            }
            return true;
          } else {
            const sMessage =
              oResponse.message || "Ocurrió un error en el servicio";
            MessageBox.error(sMessage);
            return false;
          }
        },
      },

      utilUI: {
        crearExcel: function (
          oController,
          sModelName,
          sPropertyPath,
          aCols,
          sNewModelName,
          sNewTableId,
          aColumnas,
          sSheetName,
          sFileName
        ) {
          try {
            const oModel = oController.getView().getModel(sModelName);
            const oData = oModel.getProperty(`/${sPropertyPath}`);

            let aCombinedCols = [];

            aColumnas.forEach((col) => {
              aCombinedCols.push({
                label: col.name,
                property: [col.model],
                type: EdmType.String,
                template: "{0}",
              });
            });

            const oSettings = {
              workbook: {
                columns: aCombinedCols,
              },
              dataSource: oData,
              fileName: `${sFileName}.xlsx`,
              worker: false,
            };

            const oSheet = new Spreadsheet(oSettings);
            oSheet.build().finally(function () {
              oSheet.destroy();
            });
          } catch (error) {
            console.error("Error al crear Excel:", error);
          }
        },
      },
    };
  }
);
