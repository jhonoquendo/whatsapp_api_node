const verifyToken = (req, res) => {
    res.send({"data": "verifyToken"})
}

const receivedMessage = (req, res) => {
    res.send({"data": "receivedMessage"})
}

module.exports = {
    verifyToken,
    receivedMessage
}