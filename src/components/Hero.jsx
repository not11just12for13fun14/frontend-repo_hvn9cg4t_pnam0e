import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(253,244,215,0.6),transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-[120rem] -translate-x-1/2 rounded-full bg-gradient-to-t from-amber-100/60 via-rose-50/40 to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm tracking-widest text-amber-700/80"
        >
          Jaya’s Space — where work meets quiet clarity
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-4xl font-light leading-tight text-neutral-900 sm:text-5xl md:text-6xl"
        >
          A calm, spacious coworking sanctuary
          <span className="block text-neutral-600">for focused creativity and new beginnings.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600"
        >
          Inspired by Vastu principles, our environment balances energy, light, and flow — helping you feel grounded, spacious, and ready to create.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-amber-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Book a Visit
          </a>
          <a
            href="#story"
            className="rounded-full px-6 py-3 text-sm font-medium text-amber-800 hover:text-amber-900"
          >
            Our Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
