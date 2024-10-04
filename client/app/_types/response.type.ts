export interface commonResponseType<T> {
  status: number;
  success: boolean;
  data: T;
}
