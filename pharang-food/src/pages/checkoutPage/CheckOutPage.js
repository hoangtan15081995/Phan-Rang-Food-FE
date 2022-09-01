import { Divider } from '@mui/material';
import React from 'react';
import "./CheckOutPage.css"

const CheckOutPage = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-info">
        <p>Thanh toán</p>
        <Divider />
        <div style={{ height: 200, border: "1px solid black" }}>
          <div style={{ width: 600, height: 30, border: "1px solid black" }}>
            <p style={{ margin: 0 }}>Địa chỉ nhận hàng</p>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: 200, border: "1px solid black", height: 170 }}>
            </div>
            <div style={{ width: 400, border: "1px solid black", height: 170 }}>form</div>
          </div>
        </div>
        <Divider />
        <div style={{ height: 200, border: "1px solid black" }}>
          <div style={{ width: 600, height: 30, border: "1px solid black" }}>
            <p style={{ margin: 0 }}>Tóm tắt đơn hàng</p>
          </div>
          <div style={{ width: 600, border: "1px solid black", height: 170 }}>

          </div>
        </div>
        <Divider />
        <div style={{ height: 200, border: "1px solid black" }}>
          Chi tiết thanh toán
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: 90,
          backgroundColor: "white",
          position: "fixed",
          bottom: 0,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 0px 8px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 600,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>tổng cộng</div>
          <div>đặt đơn</div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage