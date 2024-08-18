import useSWRInfinite from "swr/infinite";
import {fetcher, scrollFetcher} from "@utils/fetcher";
import {RowData} from "@type/api.type";
import useSWR from "swr";


/**
 * Get disaster data
 * @param limit
 */
export const useGetDisasterInfinite = ({limit = 8}: { limit: number }) => {

  const url = `/api2?pageNo=1&numOfRows=${limit}`
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
  const url = `/api2?pageNo=1&numOfRows=8`
  const {data, mutate, error} = useSWR(url, fetcher);
  const isLoadingInitialData = !data && !error;
  return {data, mutate, error, isLoadingInitialData};
}
