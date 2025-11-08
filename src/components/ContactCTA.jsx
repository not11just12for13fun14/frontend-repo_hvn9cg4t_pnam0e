export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(253,244,215,0.6),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Visit, breathe, begin</h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Book a walkthrough or start your membership. Tell us what you’re creating — we’ll help you find the right flow.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = data.get('name');
              const email = data.get('email');
              const message = data.get('message');
              alert(`Thank you, ${name}! We’ll be in touch at ${email}.`);
              form.reset();
            }}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <input name="name" required placeholder="Your name" className="rounded-full border border-neutral-300/70 bg-white/70 px-5 py-3 text-neutral-800 placeholder-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-0 sm:col-span-1" />
            <input type="email" name="email" required placeholder="Email" className="rounded-full border border-neutral-300/70 bg-white/70 px-5 py-3 text-neutral-800 placeholder-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-0 sm:col-span-1" />
            <button type="submit" className="rounded-full bg-amber-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:col-span-1">
              Book a Visit
            </button>
            <textarea name="message" placeholder="Message (optional)" className="sm:col-span-3 mt-2 h-28 w-full rounded-3xl border border-neutral-300/70 bg-white/70 px-5 py-4 text-neutral-800 placeholder-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-0" />
          </form>
        </div>
      </div>
    </section>
  );
}
