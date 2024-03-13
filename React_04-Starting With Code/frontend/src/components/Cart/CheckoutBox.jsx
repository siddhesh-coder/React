import React from "react";
import { Link } from "react-router-dom";
import checkout from "../../utils/checkout";

const CheckoutBox = ({totalPrice}) => {
  return (
    <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>₹{Number(totalPrice.toFixed(2))}</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">
        Delivery charges and taxes calculated at checkout.
      </p>
      <div className="mt-6">
        <Link
          onClick={() => checkout(totalPrice)}
          className="flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CheckoutBox;
