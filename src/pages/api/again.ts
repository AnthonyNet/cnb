import { useState, useEffect } from "react";

interface Currency {
  country: string;
  currencyName: string;
  code: string;
  amount: string;
  currency: string;
}

async function Page({ saveData }: { saveData: Currency[] }):any {
    const final = await saveData;
    console.log(final);
    
  return final;
}


  
// This should send props to PAGE component WHY DOESN'T IT WORK?
const runIt = async()=>{
  const data = await getServerSideProps();
  const saveData = zpracujData(data);
  
  
 // console.log(finalCurrencies);
  
 return {props: {saveData}}
}

runIt() 







  

export default Page;
 