import React from 'react';
import "./ricePage.css";
import SyncIcon from "@mui/icons-material/Sync";
import FCard from '../../components/Card';
import { Button } from '@mui/material';

const RicePage = () => {
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
     "1",
     "1",
     "1",
     "1",
     "1",
     "1",
   ];
     let surplus = array.length % 4;
  return (
    <div className='rice-page'>
      <div style={{ border: "1px solid black", width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {array.map((e, index) => { return <FCard key={index} /> })}
          {surplus === 3 ? (
          <div style={{ width: "210px", height: "230px", marginBottom: 5 }}></div>
          ) : ("")}
          {surplus === 2 ? (
            <>
            <div style={{ width: "210px", height: "230px", marginBottom: 5 }}></div>
              <div style={{ width: "210px", height: "230px", marginBottom: 5 }}></div>
            </>
          
          ) : ("")}
          {surplus === 1 ? (
            <>
              <div style={{ width: "210px", height: "230px", marginBottom: 5 }}></div>
              <div style={{ width: "210px", height: "230px", marginBottom: 5 }}></div>
              <div style={{ width: "210px", height: "230px", marginBottom: 5 }}></div>
            </>
          ) : ("")}
        </div>
        <div style={{border: "1px solid black", width: "100%", textAlign: "center"}}>
          <Button>Xem thêm <SyncIcon/></Button>
        </div>
    </div>
  )
}

export default RicePage