import BoxTitle from "@/_components/common/box/BoxTitle";
import { ItemTitleDate } from "@/_components/common/box/box.style";
import BoxRefreshDate from "@/_components/common/box/BoxRefreshDate";
import { HomeDisasterState } from "@/_components/disaster/HomeDisaster";

interface DisasterTitleProps {
  dataLength: number;
  isLoading?: boolean;
  setStates: (newState: Partial<HomeDisasterState>) => void;
  handleTopScroll?: () => void;
}

const DisasterTitle = ({
  dataLength,
  isLoading,
  setStates,
  handleTopScroll,
}: DisasterTitleProps) => {
  return (
    <div className={ItemTitleDate}>
      <BoxTitle>
        실시간 재난상황전파 메시지 ({dataLength})
        {isLoading && (
          <span className={"loading"}>데이터를 불러오는 중입니다...</span>
        )}
      </BoxTitle>
      <BoxRefreshDate handleTopScroll={handleTopScroll} setStates={setStates} />
    </div>
  );
};

export default DisasterTitle;
