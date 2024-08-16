import useSWRInfinite from "swr/infinite";
import {fetcher, scrollFetcher} from "@utils/fetcher";
import {RowData} from "@type/api.type";
import useSWR from "swr";

export const msgUrl = process.env.REACT_APP_MAIN_API_URL;
export const msgKey = process.env.REACT_APP_API_KEY;

/**
 * Get disaster data
 * @param limit
 */
export const useGetDisasterInfinite = ({limit = 8}: { limit: number }) => {

  const url = `/api2/getDisasterMsg5List?ServiceKey=${msgKey}&pageNo=1&numOfRows=${limit}&type=json`
  const getKey = (pageIndex: number, previousPageData: RowData[]) => {
    // if (page === 1) return msgUrl + `&pageNo=1&numOfRows=8`;
    if (previousPageData && !previousPageData.length) return null;
    return url;
  };


  const {data, mutate, error} = useSWRInfinite(getKey, scrollFetcher);
  const isLoadingInitialData = !data && !error;
  return {data, mutate, error, isLoadingInitialData};
}


export const useGetDisaster = () => {
  const url = `/api2/getDisasterMsg5List?ServiceKey=${msgKey}&pageNo=1&numOfRows=8&type=json`
  const {data, mutate, error} = useSWR(url, fetcher);
  const isLoadingInitialData = !data && !error;
  return {data, mutate, error, isLoadingInitialData};
}
