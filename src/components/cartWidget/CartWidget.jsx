import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
function CartWidget() {
  const itemCount = 4;
  return (
    <div className="flex items-center">
    <ShoppingCartIcon className="w-8 mr-2 absolute" /> 
    <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold text-center relative bottom-3 left-5">{itemCount}</span>
  </div>
  );
}

export default CartWidget;
