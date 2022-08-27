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
  const array = [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1"  ];
  let surplus = array.length % 4;
  return (
    <>
      <ListHorizontal />
      <div className="home-page">
        <div
          id="rice-page-food"
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
            Cơm
          </p>
          <div
            style={{
              border: "1px solid black",
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
        </div>
        <div
          id="noodleSoup-page-food"
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
            Phở
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
        </div>
        <div
          id="porridge-page-food"
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
            Cháo
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
        </div>
        <div
          style={{
            border: "1px solid black",
            width: "995.140px",
            textAlign: "center",
          }}
        >
          <Button>
            Xem thêm <SyncIcon />
          </Button>
        </div>
      </div>
    </>
  );
}

export default HomePage