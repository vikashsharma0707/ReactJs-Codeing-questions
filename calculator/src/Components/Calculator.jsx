import { useState } from "react";
import "../CSS/Calculator.css"



const Calculator=()=>{

    const [data,setdata] = useState("")

    const getvalue=(e)=>{
       setdata(data.concat(e.target.value))
    }

    const Calculation=()=>{
        setdata(eval(data).toString())
    }

    const Back=()=>{
        setdata(data.slice(0,-1))
    }


    const Clear=()=>{
        setdata("")
    }


    return(
        <>
          <h1>This is calculator page</h1>

          <div  className="container">

            <div>
                <input type="text" placeholder="00" value={data}/>
            </div>

            <br/>
            <button  onClick={getvalue}  value="(">(</button>
            <button  onClick={getvalue}  value=")">)</button>
            <button  onClick={getvalue}  value="%">%</button>
            <button  onClick={Clear}  value="clear">AC</button>


            <button  onClick={getvalue}  value="9">9</button>
            <button  onClick={getvalue}  value="8">8</button>
            <button  onClick={getvalue}  value="7">7</button>
            <button  onClick={getvalue}  value="*">*</button>


            <button  onClick={getvalue}  value="6">6</button>
            <button  onClick={getvalue}  value="5">5</button>
            <button  onClick={getvalue}  value="4">4</button>
            <button  onClick={getvalue}  value="-">-</button>

            <button  onClick={getvalue}  value="3">3</button>
            <button  onClick={getvalue}  value="2">2</button>
            <button  onClick={getvalue}  value="1">1</button>
            <button  onClick={getvalue}  value="+">+</button>

            <button  onClick={getvalue}  value="0">0</button>
            <button  onClick={Back}  value="back">Back</button>
            <button  onClick={Calculation}  value="=">=</button>
            <button  onClick={getvalue}  value="/">/</button>
          </div>
        </>
    )
}

export default Calculator;