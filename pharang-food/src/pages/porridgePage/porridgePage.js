import React from 'react';
import "./porridgePage.css";
import SyncIcon from "@mui/icons-material/Sync";
import FCard from '../../components/Card';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";

const PorridgePage = () => {
  const { riceList } = useSelector((state) => state.rice);
  let surplus = riceList.length % 4;
  return (
    <div className="porridge-page">
      <p
        style={{
          fontSize: 20,
          margin: 0,
          // marginLeft: "40px",
          // marginRight: "40px",
          // border: "1px solid black",
        }}
      >
        Cháo
      </p>
      <div
        style={{
          border: "1px solid black",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {riceList.map((food, index) => {
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
}

export default PorridgePage