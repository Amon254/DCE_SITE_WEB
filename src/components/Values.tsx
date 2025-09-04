import { motion, Variants } from "framer-motion"
import { Heart, Lightbulb, Target, Handshake, TrendingUp } from "lucide-react"

export default function Values() {
  const values = [
    {
      icon: Heart,
      title: "Intégrité",
      description: "Nous agissons avec honnêteté et transparence dans toutes nos collaborations.",
      gradient: "from-amber-600 to-yellow-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Nous restons à l'avant-garde des technologies et méthodes pour vous offrir des solutions durables et efficaces.",
      gradient: "from-yellow-500 to-amber-600",
    },
    {
      icon: Target,
      title: "Engagement",
      description: "Chaque mission est une priorité. Nous nous impliquons pleinement pour la réussite de vos projets.",
      gradient: "from-green-700 to-green-600",
    },
    {
      icon: Handshake,
      title: "Proximité humaine",
      description: "La relation humaine est au cœur de notre démarche : écoute, disponibilité, confiance.",
      gradient: "from-green-600 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Impact durable",
      description:
        "Nous visons des solutions qui créent de la valeur sur le long terme, pour vos équipes et votre activité.",
      gradient: "from-amber-700 to-yellow-600",
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="valeurs" className="py-28 bg-gray-900 text-white relative overflow-hidden">
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-56 h-56 bg-green-600/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nos valeurs</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Les principes qui guident nos actions et notre relation avec nos clients
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div key={`${index}-${value?.title}`} className="group relative" variants={cardVariants}>
                <motion.div
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-yellow-500/30 h-full"
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  >
                    {value.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="bg-gradient-to-r from-green-800 to-green-700 rounded-2xl p-8 border border-yellow-500/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">Notre mission</h3>
            <p className="text-xl text-green-100 leading-relaxed max-w-4xl mx-auto">
              Transformer vos données en valeur, améliorer vos prises de décisions et vous propulser vers la
              performance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}