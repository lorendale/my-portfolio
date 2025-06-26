"use client";

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white/50 dark:bg-purple-darkest/50 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading gradient-text mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-DEFAULT to-purple-bright mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white/90 dark:bg-purple-darker/90 rounded-lg p-6 shadow-md border border-purple-light/30 dark:border-purple-dark/30">
              <h3 className="text-xl font-semibold text-purple-DEFAULT dark:text-purple-light mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-light/30 dark:bg-purple-dark/30 flex items-center justify-center text-purple-DEFAULT dark:text-purple-light shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-DEFAULT dark:text-purple-light">Email</h4>
                    <a
                      href="mailto:aleligayloren@gmail.com"
                      className="text-muted-foreground hover:text-purple-bright dark:hover:text-purple-light transition-colors"
                    >
                      aleligayloren@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-light/30 dark:bg-purple-dark/30 flex items-center justify-center text-purple-DEFAULT dark:text-purple-light shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-DEFAULT dark:text-purple-light">Phone</h4>
                    <a
                      href="tel:+639948696394"
                      className="text-muted-foreground hover:text-purple-bright dark:hover:text-purple-light transition-colors"
                    >
                      +63 994 869 6394
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-light/30 dark:bg-purple-dark/30 flex items-center justify-center text-purple-DEFAULT dark:text-purple-light shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-DEFAULT dark:text-purple-light">Location</h4>
                    <p className="text-muted-foreground">Cabuyao, Laguna, Philippines</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-purple-DEFAULT dark:text-purple-light mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/lorendale"
                    className="w-10 h-10 rounded-full bg-purple-light/30 dark:bg-purple-dark/30 flex items-center justify-center text-purple-DEFAULT dark:text-purple-light hover:bg-purple-DEFAULT hover:text-white dark:hover:bg-purple-light dark:hover:text-purple-darkest transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/loren-dale-aleligay-1a69a2346/"
                    className="w-10 h-10 rounded-full bg-purple-light/30 dark:bg-purple-dark/30 flex items-center justify-center text-purple-DEFAULT dark:text-purple-light hover:bg-purple-DEFAULT hover:text-white dark:hover:bg-purple-light dark:hover:text-purple-darkest transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/90 dark:bg-purple-darker/90 rounded-lg p-6 shadow-md border border-purple-light/30 dark:border-purple-dark/30">
              <h3 className="text-xl font-semibold text-purple-DEFAULT dark:text-purple-light mb-6">
                Send Me a Message
              </h3>

              {submitted ? (
                <motion.div
                  className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-300 rounded-lg p-4 mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm">I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-purple-DEFAULT dark:text-purple-light">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`border-purple-light/30 dark:border-purple-dark/30 focus-visible:ring-purple-DEFAULT ${
                        formErrors.name ? "border-red-500 dark:border-red-500" : ""
                      }`}
                    />
                    {formErrors.name && <p className="text-xs text-red-500 mt-1">{formErrors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-purple-DEFAULT dark:text-purple-light">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`border-purple-light/30 dark:border-purple-dark/30 focus-visible:ring-purple-DEFAULT ${
                        formErrors.email ? "border-red-500 dark:border-red-500" : ""
                      }`}
                    />
                    {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-purple-DEFAULT dark:text-purple-light">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className={`border-purple-light/30 dark:border-purple-dark/30 focus-visible:ring-purple-DEFAULT ${
                      formErrors.subject ? "border-red-500 dark:border-red-500" : ""
                    }`}
                  />
                  {formErrors.subject && <p className="text-xs text-red-500 mt-1">{formErrors.subject}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-purple-DEFAULT dark:text-purple-light">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to discuss a project..."
                    rows={5}
                    className={`border-purple-light/30 dark:border-purple-dark/30 focus-visible:ring-purple-DEFAULT ${
                      formErrors.message ? "border-red-500 dark:border-red-500" : ""
                    }`}
                  />
                  {formErrors.message && <p className="text-xs text-red-500 mt-1">{formErrors.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-DEFAULT hover:bg-purple-bright text-white flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
