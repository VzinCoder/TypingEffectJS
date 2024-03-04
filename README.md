# Efeito de Digitação com JavaScript

Este é um exemplo de como criar um efeito de digitação utilizando JavaScript em uma página da web.

https://github.com/VzinCoder/TypingEffectJS/assets/154604730/98c94bf0-7c59-49aa-a0f1-6fc81f9454d9

## Como funciona

Neste exemplo, foi usado JavaScript para simular o efeito de digitação em um texto estático. O script JavaScript basicamente insere cada caractere do texto gradualmente, criando a ilusão de que o texto está sendo digitado em tempo real.

## Como usar

Para experimentar o efeito de digitação em seu próprio projeto, siga estas etapas:

1. Copie o a função `startTypingPhrases` do arquivo `app.js` para o seu próprio arquivo JavaScript ou inclua-o em seu projeto.

2. Adicione um elemento HTML onde você deseja exibir o texto com o efeito de digitação. Por exemplo:

```html
<div data-js="typing-text"></div>
```
3. No seu arquivo JavaScript, inicialize o efeito de digitação passando o array de frases desejado, o elemento HTML onde o texto será exibido e a velocidade de digitação em milisegundos para a função copiada. Exemplo:

```js
const typingElement = document.querySelector('[data-js="typing"]');
const phrases = ["Sou mais forte.","Sou mais inteligente.","Sou melhor."];

startTypingPhrases(phrases, 200, typingElement);
```

## Parar o efeito de digitação

Basta executar a funcão que é retornada do `startTypingPhrases`. Exemplo:


```js
const typingElement = document.querySelector('[data-js="typing"]');
const phrases = ["Sou mais forte.","Sou mais inteligente.","Sou melhor."];

const stopTyping = startTypingPhrases(phrases, 200, typingElement);

stopTyping() // stop the effect
```
