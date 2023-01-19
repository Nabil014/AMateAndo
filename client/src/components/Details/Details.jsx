import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../Redux/Actions";
import NavBar from "../NavBar/NavBar";

const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const productById = useSelector((state) => state.productId);

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, [dispatch]);
  console.log(productById);
  return (
    <div className="bg-slate-100">
      <NavBar />
      {productById?.map(
        ({ _id, title, unit_price, picture, stock, description }) => {
          return (
            <div className="flex justify-evenly min-h-[84.5vh] items-center">
              <img
                className="rounded-xl max-h-[26rem] "
                src={picture}
                alt="img"
              />
              <div className="border-solid border-[1px] rounded-lg h-96 w-96 flex flex-col p-4">
                <h1 className="p-4 pb-2 text-2xl font-semibold">{title}</h1>
                <hr />
                <span className="p-2 text-xl text-orange-500 font-bold justify-end flex">$ {unit_price},00</span>
                <hr />
                <p className="pt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum cumque blanditiis quaerat, impedit alias nostrum, sint tempora unde vel similique, ipsa error harum illo at recusandae quidem! Enim, voluptate lo </p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Details;
