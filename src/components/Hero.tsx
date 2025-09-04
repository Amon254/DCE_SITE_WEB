import { ArrowRight } from "lucide-react"
import { motion, Variants } from "framer-motion"

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const statsVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24 md:pb-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          <span className="text-yellow-300">Data Conseil</span> Entreprises
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-yellow-100 mb-8 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Nous accompagnons les entreprises dans la valorisation stratégique de leurs données pour optimiser leurs
          performances et guider leurs décisions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.button
            onClick={scrollToServices}
            className="group bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir nos services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            className="group bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nous contacter
          </motion.button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.8,
              },
            },
          }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/30"
            variants={statsVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-2xl font-bold text-white mb-2">100%</div>
            <div className="text-yellow-200">Confidentialité</div>
          </motion.div>
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/30"
            variants={statsVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-2xl font-bold text-white mb-2">24/7</div>
            <div className="text-yellow-200">Support</div>
          </motion.div>
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/30"
            variants={statsVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-2xl font-bold text-white mb-2">+10</div>
            <div className="text-yellow-200">Technologies</div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-yellow-400/50 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}