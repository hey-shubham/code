// isme ham data create krna sikhe hai 

const fs = require('fs');
const restaurant = [];
const images = ["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth"];
const rest_name = ["Dominos","Pizza Hut","KFC","Burger King","McDonalds","Subway","Starbucks","Haldirams","Barbeque Nation","Bikanervala","Taco Bell","Wow Momo","Sagar Ratna","Cafe Coffee Day","La Pinoz Pizza","Punjab Grill","Faasos","Behrouz Biryani","Theobroma","Social"]
const foodTypes = ["Pizza","Burger","Pasta","Biryani","Momos","Sandwich","Noodles","Paneer Tikka","Ice Cream","Dosa"]
const delhiLocations = ["Connaught Place","India Gate","Red Fort","Chandni Chowk","Karol Bagh","Saket","Rohini","Dwarka","Hauz Khas","Lajpat Nagar"];

for(let i=0;i<100;i++){
    
    const obj = {};
    obj["image"] = images[Math.floor(Math.random()*10)];
    obj["name"] = rest_name[Math.floor(Math.random()*20)]; 
    obj["rating"] = Math.floor(Math.random()*5+1 ); 
    obj["food_type"] = foodTypes[Math.floor(Math.random()*10)];
    obj["price_for_two"] = [Math.floor(Math.random()*10)*2402+100];
    obj["location"] = delhiLocations[Math.floor(Math.random()*10)];
    obj["Distace_from_Customer_house"] = (Math.random()*10+1).toFixed(1);   // toFixed(1) ye 1 decimal tak points ki random value shoe krega
    obj["offers"] = Math.floor(Math.random()*30);
    obj["alchohol"] = Math.random() > 0.7;
    obj["Restaurent_open_time"] = Math.floor(Math.random()*24);
    obj["Restaurent_close_time"] = (obj["Restaurent_open_time"]+12)%24;
    restaurant.push(obj);
} 
// console.log(restaurant);

// Array convert into JSON

const jsonData = JSON.stringify(restaurant, null, 4);
fs.writeFileSync('arrayData.json',jsonData,'utf8');
console.log(jsonData);

