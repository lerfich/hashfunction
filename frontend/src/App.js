import React from 'react'

import './App.css';

import {Box, Button, Typography} from '@mui/material'
import axios from 'axios'
import { url } from './shared/constants'

const button1Style = {
  backgroundColor: "grey",
}

const button2Style = {
  backgroundColor: "purple",
}

const App = () => {
  const [value, setValue] = React.useState();
  const onChangeValue = React.useCallback((event) => {
    setValue(event.target.value)
  }, [])

  const [resultCode, setResultCode] = React.useState();

  const onStreebogClick = React.useCallback(async () => {
    const response = await axios.get(url + `streebog/${value}`)
    setResultCode(response.data)
  }, [value])

  const onSha256Click = React.useCallback( async () => {
    const response = await axios.post(url + `sha256`, {text: value} )
    setResultCode(response.data)
  }, [value])

  return (
    <div className="App">
      <Box display="flex" justifyContent="center" alignItems="center"  mt={10} mb={1}>
        <Box display="flex" mr={1}>
          <Button variant="contained" style={button1Style} onClick={onSha256Click}>
          use SHA256
          </Button>
        </Box>
        <Box display="flex" ml={1}>
          <Button variant="contained" style={button2Style} onClick={onStreebogClick}>
          use STREEBOG
          </Button>
        </Box>
      </Box>
      <input value={value} onChange={onChangeValue} style={{width: '20%'}}></input>
      <Typography>{resultCode}</Typography>
    </div>
  );
}

export default App;