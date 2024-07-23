// caracteres para encriptação
charactersForEncrypt = ["!#$", "@&*(", "#@#", "$)%*", "&#^", "*#$", "§", "@¢$¨", "(¬", "|", "¢^", "£^"];

// elementos do DOM
const textareaEl = document.getElementById('textarea');
const encryptButtonEL = document.getElementById('b-encrypt');
const decryptButtonEL = document.getElementById('b-decrypt');
const textareaReturnEL = document.getElementById('textarea-return')

//lógica para encriptar texto
const encrypt = (textToEncrypt) => {
    let textEncrypted = "";

    for(let i = 0; i < textToEncrypt.length; i++) {
        const x = Math.floor(Math.random() * (11 + 1));
        textEncrypted += textToEncrypt[i];
        textEncrypted += charactersForEncrypt[x]; 
    }

    return textEncrypted;
}

const decrypt = (textEncrypted) => {
    let textDecrypted = textEncrypted.replace(/[!@#$&*§¨()|¢£^%]/g, '');
    return textDecrypted;
}

// implementação no documento

encryptButtonEL.addEventListener('click', () => {
    textareaReturnEL.innerHTML = encrypt(textareaEl.value);
});

decryptButtonEL.addEventListener('click', () => {
    textareaReturnEL.innerHTML = decrypt(textareaEl.value);
});