import Hero from './components/Hero';
import StoryVision from './components/StoryVision';
import Offerings from './components/Offerings';
import CommunityReviews from './components/CommunityReviews';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-end gap-2">
            <span className="text-xl font-semibold tracking-tight">Jaya’s Space</span>
            <span className="text-xs tracking-widest text-amber-700/80 uppercase">Coworking</span>
          </a>
          <nav className="hidden gap-6 text-sm text-neutral-700 sm:flex">
            <a href="#story" className="hover:text-neutral-900">Story</a>
            <a href="#offerings" className="hover:text-neutral-900">Workspaces</a>
            <a href="#community" className="hover:text-neutral-900">Community</a>
            <a href="#contact" className="hover:text-neutral-900">Visit</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <StoryVision />
        <Offerings />
        <CommunityReviews />
        <ContactCTA />
      </main>

      <footer className="border-t border-neutral-200/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Jaya’s Space — a calm coworking sanctuary.</p>
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="#contact" className="hover:text-neutral-900">Book a visit</a>
            <a href="#offerings" className="hover:text-neutral-900">Memberships</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
