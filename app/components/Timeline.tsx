'use client'

import { useEffect, useRef } from 'react'

type TimelineItem = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  tags: string[]
}

const experiences: TimelineItem[] = [
  {
    company: 'Dept of Transport and Main Roads',
    role: 'IT Support Analyst',
    period: 'Feb 2025 – Present',
    location: 'Brisbane, QLD',
    bullets: [
      'Providing Tier 2 IT support across enterprise systems and infrastructure',
      'Managing Microsoft Intune, Azure AD and endpoint configuration',
      'Driving service improvement initiatives within Agile delivery frameworks',
    ],
    tags: ['Intune', 'Azure AD', 'M365', 'Agile'],
  },
  {
    company: 'Tech Mahindra',
    role: 'ICT Solution Analyst',
    period: 'Jul 2024 – Jan 2025',
    location: 'Brisbane, QLD',
    bullets: [
      'Analysed ICT requirements and designed tailored solutions for enterprise clients',
      'Delivered integration and automation solutions using APIs and cloud services',
      'Collaborated with cross-functional teams to ensure on-time delivery',
    ],
    tags: ['Solution Design', 'APIs', 'Cloud', 'Enterprise IT'],
  },
  {
    company: 'University of Southern Queensland',
    role: 'ICT Student Services Officer',
    period: 'Aug 2022 – Apr 2024',
    location: 'Brisbane, QLD',
    bullets: [
      'Troubleshot Azure AD, SharePoint, and Office 365 issues for students and staff',
      'Managed Oracle Service Cloud ticketing and escalation workflows',
      'Supported identity management and access provisioning across university systems',
    ],
    tags: ['Azure AD', 'SharePoint', 'Oracle Service Cloud', 'O365'],
  },
  {
    company: 'University of Southern Queensland',
    role: 'Student Researcher',
    period: 'Jan 2023 – Nov 2023',
    location: 'Brisbane, QLD',
    bullets: [
      'Conducted thesis research on deep learning for Alzheimer\'s disease prediction',
      'Built and trained convolutional neural networks on MRI imaging datasets',
      'Achieved 98% classification accuracy — published as academic research',
    ],
    tags: ['Deep Learning', 'Computer Vision', 'Python', 'TensorFlow'],
  },
  {
    company: 'University of Southern Queensland',
    role: 'Student Success Advisor',
    period: 'Jan 2023 – Dec 2023',
    location: 'Brisbane, QLD',
    bullets: [
      'Provided academic advising and student success coaching to enrolled students',
      'Developed support frameworks to improve retention and academic outcomes',
      'Coordinated with academic and administrative teams on student progression',
    ],
    tags: ['Student Services', 'Academic Advising', 'Communication'],
  },
  {
    company: 'Taban Infrastructure Co.',
    role: 'Business Development Associate',
    period: 'Feb 2021 – Jan 2022',
    location: 'Remote',
    bullets: [
      'Researched market KPIs and competitive landscape to support growth strategy',
      'Produced detailed reports and documentation for senior leadership',
      'Supported business development activities across target verticals',
    ],
    tags: ['Business Development', 'KPI Research', 'Reporting'],
  },
]

export default function Timeline() {
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
    <section id="journey" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label reveal inline-flex">
            <span>◈</span> Experience
          </div>
          <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl text-white mt-2 mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="reveal text-[#9a8fb8] max-w-xl mx-auto text-base">
            A career spanning enterprise IT, applied AI research, and data analytics across government,
            tech, and academia.
          </p>
        </div>

        {/* Timeline - Left aligned vertical */}
        <div className="relative pl-8">
          {/* Vertical gradient line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0d9488] via-[#ec4899] to-[#7c3aed]" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="reveal relative"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-8 top-6 w-[14px] h-[14px] rounded-full bg-[#0d9488] ring-4 ring-[#0e0a1a] shadow-[0_0_12px_rgba(13,148,136,0.6)]" />

                {/* Card */}
                <div className="glass-card p-8 hover:-translate-y-1 transition-all duration-300">
                  {/* Date */}
                  <div className="text-[#0d9488] text-sm font-semibold mb-2">{exp.period}</div>

                  {/* Role & Company */}
                  <h3 className="font-heading font-bold text-white text-lg mb-1">{exp.role}</h3>
                  <p className="text-[#ec4899] font-medium text-sm mb-4">{exp.company}</p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-[#c4b5d4] text-sm leading-relaxed">
                        <span className="text-[#0d9488] mt-0.5 shrink-0">–</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-[rgba(13,148,136,0.06)] text-[#0d9488] border border-[rgba(13,148,136,0.2)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
