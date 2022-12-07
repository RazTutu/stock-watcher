import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useStocks } from "../../hooks/useStocks";

import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export default function SearchArea({ updateChart }) {
  const [fieldData, setFieldData] = useState("");
  const [companyName, setCompanyName] = useState("aapl");
  const { data: stocks } = useStocks(companyName);

  const [fromDateValue, setFromDateValue] = React.useState<Dayjs | null>(
    dayjs("2022-09-11T21:11:54")
  );
  const [toDateValue, setToDateValue] = React.useState<Dayjs | null>(
    dayjs("2022-11-11T21:11:54")
  );

  const handleChangeFrom = (newValue: Dayjs | null) => {
    setFromDateValue(newValue);
  };

  const handleChangeTo = (newValue: Dayjs | null) => {
    setToDateValue(newValue);
  };

  useEffect(() => {
    let stockList = [];
    if (stocks?.data["Time Series (Daily)"]) {
      stockList = Object.keys(stocks?.data["Time Series (Daily)"]).map(
        (dateTime) => {
          const value = stocks?.data["Time Series (Daily)"][dateTime];
          const marketCloseKey = Object.keys(value)[3];
          return {
            name: dateTime,
            uv: value[marketCloseKey],
          };
        }
      );
      updateChart(stockList);
    }
  }, [stocks?.data]);

  const searchStock = (data: string) => {
    setCompanyName(fieldData);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: "80%",
          marginTop: "3rem",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <TextField
          variant="outlined"
          sx={{ width: "20rem" }}
          placeholder="Enter company symbol"
          onChange={(event) => setFieldData(event.target.value)}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => searchStock(fieldData)}
          sx={{
            height: "3rem",
            textTransform: "none",
            fontSize: "1rem",
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="From"
            inputFormat="MM/DD/YYYY"
            value={fromDateValue}
            onChange={handleChangeFrom}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="To"
            inputFormat="MM/DD/YYYY"
            value={toDateValue}
            onChange={handleChangeTo}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
}
