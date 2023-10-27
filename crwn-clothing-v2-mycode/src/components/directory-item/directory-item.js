import "./directory-item.scss";
import { useNavigate } from "react-router-dom";
const DirectoryItem = ({ categoryTitle, imageUrl }) => {
  const navigate = useNavigate();
  const changePage = () => {
    navigate(`/shop/${categoryTitle}`);
  };

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="directory-body-container" onClick={changePage}>
        <h2>{categoryTitle}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default DirectoryItem;
