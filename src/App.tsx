import React, { useState } from 'react';

// Types
interface Planet {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Mission {
  id: string;
  title: string;
  date: string;
  patchUrl: string;
}

// Data Mock
const PLANETS_DATA: Planet[] = [
  {
    id: 'earth',
    name: 'EARTH',
    subtitle: 'PLANET',
    description: 'Learn more about this fascinating miracle that we call our home, Planet Earth. Course enrollment starts today. Early Bird tickets typically last a week, don\'t miss out!',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'mars',
    name: 'MARS',
    subtitle: 'PLANET',
    description: 'Mars is the fourth planet from the Sun. Earth\'s axis of rotation is tilted, producing seasons. Explore our future second home and its terraforming potential.',
    image: 'https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?q=80&w=1000&auto=format&fit=crop'
  }
];

const FEATURED_PLANETS = [
  { name: 'MERCURY', image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=150&auto=format&fit=crop' },
  { name: 'VENUS', image: 'https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=150&auto=format&fit=crop' },
  { name: 'JUPITER', image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=150&auto=format&fit=crop' },
  { name: 'SATURN', image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=150&auto=format&fit=crop' },
];

const COURSES_DATA: Course[] = [
  { id: '1', title: 'Aeno Navigation', description: 'Master deep space trajectory, celestial orbits, and interstellar navigation fundamentals.', image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&auto=format&fit=crop' },
  { id: '2', title: 'Ring of Saturn & Study in Gas Giants', description: 'Comprehensive study of Saturnian ring structures and planetary gas dynamics.', image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&auto=format&fit=crop' },
  { id: '3', title: 'Saturn Studies & Science', description: 'An in-depth analysis of atmospheric compositions and satellite moon systems.', image: 'https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=400&auto=format&fit=crop' },
  { id: '4', title: 'Saturn Planets & Exoplanets', description: 'Discover exoplanetary atmospheres and habits in neighboring solar systems.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop' },
  { id: '5', title: 'Deep Space Speciation & Galaxy Studies', description: 'Exploring galactic evolution, dark matter mapping, and deep ocean worlds.', image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=400&auto=format&fit=crop' },
];

const MISSIONS_DATA: Mission[] = [
  { id: '1', title: 'Artemis II Launch', date: 'Jan 1, 2025', patchUrl: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=100&auto=format&fit=crop' },
  { id: '2', title: 'Europa Clipper Probe', date: 'Apr 2, 2025', patchUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=100&auto=format&fit=crop' },
  { id: '3', title: 'Saturn Moon Mission', date: 'Jun 5, 2025', patchUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&auto=format&fit=crop' },
  { id: '4', title: 'Mars Surface Rover', date: 'Oct 3, 2025', patchUrl: 'https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=100&auto=format&fit=crop' },
];

export const App: React.FC = () => {
  const [activePlanetIndex, setActivePlanetIndex] = useState<number>(0);
  const currentPlanet = PLANETS_DATA[activePlanetIndex];

  const handleNextPlanet = () => {
    setActivePlanetIndex((prev) => (prev + 1) % PLANETS_DATA.length);
  };

  const handlePrevPlanet = () => {
    setActivePlanetIndex((prev) => (prev - 1 + PLANETS_DATA.length) % PLANETS_DATA.length);
  };

  return (
    <div className="min-h-screen bg-purple-radial text-slate-100 flex flex-col justify-between selection:bg-purple-500 selection:text-white">
      
      {/* 1. NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0b0818]/70 border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-widest text-cyan-400 font-serif">spaceedu</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#planets" className="hover:text-cyan-400 transition-colors">Planets</a>
            <a href="#trailer" className="hover:text-cyan-400 transition-colors">Trailer</a>
            <a href="#tickets" className="hover:text-cyan-400 transition-colors">Tickets</a>
            <a href="#blog" className="hover:text-cyan-400 transition-colors">Blog</a>
          </nav>

          <button className="bg-slate-100 hover:bg-white text-slate-900 px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 glow-purple">
            Enroll
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="planets" className="relative min-h-screen pt-28 pb-12 flex flex-col justify-between items-center px-4 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto z-10 mt-6">
          <p className="text-cyan-400 tracking-[0.3em] text-xs font-semibold mb-2 uppercase">
            {currentPlanet.subtitle}
          </p>
          <h1 className="text-6xl md:text-8xl font-serif tracking-wider font-normal mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
            {currentPlanet.name}
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {currentPlanet.description}
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="bg-slate-100 text-slate-900 hover:bg-cyan-400 transition-all duration-300 px-8 py-3 rounded-full font-semibold text-sm glow-cyan">
              GET STARTED
            </button>
          </div>
        </div>

        {/* Planet Banner Central */}
        <div className="relative w-full max-w-5xl my-8 flex items-center justify-between z-10">
          <button 
            onClick={handlePrevPlanet} 
            className="flex items-center gap-2 text-xs tracking-widest text-slate-400 hover:text-white transition-colors uppercase p-4"
          >
            ‹ VENUS
          </button>

          {/* Central Animated Planet */}
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] my-[-30px]">
            <img 
              src={currentPlanet.image} 
              alt={currentPlanet.name} 
              className="w-full h-full object-cover rounded-full glow-planet animate-float"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/20 rounded-full pointer-events-none">
              <span className="text-xs tracking-widest text-slate-300 uppercase font-light">
                Explore Our Home. Join The Adventure.
              </span>
            </div>
          </div>

          <button 
            onClick={handleNextPlanet} 
            className="flex items-center gap-2 text-xs tracking-widest text-slate-400 hover:text-white transition-colors uppercase p-4"
          >
            MARS ›
          </button>
        </div>

        <div className="z-10 text-center flex flex-col items-center gap-2">
          <button className="bg-slate-100 text-slate-900 px-6 py-2 rounded-full font-semibold text-xs glow-purple">
            GET STARTED
          </button>
          <span className="text-slate-500 animate-bounce mt-2 text-lg">↓</span>
        </div>
      </section>

      {/* 3. FEATURED PLANETS */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full border-t border-purple-900/30">
        <h2 className="text-center text-xs tracking-[0.3em] font-semibold text-cyan-400 mb-12 uppercase">
          FEATURED PLANETS
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {FEATURED_PLANETS.map((planet, index) => (
            <div 
              key={index} 
              className="bg-purple-950/20 border border-purple-800/30 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <img 
                src={planet.image} 
                alt={planet.name} 
                className="w-20 h-20 mx-auto rounded-full object-cover mb-4 group-hover:scale-105 transition-transform duration-300" 
              />
              <h3 className="font-serif tracking-wider text-base mb-1">{planet.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-950/30 border border-purple-800/30 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
          <img 
            src="https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=400&auto=format&fit=crop" 
            alt="Mars Detail" 
            className="w-48 h-48 rounded-full object-cover glow-purple"
          />
          <div>
            <h3 className="text-2xl font-serif text-slate-100 mb-2">MARS</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Mars is the fourth planet from the Sun. Earth's axis of rotation is tilted with respect to its orbital plane, producing seasons on Earth. The gravitational interaction between Earth and the Moon causes tides, stabilizes Earth's orientation on its axis, and gradually slows its rotation.
            </p>
          </div>
        </div>
      </section>

      {/* 4. COURSE CATALOG */}
      <section id="trailer" className="py-20 px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-center text-xs tracking-[0.3em] font-semibold text-cyan-400 mb-12 uppercase">
          COURSE CATALOG
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES_DATA.map((course) => (
            <div 
              key={course.id} 
              className="bg-[#120b29] border border-purple-900/40 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <img src={course.image} alt={course.title} className="h-44 w-full object-cover" />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-base mb-2 text-slate-200">{course.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{course.description}</p>
                </div>
                <button className="bg-purple-900/40 hover:bg-purple-800/60 border border-purple-700/50 py-2.5 rounded-xl text-xs font-semibold text-cyan-300 transition-colors w-full">
                  ENROLL NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MISSIONS TIMELINE */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full border-t border-purple-900/30">
        <h2 className="text-center text-xs tracking-[0.3em] font-semibold text-cyan-400 mb-12 uppercase">
          MISSIONS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {MISSIONS_DATA.map((mission) => (
            <div key={mission.id} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-purple-900/30 border border-purple-500/40 flex items-center justify-center p-2 mb-4 glow-purple">
                <img src={mission.patchUrl} alt={mission.title} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-xs text-cyan-400 font-mono mb-1">{mission.date}</span>
              <h4 className="font-semibold text-sm text-slate-200">{mission.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GLOBAL SPACE COMMUNITY */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-center text-xs tracking-[0.3em] font-semibold text-cyan-400 mb-12 uppercase">
          GLOBAL SPACE COMMUNITY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-950/20 border border-purple-800/30 rounded-2xl p-6">
            <h3 className="font-semibold text-sm mb-2 text-slate-200">Latest community star map updates</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Explore user-submitted astronomical observations updated live from observatories worldwide.
            </p>
            <a href="#" className="text-xs text-cyan-400 hover:underline">ENROLL NOW</a>
          </div>

          <div className="bg-purple-950/20 border border-purple-800/30 rounded-2xl p-6">
            <h3 className="font-semibold text-sm mb-2 text-slate-200">New galaxy accent design challenge winner</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Congratulations to our community UI designers for creating stunning space visualization interfaces.
            </p>
            <a href="#" className="text-xs text-cyan-400 hover:underline">ENROLL NOW</a>
          </div>

          <div className="bg-purple-950/20 border border-purple-800/30 rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold tracking-wider text-cyan-400">🌐 LIVE NETWORK MAP</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              50,000+ active students collaborating across 120 countries.
            </p>
          </div>
        </div>
      </section>

      {/* 7. PRE-FOOTER */}
      <section id="blog" className="py-20 px-6 max-w-4xl mx-auto text-center w-full border-t border-purple-900/30">
        <h2 className="text-2xl md:text-3xl font-serif mb-3 tracking-wider">STAY INFORMED</h2>
        <p className="text-slate-400 text-xs md:text-sm mb-8">
          Explore planet discovery news, weekly astronomical research updates, and course announcements.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-10">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-purple-950/50 border border-purple-800/40 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-cyan-400 flex-1 text-slate-200 placeholder-slate-500"
          />
          <button type="submit" className="bg-slate-100 hover:bg-white text-slate-900 font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300 flex items-center justify-center gap-2 shrink-0">
            <span>Subscribe</span>
            <span>➔</span>
          </button>
        </form>

        <blockquote className="italic text-slate-400 text-xs md:text-sm max-w-lg mx-auto">
          "The universe is a place of boundless opportunity and fascination."
        </blockquote>
      </section>

      {/* 8. FOOTER */}
      <footer className="border-t border-purple-900/40 py-10 px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-serif text-slate-300 font-bold text-base tracking-wider">spaceedu</span>
            <p>© {new Date().getFullYear()} SpaceEdu Co., Ltd. All rights reserved.</p>
          </div>

          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;