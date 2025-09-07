"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white/5 p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-20" />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-500 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between mt-8">
            <button
              onClick={clearCart}
              className="px-6 py-2 bg-gray-700 rounded-lg"
            >
              Clear Cart
            </button>
            <Link href="/buy">
              <button className="px-6 py-2 bg-green-500 rounded-lg">
                Proceed to Buy
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
