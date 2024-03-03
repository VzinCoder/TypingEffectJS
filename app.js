const typingElement = document.querySelector('[data-js="typing"]');
const phrases = ["Sou mais forte.","Sou mais inteligente.","Sou melhor."];

const startTypingPhrases = (phrases, typingSpeed, element) => {
    let currentPhraseIndex = 0;
    let currentCharacterIndex = 0;
    const lastPhraseIndex = phrases.length - 1;

    const getNextPhraseInfo = (index) => {
        const phrase = phrases[index];
        const lastCharacterIndex = phrase.length - 1;
        return { phrase, lastCharacterIndex };
    };

    const resetState = () => {
        currentPhraseIndex = 0;
        currentCharacterIndex = 0;
    };

    const moveToNextPhrase = () => {
        currentCharacterIndex = 0;
        currentPhraseIndex++;
    };

    const typeCharacter = () => {
        const { phrase, lastCharacterIndex } =
            getNextPhraseInfo(currentPhraseIndex);

        const typedMessage = phrase.slice(0, currentCharacterIndex++);

        const isPhraseTypedCompletely =
            currentCharacterIndex - 1 > lastCharacterIndex;

        element.textContent = typedMessage;

        if (isPhraseTypedCompletely) {
            moveToNextPhrase();
        }

        const isLastPhrase = currentPhraseIndex > lastPhraseIndex;

        if (isLastPhrase) {
            resetState();
        }
    };

    const typingIntervalId = setInterval(typeCharacter, typingSpeed);

    const clearTypingInterval = () => {
        clearInterval(typingIntervalId);
    };

    return clearTypingInterval;
};


const stopTyping = startTypingPhrases(phrases, 200, typingElement);

// stopTyping()  use it when you want to stop






