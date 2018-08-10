export interface AdvansedSearch {
  section?: string;
  type?: string;
  dateFrom?: string;
  dateTo?: string;
  sort?: string;
}
export interface Search extends AdvansedSearch {
  query: string;
}
