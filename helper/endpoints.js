const consulta = require('../controller/index');
const comision = require('../controller/sbs-comision.controller');

const initializeEndPoints = (app) => {
    //sbs
    app.get("/public/api/sbs/:year/:month", comision.ComisionSbs);

    //sunat
    app.post("/public/api/sunat/ruc", consulta.searchMultiRuc); 
    app.get("/public/api/sunat/ruc/:ruc", consulta.searchRuc);
    app.get("/public/api/tc-sunat/actual", consulta.getSunatTipoCambioActual);
    app.get("/public/api/tc-sunat/:year/:month", consulta.getSunatTipoCambio);
  
    //jne
    app.get("/public/api/jne/dni/:dni", consulta.searchDni); 

    //essalud
    app.get("/public/api/essalud/dni/:dni", consulta.searchEssaluedDni); 
};
module.exports = initializeEndPoints;