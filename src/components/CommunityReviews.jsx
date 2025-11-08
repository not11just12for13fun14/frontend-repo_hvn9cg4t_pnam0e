import { Star } from 'lucide-react';

export default function CommunityReviews() {
  return (
    <section id="community" className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Community energy, thoughtfully held</h2>
        <p className="mt-5 text-neutral-600 leading-relaxed">
          Our members describe Jaya’s Space as serene, welcoming, and inspiring. We’re grateful for their words — and for the collaborations that begin here.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        <div className="flex flex-wrap items-center gap-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
          ))}
          <span className="ml-2 text-sm text-neutral-600">4.9 on Google (mentions of calm atmosphere & focus)</span>
        </div>
        <div className="text-neutral-700 leading-relaxed">
          “Light-filled rooms, a gentle hush, and a feeling of shared purpose. I get more done here — and feel better doing it.”
        </div>
        <div className="text-neutral-700 leading-relaxed">
          “Thoughtful layout and energy. Meetings flow, ideas land, and the day feels balanced.”
        </div>
      </div>
    </section>
  );
}
