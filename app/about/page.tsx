import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">About Us</h1>
        <p className="text-zinc-400 text-xl tracking-tight max-w-2xl mb-16">
          Learn about our story, our passion for precision roasting, and our journey to perfect the cold brew.
        </p>
      </div>
      <AboutSection />
    </main>
  );
}
