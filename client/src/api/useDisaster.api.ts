import useSWRInfinite from "swr/infinite";
import { disasterScrollFetcher } from "@utils/fetcher";
import { DisasterMessageData } from "@type/api.type";

/**
 * Get disaster data
 * @param pageNo
 */
export const useGetDisasterInfinite = ({ pageNo = 1 }: { pageNo: number }) => {
  const getKey = (pageIndex: number, previousPageData: DisasterMessageData[]) => {
    const msgKey = process.env.REACT_APP_API_KEY;

    // 이전 페이지 데이터가 없으면 더 이상 요청하지 않음 (마지막 페이지)
    if (previousPageData && !previousPageData.length) return null;

    // pageNo을 증가시키면서 새로운 페이지의 데이터를 요청
    return `/V2/api/DSSP-IF-00247?serviceKey=${msgKey}&pageNo=${pageNo}`;
  };

  const { data, mutate, error, isLoading } = useSWRInfinite(getKey, disasterScrollFetcher, { revalidateFirstPage: false });

  const filterData: DisasterMessageData[] = data ? data[0] : [];

  return {
    data: filterData,
    mutate,
    error,
    isLoading
  };
};
