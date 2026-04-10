export default function OrderPage() {
  const catalog = [
    { name: "Original Black - 12 Pack", price: "$48.00" },
    { name: "Vanilla Bean - 12 Pack", price: "$52.00" },
    { name: "Nitro Oat - 12 Pack", price: "$58.00" },
    { name: "The Sampler Case", price: "$55.00" },
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen bg-black text-white px-6">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Secure Checkout</h1>
        <p className="text-zinc-400 text-xl tracking-tight mb-16">
          Review your ultimate cold brew selections.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Checkout Info */}
          <div className="flex-1 space-y-6">
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold tracking-tighter mb-6">1. Shipping Details</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500" />
                <input type="text" placeholder="Address" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500" />
                <div className="flex gap-4">
                  <input type="text" placeholder="City" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500" />
                  <input type="text" placeholder="ZIP" className="w-1/3 bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500" />
                </div>
              </form>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl opacity-50 cursor-not-allowed">
              <h2 className="text-2xl font-bold tracking-tighter mb-2">2. Payment Method</h2>
              <p className="text-zinc-500 text-sm">Please finalize shipping details first.</p>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-96 bg-zinc-900 border border-zinc-800 p-8 rounded-2xl h-fit">
            <h2 className="text-2xl font-bold tracking-tighter mb-6">Your Cart</h2>
            <div className="space-y-4 mb-8">
              {catalog.map((item, i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b border-zinc-800 last:border-0 last:pb-0">
                  <div>
                    <p className="font-bold tracking-tight text-white">{item.name}</p>
                    <p className="text-zinc-500 text-sm">Qty: 1</p>
                  </div>
                  <p className="font-medium text-zinc-400">{item.price}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-4 border-t border-zinc-800 space-y-2 mb-8">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span>$213.00</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-white font-bold text-xl pt-4">
                <span>Total</span>
                <span>$213.00</span>
              </div>
            </div>

            <button className="w-full bg-white text-black py-4 rounded-xl font-bold tracking-tighter text-lg hover:bg-zinc-200 transition-colors shadow-xl">
              Place Premium Order
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
