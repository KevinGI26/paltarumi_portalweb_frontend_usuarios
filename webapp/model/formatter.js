sap.ui.define([], function () {
	"use strict";

	return {
		formatFecha: function (sDate) {
			if (!sDate) {
				return "";
			}
			if (typeof sDate === "string") {
				return sDate;
			}
			if (sDate instanceof Date) {
				const day = String(sDate.getDate()).padStart(2, "0");
				const month = String(sDate.getMonth() + 1).padStart(2, "0");
				const year = sDate.getFullYear();
				return `${day}/${month}/${year}`;
			}
			return sDate;
		},

		formatTextEstado: function (sEstado) {
			const mEstados = {
				"A": "Activo",
				"I": "Inactivo",
				"P": "Pendiente"
			};
			return mEstados[sEstado] || sEstado;
		},

		formatIconEstado: function (sEstado) {
			const mIconos = {
				"A": "sap-icon://accept",
				"I": "sap-icon://decline",
				"P": "sap-icon://pending"
			};
			return mIconos[sEstado] || "";
		},

		formatStateEstado: function (sEstado) {
			const mStates = {
				"A": "Success",
				"I": "Error",
				"P": "Warning"
			};
			return mStates[sEstado] || "None";
		}
	};
});
