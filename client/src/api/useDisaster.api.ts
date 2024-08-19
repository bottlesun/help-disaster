import useSWRInfinite from "swr/infinite";
import {fetcher, scrollFetcher} from "@utils/fetcher";
import {RowData} from "@type/api.type";
import useSWR from "swr";


/**
 * Get disaster data
 * @param pageNo
 */
export const useGetDisasterInfinite = ({pageNo = 1}: { pageNo: number }) => {

  const getKey = (pageIndex: number, previousPageData: RowData[]) => {
    // 이전 페이지 데이터가 없으면 더 이상 요청하지 않음 (마지막 페이지)
    if (previousPageData && !previousPageData.length) return null;

    // pageNo을 증가시키면서 새로운 페이지의 데이터를 요청
    return `/api2?pageNo=${pageNo}&numOfRows=10`;
  };


  const {data, mutate, error, isLoading} = useSWRInfinite(getKey, scrollFetcher, {revalidateFirstPage: false});

  const filterData: RowData[] = data ? data[0] : [];

  return {
    data: filterData,
    mutate,
    error,
    isLoading
  };
}


export const useGetDisaster = () => {
  const url = `/api2?pageNo=1&numOfRows=10`
  const {data, mutate, error, isLoading} = useSWR(url, fetcher);
  return {data, mutate, error, isLoading};
}
