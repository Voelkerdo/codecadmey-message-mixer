const messageMixer = {
    message : {
        nouns: ['Keep on', 'Always', 'Sometimes', 'All the time'],
        verbs: ['coding', 'eating', 'sleeping', 'dreaming'],
        adjectives: ['fast', 'slowly']
    },

    generateMessage() {
        let generatedMessage = [];
        for (messagePart in this.message) {
            const messageIndex = Math.floor(Math.random() * this.message[messagePart].length);
            generatedMessage.push(this.message[messagePart][messageIndex]);
        }
        return generatedMessage.join(' ');
    },

    logGeneratedMessage() {
        let generatedMessage = this.generateMessage();
        console.log(generatedMessage);
    }
};

messageMixer.logGeneratedMessage();