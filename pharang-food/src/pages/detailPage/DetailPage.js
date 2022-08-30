import React from 'react';
import "./DetailPage.css";
import { useDispatch, useSelector } from "react-redux";


const DetailPage = () => {
  const { foodDetail } = useSelector((state) => state.foodDetail);
  return (
    <div className="detail-page">
      <div
        style={{
          display: "flex",
          width: "1000px",
          height: "225px",
          border: "1px solid black",
        }}
      >
        <div style={{ width: "400px", border: "1px solid black" }}>
          <img
            src="https://i.ytimg.com/vi/FR4DH5sSysI/maxresdefault.jpg"
            alt="not found"
            width="400px"
            height="225px"
          />
        </div>
        <div
          style={{
            width: "600px",
            padding: 20,
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>{foodDetail.name}</div>
          <div>{foodDetail.address}</div>
          <div> {foodDetail.price}</div>
          <div>favorite cart</div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage