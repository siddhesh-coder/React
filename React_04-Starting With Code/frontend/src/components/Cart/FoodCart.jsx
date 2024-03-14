import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { EMPTY_CART } from "../../utils/constants";
import { clearCart } from "../../utils/Store/cartSlice";
import { handleOpenCart } from "../../utils/Store/toggleCartSlice";
import CartItems from "./CartItems";
import CheckoutBox from "./CheckoutBox";
import useNotify from '../../hooks/useNotify.js'

export default function FoodCart() {
  const notify = useNotify();
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.totalPrice);
  const openCart = useSelector((store) => store.openCart.open);

  const handleClearCart = () => {
    dispatch(clearCart());
    notify({message: "Cart cleared"});
  };

  const handleShowCart = () => {
    dispatch(handleOpenCart(false));
  };

  return (
    <Transition.Root show={openCart} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={handleShowCart}>
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
                            data-testid="toggle-cart"
                            className="relative p-2 -m-2 text-gray-400 hover:text-gray-500"
                            onClick={() => handleShowCart()}
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
                        <CartItems cartItems={cartItems}/>
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
                      <CheckoutBox totalPrice={totalPrice} />
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
