const foreignExchangeApi = "https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01"

const dateToCheck = document.querySelector(".js-name-search")

function convertToJson(response) {
    return response.json();
}

function extractExchange(dataObject) {
    console.log(dataObject)
    //return dataObject.value;
}

function getExchangeRate(dateTarget) {    
    fetch(foreignExchangeApi)
        .then(r => r.json())
        .then((obj) => {
            console.log(obj);

        let dateArray = obj.rates

        
        console.log(dateArray[dateTarget])

        });
}


dateToCheck.addEventListener('submit', (e) => {
    e.preventDefault(); 
    //console.log(e.target.name)



    const dateTarget = e.target.name.value;
    
    console.log(dateTarget);
    getExchangeRate(dateTarget)
});


// fetch(foreignExchangeApi)
//     .then(convertToJson)
//     .then(extractExchange)
//     .then(getExchangeRate)
    
   




