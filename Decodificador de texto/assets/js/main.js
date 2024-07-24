// caracteres para encriptação
charactersForEncrypt = ["!#$", "@&*(", "#@#", "$)%*", "&#^", "*#$", "§", "@¢$¨", "(¬", "|", "¢^", "£^"];

// elementos do DOM
const textareaEl = document.getElementById('textarea');
const textareaReturnEL = document.getElementById('textarea-return');
const encryptButtonEL = document.getElementById('b-encrypt');
const decryptButtonEL = document.getElementById('b-decrypt');
const copyButtonEL = document.getElementById('b-copy');
const notFoundDivEL = document.getElementById('not-found-div');
const returnTextDivEL = document.getElementById('return-text-div');
const copyTextAlertEL = document.getElementById('copy-text-alert');



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
    let textDecrypted = textEncrypted.replace(/[!@#$&*§¨()|¢£^%¬]/g, '');
    return textDecrypted;
}

// implementação no documento

encryptButtonEL.addEventListener('click', () => {
    textareaReturnEL.innerHTML = encrypt(textareaEl.value);
    notFoundDivEL.style.cssText = 'display: none;';
    returnTextDivEL.style.display = 'block';
});

decryptButtonEL.addEventListener('click', () => {
    textareaReturnEL.innerHTML = decrypt(textareaEl.value);
    notFoundDivEL.style.cssText = 'display: none;';
    returnTextDivEL.style.display = 'block';
});

copyButtonEL.addEventListener('click', () => {
navigator.clipboard.writeText(textareaReturnEL.value);

copyTextAlertEL.innerHTML = "Copiado para área de transferência.";
textareaReturnEL.style.margin = '0 0 3rem 1.2rem'
setTimeout(() => {
    copyTextAlertEL.innerHTML = '';
    textareaReturnEL.style.margin = '0 0 3.8rem 1.2rem'
}, 5000);
});