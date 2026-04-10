import React from "react";
import Image from "next/image";

const products = [
  { name: "Artisan Wood-Fired Pizza", description: "Hand-tossed sourdough crust, San Marzano tomatoes, fresh mozzarella.", price: "₹1,290", image: "/images/premium_artisan_pizza_1775799658872.png" },
  { name: "Gourmet Wagyu Burger", description: "Aged cheddar, caramelized onions, house sauce on an artisan brioche bun.", price: "₹1,490", image: "/images/gourmet_cafe_burger_1775799681048.png" },
  { name: "Truffle Loaded Fries", description: "Crispy fries tossed in white truffle oil, parmesan, and fresh herbs.", price: "₹750", image: "/images/loaded_cafe_fries_1775799859401.png" },
  { name: "Signature Craft Latte", description: "Velvety microfoam, perfectly extracted espresso, aesthetic latte art.", price: "₹490", image: "/images/signature_craft_latte_1775799798620.png" },
  { name: "Fresh Viennoiserie", description: "Daily baked flaky croissants and pain au chocolat.", price: "₹390", image: "/images/fresh_artisan_pastry_1775799822920.png" },
  { name: "Iced Berry Refresher", description: "Vibrant and refreshing fruit fusion, perfectly chilled.", price: "₹590", image: "/images/refreshing_fruity_beverage_1775799841306.png" },
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-black w-full py-32 px-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        
        <div className="mb-16 text-center space-y-4">
           <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
             Freshly Made.
           </h2>
           <p className="text-zinc-400 text-lg tracking-tight max-w-lg mx-auto">
             Pair your brew with our artisan food menu, prepared fresh daily.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {products.map((p, i) => (
            <div key={i} className="group relative bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 hover:bg-zinc-900/80 transition-colors cursor-pointer overflow-hidden flex flex-col h-[400px]">
              
              <Image src={p.image} alt={p.name} fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl mix-blend-lighten" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />
              
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 text-white">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>

              <div className="mt-auto space-y-2 relative z-10">
                <span className="text-white font-bold tracking-tight text-xl">{p.name}</span>
                <p className="text-zinc-400 text-sm">{p.description}</p>
                <div className="text-zinc-300 font-bold tracking-tighter pt-4">{p.price}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
