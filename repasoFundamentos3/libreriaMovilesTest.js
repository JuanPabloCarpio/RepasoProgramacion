"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movil_1 = require("../repasoFundamentos2/movil");
var libreriaMoviles_1 = require("./libreriaMoviles");
var movil1 = new movil_1.Mobile("Nokia 3210", "63306", "Nokia", 8, "gris", false, 1, 350);
var movil2 = new movil_1.Mobile("iPhone3G", "A1241", "Apple", 8, "negro", false, 2, 199);
var movil3 = new movil_1.Mobile("Galaxy S10", "G9750", "Samsung", 128, "negro", false, 5, 599);
var movil4 = new movil_1.Mobile("Huawei", "P9808", "Huawei", 128, "rojo", true, 4, 600);
var arrayMoviles;
arrayMoviles = [movil1, movil2, movil3, movil4];
var m1 = new libreriaMoviles_1.MobileLibrary("Juan Pablo", "Madrid", arrayMoviles);
console.log(m1.gLocation);
console.log(m1.gName);
console.log(m1.gTotalPrice);
console.log(m1.gMobiles);
//console.log(m1.gtotalPriceCalculation());
console.log(m1.printLibrary());
