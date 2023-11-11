const sampleText = (text, number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to":number,
        "recipient_type": "individual",
        "type":"text",
        "text":{
            "body": text
        }
    });

    return data;
}

const sampleImage = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to":number,
        "recipient_type": "individual",
        "type":"image",
        "image":{
            "link": "https://static.wikia.nocookie.net/dragonball/images/b/b0/Goku_SS4_Artwork_2.png/revision/latest/scale-to-width-down/426?cb=20170201224155&path-prefix=es"
        }
    });

    return data;
}

const sampleAudio = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to":number,
        "recipient_type": "individual",
        "type":"audio",
        "audio":{
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
        }
    });

    return data;
}

const sampleVideo = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to":number,
        "recipient_type": "individual",
        "type":"video",
        "video":{
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4"
        }
    });

    return data;
}

const sampleDocument = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to":number,
        "recipient_type": "individual",
        "type":"document",
        "document":{
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf",
            "filename": "mi document"
        }
    });

    return data;
}

const sampleButtons= (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Confirmas tu registro?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Si"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "No"
                        }
                    }
                ]
            }
        }
    });

    return data;
}

const sampleList = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "Tengo estas opciones"
            },
            "footer": {
                "text": "Selecciona una de las opciones para poder atenderte"
            },  
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Comprar",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "Vender",
                                "description": "Vende los mejores productos para tu hogar"
                            }
                        ]
                    },
                    {
                        "title": "Centro de atencion",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agencia",
                                "description": "Agencia los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-contacto",
                                "title": "Contacto",
                                "description": "Contacta los mejores productos para tu hogar"
                            }
                        ]
                    }
                ]
            }
        }
    });

    return data;
}

const sampleLocation = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to":number,
        "recipient_type": "individual",
        "type":"location",
        "location":{
            "latitude": "-12.067192214569396",
            "longitude": "-77.03340583080525",
            "name": "Estadio nacional de Perú",
            "address": "C. José Díaz s/n, Lima 15046"
        }
    });

    return data;
}

module.exports = {
    sampleText,
    sampleImage,
    sampleAudio,
    sampleVideo,
    sampleDocument,
    sampleButtons,
    sampleList,
    sampleLocation
}