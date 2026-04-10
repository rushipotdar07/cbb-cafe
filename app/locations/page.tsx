export default function LocationsPage() {
  const locations = [
    { city: "New York", address: "124 Roasters Ave, Brooklyn, NY 11201", hours: "7:00 AM - 7:00 PM", status: "Open Now" },
    { city: "Los Angeles", address: "899 Sunset Blvd, Silver Lake, CA 90026", hours: "6:00 AM - 8:00 PM", status: "Open Now" },
    { city: "Tokyo", address: "4-1-2 Shibuya, Tokyo 150-0002, Japan", hours: "8:00 AM - 10:00 PM", status: "Closing Soon" },
    { city: "London", address: "42 Shoreditch High St, London E1 6PG, UK", hours: "7:00 AM - 6:00 PM", status: "Closed" },
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen bg-black text-white px-6">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Find a Location</h1>
        <p className="text-zinc-400 text-xl tracking-tight max-w-2xl mb-16">
          Experience our ultra premium cold brew at our flagship cafes globally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold tracking-tighter">{loc.city}</h3>
                <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${loc.status === 'Closed' ? 'bg-red-900/40 text-red-400' : loc.status === 'Closing Soon' ? 'bg-yellow-900/40 text-yellow-500' : 'bg-green-900/40 text-green-400'}`}>
                  {loc.status}
                </span>
              </div>
              <p className="text-zinc-400 font-medium mb-2">{loc.address}</p>
              <p className="text-zinc-500 text-sm">{loc.hours}</p>
              
              <button className="mt-8 text-sm font-bold tracking-tight text-white border-b border-white pb-1 hover:text-zinc-300 transition-colors">
                Get Directions &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
