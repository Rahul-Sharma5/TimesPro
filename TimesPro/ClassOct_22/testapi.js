// let od_key = 'bae397416e71fc2f789c465eda2f77fd';

// async function showresult()
// {
//     let response = await
//     fetch('http://api.coinlayer.com/api/live?access_key=' +od_key);

//     let data = await response.json();
//     console.log(data);
//     let result = data;
//     console.log(result.rates);
//     document.write(result.rates[611]);
// }
// showresult();

let url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";

async function temp()
{
    let res = fetch(url);
    let temperature = await (await res).json();
    console.log(temperature);
    document.write("Latitude is: "+temperature.latitude);
}
temp();