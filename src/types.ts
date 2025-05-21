export interface Stock {
  symbol: string;
  close: number;
  percent_change: number;
}

export interface StockItemProps {
  symbol: string;
  close: number;
  name: string;
  percent_change: number;
  rowIndex: number;
}

export interface StocksFilterProps {
  filter: string;
  search: string;
  setFilter: (type: string) => void;
  setSearch: (symbol: string) => void;
}

export interface StocksTableProps {
  data: any[],
}