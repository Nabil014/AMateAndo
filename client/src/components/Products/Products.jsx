import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";

const Products = () => {
  const allProducts = useSelector((state) => state.product);
  const [selected, setSelected] = useState("");

  if (selected.name === "Nombre, de A a Z") {
    allProducts.sort(function (x, y) {
      if (x.title > y.title) return 1;
      if (x.title < y.title) return -1;
      return 0;
    });
  }
  if (selected.name === "Nombre, de Z a A") {
    allProducts.sort(function (x, y) {
      if (x.title < y.title) return 1;
      if (x.title > y.title) return -1;
      return 0;
    });
  }
  if (selected.name === "Precio, de más alto a más bajo") {
    allProducts.sort(function (x, y) {
      if (x.unit_price < y.unit_price) return 1;
      if (x.unit_price > y.unit_price) return -1;
      return 0;
    });
  }
  if (selected.name === "Precio, de más bajo a más alto") {
    allProducts.sort(function (x, y) {
      if (x.unit_price < y.unit_price) return -1;
      if (x.unit_price > y.unit_price) return 1;
      return 0;
    });
  }

  const orderBy = (select) => {
    setSelected(() => select);
  };

  return (
    <div>
      <Filters orderBy={orderBy} />
      <div className="justify-around gap-3 pt-5 pb-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 sm:justify-items-center m-4">
        {allProducts.map(({ _id, title, unit_price, picture, stock }) => {
          return (
              <Card
                key={_id}
                _id={_id}
                title={title}
                unit_price={unit_price}
                picture={picture}
                stock={stock}
                className="z-50"
              />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
