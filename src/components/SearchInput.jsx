import React, { useId } from 'react';
import './../styles/Input.scss';

const searchInput = ({
  data, 
  option,
  text,
  onChangeOption,
  onChangeText,
  handleReload}) => {
  const id = useId();

  const handleOptionChange = (e) => {
    onChangeOption(e.target.value);
  };

  const handleTextChange = (e) => {
    onChangeText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    handleReload(prevReload => !prevReload); // 검색 버튼 클릭 시 reload 상태 변경
  };

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor={id} className="sr-only">
        검색창
      </label>
      {/* <select
        value={option}
        onChange={handleOptionChange}
        id={id}
        >
        <option value="direction">방향</option>
        <option value="routeName">노선명</option>
        <option value="serviceAreaName">주유소명</option>
        <option value="gasolinePrice">휘발유 가격</option>
        <option value="diselPrice">경유 가격</option>
        <option value="lpgPrice">LPG 가격</option>
        <option value="telNo">전화번호</option>
      </select> */}
      <input
        value={text}
        type="text"
        onChange={handleTextChange}
        placeholder="검색어를 입력하세요"
      />
      {/* input type search value입력시 x 표시 나오고 클릭시 텍스트 삭제  */}
      <button
        type="submit"
        //onClick={handleReload}
      >
        검색
      </button>
    </form>
  );
};

export default searchInput;