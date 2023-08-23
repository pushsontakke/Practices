"use strict"

// API = https://app.currencyapi.com/ // this is free currency converter api

// TODO: Add loading Animation
// TODO: CREATE .gitignore file to store api so secure API key.
const populate = async (value, currency) => {
    let str = "";
    const url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_mDp52dlsAgzKIAMlb0jX9l51q5Wr7472InjeCfzm&base_currency=" + currency;
    let response = await fetch(url);
    let res = await response.json();

    document.querySelector(".output").style.display = "block";

    for (let key of Object.keys(res["data"])) {
        str += `
        <tr>
            <td>${key}</td>
            <td>${res["data"][key]["code"]}</td>
            <td>${Math.floor(res["data"][key]["value"] * value)}</td>
        </tr>
        `
    }

    const tablebody = document.querySelector("tbody");
    tablebody.innerHTML = str;
}


const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;

    populate(value, currency);
})



// *********************************** Getting JSON DATA ***************************************


// let responseInJson = JSON.parse(`{
//     "meta": {
//         "last_updated_at": "2023-08-22T23:59:59Z"
//         },
//         "data": {
//         "ADA": {
//         "code": "ADA",
//         "value": 3.8622884155
//         },
//         "AED": {
//         "code": "AED",
//         "value": 3.6733505136
//         },
//         "AFN": {
//         "code": "AFN",
//         "value": 83.9340860039
//         },
//         "ALL": {
//         "code": "ALL",
//         "value": 97.845057617
//         }
//       }
// }`)

// ********** When you have JSON File in your local
// let response = await fetch('sampleData.json');
//     let res = await response.json();
