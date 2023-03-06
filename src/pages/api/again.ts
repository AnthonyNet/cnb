import { useState, useEffect } from "react";

interface Currency {
  country: string;
  currencyName: string;
  code: string;
  amount: string;
  currency: string;
}

async function Page({ finalCurrencies }: { finalCurrencies: Currency[] }):any {
    const final = await finalCurrencies;
    console.log(final);
    
  return final;
}


 async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    "http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt"
  );
  const data = await res.text();
  
      return data
  }

  
  const finalCurrencies: Currency[] = [];

  const zpracujData = (data:string)=>{
   
    
    const currenciesArray = data.split("\n");
    const currenciesArray2 = currenciesArray.slice(2, -1);
    const currenciesArray3 = currenciesArray2.map((currency) => {
      const currencyArray = currency.split("|");

      //console.log(currencyArray);
  
      return finalCurrencies.push({
        country: currencyArray[0],
        currencyName: currencyArray[1],
        code: currencyArray[3],
        amount: currencyArray[4],
        currency: currencyArray[2],
      });
    });
  }

// This should send props to PAGE component WHY DOESN'T IT WORK?
const runIt = async()=>{
  const data = await getServerSideProps();
  zpracujData(data);
  console.log(finalCurrencies);
  
 return {props: {finalCurrencies: zpracujData(data)}}
}

runIt();


export default Page;
 