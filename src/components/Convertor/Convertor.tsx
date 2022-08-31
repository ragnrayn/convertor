import React, { useState } from "react";
import "./Convertor.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { CurrencyService } from "../../services/CurrencyService";

export function Convertor() {
  const [firstCurrency, setfirstCurrency] = React.useState("");
  const [secondCurrency, setSecondCurrency] = React.useState("");
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);

  const handleChange1 = (event: SelectChangeEvent) => {
    setfirstCurrency(event.target.value as string);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setSecondCurrency(event.target.value as string);
  };

  const covert = () => {
    CurrencyService.getCurrentCurrency(firstCurrency, secondCurrency).then(
      (data) => {
        if (count && count > 0 && data) {
          setResult(count * data.info.rate);
          setError(false);
        } else {
          setError(true);
        }
      }
    );
    console.log("Currency");
  };

  const getCount = (event: any) => {
    setCount(event.target.value);
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <TextField
          id="outlined-basic"
          onChange={(e) => getCount(e)}
          name="fromCount"
          label="From count"
          variant="outlined"
          type={"number"}
          InputProps={{
            inputProps: {
              min: 1,
            }
          }}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">From</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={firstCurrency}
            label="From"
            onChange={handleChange1}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
            <MenuItem value={"UAH"}>UAH</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">To</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={secondCurrency}
            label="To"
            onChange={handleChange2}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
            <MenuItem value={"UAH"}>UAH</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" onClick={() => covert()}>
        Convert
      </Button>
      <div className="result">
        {result && !error
          ? `Convert count: ${count}
        Convert From: ${firstCurrency}
        Convert To: ${secondCurrency}
        Result: ${result}`
          : ""}
      </div>
      <div style={{ color: "red", fontSize: "24px" }}>
        {error ? "Please enter all field correct" : ""}
      </div>
    </>
  );
}
