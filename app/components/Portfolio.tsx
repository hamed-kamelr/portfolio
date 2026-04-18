'use client'

import { useEffect, useRef } from 'react'

type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  linkLabel?: string
}

const projects: Project[] = [
  {
    title: "Alzheimer's AI Prediction Model",
    description:
      'Deep learning model leveraging convolutional neural networks to classify Alzheimer\'s disease stages from MRI brain scans. Built as part of a USQ research thesis — achieved 98% accuracy.',
    tags: ['Python', 'TensorFlow', 'Keras', 'Computer Vision', 'Deep Learning'],
  },
  {
    title: 'AI Voice Agent System',
    description:
      'End-to-end voice agent powered by LLMs and RAG architecture. Integrates with external APIs and Webhooks to handle dynamic conversational flows for enterprise automation.',
    tags: ['LLMs', 'RAG', 'Voice AI', 'APIs', 'Webhooks', 'Python'],
  },
  {
    title: 'Power BI Call Centre Dashboard',
    description:
      'Interactive Power BI reporting suite tracking call centre KPIs — including AHT, FCR, SLA adherence and agent performance — with advanced DAX calculations.',
    tags: ['Power BI', 'DAX', 'KPI Analysis', 'Data Modelling'],
  },
  {
    title: 'DocChat — AI Document Assistant',
    description:
      'RAG chatbot that answers questions about PDFs, CSVs, and images using hybrid search. Built with Azure AI Search, GPT-4o, Document Intelligence, and Streamlit.',
    tags: ['Python', 'RAG', 'Azure OpenAI', 'GPT-4o', 'Streamlit'],
    link: 'https://huggingface.co/spaces/hamed-kamelrh/doc-chat',
    linkLabel: 'Live Demo',
  },
  {
    title: 'Enterprise IT Infrastructure',
    description:
      'Designed and maintained enterprise Microsoft 365 environments — including Azure AD, Intune MDM, Exchange Online, and SharePoint — for education and government.',
    tags: ['Azure AD', 'Intune', 'Exchange Online', 'SharePoint', 'M365'],
  },
  {
    title: 'Kanban Board',
    description:
      'Single-board drag-and-drop task manager built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth DnD interactions and a clean UI.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    link: 'https://github.com/hamed-kamelr/kanban',
    linkLabel: 'GitHub',
  },
]

export default function Portfolio() {
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
    <section id="portfolio" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label reveal inline-flex">
            <span>◈</span> Projects
          </div>
          <h2 className="reveal font-heading font-bold text-4xl sm:text-5xl text-white mt-2 mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="reveal text-[#9a8fb8] max-w-xl mx-auto text-base">
            A selection of projects spanning AI research, data engineering, enterprise IT, and
            automation — each built to solve real problems.
          </p>
        </div>

        {/* Vertical list of project cards */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="reveal glass-card p-8 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <h3 className="font-heading font-bold text-white text-lg mb-3">
                {project.title}
              </h3>
              <p className="text-[#c4b5d4] text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] text-[#9a8fb8] border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-[#0d9488] hover:text-white transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {project.linkLabel}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
