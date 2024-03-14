import React from "react";
import { Minus, Plus } from "lucide-react";
import { incrementItem } from "../../utils/Store/cartSlice";
import { decrementItem } from "../../utils/Store/cartSlice";
import { FOOD_MENU } from "../../utils/constants";
import { removeItem } from "../../utils/Store/cartSlice";
import { useDispatch } from "react-redux";
import useNotify from "../../hooks/useNotify";

const CartItems = ({ cartItems }) => {
  const dispatch = useDispatch();
  const notify = useNotify();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
    notify({ message: "Item removed" });
  };

  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  console.log(cartItems);
  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {cartItems.map((product) => (
            <li data-testid="item-test" key={product?.id} className="flex py-6">
              <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                <img
                  src={FOOD_MENU + product?.img}
                  alt={product?.img}
                  className="object-cover object-center w-full h-full"
                />
              </div>

              <div className="flex flex-col flex-1 ml-4">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <p>{product?.name}</p>
                    </h3>
                    <p className="ml-4">₹{product?.price}</p>
                  </div>
                </div>
                <div className="flex items-end justify-between flex-1 text-sm">
                  <div className="flex items-center justify-center">
                    <Minus
                      data-testid="minus"
                      className="w-4 cursor-pointer hover:text-gray-700"
                      onClick={() =>
                        handleDecrement(product?.id, product?.price)
                      }
                    />
                    <p className="mx-2 text-gray-500">Qty {product?.qty}</p>
                    <Plus
                      data-testid="plus"
                      className="w-4 cursor-pointer hover:text-gray-700"
                      onClick={() =>
                        handleIncrement(product?.id, product?.price)
                      }
                    />
                  </div>
                  <div className="flex">
                    <button
                      data-testid="remove"
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() =>
                        handleRemoveItem(product?.id, product?.price)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartItems;
