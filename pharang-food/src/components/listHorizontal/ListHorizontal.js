import { Button, IconButton } from "@mui/material";
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import FCard from "../Card";
import "./ListHorizontal.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function ListHorizontal({array}) {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <div className="list-horizontal">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
      >
        {array.map(({food, index }) => (
          <FCard
            // itemId={id} // NOTE: itemId is required for track items
            // title={id}
            key={index}
            // onClick={handleClick(id)}
            // selected={isItemSelected(id)}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <IconButton disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <ArrowBackIosNewIcon
        style={{ fontSize: "20px" }}
      />
    </IconButton>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  // console.log(isLastItemVisible);
  return (
    <IconButton disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <ArrowForwardIosIcon
        style={{  fontSize: "20px" }}
      />
    </IconButton>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: "100px",
        }}
      />
    </div>
  );
}

export default ListHorizontal;
