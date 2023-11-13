const whatsappModels = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsappService");

const chatGPTService = require("../services/chatgptService");

const process = async (text, number) => {
    text = text.toLowerCase();
    let models = [];

    //#region sin chatgpt
    
    //#region con chatgpt

    const resultChatGpt = await chatGPTService.getMessageChatGPT(text);

    if(resultChatGpt!=null){
        let model = whatsappModels.messageText(resultChatGpt, number);
        models.push(model);
    }else{
        let model = whatsappModels.messageText("Lo siento algo salio mal, intentalo mas tarde", number);
        models.push(model);
    }


    //#endregion
    models.forEach(model => {
        whatsappService.sendMessageWhatsapp(model);
    });

    

}

module.exports = {
    process
}