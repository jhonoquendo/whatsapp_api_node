const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

const whatsappService = require("../services/whatsappService");

const verifyToken = (req, res) => {

    try {
        let accessToken = "RTIASGISAGPASODAPOASPASOPASOS";
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];

        if(challenge != null && token != null && token == accessToken){
            console.log("chanllenge: ", challenge);
            res.send(challenge);
        }else{
            res.status(400).send();
        }

    } catch (error) {
        res.status(400).send();
    }
}

const receivedMessage = (req, res) => {
    try {
        let entry = req.body["entry"][0];
        let changes = entry["changes"][0];
        let value = changes["value"];
        let messageObject = value["messages"];

        if (typeof messageObject != "undefined"){
            let messages = messageObject[0];
            let text = getTextUser(messages);
            let number = messages["from"];
            myConsole.log(text);
            whatsappService.sendMessageWhatsapp("Usuario dijo "+text, number)
        }

        res.send("EVENT_RECEIVED OK");

    } catch (error) {
        console.log("pasa por aca");
        myConsole.log({error});
        res.send("EVENT_RECEIVED MAL");
    }
}

const getTextUser = (messages) => {
    let text = "";
    let typeMessage = messages["type"];
    if(typeMessage == "text"){
        text = messages["text"]["body"];
    }else if (typeMessage == "interactive"){
        let interactiveObject = messages["interactive"];
        let typeInteractive = interactiveObject["type"];

        if(typeInteractive == "button_reply"){
            text = interactiveObject["button_reply"]["title"];
        }else if(typeInteractive == "list_reply"){
            text = interactiveObject["list_reply"]["title"];
        }else{
            myConsole.log("sin mensaje");
        }

    }else{
        myConsole.log("sin mensaje");
    }

    return text;
}

module.exports = {
    verifyToken,
    receivedMessage
}