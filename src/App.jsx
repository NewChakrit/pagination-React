import { useEffect, useState } from "react";
import "./App.css";
import Food from "./components/Food";
import MenuData from "./data/MenuData";

function App() {
  const [foodData, setFoodData] = useState(MenuData);
  const [dataInPage, setDataInPage] = useState([]);
  const [page, setPage] = useState(0);

  // ข้อมูลทั้งหมด 10 รายการ
  // รายการข้อมูลแต่ละหน้า
  // รายการเลขหน้า = รายการข้อมูลทั้งหมด / รายการข้อมูลแต่ละหน้า
  // 10 / 3 = 4 หน้า
  // 1 = [1-3], 2 = [4-6], 3 = [7-9], 4[10]

  const pagination = () => {
    const foodPerPage = 3; //แสดงรายการอาหาร 3 รายการต่อ 1 หน้า
    const pages = Math.ceil(MenuData.length / foodPerPage);

    // console.log(`Peges length = ${pages}`);

    const newFood = Array.from({ length: pages }, (data, index) => {
      const start = index * foodPerPage; //[0,2], [3,5]
      return MenuData.slice(start, start + foodPerPage);
    });

    // console.log(newFood);
    return newFood;
  };

  useEffect(() => {
    const paginate = pagination();
    setDataInPage(paginate);
    // console.log(paginate[1]);

    setFoodData(paginate[page]);
  }, [page]);

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <div className="App">
      <h1>FoodCard | Pagination</h1>
      <div className="container">
        {foodData.map((data, index) => {
          return <Food key={index} {...data} />;
        })}
      </div>

      <div className="pagination-container">
        {dataInPage.map((data, index) => {
          return (
            <button
              className={`page-btn ${index === page ? "active-btn" : null}`}
              key={index}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
