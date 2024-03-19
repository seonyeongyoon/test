import { useEffect, useRef, useState } from "react";
import axios from "axios";
import StationList from "./../components/StationList";
import SearchInput from './../components/SearchInput';

const GasStation = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchOption, setSearchOption] = useState("noticeTitle");
  const [searchText, setSearchText] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [reload, setReload] = useState(true); //검색버튼 클릭시 [reload] 리렌더링
  const observer = useRef();
  const target = useRef(null);

  //데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://data.ex.co.kr/openapi/business/curStateStation?key=6010501098&type=json&numOfRows=20&pageNo=${page}`
        );
        setData(prevData => [...prevData, ...response.data.list]);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [page]);

  //무한 스크롤
  useEffect(() => {
    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        setPage(prevPage => prevPage + 1);
      }
    };

    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    });

    if (observer.current) {
      observer.current.observe(target.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading]);

  //검색 결과 필터링
  const searchItems = (searchValue) => {
    setSearchText(searchValue);
    if (searchText !== '') {
      const filteredData = data.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchText.toLowerCase())
      })
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  }
  
  useEffect(() => {
    searchItems(searchText);
  }, [searchText]);
  

  return (
    <div className="container">
      <SearchInput
        data={data} 
        handleReload={setReload} 
        option={searchOption} 
        onChangeOption={setSearchOption} 
        text={searchText} 
        onChangeText={setSearchText}
        onChange={(e) => setSearchText(e.target.value)}  // onChangeText 대신 setSearchText를 전달
      />
      <StationList searchText={searchText} filteredResults={filteredResults} data={data}/>
      {loading && <div>Loading...</div>}
      <div ref={target} style={{ marginTop: "20px" }}></div>
    </div>
  );
};

export default GasStation;
