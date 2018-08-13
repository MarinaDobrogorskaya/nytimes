export interface AdvancedSearch {
  section?: string;
  type?: string;
  dateFrom?: Date;
  dateTo?: Date;
  sort?: string;
}
export interface Search extends AdvancedSearch {
  query: string;
}
