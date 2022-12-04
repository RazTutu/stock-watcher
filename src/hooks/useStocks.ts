import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useStocks(symbol: string) {
  const apiKey = "9BVUEI3B52GEA2R8";
  const url = "";
  //const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=${apiKey}`
  const { data } = useQuery(["stocks", symbol], () =>
    axios.get(url), 
    {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    }
  );
  return data;
}
