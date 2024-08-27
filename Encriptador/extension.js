// script.js

// Declaración de variables
let inputText = '';
let outputText = '';
const validationMessage = document.getElementById('validationMessage');
const outputDiv = document.getElementById('output');

// Función para cifrar texto
function encryptText() {
    // Capturando el valor de la entrada
    inputText = document.getElementById('inputText').value;

    // Validación: Aceptar solo minúsculas y espacios
    if (!/^[a-z\s]+$/.test(inputText)) {
        validationMessage.classList.remove('hidden');
        return;
    }
    validationMessage.classList.add('hidden');

    // Ejemplo de manipulación de cadenas (encriptación simple)
    // Convertir cada carácter a su equivalente Unicode y sumar 1
    outputText = inputText.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

    // Mostrar el texto encriptado
    outputDiv.innerText = outputText;
}

// Función para descifrar texto
function decryptText() {
    // Captura el texto encriptado
    outputText = outputDiv.innerText;

    // Manipulación de cadenas (descifrado)
    inputText = outputText.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');

    // Mostrar el texto descifrado
    outputDiv.innerText = inputText;
}

// Función para copiar texto al portapapeles
function copyText() {
    navigator.clipboard.writeText(outputDiv.innerText)
        .then(() => alert('Texto copiado al portapapeles!'))
        .catch(err => alert('Error al copiar texto: ' + err));
}

// Añadir el año actual al pie de página
document.getElementById('year').innerText = new Date().getFullYear();