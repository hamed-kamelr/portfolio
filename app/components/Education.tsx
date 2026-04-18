'use client'

import { useEffect, useRef } from 'react'

const education = [
  {
    school: 'University of Southern Queensland',
    degree: 'Master of Data Science',
    period: 'Feb 2022 – Jan 2024',
    detail: 'Thesis: Deep Learning for Alzheimer\'s Prediction (98% accuracy)',
  },
  {
    school: 'Northeastern University',
    degree: "Master's in Analytics",
    period: 'Sep 2021 – Dec 2021',
    detail: 'Advanced analytics and quantitative methods',
  },
  {
    school: 'Islamic Azad University (IAU)',
    degree: 'MBA International Business',
    period: '2014 – 2016',
    detail: 'Published research on SME entrepreneurial skills',
  },
  {
    school: 'ITI Istanbul',
    degree: 'CELTA Certification',
    period: '2017',
    detail: 'Certificate in English Language Teaching to Adults',
  },
]

const certifications = [
  { name: 'Power BI Data Analyst', code: 'PL-300', org: 'Microsoft' },
  { name: 'Azure Fundamentals', code: 'AZ-900', org: 'Microsoft' },
  { name: 'Power BI Cert Prep Series I–III', code: '', org: 'Microsoft Learn' },
  { name: 'Deep Learning Specialisation', code: '', org: 'USQ Research' },
]

export default function Education() {
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
    <section id="education" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label reveal inline-flex">
            <span>◈</span> Education
          </div>
          <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl text-white mt-2 mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        {/* Education Cards - 2 column grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {education.map((edu, i) => (
            <div
              key={i}
              className="reveal glass-card p-7 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="font-heading font-bold text-white text-lg mb-1">{edu.degree}</h3>
              <p className="text-[#ec4899] font-medium text-sm mb-2">{edu.school}</p>
              <p className="text-[#0d9488] text-xs font-semibold mb-3">{edu.period}</p>
              <p className="text-[#9a8fb8] text-sm leading-relaxed">{edu.detail}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-10">
          <h3 className="reveal font-heading font-bold text-2xl text-white mb-2">
            Certifications & <span className="gradient-text">Credentials</span>
          </h3>
        </div>

        <div className="reveal grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="glass-card px-6 py-4 flex items-center gap-4 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(13,148,136,0.1)] flex items-center justify-center text-[#0d9488] shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-sm text-white">
                  {cert.name}
                  {cert.code && <span className="text-[#0d9488] ml-2">({cert.code})</span>}
                </div>
                <div className="text-xs text-[#7a6f96]">{cert.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
