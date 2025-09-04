import { motion, Variants } from "framer-motion"
import { Shield, Users, Award, Clock, BookOpen } from "lucide-react"

export default function Engagements() {
  const engagements = [
    {
      icon: Shield,
      title: "Confidentialité absolue",
      description:
        "Toutes vos données sont traitées avec rigueur, dans le strict respect des normes de sécurité et de confidentialité.",
      color: "bg-red-500",
    },
    {
      icon: Users,
      title: "Accompagnement personnalisé",
      description:
        "Chaque projet bénéficie d'un suivi sur-mesure, avec une attention portée à vos objectifs métiers réels.",
      color: "bg-blue-500",
    },
    {
      icon: Award,
      title: "Excellence technique",
      description:
        "Nous utilisons les meilleures pratiques du marché et des outils de pointe pour garantir des livrables fiables et performants.",
      color: "bg-green-500",
    },
    {
      icon: Clock,
      title: "Respect des délais & agilité",
      description: "Notre approche est agile, rapide et orientée résultats, tout en respectant les délais convenus.",
      color: "bg-orange-500",
    },
    {
      icon: BookOpen,
      title: "Formation et transfert de compétences",
      description: "Nous formons vos équipes pour assurer l'autonomie et la pérennité de vos solutions.",
      color: "bg-purple-500",
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="engagements" className="py-28 bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nos engagements qualité</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des garanties solides pour votre tranquillité d'esprit et votre réussite
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {engagements.map((engagement, index) => {
            const IconComponent = engagement.icon
            return (
              <motion.div
                key={`${index}-${engagement?.title}`}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className={`w-12 h-12 ${engagement.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.6 },
                    }}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <motion.h3
                      className="text-xl font-semibold text-gray-900 mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      {engagement.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    >
                      {engagement.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
