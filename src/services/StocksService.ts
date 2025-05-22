import {StockApiResponse, StockApiResult } from "@/types";
import axios from "axios";

export default class StocksService {
  static url = process.env.NEXT_PUBLIC_TWELVEDATA_URL;
  static apiKey = process.env.NEXT_PUBLIC_TWELVEDATA_API;

  static async getStockData(symbols: string[]): Promise<StockApiResult> {
    try {
      const response = await axios.get(`${this.url}/quote?symbol=${symbols}&apikey=${this.apiKey}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }


}
