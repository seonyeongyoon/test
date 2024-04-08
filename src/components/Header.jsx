import { Link } from "react-router-dom";
import "./../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <div className="headerInner container">
        <h1>
          <a href="/">실시간 교통정보</a>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/find-office">영업소 찾기</Link>
            </li>
            <li>
              <Link to="/gas-station">주유소 별 현황</Link>
            </li>
            <li>
              <Link to="/traffic-forecast">실시간 교통예보</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
