const messageText = (text, number) => {
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

module.exports = {
    messageText
}