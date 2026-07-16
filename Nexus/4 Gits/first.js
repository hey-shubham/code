const Name = "shubham";
const Age = 22;

let accountBalance = 2700;

function updateBalance() {
    accountBalance+= 2300;
}

updateBalance();

function reward() {
    if(Age>=80){
        console.log(Name , "You are awarded");
        accountBalance+= 5000;
    }
    else{
        console.log("no award");
    }
}

reward();

console.log(accountBalance);