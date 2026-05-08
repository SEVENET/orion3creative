// OrionLanding.jsx
// ORION 3 Creative — Premium immersive landing page.
// Stack: React + Tailwind CSS + Framer Motion
//
// Install:
//   npm i framer-motion
//   (Tailwind already configured in your project)
//
// Drop this file into /src/components/ and render <OrionLanding /> in your app.
// Add the small CSS block at the bottom of this file to your global stylesheet,
// or paste it inside a <style> tag in your root layout.

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

/* ------------------------------------------------------------------ */
/* PRIMITIVES                                                          */
/* ------------------------------------------------------------------ */

const SecTag = ({ children }) => (
  <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-slate-400">{children}</div>
);

const Glass = ({ className = "", children, corners = false }) => (
  <div
    className={`relative bg-white/[0.04] border border-white/10 backdrop-blur-xl
                shadow-[0_30px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]
                ${className}`}
  >
    {corners && (
      <>
        <span className="absolute -top-px -left-px w-3.5 h-3.5 border-l border-t border-cyan-300/55" />
        <span className="absolute -bottom-px -right-px w-3.5 h-3.5 border-r border-b border-cyan-300/55" />
      </>
    )}
    {children}
  </div>
);

const Hotspot = ({ left, top }) => (
  <span
    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
    style={{ left, top }}
  >
    <span className="relative flex w-5 h-5 items-center justify-center">
      <span className="absolute inset-0 rounded-full bg-cyan-300 scale-50 shadow-[0_0_14px_#5cd0ff,0_0_30px_rgba(92,208,255,0.4)]" />
      <span className="absolute inset-0 rounded-full border border-cyan-300/60 animate-[orion-pulse_2.4s_ease-out_infinite]" />
    </span>
  </span>
);

const HudCorners = () => (
  <>
    <span className="absolute top-2.5 left-2.5  w-4 h-4 border-l border-t border-cyan-300/55 pointer-events-none" />
    <span className="absolute top-2.5 right-2.5 w-4 h-4 border-r border-t border-cyan-300/55 pointer-events-none" />
    <span className="absolute bottom-2.5 left-2.5  w-4 h-4 border-l border-b border-cyan-300/55 pointer-events-none" />
    <span className="absolute bottom-2.5 right-2.5 w-4 h-4 border-r border-b border-cyan-300/55 pointer-events-none" />
  </>
);

