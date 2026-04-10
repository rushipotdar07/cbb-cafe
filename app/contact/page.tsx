import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="pt-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">Contact Us</h1>
        <p className="text-zinc-400 text-xl tracking-tight max-w-2xl">
          We would drastically love to hear from you. Drop us a line regarding partnerships, wholesale, or experiences.
        </p>
      </div>
      <ContactSection />
    </main>
  );
}
