//this work is done by AYMEN NAJEH fro v64


/*this is an array witch contains the shares possessed by the client in 
the company that he possess */

let stockedOfClinet= [
    {
        name:"campany 1",
        shares:60,
        priceOfShare:4
    },
    {
        name:"campany 2",
        shares:18,
        priceOfShare:2
    },
    {
        name:"campany 4",
        shares:20,
        priceOfShare:13
    }
]
console.log('shaers posseded buy the client in every camapny he possess','\n',stockedOfClinet)

//this is an array of the value of every company  at day 1
let stockesAtDay1= [
    {
        name:"campany 1",
        totalSahres:130,
        priceOfShare:4
        },
        {
        name:"campany 2",
        totalSahres:70,
        priceOfShare:2
        },
        {
        name:"campany 3",
        totalSahres:20,
        priceOfShare:2
        },
        {
        name:"campany 4",
        totalSahres:24,
        priceOfShare:8
        },
        {
            name:"campany 5",
            totalSahres:24,
            priceOfShare:16
            },

]
//this is an array of the value of the same companies at  day 2
let stockesAtDay2= [
    {
    name:"campany 1",
    totalSahres:130,
    priceOfShare:8
    },
    {
    name:"campany 2",
    totalSahres:70,
    priceOfShare:6
    },
    {
    name:"campany 3",
    totalSahres:20,
    priceOfShare:9
    },
    {
    name:"campany 4",
    totalSahres:29,
    priceOfShare:1
    },
    {
        name:"campany 5",
        totalSahres:24,
        priceOfShare:7
        },

]

let arr = []
//now i loop the array of companies at the first day day1
for (const key in stockesAtDay1) {
    //i compare the value of price of every campany with the value of the same company at the next day day2
    if (stockesAtDay1[key].priceOfShare<stockesAtDay2[key].priceOfShare) {
        //if the value get higher then i push this camapany at another array this array will show the campanies that get higher
        arr.push(
        {
            name:stockesAtDay2[key].name,
            Newprice:stockesAtDay2[key].priceOfShare,
            totalSahres:stockesAtDay2[key].totalSahres,
            //this property show the percentage of the rise of the company in this market 
            // for example the campany 1 the price of her shaer get high from 4 to 8 this mean that it's value get hight with 100% 
            variation:" ↑ + "+( (((stockesAtDay2[key].priceOfShare-stockesAtDay1[key].priceOfShare)/stockesAtDay1[key].priceOfShare) *100 ).toFixed(2))+" %",           
        } 
        )
        //the array now is sort from the company witch get the most rise to lowest rise 
        arr.sort((a, b) =>   Number(a.variation.substring(2,4)) - Number(b.variation.substring(2,4)) );
    }
}
// now finaly we have the campanies in the rise 

console.log('campanies in the rise :','\n',arr)


//we loop the two arrays of the campanies in the rise and the camapany possessed by the client
let Intersection =[]
arr.forEach(
    ele => {
        stockedOfClinet.forEach(
            el => {
                if (el.name == ele.name){
                let obj = {
                    //i create an object witch contain information about campanies that can be sold
                    name:ele.name,
                    //pocentageOfShare is the percentage of the shares possessed buy the client in this campany
                    pocentageOfShare:  ((el.shares/ele.totalSahres)*100).toFixed(2)+" %",
                    //the max benefist is the shares possessed buy the clinet multiplie by the price of every share
                    maxBenefist :(ele.totalSahres-el.shares) * ele.Newprice
                    }
                    Intersection.push(obj)
                    
                }
            }
        )
    }
)
console.log('the best campany to sell','\n',Intersection)

//now i'v repted the same proces to find with camapny have fall in the market 
let arr2 = []
for (const key in stockesAtDay1) {
    if (stockesAtDay1[key].priceOfShare>stockesAtDay2[key].priceOfShare) {
        arr2.push(
        {
            name:stockesAtDay2[key].name,
            Newprice:stockesAtDay2[key].priceOfShare,
            totalSahres:stockesAtDay2[key].totalSahres,
            variation:" ↓  "+( (((stockesAtDay2[key].priceOfShare-stockesAtDay1[key].priceOfShare)/stockesAtDay1[key].priceOfShare) *100 ).toFixed(2))+" %"
        } 
        )
        //i sort the second array from the company witch the pirce of sahre has fallen assuming that this is will be best apportunity to buy it 
        arr2.sort((a, b) =>   Number(a.variation.substring(2,4)) - Number(b.variation.substring(2,4)) );
    }
}
console.log('campany with the fallen price :','\n',arr2)

let Intersection1 =[]
arr2.forEach(
    ele => {
        stockedOfClinet.forEach(
            el => {
                if (el.name == ele.name){
                let obj = {
                    name:ele.name,
                    posibleShareToBuy:ele.totalSahres-el.shares,
                    newPiceOFtheShre:ele.Newprice,
                    pocentageOfShare:  ((el.shares/ele.totalSahres)*100).toFixed(2)+" %",
                    maxBenefist :(ele.totalSahres-el.shares)* ele.Newprice,
                    }
                    Intersection1.push(obj)                 
                }
            }
        )
    }
)
console.log('campany witch can be bought','\n',Intersection1)
