import { HomeDisasterState } from "@/_components/disaster/HomeDisaster";
import { UseStatesHookType } from "@/_hooks/useStates.hook";

export const disasterFetchData = async (
  page: number,
  { setStates, state }: UseStatesHookType<HomeDisasterState>,
) => {
  if (page >= 6) {
    alert("최대 50개까지만 불러올 수 있습니다.");
    return;
  }

  try {
    setStates({ isLoading: true });

    const res = await fetch(`/api/disaster?pageNo=${page}`);
    const resData = await res.json();

    if (!resData.data) {
      alert("금일 데이터가 더 이상 없습니다.");
      setStates({ isLoading: false });
      return;
    }

    // 중복 제거 최적화
    const seen = new Set();
    const combinedData = [...state.data, ...resData.data].filter((item) => {
      const duplicate = seen.has(item.SN);
      seen.add(item.SN);
      return !duplicate;
    });

    setStates({
      data: page === 1 ? resData.data : combinedData,
      isLoading: false,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    setStates({ isLoading: false });
  }
};
