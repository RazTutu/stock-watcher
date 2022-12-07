import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import SearchArea from "./components/searchArea/SearchArea";
import { Stock } from "./types/types";
import "./App.css";
import Chart from "./components/chart/Chart";

function App() {
  const [chartData, setChartData] = useState<Stock[]>([]);
  const updateChart = (data: Stock[]) => {
    setChartData(data);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <SearchArea updateChart={updateChart} />
      </Box>
      <Box>
        <Chart chartData={chartData} />
      </Box>
    </Container>
  );
}

export default App;
