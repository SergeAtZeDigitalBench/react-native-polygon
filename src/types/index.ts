export * from "./openStreetMapApi";
export * from "./openMeteoApi";

export type FetchState<D> = {
  data: D | null;
  isLoading: boolean;
  error: null | string;
};
