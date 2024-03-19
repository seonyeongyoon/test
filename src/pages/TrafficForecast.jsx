import axios from "axios";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TrafficForecast = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const routeList = [
    "서울->대전",
    "서울->대구",
    "서울->울산",
    "서울->부산",
    "서울->광주",
    "서울->목포",
    "서울->강릉",
    "대전->서울",
    "대구->서울",
    "울산->서울",
    "부산->서울",
    "광주->서울",
    "목포->서울",
    "강릉->서울",
    "남양주->양양",
    "양양->남양주"
  ];
  

  //데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://data.ex.co.kr/openapi/safeDriving/forecast?key=6010501098&type=json"
        );
        setData(response.data.list);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  const values = data.length > 0 ? Object.values(data[0]) : [];
  const carValues = values.slice(5, 25);
  const busValues = values.slice(21, 37);
  const carTimeData= carValues.map(str => {
    const [hours, minutes] = str.split(':'); // ':'를 기준으로 문자열을 분할하여 배열로 만듭니다.
    const totalMinutes = parseInt(hours) * 1 + parseInt(minutes) * 1/60; // 시간과 분을 분 단위로 변환하여 합산합니다.
    return totalMinutes;
  });
  const busTimeData = busValues.map(str => {
    const [hours, minutes] = str.split(':'); // ':'를 기준으로 문자열을 분할하여 배열로 만듭니다.
    const totalMinutes = parseInt(hours) * 1 + parseInt(minutes) * 1/60; // 시간과 분을 분 단위로 변환하여 합산합니다.
    return totalMinutes;
  });
  //console.log(timeValues);
  const chartData = {
    labels: routeList,
    datasets: [
      {
        label: '구간 별 소요시간',
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data: carTimeData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '구간 별 버스 소요시간',
        data: busTimeData,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

   
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
    <Bar options={options} data={chartData} />
  </div>
 )
 ;
};

export default TrafficForecast;
