const inputRate = document.querySelector('#rate')
const selectFrom = document.querySelector('#from')
const selectTo = document.querySelector('#to')
const result = document.querySelector('#result')
const btn = document.querySelector('#btn')

async function getCurrent() {
    const url = 'https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD';
    const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'e6590903c8msh9259a8c8c66a593p1f143ajsncdb833c8e565',
    'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
  }
};

try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data.result);

    Object.entries(data.result).map(([key, value]) => {
      selectFrom.innerHTML += `
      <option value="${value}">${key}</option>
      `
    })

    Object.entries(data.result).map(([key, value]) => {
      selectTo.innerHTML += `
      <option value="${value}">${key}</option>
      `
    })

} catch (error) {
    console.error(error);
}

}

getCurrent()

function currentConverter(){
    result.innerHTML = selectTo.value * parseInt(inputRate.value)
}

btn.addEventListener('click', currentConverter)