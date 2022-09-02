import { Divider, IconButton } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DecreaseQuantity, IncreaseQuantity } from "../../features/shoppingCart/shoppingCartSlice";
import "./CheckOutPage.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CheckOutPage = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
    let total = 0;
    const handleDecrease = (id) => {
      dispatch(DecreaseQuantity(id));
    };
    const handleIncrease = (id) => {
      dispatch(IncreaseQuantity(id));
    };

    cartList &&
      cartList.forEach((cart) => {
        total += Number(cart.price * cart.quantity);
      });
  return (
    <div className="checkout-page">
      <div className="checkout-info">
        <p style={{ fontSize: 25, margin: 10 }}>Thanh toán</p>
        <Divider />
        <div style={{ height: 400 }}>
          <div style={{ width: 600, height: 30, textAlign: "start" }}>
            <p style={{ margin: 10 }}>Địa chỉ nhận hàng</p>
          </div>
          <div style={{ width: 600, minHeight: 400, display: "flex", flexDirection: "column" }}>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
          </div>
        </div>
        <Divider />
        <div style={{ minHeight: 200, border: "1px solid black" }}>
          <div style={{ width: 600, height: 30, border: "1px solid black" }}>
            <p style={{ margin: 0 }}>Tóm tắt đơn hàng</p>
          </div>
          <div
            style={{ width: 600, border: "1px solid black", minHeight: 170 }}
          >
            {cartList.map((cart) => (
              <>
                <div
                  style={{
                    // border: "1px solid black",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    height: 90,
                    // justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      // border: "1px solid black",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: 90,
                    }}
                  >
                    <div>
                      <IconButton
                        onClick={() => handleDecrease(cart.id)}
                        style={{ width: "auto", height: "auto" }}
                      >
                        <RemoveIcon style={{ fontSize: 20 }} />
                      </IconButton>
                    </div>
                    <div>
                      <p style={{ fontSize: 15, margin: 0 }}>{cart.quantity}</p>
                    </div>
                    <div>
                      <IconButton
                        onClick={() => handleIncrease(cart.id)}
                        style={{ width: "auto", height: "auto" }}
                      >
                        <AddIcon style={{ fontSize: 20 }} />
                      </IconButton>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      // border: "1px solid black",
                      alignItems: "center",
                      width: 400,
                      height: 90,
                    }}
                  >
                    <div
                      style={{
                        // width: 50,
                        // height: 50,
                        // border: "1px solid black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 15,
                      }}
                    >
                      <img width="60px" height="60px" src={cart.image} />
                    </div>
                    <div
                      style={
                        {
                          // width: 50,
                          // height: 50,
                          // border: "1px solid black",
                          // width: "130px",
                        }
                      }
                    >
                      <p style={{ fontSize: 16 }}>{cart.name}</p>
                    </div>
                  </div>
                  <div
                    style={{
                      // fontSize: 10,
                      width: "100px",
                      // border: "1px solid black",
                      display: "flex",
                      justifyContent: "end",
                      paddingRight: 15,
                    }}
                  >
                    <p style={{ fontSize: 15 }}>{cart.price * cart.quantity}</p>
                  </div>
                </div>
                <Divider />
              </>
            ))}
          </div>
        </div>
        {/* <Divider />
        <div style={{ height: 200, border: "1px solid black" }}>
          Chi tiết thanh toán
        </div> */}
      </div>

      <div
        style={{
          width: "100%",
          height: 90,
          backgroundColor: "white",
          position: "fixed",
          bottom: 0,
          left: 0,
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
          <div>tổng cộng : {total}</div>
          <div>đặt đơn</div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage