export default function Offerings() {
  return (
    <section id="offerings" className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Workspaces that breathe</h2>
        <p className="mt-5 text-neutral-600 leading-relaxed">Choose the setting that matches your flow. Every area is bathed in warm light with generous spacing and acoustic softness — designed for clarity and comfort.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-neutral-900">Open Desks</h3>
          <p className="text-neutral-700">Ambient, minimal, and flexible seating with mindful separation for focus.</p>
          <p className="text-sm text-neutral-500">Day passes and monthly plans available.</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-neutral-900">Private Cabins</h3>
          <p className="text-neutral-700">Quiet, dedicated spaces aligned for deep work and small teams.</p>
          <p className="text-sm text-neutral-500">Sound-softened, naturally lit, ergonomically arranged.</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-neutral-900">Meeting Nooks</h3>
          <p className="text-neutral-700">Intimate spaces for collaboration, workshops, and reflective dialogue.</p>
          <p className="text-sm text-neutral-500">Available by the hour with hosting support.</p>
        </div>
      </div>
    </section>
  );
}
