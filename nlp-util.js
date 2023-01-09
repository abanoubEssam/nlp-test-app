const nlp = require('wink-nlp-utils');

const convertParagraphToSentences = (paragraph) => {
    return nlp.string.sentences(paragraph)
}

module.exports = convertParagraphToSentences