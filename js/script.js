const price = document.querySelector('#price');
const persons = document.querySelector('#persons');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');
const btnCount = document.querySelector('.count');


let checkFields = () => {

    if(price.value != '' && persons.value != '' && tip.value != 0) {
        error.textContent = '';
        countTip();
    } else {
        costInfo.style.display = 'none';
        error.textContent = 'Nie podałeś wszystkich wartosci!';
    }
}

const countTip = () => {
    
    const newPrice = parseFloat(price.value);
    const newPersons = parseInt(persons.value);
    const newTip = parseFloat(tip.value);

    const countedTip = (newPrice + (newPrice * newTip))/newPersons;

    costInfo.style.display = 'block';
    cost.textContent = countedTip.toFixed(2);
}

btnCount.addEventListener('click', checkFields);


