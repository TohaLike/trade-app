export interface Stock {
  symbol: string;
  close: number;
  open: string;
  percent_change: number;
}

export interface StockItemProps {
  symbol: string;
  name: string;
  open: number;
  close: number;
  percent_change: number;
  rowIndex: number;
}

export interface StockApiResponseItem {
  symbol: string;
  name: string;
  open: number;
  close: number;
  percent_change: number;
}

export type StockApiResponse = Record<string, StockApiResponseItem>;

export interface StocksFilterProps {
  filter: string;
  search: string;
  setFilter: (type: string) => void;
  setSearch: (symbol: string) => void;
}

export interface StockApiErrorResponse {
  status: "error";
  message: any;
}

export type StockApiResult = StockApiResponse | StockApiErrorResponse;

export interface StocksTableProps {
  data: StockApiResponseItem[];
}
