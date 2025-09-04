import type React from "react"
import { useState } from "react"
import { motion, Variants} from "framer-motion"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        })
      }, 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const formVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden"
    >
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contactez-nous</h2>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Prêt à transformer vos données en avantage concurrentiel ? Discutons de votre projet !
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Téléphone", value: "+225 0757041368", href: "tel:+2250757041368" },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "affiansergekonin@gmail.com",
                    href: "mailto:affiansergekonin@gmail.com",
                  },
                  { icon: MapPin, label: "Localisation", value: "Côte d'Ivoire", href: null },
                ].map((contact, index) => (
                  <motion.div
                    key={`${index}-${contact?.label}`}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <contact.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-yellow-200 font-medium">{contact.label}</p>
                      {contact.href ? (
                        <a href={contact.href} className="text-white text-lg hover:text-yellow-300 transition-colors">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white text-lg">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-green-800/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">Pourquoi nous choisir ?</h4>
              <ul className="space-y-3 text-yellow-100">
                {[
                  "Expertise reconnue en data science et BI",
                  "Accompagnement personnalisé et agile",
                  "Formation et transfert de compétences",
                  "Solutions durables et performantes",
                ].map((benefit, index) => (
                  <motion.li
                    key={`${index}-${benefit}`}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-yellow-400/20"
            variants={formVariants}
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>
                <div className="space-y-6">
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-yellow-200 mb-2">
                        Nom *
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg text-white placeholder-yellow-300 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                        placeholder="Votre nom"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-yellow-200 mb-2">
                        Email *
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg text-white placeholder-yellow-300 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                        placeholder="votre@email.com"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-yellow-200 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg text-white placeholder-yellow-300 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-yellow-200 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg text-white placeholder-yellow-300 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                        placeholder="Votre numéro"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-yellow-200 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                    >
                      <option value="" className="text-gray-900">
                        Sélectionnez un sujet
                      </option>
                      <option value="data-engineering" className="text-gray-900">
                        Data Engineering & Big Data
                      </option>
                      <option value="data-science" className="text-gray-900">
                        Data Science & IA
                      </option>
                      <option value="business-intelligence" className="text-gray-900">
                        Business Intelligence
                      </option>
                      <option value="formation" className="text-gray-900">
                        Formation
                      </option>
                      <option value="cloud" className="text-gray-900">
                        Cloud & Architecture
                      </option>
                      <option value="autre" className="text-gray-900">
                        Autre
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-yellow-200 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg text-white placeholder-yellow-300 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors resize-none"
                      placeholder="Décrivez votre projet ou vos besoins..."
                    ></textarea>
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Envoyer le message
                  </motion.button>
                </div>
              </>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <CheckCircle className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Message envoyé avec succès !</h3>
                <p className="text-yellow-100">
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}