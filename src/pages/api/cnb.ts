import { NextApiRequest, NextApiResponse } from "next";
import {useState, useEffect} from "react";

/*interface Currency{
  country: string;
  currencyName: string;
  code: string;
  amount: string;
  currency: string;

}

async function fetchCurrencies() {
  try {
    const currencies = await fetch(
  "http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt"
    );
   
    return currencies.text();
  } catch (e) {
    console.log(e);
    console.log("error")
  }
}
const finalCurrencies:Currency[]|any = [];

export async function CNBcurrencies(){
 // const finalCurrencies:string[]|any = [];
 const currencies = await fetchCurrencies();

console.log(finalCurrencies);


 if(currencies){
  const currenciesArray = currencies.split("\n");
  const currenciesArray2 = currenciesArray.slice(2, -1);
  const currenciesArray3 = currenciesArray2.map((currency) => {
    const currencyArray = currency.split("|");
    
    return finalCurrencies.push({
      country: currencyArray[0],
      currencyName: currencyArray[1],
      code: currencyArray[3],
      amount: currencyArray[4],
      currency: currencyArray[2],
    });
  }
  ); 
}


 //  return console.log('nene')
 // return {props: {finalCurrencies} }

}




 function Page({finalCurrencies}:any){
  
 console.log(finalCurrencies)
  return(
    <div>
      <h1> CNB </h1>
    </div>
  )
  }

export default Page;*/