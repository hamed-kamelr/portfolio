'use client'

import { useEffect, useRef } from 'react'

const categories = [
  {
    label: 'Cloud & Infrastructure',
    icon: '☁️',
    iconColor: 'bg-[rgba(13,148,136,0.15)] text-[#0d9488]',
    skills: [
      'Microsoft Azure',
      'Azure Active Directory',
      'Azure AI Services',
      'Microsoft Intune',
      'Microsoft Exchange',
      'SharePoint',
      'Microsoft 365',
      'Azure Blob Storage',
      'AZ-900',
    ],
  },
  {
    label: 'AI & Machine Learning',
    icon: '🤖',
    iconColor: 'bg-[rgba(236,72,153,0.15)] text-[#ec4899]',
    skills: [
      'LLMs',
      'RAG Architecture',
      'Azure OpenAI / GPT-4o',
      'Azure AI Search',
      'Document Intelligence',
      'Deep Learning',
      'Computer Vision',
      'Voice Agents',
      'Python',
      'TensorFlow / Keras',
      'Streamlit',
      'API Integration',
      'Webhooks',
    ],
  },
  {
    label: 'Data Analytics',
    icon: '📊',
    iconColor: 'bg-[rgba(124,58,237,0.15)] text-[#a78bfa]',
    skills: [
      'Power BI',
      'DAX',
      'Data Modelling',
      'KPI Analysis',
      'Data Pipelines',
      'Oracle Service Cloud',
      'Statistical Analysis',
    ],
  },
  {
    label: 'Development & IT Ops',
    icon: '⚙️',
    iconColor: 'bg-[rgba(251,146,60,0.15)] text-[#fb923c]',
    skills: [
      'IT Support',
      'Incident Management',
      'Agile / Scrum',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'WordPress',
      'Network Troubleshooting',
      'Project Management',
      'Requirements Analysis',
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label reveal inline-flex">
            <span>◈</span> Skills & Expertise
          </div>
          <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl text-white mt-2 mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="reveal text-[#9a8fb8] max-w-xl mx-auto text-base">
            A multi-disciplinary toolkit spanning cloud infrastructure, AI engineering, data analytics,
            and enterprise IT operations.
          </p>
        </div>

        {/* 2-column grid of skill cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="reveal glass-card p-7 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${cat.iconColor}`}>
                  {cat.icon}
                </div>
                <h3 className="font-heading font-semibold text-white text-base">{cat.label}</h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] text-[#c4b5d4] border border-white/[0.08] hover:border-[rgba(13,148,136,0.3)] hover:text-[#e8e0f0] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
