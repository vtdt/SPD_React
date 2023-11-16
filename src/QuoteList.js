import {useState, useEffect} from 'react'
import Quote from "./Quote"


function QuoteList(){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(()=>{
        async function getData(){
            let response = await fetch("https://dummyjson.com/quotes");
            let data = await response.json();
            setData(data["quotes"])
            setLoading(false)
        }
        getData()
    },[])
    console.log(data)
    const quoteJSX = data.map((data)=>{
        return(<Quote key={data.id} quote={data.quote} author={data.author}/>)
    })

    return(
        <>
            {loading? "fetching data" :
            <> 
            <h1>Quotes</h1>
            <div>{quoteJSX}</div>
            </>
            }
            </>
    )
}
export default QuoteList;