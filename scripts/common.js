function hideElement(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElement(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function colorPicker(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-300')
}

function colorRemover(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-300')
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function randomNumber(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    // console.log(alphabet);

    const getRandomNumber = Math.round(Math.random()*25);
    // console.log(getRandomNumber);
    const alphabet = alphabets[getRandomNumber];
    return alphabet;
}