const https = require('https');

const sendMessageWhatsapp = (data) => {
    const options = {
        host: 'graph.facebook.com',
        path: '/v17.0/173739442480381/messages',
        method: 'POST',
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAAEZBD0ZA2BD0BOwnJHeQTguHG6ZB0oIsYqTS3eouCOSreN9snJ6xgEOZBR4TZBPWD5wY5daGcgsiaq0TZAWEeC4ggpgaMoo9v0uHHXLXvKWABnkc6jhZAbcx9rhUc5FRkQvTgo1crpX7Y21tPSVsdO7EPhgplOBzSHcWxZAo3e73ufBitEKGxd4XuQNBl3ZCBiwsOvqXboZCJREpjBZC2hNCR5nD8OZCelZC1Wpk5ZBDsFJAZD"
        }
    }

    const req = https.request(options, res => {
        res.on("data", d => {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}


module.exports = {
    sendMessageWhatsapp
}
