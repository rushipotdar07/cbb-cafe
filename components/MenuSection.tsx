import React from "react";

const menuCategories = [
  {
    title: "Espresso & Coffee",
    items: [
      { name: "Double Espresso", price: "₹350", description: "Onyx blend, rich and vibrant." },
      { name: "Cappuccino", price: "₹450", description: "Espresso with perfectly textured microfoam." },
      { name: "Flat White", price: "₹390", description: "Smooth espresso with delicate steamed milk." },
      { name: "Signature Pour Over", price: "₹490", description: "Single-origin rotating selection." },
    ],
  },
  {
    title: "Cold Brew Specialties",
    items: [
      { name: "Nitro Cold Brew", price: "₹490", description: "Draft-poured, cascading texture." },
      { name: "Vanilla Bean Cold Brew", price: "₹550", description: "Madagascar vanilla bean syrup." },
      { name: "Kyoto Drip", price: "₹650", description: "18-hour slow ice drip cold brew." },
      { name: "Oat Milk Draft Latte", price: "₹590", description: "Cold brew and oat milk on tap." },
    ],
  },
  {
    title: "Food & Pastries",
    items: [
      { name: "Butter Croissant", price: "₹390", description: "Flaky, imported French butter." },
      { name: "Avocado Toast", price: "₹750", description: "Sourdough, chili flakes, microgreens." },
      { name: "Almond Biscotti", price: "₹290", description: "Perfect pairing for your espresso." },
      { name: "Lemon Loaf", price: "₹390", description: "Glazed lemon cake, baked fresh." },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="bg-black w-full py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
            The Cafe Menu
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl tracking-tight max-w-2xl mx-auto">
            Experience our curated selection of fine coffees and artisanal pastries, roasted and baked daily.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
          {menuCategories.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-2xl font-bold text-white tracking-tight border-b border-zinc-800 pb-4">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group">
                    <div className="flex items-end justify-between text-lg md:text-xl mb-1">
                      <span className="text-zinc-200 font-semibold tracking-tight">{item.name}</span>
                      <div className="flex-grow mx-4 border-b border-dotted border-zinc-700 opacity-50 relative top-[-6px]"></div>
                      <span className="text-white font-bold tracking-tighter">{item.price}</span>
                    </div>
                    <p className="text-zinc-500 text-sm tracking-tight">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
