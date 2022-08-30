import React from "react";
import "./SearchPage.css";
import SyncIcon from "@mui/icons-material/Sync";
import FCard from "../../components/Card";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const SearchPage = () => {
  const { allFoodList } = useSelector((state) => state.allFood);
  let surplus = allFoodList.length % 4;
  return (
    <div className="search-page">
      <div
        style={{
          border: "1px solid black",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {allFoodList.map((food, index) => {
          return <FCard food={food} />;
        })}
        {surplus === 3 ? (
          <div
            style={{ width: "210px", height: "230px", marginBottom: 5 }}
          ></div>
        ) : (
          ""
        )}
        {surplus === 2 ? (
          <>
            <div
              style={{ width: "210px", height: "230px", marginBottom: 5 }}
            ></div>
            <div
              style={{ width: "210px", height: "230px", marginBottom: 5 }}
            ></div>
          </>
        ) : (
          ""
        )}
        {surplus === 1 ? (
          <>
            <div
              style={{ width: "210px", height: "230px", marginBottom: 5 }}
            ></div>
            <div
              style={{ width: "210px", height: "230px", marginBottom: 5 }}
            ></div>
            <div
              style={{ width: "210px", height: "230px", marginBottom: 5 }}
            ></div>
          </>
        ) : (
          ""
        )}
      </div>
      <div
        style={{
          border: "1px solid black",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Button>
          Xem thêm <SyncIcon />
        </Button>
      </div>
    </div>
  );
};

export default SearchPage;
