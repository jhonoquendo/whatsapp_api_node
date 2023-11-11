const messageText = (text, number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to":number,
        "recipient_type": "individual",
        "type":"text",
        "text":{
            "preview_url": true,
            "body": text
        }
    });

    return data;
}

const messageList = (number) => {
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

const messageComprar= (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Selecciona uno de los productos"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-laptop",
                            "title": "Laptop"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-computadora",
                            "title": "Computadora"
                        }
                    }
                ]
            }
        }
    });

    return data;
}

const messageLocation = (number) => {
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
    messageText,
    messageList,
    messageComprar,
    messageLocation
}