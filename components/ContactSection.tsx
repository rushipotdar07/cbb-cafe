export default function ContactSection() {
  return (
    <section id="contact" className="bg-black w-full py-32 px-6 flex items-center justify-center border-t border-zinc-900 border-opacity-50">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center text-center">
        
        <div className="inline-block border border-zinc-800 bg-zinc-900/50 rounded-full px-4 py-1 mb-8">
          <span className="text-zinc-400 text-xs tracking-widest uppercase font-bold">Reach Out</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
          Experience the Chill.
        </h2>
        
        <p className="text-zinc-400 text-lg tracking-tight mb-12 max-w-xl">
          Interested in wholesale, partnerships, or just want to tell us how much our Cold Brew changed your mornings? Send us a message.
        </p>

        <form className="w-full space-y-6 text-left">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-2">
               <label htmlFor="name" className="text-white text-sm font-bold tracking-tight">Name</label>
               <input 
                 id="name"
                 type="text" 
                 placeholder="Jane Doe" 
                 className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
               />
            </div>
            <div className="flex-1 space-y-2">
               <label htmlFor="email" className="text-white text-sm font-bold tracking-tight">Email</label>
               <input 
                 id="email"
                 type="email" 
                 placeholder="jane@example.com" 
                 className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
               />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-white text-sm font-bold tracking-tight">Message</label>
            <textarea 
              id="message"
              rows={4}
              placeholder="Tell us everything..." 
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
            />
          </div>

          <button 
            type="button" 
            className="w-full bg-white text-black font-bold tracking-tighter text-lg py-4 rounded-xl hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
          >
            Send Transmission
          </button>
        </form>

      </div>
    </section>
  );
}
