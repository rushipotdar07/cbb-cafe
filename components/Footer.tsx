import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black w-full border-t border-zinc-900 border-opacity-50 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Brand Column */}
        <div className="flex flex-col max-w-xs">
          <Link href="/" className="text-white text-3xl font-bold tracking-tighter mb-4">
            COLD BREW BLISS.
          </Link>
          <p className="text-zinc-500 text-sm font-medium tracking-tight">
            The art of the perfect chill. Artisan-roasted, 18-hour steeped, crafted for the ultimate refreshment.
          </p>
        </div>

        {/* Links Grid */}
        <div className="flex gap-16">
          <div className="flex flex-col space-y-3">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-2">Explore</h4>
            <Link href="#experience" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-tight">The Experience</Link>
            <Link href="#about" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-tight">About Us</Link>
            <Link href="#contact" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-tight">Contact</Link>
            <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-tight">Find a Location</Link>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-2">Legal</h4>
            <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-tight">Privacy Policy</Link>
            <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-tight">Terms of Service</Link>
            <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-tight">Shipping Info</Link>
            <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-tight">Refunds</Link>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-900 border-opacity-50 flex flex-col md:flex-row items-center justify-between">
        <p className="text-zinc-600 text-sm font-medium tracking-tight">
          © {new Date().getFullYear()} Cold Brew Bliss. All rights reserved.
        </p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <Link href="#" className="text-zinc-500 hover:text-white transition-colors font-bold tracking-tight">IG</Link>
          <Link href="#" className="text-zinc-500 hover:text-white transition-colors font-bold tracking-tight">TW</Link>
          <Link href="#" className="text-zinc-500 hover:text-white transition-colors font-bold tracking-tight">FB</Link>
        </div>
      </div>
    </footer>
  );
}
