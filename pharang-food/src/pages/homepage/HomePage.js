import React, { useState } from 'react';
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { db, auth } from '../../firebase';
import { uid } from "uid";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Typography } from '@mui/material';
import logo from "../../images/logo.png";
import "./homePage.css";
import TDrawer from '../../components/drawer';
import FCard from '../../components/Card';
import SyncIcon from "@mui/icons-material/Sync";
import ListHorizontal from '../../components/listHorizontal/ListHorizontal';

function HomePage() {
  const navigate = useNavigate();

  const array = [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1"
  ];
  let surplus = array.length % 4;
  return (
    <>
      <div id="position" className="home-page">
        {/* div cơm  */}
        <div
          style={{
            width: "972px",
            // margin: "auto",
            marginTop: 25,
            marginBottom: 25,
            // display: "flex",
            // border: "1px solid black",
          }}
        >
          <p
            style={{
              margin: 0,
              // border: "1px solid black",
            }}
          >
            Cơm
          </p>
          <ListHorizontal array={array} />
          <Button
            onClick={() => navigate("/rice")}
            style={{
              width: "100%",
              margin: 0,
              // border: "1px solid black",
            }}
          >
            Xem tất cả món ăn
          </Button>
        </div>

        {/* div Phở  */}
        <div
          style={{
            width: "972px",
            // margin: "auto",
            marginTop: 25,
            marginBottom: 25,
            // display: "flex",
            // border: "1px solid black",
          }}
        >
          <p
            style={{
              margin: 0,
              // border: "1px solid black",
            }}
          >
            Phở
          </p>
          <ListHorizontal array={array} />
          <Button
            onClick={() => navigate("/noodleSoup")}
            style={{
              width: "100%",
              margin: 0,
              // border: "1px solid black",
            }}
          >
            Xem tất cả món ăn
          </Button>
        </div>

        {/* div cháo  */}
        <div
          style={{
            width: "972px",
            // margin: "auto",
            marginTop: 25,
            marginBottom: 25,
            // display: "flex",
            // border: "1px solid black",
          }}
        >
          <p
            style={{
              margin: 0,
              // border: "1px solid black",
            }}
          >
            Cháo
          </p>
          <ListHorizontal array={array} />
          <Button
            onClick={() => navigate("/porridge")}
            style={{
              width: "100%",
              margin: 0,
              // border: "1px solid black",
            }}
          >
            Xem tất cả món ăn
          </Button>
        </div>

        {/* div lẩu  */}
        <div
          style={{
            width: "972px",
            // margin: "auto",
            marginTop: 25,
            marginBottom: 25,
            // display: "flex",
            // border: "1px solid black",
          }}
        >
          <p
            style={{
              margin: 0,
              // border: "1px solid black",
            }}
          >
            Lẩu
          </p>
          <ListHorizontal array={array} />
          <Button
            onClick={() => navigate("/hotpot")}
            style={{
              width: "100%",
              margin: 0,
              // border: "1px solid black",
            }}
          >
            Xem tất cả món ăn
          </Button>
        </div>

        {/* div nước ép  */}
        <div
          style={{
            width: "972px",
            // margin: "auto",
            marginTop: 25,
            marginBottom: 25,
            // display: "flex",
            // border: "1px solid black",
          }}
        >
          <p
            style={{
              margin: 0,
              // border: "1px solid black",
            }}
          >
            Nước ép
          </p>
          <ListHorizontal array={array} />
          <Button
            onClick={() => navigate("/juice")}
            style={{
              width: "100%",
              margin: 0,
              // border: "1px solid black",
            }}
          >
            Xem tất cả món ăn
          </Button>
        </div>

        {/* div trà sữa  */}
        <div
          style={{
            width: "972px",
            // margin: "auto",
            marginTop: 25,
            marginBottom: 25,
            // display: "flex",
            // border: "1px solid black",
          }}
        >
          <p
            style={{
              margin: 0,
              // border: "1px solid black",
            }}
          >
            Trà sữa
          </p>
          <ListHorizontal array={array} />
          <Button
            onClick={() => navigate("/milktea")}
            style={{
              width: "100%",
              margin: 0,
              // border: "1px solid black",
            }}
          >
            Xem tất cả món ăn
          </Button>
        </div>

        {/* div cà phê  */}
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
          }}
        >
          <p
            style={{
              margin: 0,
              border: "1px solid black",
            }}
          >
            Cà phê
          </p>
          <div
            style={{
              // border: "1px solid black",
              width: "995.140px",
              marginTop: 50,
              // marginBottom: 50,
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {array.map((e, index) => {
              return <FCard key={index} />;
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
        </div> */}
        <div
          style={{
            width: "972px",
            // margin: "auto",
            marginTop: 25,
            marginBottom: 25,
            // display: "flex",
            // border: "1px solid black",
          }}
        >
          <p
            style={{
              margin: 0,
              // border: "1px solid black",
            }}
          >
            Cà phê
          </p>
          <ListHorizontal array={array} />
          <Button
            onClick={() => navigate("/coffee")}
            style={{
              width: "100%",
              margin: 0,
              // border: "1px solid black",
            }}
          >
            Xem tất cả món ăn
          </Button>
        </div>
      </div>
    </>
  );
}

export default HomePage