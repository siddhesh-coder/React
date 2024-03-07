import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Minus, Plus, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { FOOD_MENU } from "../../utils/constants";
import { removeItem } from "../../utils/Store/cartSlice";
import { EMPTY_CART } from "../../utils/constants";
import { clearCart } from "../../utils/Store/cartSlice";
import { handleOpenCart } from "../../utils/Store/toggleCartSlice";
import { incrementItem } from "../../utils/Store/cartSlice";
import { decrementItem } from "../../utils/Store/cartSlice";

export default function FoodCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.totalPrice);
  const openCart = useSelector((store) => store.openCart.open);

  const handleRemoveItem = (id, price) => {
    dispatch(removeItem({ id: id, price: price }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleOpen = () => {
    dispatch(handleOpenCart(false));
  };

  const handleIncrement = (id, price) => {
    dispatch(incrementItem({id: id, price: price}));
  };

  const handleDecrement = (id, price) => {
    dispatch(decrementItem({id: id, price: price}));
  };

  return (
    <Transition.Root show={openCart} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={handleOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-opacity-50 bg-slate-100" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                  <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Cart
                        </Dialog.Title>
                        <div className="flex items-center ml-3 h-7">
                          <button
                            type="button"
                            className="relative p-2 -m-2 text-gray-400 hover:text-gray-500"
                            onClick={() => handleOpen()}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <X className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      {cartItems.length === 0 ? (
                        <img
                          src={EMPTY_CART}
                          alt="emptycart"
                          className="relative top-40"
                        />
                      ) : (
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cartItems.map((product) => (
                                <li key={product?.id} className="flex py-6">
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
                                        <p className="ml-4">
                                          ₹{product?.price}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex items-end justify-between flex-1 text-sm">
                                      <div className="flex items-center justify-center">
                                        <Minus
                                          className="w-4 cursor-pointer hover:text-gray-700"
                                          onClick={() =>
                                            handleDecrement(product?.id, product?.price)
                                          }
                                        />
                                        <p className="mx-2 text-gray-500">
                                          Qty {product?.qty}
                                        </p>
                                        <Plus
                                          className="w-4 cursor-pointer hover:text-gray-700"
                                          onClick={() =>
                                            handleIncrement(product?.id, product?.price)
                                          }
                                        />
                                      </div>
                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                          onClick={() =>
                                            handleRemoveItem(
                                              product?.id,
                                              product?.price
                                            )
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
                      )}
                    </div>

                    {cartItems.length === 0 ? null : (
                      <button
                        type="button"
                        onClick={handleClearCart}
                        className="flex items-center justify-center w-40 px-6 py-2 mt-4 mb-4 ml-6 text-base font-medium text-white transition-all bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-900"
                      >
                        Clear Cart
                      </button>
                    )}

                    {cartItems.length === 0 ? null : (
                      <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>₹{totalPrice}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Delivery charges and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900"
                          >
                            Checkout
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
