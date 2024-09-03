'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = React.useState('')

  React.useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [text])

  return <span>{displayText}</span>
}

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-6"
  >
    <h3 className="text-xl font-semibold mb-3 text-cyan-400">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {skills.map((skill) => (
        <motion.div
          key={skill}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-700 p-2 rounded-lg text-center text-sm"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </motion.div>
)

export default function PersonalLandingPage() {
  const skillCategories = [
    {
      title: "Soft Skills",
      skills: ["Communication", "Teamwork", "Problem Solving", "Adaptability", "Time Management", "Leadership"]
    },
    {
      title: "Languages",
      skills: ["English (Native)", "Spanish (Fluent)", "French (Intermediate)", "German (Basic)"]
    },
    {
      title: "Technologies",
      skills: ["React", "Node.js", "Docker", "AWS", "Git", "CI/CD", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex flex-col justify-center items-center text-center p-4"
      >
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-cyan-400">Carlos</span>
        </h1>
        <h2 className="text-2xl mb-8">
          <TypewriterEffect text="A Data Software Engineer" />
        </h2>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-cyan-500 text-gray-900 px-6 py-3 rounded-full font-semibold cursor-pointer"
        >
          Get in touch
        </motion.div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-300">
          I'm a passionate full-stack developer with a keen interest in creating elegant, efficient, and user-friendly
          applications. With a strong foundation in both front-end and back-end technologies, I strive to build
          seamless digital experiences that make a difference.
        </p>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4 bg-gray-800"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="max-w-2xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-6 p-4 bg-gray-700 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Senior Developer at Tech Co.</h3>
            <p className="text-gray-300">2020 - Present</p>
            <p className="mt-2">Led development of multiple high-impact projects, improving overall efficiency by 30%.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-6 p-4 bg-gray-700 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer at StartUp Inc.</h3>
            <p className="text-gray-300">2018 - 2020</p>
            <p className="mt-2">Developed and maintained core product features, contributing to a 50% growth in user base.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="max-w-3xl mx-auto">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} title={category.title} skills={category.skills} />
          ))}
        </div>
      </motion.section>

      {/* Social Links */}
      <footer className="py-10 px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#2ecc71' }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#3498db' }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#1da1f2' }}
          >
            <FaTwitter size={24} />
          </motion.a>
        </div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}