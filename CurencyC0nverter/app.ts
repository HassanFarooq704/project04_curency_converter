import inquirer from "inquirer";

let convertion ={
    "PKR":{
        "USD":0.0043,
        "GBP":0.0037,
        "PKR":1
    },
    "USD":{
        "USD":1,
        "GBP":0.83,
        "PKR":225.5
    },
    "GBP":{
        "USD":1.18,
        "GBP":1,
        "PKR":271.5
    },
}

const answers:{
    From:"PKR" | "GBP" | "USD",
    to:"PKR" | "GBP" | "USD",
    amount:number
} = await inquirer.prompt([
    {
        type:"list",
        name:"From",
        choices:["PKR","GBP","USD"],
        message:"Select your currency"
    },
    {
        type:"list",
        name:"to",
        choices:["PKR","GBP","USD"],
        message:"Select your converter"
    },
    {
        type:"number",
        name:"amount",
        message:"Enter your converter amount"
    }
])


const {From,to,amount} = answers;
if(From&&to&&amount){
    let result = convertion[From][to]*amount;
    console.log(`Your conversion from ${From} ,to ${to} is ${result} `);
} else{
    console.log("Invalid Input");
}