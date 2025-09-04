import { motion, Variants, AnimatePresence } from "framer-motion"
import { Heart, Lightbulb, Target, Handshake, TrendingUp, X, CheckCircle, ArrowRight, Users, Star, Award } from "lucide-react"
import { useState } from "react"

export default function Values() {
  const [selectedValue, setSelectedValue] = useState(null)

  const values = [
    {
      icon: Heart,
      title: "Intégrité",
      description: "Nous agissons avec honnêteté et transparence dans toutes nos collaborations.",
      gradient: "from-amber-600 to-yellow-500",
      details: {
        overview: "L'intégrité est le fondement de notre approche professionnelle. Nous construisons des relations durables basées sur la confiance mutuelle, la transparence totale et l'honnêteté dans toutes nos interactions.",
        applications: [
          "Communication transparente sur les délais et budgets",
          "Respect strict de la confidentialité des données clients",
          "Conseils objectifs même si non favorables à court terme",
          "Facturation claire et détaillée sans frais cachés",
          "Reconnaissance ouverte de nos limites et domaines d'expertise",
          "Engagement de qualité sans compromis"
        ],
        benefits: [
          "Confiance renforcée dans la relation client-partenaire",
          "Projets menés dans la sérénité et la transparence",
          "Conseils stratégiques en toute objectivité",
          "Pérennité des collaborations sur le long terme"
        ],
        examples: [
          "Audit honnête de vos processus actuels avant proposition",
          "Recommandation d'solutions open-source quand appropriées",
          "Communication proactive des difficultés rencontrées"
        ]
      }
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous restons à l'avant-garde des technologies et méthodes pour vous offrir des solutions durables et efficaces.",
      gradient: "from-yellow-500 to-amber-600",
      details: {
        overview: "L'innovation technologique et méthodologique est dans notre ADN. Nous investissons continuellement dans la recherche, la formation et l'expérimentation pour vous apporter les solutions les plus avancées et performantes du marché.",
        applications: [
          "Veille technologique permanente sur les outils émergents",
          "Expérimentation proactive des nouvelles technologies",
          "Adaptation des méthodes agiles aux projets data",
          "Intégration d'IA et machine learning de pointe",
          "Approches créatives pour résoudre des défis complexes",
          "Formation continue de nos équipes aux dernières innovations"
        ],
        benefits: [
          "Accès aux technologies les plus récentes et performantes",
          "Avantage concurrentiel grâce à l'innovation",
          "Solutions créatives pour des problèmes complexes",
          "Évolution constante vers l'excellence technologique"
        ],
        examples: [
          "Implémentation de Microsoft Fabric dès sa sortie",
          "Utilisation d'IA générative pour optimiser vos processus",
          "Développement de solutions sur mesure avec les derniers frameworks"
        ]
      }
    },
    {
      icon: Target,
      title: "Engagement",
      description: "Chaque mission est une priorité. Nous nous impliquons pleinement pour la réussite de vos projets.",
      gradient: "from-green-700 to-green-600",
      details: {
        overview: "Notre engagement va au-delà de la simple prestation de service. Nous nous investissons personnellement dans chaque projet, considérant votre succès comme le nôtre. Cette implication totale garantit des résultats exceptionnels.",
        applications: [
          "Équipes dédiées pour chaque projet majeur",
          "Suivi personnalisé et régulier des avancées",
          "Adaptabilité face aux changements de périmètre",
          "Support proactif et réactif en toutes circonstances",
          "Formation approfondie de vos équipes internes",
          "Accompagnement post-livraison pour assurer l'adoption"
        ],
        benefits: [
          "Projets menés avec passion et détermination",
          "Résultats dépassant souvent les attentes initiales",
          "Réactivité maximale face aux urgences",
          "Transfert de compétences pour votre autonomie"
        ],
        examples: [
          "Disponibilité étendue lors des phases critiques",
          "Formation personnalisée de vos utilisateurs finaux",
          "Support d'urgence en cas de problème critique"
        ]
      }
    },
    {
      icon: Handshake,
      title: "Proximité humaine",
      description: "La relation humaine est au cœur de notre démarche : écoute, disponibilité, confiance.",
      gradient: "from-green-600 to-emerald-500",
      details: {
        overview: "Nous privilégions l'approche humaine dans toutes nos interactions. Chaque client est unique et mérite une attention personnalisée. Notre proximité facilite la communication, renforce la collaboration et assure des projets réussis.",
        applications: [
          "Points de contact réguliers et personnalisés",
          "Écoute active pour comprendre vos enjeux métiers",
          "Adaptation de notre communication à votre culture d'entreprise",
          "Disponibilité pour répondre à vos questions",
          "Ateliers collaboratifs pour co-construire les solutions",
          "Relation de confiance sur le long terme"
        ],
        benefits: [
          "Communication fluide et sans malentendu",
          "Solutions parfaitement adaptées à votre contexte",
          "Collaboration efficace et agréable",
          "Partenariat durable et évolutif"
        ],
        examples: [
          "Sessions de travail en présentiel ou visioconférence selon vos besoins",
          "Points d'étape hebdomadaires avec vos équipes",
          "Accompagnement personnalisé de vos utilisateurs clés"
        ]
      }
    },
    {
      icon: TrendingUp,
      title: "Impact durable",
      description: "Nous visons des solutions qui créent de la valeur sur le long terme, pour vos équipes et votre activité.",
      gradient: "from-amber-700 to-yellow-600",
      details: {
        overview: "Notre vision s'étend bien au-delà de la livraison immédiate. Nous concevons des solutions évolutives, maintenables et génératrices de valeur continue. Chaque projet est pensé pour accompagner votre croissance future.",
        applications: [
          "Architecture évolutive pour supporter la croissance",
          "Formation approfondie pour l'autonomie de vos équipes",
          "Documentation complète pour faciliter la maintenance",
          "Stratégie de gouvernance des données pérenne",
          "Mesure continue de la valeur créée",
          "Plans d'évolution à moyen et long terme"
        ],
        benefits: [
          "ROI croissant dans la durée",
          "Indépendance technique progressive de vos équipes",
          "Solutions qui s'adaptent à vos évolutions",
          "Création de valeur mesurable et continue"
        ],
        examples: [
          "Plateformes data évolutives accompagnant votre croissance",
          "Formation certifiante de vos équipes internes",
          "Stratégies data alignées sur votre roadmap business"
        ]
      }
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

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  }

  const handleValueClick = (value) => {
    setSelectedValue(value)
  }

  const closeModal = () => {
    setSelectedValue(null)
  }

  return (
    <>
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Les principes qui guident nos actions et notre relation avec nos clients
            </p>
            <p className="text-sm text-gray-400 italic">
              Cliquez sur chaque valeur pour découvrir comment nous l'appliquons concrètement
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
                    className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-yellow-500/30 h-full cursor-pointer relative overflow-hidden"
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.2 },
                    }}
                    onClick={() => handleValueClick(value)}
                  >
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>

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
                      className="text-xl font-semibold mb-4 pr-8"
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
                    
                    <div className="mt-4 text-sm text-yellow-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Voir comment nous l'appliquons →
                    </div>
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

      {/* Modal */}
      <AnimatePresence>
        {selectedValue && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-8">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedValue.gradient} rounded-xl flex items-center justify-center mr-4`}>
                    <selectedValue.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedValue.title}</h2>
                    <p className="text-gray-600">{selectedValue.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Star className="h-5 w-5 mr-2 text-yellow-600" />
                      Vue d'ensemble
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedValue.details.overview}
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Applications concrètes
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {selectedValue.details.applications.map((application, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-amber-600" />
                      Bénéfices pour vous
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {selectedValue.details.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <TrendingUp className="h-4 w-4 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-green-700" />
                      Exemples pratiques
                    </h3>
                    <ul className="space-y-2">
                      {selectedValue.details.examples.map((example, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-700 rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-gray-600 italic">"{example}"</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}