import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [interest,setinterest] = useState(0)
  const [principle,setprinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [invalidprinciple,setinvalidprinciple] = useState(false)
  const [invalidRate,setinvalidRate] = useState(false)
  const [invalidYear,setinvalidYear] = useState(false)



  const validateInput = (inputTag) => {
    console.log(inputTag, typeof inputTag);
    const {name,value} = inputTag
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    console.log(!!value.match(/^\d+(\.\d+)?$/));

    if(name=='principle'){
      setprinciple(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidprinciple(false)
      }else{
        setinvalidprinciple(true) 

      }
    }else if(name == 'rate'){
      setRate(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidRate(false)
      }else{
        setinvalidRate(true) 

      }
   }else if(name == 'year'){
    setYear(value)
    if(!!value.match(/^\d+(\.\d+)?$/)){
      setinvalidYear(false)
    }else{
      setinvalidYear(true) 

    }
   }
    
    
  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    if(principle && rate && year){
      setinterest(principle*rate*year/100)
    }else{
      alert("please fill the form completly")
    }
  }

  const handleReset = ()=>{
    setinterest(0)
    setprinciple(0)
    setRate(0)
    setYear(0)
    setinvalidprinciple(false)
    setinvalidRate(false)
    setinvalidYear(false)
  }



  return (
    <>
      <div style={{width:"100%",minHeight:"100vh"}} className='d-flex justify-content-center align-item-center bg-dark'>
        <div  className='bg-light p-5 rounded'>
          <h3>simple interest calculator</h3>
          <p>calculate your simple interest easily</p>
          <div className='bg-warning p-5 rounded text-center'>
            <h1>₹ {interest}</h1>
            <p className='fw-bolder'>Total simple interest</p>
          </div>
          <form className='mt-3'>
          {/* principle amount */}
            <div className='mb-3'>
              <TextField value={principle || ""} name="principle" onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ principle amount" variant="outlined" />
            </div>
            {/* invalide principle */}
            {invalidprinciple &&<div className='text-danger fw-bolder mb-3'>
              Invalide Principle Amount
            </div>}
             {/* rate */}
             <div className='mb-3'>
              <TextField value={rate || ""} name="rate" onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
            </div>
            {/* invalide Rate */}
            {invalidRate &&<div className='text-danger fw-bolder mb-3'>
              Invalide Rate
            </div>}
             {/* year */}
             <div className='mb-3'>
              <TextField value={year || ""} name="year" onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-year" label="time period (yr)" variant="outlined" />
            </div>
            {/* invalide Year */}
            {invalidYear &&<div className='text-danger fw-bolder mb-3'>
              Invalide Year
            </div>}

            {/* Button */}

            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled = {invalidprinciple || invalidRate || invalidYear} variant="contained" className='bg-dark'>Calculate</Button>
              <Button onClick={handleReset} variant="outline" style={{width:'50%', height:'70px'}} className='border border-dark text-dark'>RESET</Button>

            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App