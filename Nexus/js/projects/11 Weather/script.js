 
document.querySelector('button').addEventListener('click',()=>{

    const place = document.getElementById('location').value;

    function updateTemp(data){
        const element = document.getElementById('Weather-Info');
        element.innerHTML = `Today's Temperature: ${data.current.temp_c}`
    }

    const Promise = fetch(`http://api.weatherapi.com/v1/current.json?key=1ed1fe0c45d9498f92a105746261105&q=${place}&aqi=yes`)

    Promise
    .then(response=>response.json())
    .then(data=>updateTemp(data));
})