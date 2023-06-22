import { RowData } from "@type/api.type";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BoxContentTitleTextView from "../../molecules/boxGroup/box-content-title-text.view";

const Home = () => {
  const [data, setDate] = useState<RowData[]>([]);
  const pageNo = 1;

  useEffect(() => {
    const url = process.env.REACT_APP_MAIN_API_URL + "?ServiceKey=" + process.env.REACT_APP_API_KEY + `&pageNo=${pageNo}&numOfRows=5&type=JSON`;

    axios.get(`${url}`).then((res) => {
      setDate(res.data.DisasterMsg[1].row);
    });
    // setDate([rowDummyData]);
  }, []);

  const porps = {
    data: data
  };
  return (
    <>
      <BoxContentTitleTextView {...porps} />
    </>
  );
};

export default Home;
