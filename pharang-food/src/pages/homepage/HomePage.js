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
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  const navigate = useNavigate();
  const { riceList } = useSelector((state) => state.rice);
  const { noodleSoupList } = useSelector((state) => state.noodleSoup);
  const { porridgeList } = useSelector((state) => state.porridge);
  const { hotpotList } = useSelector((state) => state.hotpot);
  const { juiceList } = useSelector((state) => state.juice);
  const { milkteaList } = useSelector((state) => state.milktea);
  const { coffeeList } = useSelector((state) => state.coffee);
  console.log(riceList);

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
              fontSize: 20,
              margin: 0,
              marginLeft: "40px",
              marginRight: "40px",
              // border: "1px solid black",
            }}
          >
            Cơm
          </p>
          <ListHorizontal array={riceList} />
          <Button
            onClick={() => { navigate("/rice"); window.scrollTo({top: 0, behavior: "smooth"}) }}
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
              fontSize: 20,
              margin: 0,
              marginLeft: "40px",
              marginRight: "40px",
              // border: "1px solid black",
            }}
          >
            Phở
          </p>
          <ListHorizontal array={noodleSoupList} />
          <Button
            onClick={() => { navigate("/noodleSoup"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
              fontSize: 20,
              margin: 0,
              marginLeft: "40px",
              marginRight: "40px",
              // border: "1px solid black",
            }}
          >
            Cháo
          </p>
          <ListHorizontal array={porridgeList} />
          <Button
            onClick={() => { navigate("/porridge"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
              fontSize: 20,
              margin: 0,
              marginLeft: "40px",
              marginRight: "40px",
              // border: "1px solid black",
            }}
          >
            Lẩu
          </p>
          <ListHorizontal array={hotpotList} />
          <Button
            onClick={() => { navigate("/hotpot"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
              fontSize: 20,
              margin: 0,
              marginLeft: "40px",
              marginRight: "40px",
              // border: "1px solid black",
            }}
          >
            Nước ép
          </p>
          <ListHorizontal array={juiceList} />
          <Button
            onClick={() => { navigate("/juice"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
              fontSize: 20,
              margin: 0,
              marginLeft: "40px",
              marginRight: "40px",
              // border: "1px solid black",
            }}
          >
            Trà sữa
          </p>
          <ListHorizontal array={milkteaList} />
          <Button
            onClick={() => { navigate("/milktea"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
              fontSize: 20,
              margin: 0,
              marginLeft: "40px",
              marginRight: "40px",
              // border: "1px solid black",
            }}
          >
            Cà phê
          </p>
          <ListHorizontal array={coffeeList} />
          <Button
            onClick={() => { navigate("/coffee"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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



 