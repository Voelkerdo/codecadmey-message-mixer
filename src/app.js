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

    /*logGeneratedMessage(callback) {
        let generatedMessage = callback();
        console.log(callback());
        //console.log(generatedMessage);
    }*/
};

console.log(messageMixer.generateMessage());
//messageMixer.logGeneratedMessage(messageMixer.generateMessage);