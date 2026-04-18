'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: '2+', label: 'Years in Industry' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '5+', label: 'Certifications' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label reveal inline-flex">
            <span>◈</span> About Me
          </div>
          <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl text-white mt-2 mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Text in glass card */}
          <div className="reveal glass-card p-8">
            <p className="text-[#c4b5d4] leading-relaxed mb-5 text-base">
              I&apos;m an <span className="text-[#e8e0f0] font-medium">AI Engineer and IT Specialist</span> based
              in Brisbane, currently with the Department of Transport and Main Roads, where I support
              enterprise infrastructure and drive continuous improvements in IT service delivery.
            </p>
            <p className="text-[#c4b5d4] leading-relaxed mb-5 text-base">
              My background spans cloud infrastructure, data science, and applied AI. I hold a{' '}
              <span className="text-[#e8e0f0] font-medium">Master of Data Science from USQ</span> and
              have built production AI systems — including a RAG chatbot powered by Azure OpenAI &amp; GPT-4o,
              voice agents, and a deep learning model for Alzheimer&apos;s prediction achieving{' '}
              <span className="text-[#ec4899] font-semibold">98% accuracy</span>.
            </p>
            <p className="text-[#c4b5d4] leading-relaxed text-base">
              I thrive at the intersection of structured IT operations and exploratory AI experimentation
              — bringing rigour, creativity, and a results-first mindset to every project.
            </p>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="reveal glass-card p-6 text-center hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="stat-number text-4xl mb-2">{s.value}</div>
                <div className="text-[#9a8fb8] text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
