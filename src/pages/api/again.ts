import { useState, useEffect } from "react";

interface Currency {
  country: string;
  currencyName: string;
  code: string;
  amount: string;
  currency: string;
}

function Page({ finalCurrencies }: { finalCurrencies: Currency[] }):any {


  return (finalCurrencies && console.log(finalCurrencies));
}

// This gets called on every request
 async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    "http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt"
  );
  const data = await res.text();
  const finalCurrencies: Currency[] = [];


    setTimeout(() => {
      console.log(finalCurrencies);
    }, 4000);
  

  if (data) {
    const currenciesArray = data.split("\n");
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
    });

    // Pass data to the page via props
    return { props: { finalCurrencies } };
  }
}
getServerSideProps()
export default Page;
