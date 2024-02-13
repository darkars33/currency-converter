import React, {useContext} from 'react';
import { Button, Grid } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { CurrencyContext } from '../context/CurrencyContext'

function SwitchCurrency() {
    const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency
      }= useContext(CurrencyContext)

    const handleChange= () =>{
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }
  return (

      <Grid item md="auto"><Button 
       onClick={handleChange}
      xs={
          {
                    borderRadius:1,
                    height: "100%"
          }
      }>
          <CompareArrowsIcon sx={{fontSize:30}}/>
      </Button></Grid>
    
  )
}
export default SwitchCurrency;