const barcodeElem = document.getElementById('barcode');
const generateButton = document.getElementById('generate-button');
const codeInput = document.getElementById('code-input');
const phrase = document.getElementById('phrase');

const encoder = new Code128Generator();

function encode(code) {
  return encoder.encode(code, { output: "bars", mapping: 0 });
}

function generatBarcode(string, barcodeElement) {
  barcodeElement.innerHTML = null;
  phrase.innerText = string;

  const bitsArray = encode(string).split('');

  bitsArray.forEach((bitValue) => {
    const stripe = document.createElement('div');
    stripe.classList.add('barcode__stripe');

    stripe.classList.add(
      bitValue == '1'
        ? 'barcode__stripe--black'
        : 'barcode__stripe--white'
    );

    barcodeElement.appendChild(stripe);
  });
}

generateButton.addEventListener('click', () => {
  const code = codeInput.value;
  generatBarcode(code, barcodeElem);
  codeInput.value = null;
});
