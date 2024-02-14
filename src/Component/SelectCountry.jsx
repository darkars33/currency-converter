import React from 'react';
import { Autocomplete, Grid, Skeleton, TextField } from '@mui/material';
import useAxios from '../hooks/useAxios';

function SelectCountry(props) {
  const {value, setValue, label} = props;
  const [data, load, error]= useAxios('https://restcountries.com/v3.1/all');
  // console.log(data);

  if(load){
    return <Grid item xs={12} md={3}>
      <Skeleton variant='rounded' height={60}/>
    </Grid>
  }

  if(error){
    return "something is wrong!";
    console.log(error)
  }

  const dataFilter= data.filter((item) => "currencies" in item);
  // console.log(dataFilter);
  const dataCountry= dataFilter.map((item) =>{
    // return `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`
    // return {
    //   flag: item.flag,
    //   currency: Object.keys(item.currencies)[0],
    //   commonName: item.name.common
    // }
    // return "hello"
    return [item.flag,"-", Object.keys(item.currencies)[0],"-", item.name.common]
  })

  console.log(dataCountry);
  return (

      <Grid item xs={12} md={3}>
          <Autocomplete
                    value={value}
                    disableClearable
                    onChange={(event, newValue) =>{
                      setValue(newValue);
                    }}
                    options={dataCountry}
                    renderInput={(params) => <TextField {...params} label={label}/>}
          />
      </Grid>
    
  )
}
export default SelectCountry;