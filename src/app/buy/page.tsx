"use client";
import { useCart } from "@/context/CartContext";

export default function BuyPage() {
  const { cart } = useCart();

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-20">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item: any, i: number) => (
            <div
              key={i}
              className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-4"
            >
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-16 h-16" />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-400">{item.price}</p>
                </div>
              </div>
              <p className="font-bold">{item.price}</p>
            </div>
          ))}

         
          <button className="w-full mt-8 px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg text-lg font-semibold shadow-lg transition">
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
}
