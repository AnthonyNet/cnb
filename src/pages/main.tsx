

interface Currency {
  data: {
      country: string;
    currencyName: string;
    code: string;
    amount: string;
    currency: string;
  }
  }

const zpracujData = (data:string)=>{

    return data.split('\n').slice(2,-1).map((row)=>{
        const [country,currencyName, currency, code, amount ] = row.split('|');
        return {
            country ,
            currencyName,
            code,
            amount, 
            currency,
        }
    })
  }


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(
      "http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt"
    );
    const rawData = await res.text();
    const data = zpracujData(rawData);
    
        return {props:{data}}
    }


function Main ({data}:{data:Currency[]}) {
console.log(data);


    return(
     
        <div>
            <h1> Main </h1>
           <pre>{JSON.stringify(data)}</pre>
            <p> Main page </p>
        </div>

    )
}

export default Main;