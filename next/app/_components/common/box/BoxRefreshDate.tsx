import { ItemRefreshDate } from "@/_components/common/box/box.style";
import { IoIosRefresh } from "react-icons/io";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

const BoxRefreshDate = () => {
  const [date, setDate] = useState<Dayjs | null | string>(null);

  const onClickDateRefresh = () => {
    setDate(dayjs().format("YYYY/MM/DD A HH:mm:ss"));
    // setRefresh(true);
    // console.log("refresh", refresh);
    // if (pageNo === 1) return;
    // setPageNo(1);
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
