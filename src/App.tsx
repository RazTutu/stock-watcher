import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SearchArea from "./components/searchArea/SearchArea";

import "./App.css";

type Stock = {
  value: number;
  date: string;
};

function App() {
  const [chartData, setChartData] = useState<Stock[]>([]);
  const updateChart = (data: Stock[]) => {
    setChartData(data);
  };

  return (
    <Container maxWidth="lg" sx={{ border: "1px solid red" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <SearchArea updateChart={updateChart} />
      </Box>
    </Container>
  );
}

export default App;
