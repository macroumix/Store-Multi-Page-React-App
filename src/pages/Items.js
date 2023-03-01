import { useLoaderData, json, /* defer */ } from "react-router-dom";
import React, { useState } from "react";
import Card from "../ui/Card";

import classes from "./Items.module.css";

const ItemsPage = () => {
  const itemsObject = useLoaderData();

  const [cart, setCart] = useState(
    itemsObject.reduce((prev, next) => {
      return { ...prev, [next.name]: 0 };
    }, {})
  );

  console.log("cart is", cart);

  const shoppingItemIncreaseHandler = (name) => {
    setCart((prev) => ({
      ...prev,
      [name]: prev[name] + 1 >= 0 ? prev[name] + 1 : 0,
    }));
  };

  const shoppingItemDecreaseHandler = (name) => {
    setCart((prev) => ({
      ...prev,
      [name]: prev[name] - 1 >= 0 ? prev[name] - 1 : 0,
    }));
  };

  const shoppingItemRemoveHandler = (name) => {
    setCart((prev) => ({
      ...prev,
      [name]: 0,
    }));
  };

  return (
    <>
      <div>ItemsPage</div>
      <div>
        {itemsObject.map((element) => (
          <Card>
            <ul key={element.id} className={classes.ul}>
              <li>{element.name}</li>
              <li className={classes["text-sm"]}>{element.description}</li>
            </ul>
            <img
              className={classes.img}
              src={element.image}
              alt={`${element.name}`}
            />
            <div className="checkout">
              <button
                onClick={() => shoppingItemIncreaseHandler(element.name)}
                className={classes.button}
              >
                +
              </button>
              <p>{cart[element.name]}</p>
              <button
                onClick={() => shoppingItemDecreaseHandler(element.name)}
                className={classes.button}
              >
                -
              </button>
            </div>
            <div>
              <button onClick={() => shoppingItemRemoveHandler(element.name)}>
                {/* <span className={classes["mdi mdi-delete mdi-24px"]}></span>
                <span className={classes["mdi mdi-delete-empty mdi-24px"]}></span> */}
                <span>Remove items</span>
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ItemsPage;

export async function loadItems() {
  const response = await fetch(
    "https://63f35928fe3b595e2ee007a6.mockapi.io/product"
  );
  if (!response.ok) {
    throw json(
      { message: "Could not fetch items." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}
/*   
  export function loader() {
    return defer({
      events: loadEvents(),
    });
  } */
