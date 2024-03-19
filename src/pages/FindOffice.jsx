import React, { useEffect, useState } from "react";
//import usePromise from "../hooks/usePromise";
import axios from "axios";
import KakaoMap from "../components/KakaoMap";

const FindOffice = () => {
  // const [loading, response, error] = usePromise(() => {
  //   return axios.get(
  //     "https://newsapi.org/v2/top-headlines?country=kr&apiKey=bd28dbc9793644d893e85c5be0aabd71"
  //   );
  // }, []);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

   //영업소 위치 데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://data.ex.co.kr/openapi/locationinfo/locationinfoUnit?key=6010501098&type=json&numOfRows=10&pageNo=1"
        );
        setData(response.data.list);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);


  //대기 중일 때
  if (loading) {
    return <div className="container">Loading..</div>;
  }
  //아직 response 값이 설정되지 않았을 때
  if (!data) {
    return null;
  }


  return (
    <div className="container">
      {/* {data.map((office) => (
        <div key={office.unitCode}></div>
      ))} */}
      <KakaoMap data={data} />
    </div>
  );
};

export default FindOffice;
