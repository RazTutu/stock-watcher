import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { queryClient } from "../../main";
import { useStocks } from "../../hooks/useStocks";

export default function SearchArea({ updateChart }: () => void) {
  const [fieldData, setFieldData] = useState("");
  const [companyName, setCompanyName] = useState("aapl");
  const { data: stocks } = useStocks(companyName);
  console.log("stocks are", stocks);
  const searchStock = (data: string) => {
    setCompanyName(fieldData);
  };

  return (
    <Box
      sx={{
        width: "80%",
        marginTop: "3rem",
        border: "1px solid red",
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
  );
}
