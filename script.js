let textInput = document.getElementById('textInput');
let symbolsCount = document.getElementById('symbolsCount');

let qBtn = document.getElementById('qBtn');
let wBtn = document.getElementById('wBtn');
let eBtn = document.getElementById('eBtn');
let rBtn = document.getElementById('rBtn');
let tBtn = document.getElementById('tBtn');
let yBtn = document.getElementById('yBtn');
let uBtn = document.getElementById('uBtn');
let iBtn = document.getElementById('iBtn');
let oBtn = document.getElementById('oBtn');
let pBtn = document.getElementById('pBtn');

let aBtn = document.getElementById('aBtn');
let sBtn = document.getElementById('sBtn');
let dBtn = document.getElementById('dBtn');
let fBtn = document.getElementById('fBtn');
let gBtn = document.getElementById('gBtn');
let hBtn = document.getElementById('hBtn');
let jBtn = document.getElementById('jBtn');
let kBtn = document.getElementById('kBtn');
let lBtn = document.getElementById('lBtn');

let zBtn = document.getElementById('zBtn');
let xBtn = document.getElementById('xBtn');
let cBtn = document.getElementById('cBtn');
let vBtn = document.getElementById('vBtn');
let bBtn = document.getElementById('bBtn');
let nBtn = document.getElementById('nBtn');
let mBtn = document.getElementById('mBtn');

let backspaceBtn = document.getElementById('backspaceBtn');
let spaceBtn = document.getElementById('spaceBtn');
let fastBackspaceBtn = document.getElementById('fastBackspaceBtn');


let inputResult = '';
setInterval(() => {
    symbolsCount.innerHTML = inputResult.length;
}, 1)


qBtn.addEventListener('click', function() {
    inputResult += 'q';
    textInput.value = inputResult;
});

wBtn.addEventListener('click', function() {
    inputResult += 'w';
    textInput.value = inputResult;
});

eBtn.addEventListener('click', function() {
    inputResult += 'e';
    textInput.value = inputResult;
});

rBtn.addEventListener('click', function() {
    inputResult += 'r';
    textInput.value = inputResult;
});

tBtn.addEventListener('click', function() {
    inputResult += 't';
    textInput.value = inputResult;
});

yBtn.addEventListener('click', function() {
    inputResult += 'y';
    textInput.value = inputResult;
});

uBtn.addEventListener('click', function() {
    inputResult += 'u';
    textInput.value = inputResult;
});

iBtn.addEventListener('click', function() {
    inputResult += 'i';
    textInput.value = inputResult;
});

oBtn.addEventListener('click', function() {
    inputResult += 'o';
    textInput.value = inputResult;
});

pBtn.addEventListener('click', function() {
    inputResult += 'p';
    textInput.value = inputResult;
});

aBtn.addEventListener('click', function() {
    inputResult += 'a';
    textInput.value = inputResult;
});

sBtn.addEventListener('click', function() {
    inputResult += 's';
    textInput.value = inputResult;
});

dBtn.addEventListener('click', function() {
    inputResult += 'd';
    textInput.value = inputResult;
});

fBtn.addEventListener('click', function() {
    inputResult += 'f';
    textInput.value = inputResult;
});

gBtn.addEventListener('click', function() {
    inputResult += 'g';
    textInput.value = inputResult;
});

hBtn.addEventListener('click', function() {
    inputResult += 'h';
    textInput.value = inputResult;
});

jBtn.addEventListener('click', function() {
    inputResult += 'j';
    textInput.value = inputResult;
});

kBtn.addEventListener('click', function() {
    inputResult += 'k';
    textInput.value = inputResult;
});

lBtn.addEventListener('click', function() {
    inputResult += 'l';
    textInput.value = inputResult;
});

zBtn.addEventListener('click', function() {
    inputResult += 'z';
    textInput.value = inputResult;
});

xBtn.addEventListener('click', function() {
    inputResult += 'x';
    textInput.value = inputResult;
});

cBtn.addEventListener('click', function() {
    inputResult += 'c';
    textInput.value = inputResult;
});

vBtn.addEventListener('click', function() {
    inputResult += 'v';
    textInput.value = inputResult;
});

bBtn.addEventListener('click', function() {
    inputResult += 'b';
    textInput.value = inputResult;
});

nBtn.addEventListener('click', function() {
    inputResult += 'n';
    textInput.value = inputResult;
});

mBtn.addEventListener('click', function() {
    inputResult += 'm';
    textInput.value = inputResult;
});

backspaceBtn.addEventListener('click', function() {
    inputResult = inputResult.slice(0, -1); // Убираем последний символ
    textInput.value = inputResult;
});

fastBackspaceBtn.addEventListener('click', function() {
    inputResult = '';
    textInput.value = inputResult;
});

spaceBtn.addEventListener('click', function() {
    inputResult += ' ';
    textInput.value = inputResult;
});
