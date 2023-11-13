const  OpenAIApi = require("openai");

const getMessageChatGPT = async (text) => {
    const openai = new OpenAIApi({
        apiKey: "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"
    });

    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: text }],
        model: 'gpt-3.5-turbo',
      });

    if(completion.choices.length > 0){
        return completion.choices[0].message.content;
    }

    return null
}

module.exports = {
    getMessageChatGPT
}