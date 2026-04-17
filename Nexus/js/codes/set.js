console.clear();

// set
// A set is a collection of unique values. It can be used to store any type of values, whether primitive or object references. The main feature of a set is that it does not allow duplicate values.

const set1 = new Set([10,20,10,26,30,30,20,50]);
set1.add("shubham");
set1.add("31");
set1.delete(10);
console.log(set1);  // not any repeated value

// instagram id(which is unique)
const user_id = new Set(["shubh._31","amit_kr","ro.hit_rana","adi_tya.45"]);

let new_user = "shubh_31";
if(user_id.has(new_user))
{
console.log("user id already exist");
}
else
{
    console.log("user id available")
};

// union of 2 set
let set2 = new Set([10,20,30,40,50]);
let set3 = new Set([10,20,70,80]);

let set4 = new Set([...set2,...set3]);
console.log(set4);

// intersectionn of 2 set
// filter hmesha array pe lgta hai isiliye arr.filter ke jgh pehle arr bnana pda([...set2].filter) using spread operator
const result = [...set2].filter((num)=>set3.has(num));
console.log(result);