const NeonButton = ({ href = "#", children, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.2);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.2);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`relative inline-flex items-center gap-2.5 rounded-full
                  px-6 py-3.5 text-[14px] font-medium tracking-wide
                  bg-[#080c16]/70 text-cyan-50
                  border border-cyan-300/30
                  shadow-[0_0_0_1px_rgba(92,208,255,0.10),0_0_22px_rgba(92,208,255,0.18)]
                  hover:border-cyan-300/80 hover:shadow-[0_0_0_1px_rgba(92,208,255,0.5),0_0_38px_rgba(92,208,255,0.35)]
                  transition-[box-shadow,border-color] duration-300
                  backdrop-blur ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#5cd0ff]" />
      {children}
    </motion.a>
  );
};

const FrameImg = ({ src, alt, className = "", height = "h-[260px]", children }) => {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform =
      `perspective(1200px) rotateY(${x * 6}deg) rotateX(${y * -6}deg)`;
  };
  const onLeave = () => { ref.current.style.transform = ""; };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative rounded-2xl overflow-hidden border border-white/10
                  shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 ${className}`}
    >
      <img src={src} alt={alt} className={`w-full ${height} object-cover transition-transform duration-700 group-hover:scale-[1.06]`} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/30 to-transparent pointer-events-none" />
      <HudCorners />
      {children}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  const stageRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 80, damping: 14 });
  const smy = useSpring(my, { stiffness: 80, damping: 14 });

  const onMove = (e) => {
    const r = stageRef.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width  - 0.5) * 2);
    my.set(((e.clientY - r.top)  / r.height - 0.5) * 2);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  // Per-layer transforms
  const Layer = ({ depth = 1, className = "", children, ...rest }) => {
    const x = useTransform(smx, (v) => v * depth * -14);
    const y = useTransform(smy, (v) => v * depth * -14);
    const rotY = useTransform(smx, (v) => v * depth * -1.4);
    const rotX = useTransform(smy, (v) => v * depth *  1.4);
    return (
      <motion.div
        style={{ x, y, rotateY: rotY, rotateX: rotX, transformStyle: "preserve-3d" }}
        className={className}
        {...rest}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        ref={stageRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 grid lg:grid-cols-12 gap-10 items-center"
        style={{ perspective: 1400 }}
      >
        {/* LEFT */}
        <Layer depth={0.6} className="lg:col-span-6 relative z-20">
          <div className="flex items-center gap-3 mb-6">
            <SecTag>// 001 — Mixed Reality Studio</SecTag>
            <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/40 to-transparent" />
          </div>

          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-[Inter_Tight] font-light tracking-[-0.03em] leading-[0.95]
                       text-[44px] md:text-[64px] lg:text-[78px]
                       bg-clip-text text-transparent
                       bg-[linear-gradient(180deg,#fff_0%,#c9d6ea_60%,#7aa2ff_100%)]"
          >
            Transform Empty Spaces<br/>
            into <em className="not-italic text-cyan-100 [text-shadow:0_0_22px_rgba(92,208,255,0.55)]">Immersive</em> Experiences
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mt-7 max-w-xl text-white/70 text-[16px] md:text-[17px] leading-relaxed"
          >
            ORION 3 Creative builds virtual staging, 360 tours, mixed reality
            presentations, 3D product experiences, and immersive real estate
            marketing — so buyers <span className="text-white">feel</span> a
            space before it exists.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <NeonButton href="#what">
              Start the Experience
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NeonButton>
            <a href="#estate" className="rounded-full px-5 py-3 border border-white/15 text-white/80 hover:text-white hover:border-white/35 hover:bg-white/5 transition text-[13px]">
              Explore the Showroom
            </a>
          </motion.div>
        </Layer>

        {/* RIGHT — 3D scene */}
        <div className="lg:col-span-6 relative h-[560px] md:h-[640px]">
          {/* Orbit rings */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-cyan-300/20" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-cyan-300/15" />

          {/* Sphere (360 tour) */}
          <Layer depth={1.8} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
              className="orion-sphere w-full h-full rounded-full"
            />
            <div className="absolute -top-3 -left-3 px-2 py-1 bg-white/10 backdrop-blur rounded-md text-[10px] tracking-[0.2em] uppercase text-cyan-200 border border-cyan-300/30">
              360° Tour
            </div>
            <Hotspot left="30%" top="45%" />
            <Hotspot left="70%" top="35%" />
            <Hotspot left="55%" top="70%" />
          </Layer>

          {/* Staged room frame */}
          <Layer depth={2.2} className="absolute -left-4 top-10 w-[260px]">
            <FrameImg src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80" alt="" height="h-[170px]">
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase">
                <span className="text-cyan-200">Virtual Staging</span>
                <span className="text-white/60">04:21 m²</span>
              </div>
              <Hotspot left="25%" top="50%" />
              <Hotspot left="65%" top="62%" />
            </FrameImg>
          </Layer>

          {/* Product card */}
          <Layer depth={2.6} className="absolute right-0 top-2 w-[220px]">
            <FrameImg src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80" alt="" height="h-[150px]">
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/10 rounded text-[9px] tracking-[0.2em] uppercase text-cyan-200 border border-cyan-300/30">3D Asset</div>
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px]">
                <span className="text-white/80">Lounge · OAK</span>
                <span className="text-cyan-200">View in Space</span>
              </div>
            </FrameImg>
          </Layer>

          {/* Floor plan */}
          <Layer depth={3} className="absolute -left-2 bottom-6 w-[230px]">
            <Glass className="rounded-2xl h-[150px]" corners>
              <svg viewBox="0 0 230 140" className="w-full h-full">
                <defs>
                  <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(92,208,255,.12)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect x="10" y="10" width="210" height="120" fill="url(#hatch)" stroke="rgba(92,208,255,.5)" strokeWidth="1" />
                <rect x="10" y="10" width="120" height="70" fill="none" stroke="rgba(92,208,255,.7)" />
                <rect x="130" y="10" width="90" height="120" fill="none" stroke="rgba(92,208,255,.7)" />
                <rect x="10" y="80" width="120" height="50" fill="none" stroke="rgba(92,208,255,.7)" />
                <circle cx="60" cy="40" r="3" fill="#5cd0ff" />
                <circle cx="170" cy="60" r="3" fill="#5cd0ff" />
                <circle cx="60" cy="105" r="3" fill="#5cd0ff" />
              </svg>
              <div className="absolute top-2 left-3 text-[10px] tracking-[0.2em] uppercase text-cyan-200">Floor Plan · A1</div>
            </Glass>
          </Layer>

          {/* XR headset */}
          <Layer depth={2.3} className="absolute right-2 bottom-4 w-[210px]">
            <Glass className="rounded-2xl p-4" corners>
              <svg viewBox="0 0 200 110" className="w-full h-[80px]">
                <defs>
                  <linearGradient id="xrg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#5cd0ff" stopOpacity=".7" />
                    <stop offset="100%" stopColor="#7aa2ff" stopOpacity=".25" />
                  </linearGradient>
                </defs>
                <path d="M20 40 Q100 10 180 40 L180 70 Q100 100 20 70 Z" fill="url(#xrg)" stroke="rgba(92,208,255,.7)" />
                <ellipse cx="68"  cy="55" rx="20" ry="12" fill="#02060e" stroke="rgba(255,255,255,.25)" />
                <ellipse cx="132" cy="55" rx="20" ry="12" fill="#02060e" stroke="rgba(255,255,255,.25)" />
              </svg>
              <div className="flex items-center justify-between mt-2 text-[10px] uppercase tracking-[0.22em]">
                <span className="text-white/70">Mixed Reality</span>
                <span className="text-cyan-200">Connected</span>
              </div>
            </Glass>
          </Layer>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION COMPONENTS                                                  */
/* ------------------------------------------------------------------ */

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 1.0, ease: [0.2, 0.8, 0.2, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

function WhatIsOrion() {
  return (
    <section id="what" className="relative py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <SecTag>// 002 — Platform</SecTag>
            <h2 className="mt-3 font-[Inter_Tight] font-light tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-[linear-gradient(180deg,#fff,#7aa2ff)]">
              What is <em className="not-italic text-cyan-100 [text-shadow:0_0_22px_rgba(92,208,255,0.55)]">ORION</em>?
            </h2>
            <p className="mt-6 text-white/70 text-lg max-w-md leading-relaxed">
              An immersive visual platform that turns properties, products, and spaces into
              interactive digital experiences — explored from any device, anywhere.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 max-w-md">
            {[
              ["REAL-TIME", "Render"],
              ["SPATIAL",   "3D Capture"],
              ["XR",        "VR · AR · MR"],
              ["CLOUD",     "Anywhere Access"],
            ].map(([k, v], i) => (
              <Reveal key={k} delay={0.1 + i * 0.08}>
                <Glass className="rounded-xl p-4">
                  <div className="text-cyan-300 font-mono text-[11px] tracking-widest">{k}</div>
                  <div className="text-white mt-1">{v}</div>
                </Glass>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7 relative h-[560px]">
          <FrameImg
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
            alt=""
            height="h-full"
            className="absolute inset-0"
          >
            <div className="absolute top-6 left-6 bg-white/10 rounded-md px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-cyan-200 border border-cyan-300/25">Live Scene · 4K</div>
            <Hotspot left="30%" top="45%" />
            <Hotspot left="60%" top="55%" />
            <Hotspot left="78%" top="40%" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">Project</div>
                <div className="text-2xl font-[Inter_Tight] text-white">Penthouse · Lisbon</div>
              </div>
              <div className="bg-white/10 rounded-md px-3 py-2 text-[10px] tracking-[0.2em] uppercase text-white/70">Walkthrough · 02:14</div>
            </div>
          </FrameImg>
        </Reveal>
      </div>
    </section>
  );
}

const REAL_ESTATE_SERVICES = [
  ["Virtual Staging",            "Photoreal furniture into empty properties — any style, any budget."],
  ["360° Virtual Tours",         "Immersive walkthroughs the moment a listing goes live."],
  ["Mixed Reality Walkthroughs", "Buyers explore the space wearing a headset — or on their phone."],
  ["Interactive Open Houses",    "Live remote sessions where everyone walks the same digital twin."],
  ["Marketing Presentations",    "Sales decks that move, breathe, and persuade in 3D."],
];

function RealEstate() {
  return (
    <section id="estate" className="relative py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SecTag>// 003 — Real Estate · Virtual Staging</SecTag>
          <h2 className="mt-3 font-[Inter_Tight] font-light tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl max-w-2xl bg-clip-text text-transparent bg-[linear-gradient(180deg,#fff,#7aa2ff)]">
            Sell the <em className="not-italic text-cyan-100">feeling</em>, not the floor plan.
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-7">
            <FrameImg
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
              alt=""
              height="h-[440px] md:h-[520px]"
            >
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-cyan-300/60 to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 rounded-full px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-cyan-200 border border-cyan-300/30">
                Empty → Staged
              </div>
              <Hotspot left="72%" top="55%" />
              <Hotspot left="84%" top="38%" />
              <Hotspot left="62%" top="75%" />
            </FrameImg>
          </Reveal>

          <div className="lg:col-span-5 grid gap-3">
            {REAL_ESTATE_SERVICES.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06}>
                <Glass className="rounded-2xl p-5 flex items-start gap-4" corners>
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-cyan-300 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#5cd0ff]" />
                  </div>
                  <div>
                    <div className="text-white">{t}</div>
                    <div className="text-white/55 text-sm">{d}</div>
                  </div>
                </Glass>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Commerce() {
  return (
    <section id="commerce" className="relative py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5 order-2 lg:order-1">
          <SecTag>// 004 — 3D Commerce</SecTag>
          <h2 className="mt-3 font-[Inter_Tight] font-light tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-[linear-gradient(180deg,#fff,#7aa2ff)]">
            Real products,<br/><em className="not-italic text-cyan-100">virtual shelves.</em>
          </h2>
          <p className="mt-6 text-white/70 max-w-md leading-relaxed">
            Scan furniture and products, drop them inside any virtual space, and connect
            them to e-commerce. New revenue, new sales channels, zero warehouse.
          </p>
          <ul className="mt-8 space-y-3 max-w-md">
            {["Scan real furniture into 3D digital twins",
              "Place products inside virtual rooms",
              "Connect to your e-commerce stack",
              "Earn commissions on every staged sale"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#5cd0ff]" />{t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7 order-1 lg:order-2 relative h-[500px] md:h-[580px]">
          <FrameImg
            src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1600&q=80"
            alt=""
            height="h-full"
            className="absolute inset-0"
          >
            <div className="orion-scanline" />
            <Glass className="absolute right-6 top-6 rounded-xl p-3 w-[210px]" corners>
              <div className="flex items-center justify-between">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cyan-200">3D Asset · 042</div>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#5cd0ff]" />
              </div>
              <div className="mt-1 font-[Inter_Tight] text-white text-lg">Atelier Lounge Chair</div>
              <div className="mt-3 flex items-center justify-between text-[11px]">
                <span className="text-white/60">€ 1,840</span>
                <span className="text-cyan-200">Buy · View in Space</span>
              </div>
            </Glass>
          </FrameImg>
        </Reveal>
      </div>
    </section>
  );
}

function Design() {
  return (
    <section id="design" className="relative py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SecTag>// 005 — Interior Design</SecTag>
          <h2 className="mt-3 font-[Inter_Tight] font-light tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl max-w-2xl bg-clip-text text-transparent bg-[linear-gradient(180deg,#fff,#7aa2ff)]">
            Architectural <em className="not-italic text-cyan-100">storytelling</em>, in motion.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <FrameImg src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80" alt="" height="h-[420px]">
              <div className="absolute top-4 left-4 bg-white/10 rounded-md px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase text-cyan-200 border border-cyan-300/30">Style · Scandi Minimal</div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="font-[Inter_Tight] text-white text-2xl">Casa Atrio</div>
                <div className="text-white/60 text-[11px] uppercase tracking-[0.2em]">Proposal · 02</div>
              </div>
            </FrameImg>
          </Reveal>
          <Reveal delay={0.1} className="col-span-6 md:col-span-5">
            <FrameImg src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80" alt="" height="h-[200px]" />
          </Reveal>
          <Reveal delay={0.15} className="col-span-6 md:col-span-5">
            <FrameImg src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80" alt="" height="h-[200px]" />
          </Reveal>
          {[
            ["01 · Brief",   "Architectural intent",   "We start from the project's voice — material, light, and rhythm."],
            ["02 · Build",   "3D scenes & materials",  "Photoreal real-time scenes, ready for VR, AR, or web."],
            ["03 · Present", "Interactive proposal",   "Clients walk the design, change palettes, and decide faster."],
          ].map(([k, t, d], i) => (
            <Reveal key={k} delay={0.1 + i * 0.08} className="col-span-12 md:col-span-4">
              <Glass className="rounded-2xl p-6" corners>
                <div className="text-cyan-300 text-[11px] tracking-[0.25em] uppercase">{k}</div>
                <div className="mt-2 text-white text-xl font-[Inter_Tight]">{t}</div>
                <p className="mt-2 text-white/60 text-sm">{d}</p>
              </Glass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  return (
    <section className="relative py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-7 relative h-[480px]">
          <FrameImg src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80" alt="" height="h-full" className="absolute inset-0">
            <div className="absolute top-5 left-5 bg-white/10 rounded-md px-3 py-2 text-[10px] tracking-[0.2em] uppercase text-emerald-300 shadow-[0_0_30px_rgba(120,255,200,0.12)]">
              Reusable Digital Assets
            </div>
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
              {[["−92%","Physical Staging"], ["∞","Reuse Cycles"], ["0","Transport"]].map(([n, l]) => (
                <Glass key={l} className="rounded-xl p-3">
                  <div className="font-[Inter_Tight] text-2xl text-white">{n}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-white/55">{l}</div>
                </Glass>
              ))}
            </div>
          </FrameImg>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-5">
          <SecTag>// 006 — Sustainability</SecTag>
          <h2 className="mt-3 font-[Inter_Tight] font-light tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-[linear-gradient(180deg,#fff,#7aa2ff)]">
            Less waste.<br/><em className="not-italic text-cyan-100">More wonder.</em>
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed max-w-md">
            ORION reduces waste by replacing unnecessary physical staging,
            transportation, and repeated production with reusable digital
            environments and 3D assets.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function WhyOrion() {
  const items = [
    ["01", "Emotional impact",     "Spaces that can be felt sell themselves."],
    ["02", "Better understanding", "Clients see exactly what they will get — no guesswork."],
    ["03", "Faster decisions",     "Shorter sales cycles, fewer revisions, sharper proposals."],
    ["04", "Stronger marketing",   "Premium content that stands out across every channel."],
    ["05", "New revenue streams",  "3D commerce turns assets into income for everyone involved."],
    ["06", "Less waste",           "Sustainable by design — reusable digital environments."],
  ];
  return (
    <section id="why" className="relative py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SecTag>// 007 — Why Orion</SecTag>
          <h2 className="mt-3 font-[Inter_Tight] font-light tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl max-w-3xl bg-clip-text text-transparent bg-[linear-gradient(180deg,#fff,#7aa2ff)]">
            The new language of <em className="not-italic text-cyan-100">space</em>.
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-4 md:gap-6">
          {items.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.06}>
              <Glass className="rounded-2xl p-6" corners>
                <div className="text-cyan-300 font-mono text-[11px] tracking-widest">{n}</div>
                <div className="mt-3 font-[Inter_Tight] text-white text-2xl">{t}</div>
                <p className="mt-2 text-white/60 text-sm">{d}</p>
              </Glass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-44">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-[700px] h-[700px] rounded-full pointer-events-none opacity-70"
             style={{ background: "radial-gradient(closest-side, rgba(92,208,255,0.18), transparent 70%)", filter: "blur(20px)" }} />
        <Reveal>
          <SecTag>// 008 — Contact</SecTag>
          <h2 className="mt-3 font-[Inter_Tight] font-light tracking-[-0.03em] text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-[linear-gradient(180deg,#fff,#7aa2ff)]">
            Let's build the next<br/><em className="not-italic text-cyan-100">immersive experience.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <NeonButton href="mailto:rudasestn@gmail.com">
            rudasestn@gmail.com
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NeonButton>
          <a href="mailto:rudasestn@gmail.com?subject=Orion%203%20Creative%20—%20Project%20Inquiry"
             className="rounded-full px-5 py-3 border border-white/15 text-white/80 hover:text-white hover:border-white/35 hover:bg-white/5 transition text-[13px]">
            Start a project
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* MAIN                                                                */
/* ------------------------------------------------------------------ */

export default function OrionLanding() {
  return (
    <main className="relative bg-[#05070d] text-white overflow-x-hidden font-[Inter,system-ui,sans-serif]">
      {/* Atmosphere */}
      <div className="orion-grid-floor" />
      <div className="orion-stars" />

      {/* Top nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <a href="#top" className="font-[Inter_Tight] text-[15px] tracking-[0.2em] uppercase">
            Orion <span className="text-cyan-300">3</span> Creative
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-white/70">
            <a href="#what">Platform</a>
            <a href="#estate">Real Estate</a>
            <a href="#commerce">3D Commerce</a>
            <a href="#design">Design</a>
            <a href="#why">Why Orion</a>
          </nav>
        </div>
      </header>

      <Hero />
      <WhatIsOrion />
      <RealEstate />
      <Commerce />
      <Design />
      <Sustainability />
      <WhyOrion />
      <Contact />

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/45">
          <span>ORION 3 Creative · Immersive Studio · © {new Date().getFullYear()}</span>
          <span className="font-mono tracking-widest text-white/35">v1.0 · BUILT WITH LIGHT</span>
        </div>
      </footer>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* GLOBAL CSS — Add the following to your global stylesheet (index.css)
   or paste inside a <style> tag at the root of your app.
   These provide the atmospheric background, sphere, scanline, and pulse.
   -----------------------------------------------------------------

  @keyframes orion-pulse {
    0%   { transform: scale(.4); opacity: .9; }
    100% { transform: scale(2.4); opacity: 0; }
  }

  .orion-grid-floor {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(92,208,255,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(92,208,255,0.06) 1px, transparent 1px);
    background-size: 60px 60px;
    transform: perspective(900px) rotateX(70deg) translateY(35vh);
    mask-image: radial-gradient(ellipse at center 30%, black 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse at center 30%, black 30%, transparent 75%);
    animation: orion-floor 18s linear infinite;
    opacity: .55;
  }
  @keyframes orion-floor {
    from { background-position: 0 0, 0 0; }
    to   { background-position: 0 60px, 60px 0; }
  }

  .orion-stars {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image:
      radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,.85), transparent 60%),
      radial-gradient(1px 1px at 28% 72%, rgba(255,255,255,.6),  transparent 60%),
      radial-gradient(1.5px 1.5px at 64% 22%, rgba(180,210,255,.8), transparent 60%),
      radial-gradient(1px 1px at 82% 64%, rgba(255,255,255,.65), transparent 60%),
      radial-gradient(1px 1px at 48% 38%, rgba(255,255,255,.55), transparent 60%),
      radial-gradient(1.2px 1.2px at 7% 88%, rgba(180,210,255,.9), transparent 60%);
  }

  .orion-sphere {
    background:
      radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 50%),
      conic-gradient(from 0deg, #0c1220, #0a1a2c, #0e2742, #0a1a2c, #0c1220);
    box-shadow:
      inset 0 0 60px rgba(92,208,255,0.18),
      inset 0 0 4px rgba(92,208,255,0.45),
      0 30px 80px rgba(0,0,0,0.6),
      0 0 60px rgba(92,208,255,0.12);
    position: relative; overflow: hidden;
  }
  .orion-sphere::before {
    content: ""; position: absolute; inset: 0; border-radius: 50%;
    background-image:
      repeating-linear-gradient(0deg,  rgba(92,208,255,0.18) 0 1px, transparent 1px 60px),
      repeating-linear-gradient(90deg, rgba(92,208,255,0.18) 0 1px, transparent 1px 60px);
    mask-image: radial-gradient(circle, black 35%, transparent 75%);
    -webkit-mask-image: radial-gradient(circle, black 35%, transparent 75%);
  }

  .orion-scanline {
    position: absolute; left: 0; right: 0; height: 100%; pointer-events: none;
    background: linear-gradient(180deg, transparent 0%, rgba(92,208,255,0.22) 50%, transparent 100%);
    mix-blend-mode: screen;
    animation: orion-scan 5s linear infinite;
  }
  @keyframes orion-scan {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
*/
