import { motion, Variants, AnimatePresence } from "framer-motion"
import { Shield, Users, Award, Clock, BookOpen, X, CheckCircle, ArrowRight, Lock, Star, Zap, Target } from "lucide-react"
import { useState } from "react"

export default function Engagements() {
  const [selectedEngagement, setSelectedEngagement] = useState(null)

  const engagements = [
    {
      icon: Shield,
      title: "Confidentialité absolue",
      description: "Toutes vos données sont traitées avec rigueur, dans le strict respect des normes de sécurité et de confidentialité.",
      color: "bg-amber-600",
      details: {
        overview: "La sécurité et la confidentialité de vos données sont notre priorité absolue. Nous mettons en place des protocoles stricts et des technologies de pointe pour garantir la protection maximale de vos informations sensibles à chaque étape de nos interventions.",
        guarantees: [
          "Chiffrement de bout en bout de toutes les données",
          "Accords de confidentialité (NDA) signés systématiquement",
          "Accès sécurisés avec authentification multi-facteurs",
          "Audit trails complets de toutes les opérations",
          "Conformité RGPD et normes internationales",
          "Destruction sécurisée des données temporaires"
        ],
        procedures: [
          "Évaluation des risques avant chaque projet",
          "Classification et étiquetage des données sensibles",
          "Isolation des environnements de développement et production",
          "Sauvegarde chiffrée avec géolocalisation contrôlée",
          "Formation sécurité obligatoire pour tous nos intervenants"
        ],
        certifications: [
          "Processus ISO 27001 appliqués",
          "Conformité aux standards bancaires",
          "Respect des réglementations sectorielles spécifiques"
        ]
      }
    },
    {
      icon: Users,
      title: "Accompagnement personnalisé",
      description: "Chaque projet bénéficie d'un suivi sur-mesure, avec une attention portée à vos objectifs métiers réels.",
      color: "bg-green-700",
      details: {
        overview: "Notre approche sur-mesure garantit que chaque solution développée répond précisément à vos enjeux spécifiques. Nous adaptons nos méthodes, nos outils et notre communication à votre contexte unique pour maximiser l'impact de chaque intervention.",
        guarantees: [
          "Chef de projet dédié pour chaque mission",
          "Points de contact réguliers programmés",
          "Adaptation aux contraintes de votre secteur d'activité",
          "Prise en compte de votre culture d'entreprise",
          "Flexibilité dans les approches méthodologiques",
          "Support personnalisé post-livraison"
        ],
        procedures: [
          "Audit approfondi de vos besoins et contraintes",
          "Définition collaborative des objectifs et KPI",
          "Sprints adaptatifs selon vos retours",
          "Formation ciblée de vos équipes utilisatrices",
          "Documentation personnalisée à votre environnement"
        ],
        certifications: [
          "Méthodologies agiles certifiées",
          "Approche Design Thinking validée",
          "Processus d'amélioration continue"
        ]
      }
    },
    {
      icon: Award,
      title: "Excellence technique",
      description: "Nous utilisons les meilleures pratiques du marché et des outils de pointe pour garantir des livrables fiables et performants.",
      color: "bg-yellow-600",
      details: {
        overview: "Notre excellence technique s'appuie sur une maîtrise approfondie des technologies de pointe, des méthodologies éprouvées et un engagement constant vers la qualité. Chaque livrable respecte les plus hauts standards de l'industrie.",
        guarantees: [
          "Code source documenté et versionné",
          "Tests automatisés et validation qualité",
          "Architecture scalable et maintenable",
          "Utilisation des dernières technologies stables",
          "Respect des standards et bonnes pratiques",
          "Optimisation des performances garantie"
        ],
        procedures: [
          "Code review systématique par des experts",
          "Tests unitaires et d'intégration complets",
          "Déploiement automatisé avec rollback",
          "Monitoring et alerting proactifs",
          "Documentation technique détaillée"
        ],
        certifications: [
          "Certifications Microsoft, AWS, Google Cloud",
          "Expertise reconnue sur les outils BI leaders",
          "Formation continue aux innovations technologiques"
        ]
      }
    },
    {
      icon: Clock,
      title: "Respect des délais & agilité",
      description: "Notre approche est agile, rapide et orientée résultats, tout en respectant les délais convenus.",
      color: "bg-green-600",
      details: {
        overview: "Notre engagement sur les délais s'appuie sur une planification rigoureuse, une communication transparente et une capacité d'adaptation face aux imprévus. Nous livrons dans les temps tout en maintenant un haut niveau de qualité.",
        guarantees: [
          "Planning détaillé avec jalons intermédiaires",
          "Livraisons itératives et validation continue",
          "Communication proactive des avancements",
          "Gestion des risques et plans de contingence",
          "Équipes dimensionnées selon les échéances",
          "Flexibilité face aux changements de périmètre"
        ],
        procedures: [
          "Estimation précise basée sur notre expérience",
          "Suivi quotidien de l'avancement des tâches",
          "Points d'étape hebdomadaires avec les parties prenantes",
          "Identification précoce des blocages potentiels",
          "Réallocation des ressources si nécessaire"
        ],
        certifications: [
          "Méthodes Scrum et Kanban maîtrisées",
          "Outils de gestion de projet professionnels",
          "Historique de respect des délais > 95%"
        ]
      }
    },
    {
      icon: BookOpen,
      title: "Formation et transfert de compétences",
      description: "Nous formons vos équipes pour assurer l'autonomie et la pérennité de vos solutions.",
      color: "bg-amber-700",
      details: {
        overview: "Notre mission ne s'arrête pas à la livraison. Nous investissons dans le transfert de compétences pour garantir l'autonomie de vos équipes et la pérennité des solutions déployées. Chaque formation est adaptée aux profils et besoins spécifiques.",
        guarantees: [
          "Programmes de formation sur mesure",
          "Support pédagogique complet et actualisé",
          "Certification officielle des participants",
          "Suivi post-formation pendant 6 mois",
          "Sessions de rappel et mise à niveau",
          "Hotline technique dédiée"
        ],
        procedures: [
          "Évaluation des niveaux et besoins de formation",
          "Création de supports adaptés à votre contexte",
          "Sessions pratiques sur vos données réelles",
          "Évaluation des acquis et certification",
          "Plan de montée en compétences progressif"
        ],
        certifications: [
          "Organisme de formation certifié",
          "Formateurs certifiés sur les outils enseignés",
          "Partenaire formation Microsoft et autres éditeurs"
        ]
      }
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

  const handleEngagementClick = (engagement) => {
    setSelectedEngagement(engagement)
  }

  const closeModal = () => {
    setSelectedEngagement(null)
  }

  return (
    <>
      <section id="engagements" className="py-28 bg-white relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-yellow-50 rounded-full blur-3xl"
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Des garanties solides pour votre tranquillité d'esprit et votre réussite
            </p>
            <p className="text-sm text-gray-500 italic">
              Cliquez sur chaque engagement pour découvrir nos garanties détaillées
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
                  className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer relative"
                  variants={cardVariants}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  onClick={() => handleEngagementClick(engagement)}
                >
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>

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
                    <div className="flex-1 pr-8">
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
                      
                      <div className="mt-4 text-sm text-green-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Voir nos garanties détaillées →
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedEngagement && (
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
                  <div className={`w-16 h-16 ${selectedEngagement.color} rounded-xl flex items-center justify-center mr-4`}>
                    <selectedEngagement.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedEngagement.title}</h2>
                    <p className="text-gray-600">{selectedEngagement.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Star className="h-5 w-5 mr-2 text-yellow-600" />
                      Notre engagement
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedEngagement.details.overview}
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Nos garanties
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {selectedEngagement.details.guarantees.map((guarantee, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{guarantee}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-amber-600" />
                      Procédures appliquées
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {selectedEngagement.details.procedures.map((procedure, index) => (
                        <li key={index} className="flex items-start">
                          <Zap className="h-4 w-4 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{procedure}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-green-700" />
                      Certifications & standards
                    </h3>
                    <ul className="space-y-2">
                      {selectedEngagement.details.certifications.map((certification, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-700 rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-gray-600 font-medium">{certification}</span>
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