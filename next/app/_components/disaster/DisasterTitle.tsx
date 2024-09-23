import BoxTitle from "@/_components/common/box/BoxTitle";
import { ItemTitleDate } from "@/_components/common/box/box.style";
import BoxRefreshDate from "@/_components/common/box/BoxRefreshDate";

interface DisasterTitleProps {
  dataLength: number;
  isLoading?: boolean;
}

const DisasterTitle = ({ dataLength, isLoading }: DisasterTitleProps) => {
  return (
    <div className={ItemTitleDate}>
      <BoxTitle>
        실시간 재난상황전파 메시지 ({dataLength})
        {isLoading && (
          <span className={"loading"}>데이터를 불러오는 중입니다...</span>
        )}
      </BoxTitle>
      <BoxRefreshDate />
    </div>
  );
};

export default DisasterTitle;
