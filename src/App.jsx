import { Button, Container, Typography, Grid } from '@mui/material'
import { useState } from 'react'
import InputAmount from './Component/InputAmount'
import SelectCountry from './Component/SelectCountry'
import SwitchCurrency from './Component/SwitchCurrency'

function App() {
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
        <SelectCountry />
        <SwitchCurrency />
        <SelectCountry />
      </Grid>
    </Container>
    </>
  )
}

export default App
