import axios, { AxiosResponse } from "axios";

export default class StocksService {
  static url = process.env.NEXT_PUBLIC_TWELVEDATA_URL;
  static apiKey = process.env.NEXT_PUBLIC_TWELVEDATA_API;

  static async getStockData(symbols: string[]): Promise<any> {
    try {
      // const response = await axios.get("");
      const response = await axios.get(`${this.url}/quote?symbol=${symbols}&interval=1min&outputsize=30&apikey=${this.apiKey}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
