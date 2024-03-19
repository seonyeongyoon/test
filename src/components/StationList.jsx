import React, { useRef } from 'react';
import './../styles/List.scss';

const StationList = ({ data, searchText, filteredResults }) => {
  const obsRef = useRef(null); 

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>방향</th>
            <th>노선명</th>
            <th>주유소명</th>
            <th>휘발유 가격</th>
            <th>경유 가격</th>
            <th>LPG 가격</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {searchText.length > 1 ? (
            filteredResults.map((item, index) => {
              return (
                <tr 
                  key={item.serviceAreaCode}
                  ref={obsRef}
                >
                  <td>
                    <span>{index + 1}</span>
                  </td>
                  <td>
                    <p>{item.direction ? item.direction : '알 수 없음'}</p>
                  </td>
                  <td>
                    <p>{item.routeName ? item.routeName : '알 수 없음'}</p>
                  </td>
                  <td>
                    <p>{item.serviceAreaName ? item.serviceAreaName : '알 수 없음'}</p>
                  </td>
                  <td>
                    <p>{item.gasolinePrice ? item.gasolinePrice : '알 수 없음'}</p>
                  </td>
                  <td>
                    <p>{item.diselPrice ? item.diselPrice : '알 수 없음'}</p>
                  </td>
                  <td>
                    <p>{item.lpgPrice ? item.lpgPrice : '알 수 없음'}</p>
                  </td>
                  <td>
                    <p>{item.telNo ? item.telNo : '알 수 없음'}</p>
                  </td>
                </tr>
              )
            })
          ) : (
            data &&
            data.map((item, index) => {
              return (
                <tr 
                  key={item.serviceAreaCode}
                  ref={obsRef}
                >
                  <td>
                    <span>{index + 1}</span>
                  </td>
                  <td>
                    <p>{item.direction ? item.direction : '알 수 없음'}</p>
                  </td>
                  <td>
                    <p>{item.routeName ? item.routeName : '알 수 없음'}</p>
                  </td>
                  <td>
                    <p>{item.serviceAreaName ? item.serviceAreaName : '알 수 없음'}</p>
                  </td>
                  <td>
                    <p>{item.gasolinePrice ? item.gasolinePrice : '알 수 없음'}</p>
                  </td>
                  <td>
                    <p>{item.diselPrice ? item.diselPrice : '알 수 없음'}</p>
                  </td>
                  <td>
                    <p>{item.lpgPrice ? item.lpgPrice : '알 수 없음'}</p>
                  </td>
                  <td>
                    <p>{item.telNo ? item.telNo : '알 수 없음'}</p>
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </>
  );
};

export default StationList;
