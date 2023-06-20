import { useLoginTestStore } from "@stores/useLoginTest.store";
import React from "react";
import { Navigate } from "react-router";
import LayoutView from "../../layouts/layout.view";

const Home = () => {
  const { login } = useLoginTestStore();

  // const url = "http://apis.data.go.kr/1741000/DisasterMsg3/getDisasterMsg1List?ServiceKey=bMN7y8CWW%2B7gP3Zm5N00%2BHKZ4Gaw93NeAGNHFukdnAepw2YdKX2V6q8ny2vkT45HjswF%2F7uycDMMJgOPQG3iKQ%3D%3D&pageNo=1&numOfRows=10&type=JSON";
  //
  // axios.get(`${url}`).then((res) => {
  //   console.log(res.data);
  // });

  return (
    <>
      {!login && <Navigate to="/login" replace={true} />}
      <LayoutView>Home</LayoutView>
    </>
  );
};
export default Home;
