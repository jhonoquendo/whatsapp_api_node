const whatsappModels = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsappService");

const process = (text, number) => {
    text = text.toLowerCase();
    let models = [];

    if(text.includes("hola")){
        //saludar
        let model = whatsappModels.messageText("Hola un gusto saludarte.", number);
        models.push(model);

        let modelList = whatsappModels.messageList(number);
        models.push(modelList);

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
    }else if(text.includes("comprar")){
        //comprar
        let model = whatsappModels.messageComprar(number);
        models.push(model);

    }else if(text.includes("vender")){
        //vender
        let model = whatsappModels.messageText("Registrate en este formulario: www.google.com", number);
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