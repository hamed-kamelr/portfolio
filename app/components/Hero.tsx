'use client'

import { useState, useEffect } from 'react'

const roles = [
  'AI Engineer',
  'IT Specialist',
  'AI & Automation Enthusiast',
  'Cloud Solutions Expert',
  'Data Analytics Expert',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]

    if (typing) {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 60)
        return () => clearTimeout(timeout)
      } else {
        const pause = setTimeout(() => setTyping(false), 2200)
        return () => clearTimeout(pause)
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 35)
        return () => clearTimeout(timeout)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Mesh Gradient Background */}
      <div className="mesh-bg" />
      <div className="grain-overlay" />

      {/* Animated Orbs */}
      <div className="orb orb-teal w-[600px] h-[600px] top-[-10%] left-[-15%]" />
      <div className="orb orb-pink w-[500px] h-[500px] top-[20%] right-[-10%]" />
      <div className="orb orb-purple w-[350px] h-[350px] bottom-[5%] left-[30%]" />
      <div className="orb orb-teal w-[280px] h-[280px] bottom-[15%] right-[15%]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24 pb-32">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#0d9488] to-[#ec4899] p-[3px] shadow-[0_0_40px_rgba(13,148,136,0.3),0_0_80px_rgba(236,72,153,0.15)]">
            <div className="w-full h-full rounded-full bg-[#0e0a1a] flex items-center justify-center text-3xl font-heading font-bold text-white">
              HKR
            </div>
          </div>
        </div>

        {/* Greeting */}
        <p className="text-[#9a8fb8] text-sm uppercase tracking-[0.2em] font-medium mb-4">
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl leading-[1.05] mb-4">
          <span className="text-white">Hamed </span>
          <span className="gradient-text">Kamel Rahimi</span>
        </h1>

        {/* Typing Role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <p className="text-xl sm:text-2xl font-heading font-semibold text-[#0d9488]">
            {displayed}
            <span className="cursor" />
          </p>
        </div>

        {/* Tagline */}
        <p className="max-w-[500px] mx-auto text-[#9a8fb8] text-base leading-relaxed mb-10">
          Bridging enterprise IT infrastructure and cutting-edge AI — from cloud
          orchestration to deep learning models, I build solutions that{' '}
          <span className="text-[#e8e0f0] font-medium">actually work</span>.
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/hamed-kamelr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/hamedkamel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#7a6f96]">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div
          className="w-px h-10 bg-gradient-to-b from-[#0d9488] to-transparent"
          style={{ animation: 'scroll-bounce 2s ease-in-out infinite' }}
        />
      </div>
    </section>
  )
}
