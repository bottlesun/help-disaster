import { ItemRefreshDate } from "@/_components/common/box/box.style";
import { IoIosRefresh } from "react-icons/io";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { HomeDisasterState } from "@/_components/disaster/HomeDisaster";

interface BoxRefreshDateProps {
  setStates: (newState: Partial<HomeDisasterState>) => void;
  handleTopScroll?: () => void;
}

const BoxRefreshDate = ({
  setStates,
  handleTopScroll,
}: BoxRefreshDateProps) => {
  const [date, setDate] = useState<Dayjs | null | string>(
    "2000/00/00 AM 00:00:00",
  );

  const onClickDateRefresh = () => {
    setDate(dayjs().format("YYYY/MM/DD A HH:mm:ss"));
    setStates({ isLoading: true, page: 1 });
    setTimeout(() => {
      setStates({ isLoading: false });
    }, 800);
    handleTopScroll && handleTopScroll();
  };

  useEffect(() => {
    setDate(dayjs().format("YYYY/MM/DD A HH:mm:ss"));
  }, []);

  return (
    <div className={ItemRefreshDate} onClick={onClickDateRefresh}>
      <IoIosRefresh />
      {date && `${date} 기준`}
    </div>
  );
};

export default BoxRefreshDate;
