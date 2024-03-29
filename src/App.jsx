import { Button, Container, Typography, Grid, Box } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import InputAmount from './Component/InputAmount'
import SelectCountry from './Component/SelectCountry'
import SwitchCurrency from './Component/SwitchCurrency'
import { CurrencyContext } from './context/CurrencyContext'
import axios from 'axios'

function App() {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstCurrency, 
  }= useContext(CurrencyContext)

  const [resultCurrency, setResultCurrency]= useState("")
  const codeFromCurrency= fromCurrency.split(" ")[1];
  const codeToCurrency= toCurrency.split(" ")[1];
  console.log(codeFromCurrency);

  useEffect(() =>{
      if(firstCurrency){
        axios.get("https://api.freecurrencyapi.com/v1/latest", {
          params: {
            apikey:"fca_live_K4mh0djkPR9LMNCfeN6dFxYgCHf1szsS7AGKo6wv",
            base_currency: codeToCurrency,
            currencies: codeFromCurrency
          }
        }).then(response  => setResultCurrency(response.data.data[codeFromCurrency]*firstCurrency))
        .catch(error => console.log(error))
      }
  }, [firstCurrency])
  console.log(resultCurrency);

  const boxStyle={
    background: "#fdfdfd",
    textAlign: "center",
    marginTop: "10rem",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,1)"
  }

  return (
    <>
    <Container maxWidth='md' sx={boxStyle}>
      <Typography variant='h5' sx={{marginBottom:"2rem"}}>Stay Ahead with Accurate Conversions</Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From"/>
        <SwitchCurrency />
        <SelectCountry value={toCurrency} setValue={setToCurrency} label="To"/>
      </Grid>

      {firstCurrency ? (
        <Box sx={{textAlign:"left", marginTop:"1rem"}}>
          <Typography>{firstCurrency} {fromCurrency} =</Typography>
          <Typography variant="h5" sx={{fontWeight:"bold", marginBottom:"5px"}}>{resultCurrency} {toCurrency}</Typography>
        </Box>
      ) : ""}

    </Container>
    </>
  )
}

export default App
