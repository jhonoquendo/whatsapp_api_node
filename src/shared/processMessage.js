const whatsappModels = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsappService");

const process = (text, number) => {
    text = text.toLowerCase();
    let models = [];

    if(text.includes("hola")){
        //saludar
        let model = whatsappModels.messageText("Hola un gusto saludarte.", number);
        models.push(model);
    }else if(text.includes("gracias")){
        //agradecer
        let model = whatsappModels.messageText("Gracias a ti por escribirme", number);
        models.push(model);
    }else if(text.includes("adios") || 
             text.includes("adiós") ||
             text.includes("bye") ||
             text.includes("me voy")){
                //despedir
        let model = whatsappModels.messageText("Ve con cuidado.", number);
        models.push(model);
    }else{
        //no entiende
        let model = whatsappModels.messageText("No entiendo.", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsappService.sendMessageWhatsapp(model);
    });

    

}

module.exports = {
    process
}