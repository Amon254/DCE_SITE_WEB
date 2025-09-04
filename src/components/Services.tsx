import {
  Database,
  Brain,
  BarChart3,
  Calculator,
  Cloud,
  Code,
  Presentation,
  GraduationCap,
  Zap,
  X,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  TrendingUp,
} from "lucide-react"
import { motion, useInView, Variants, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      icon: Database,
      title: "Data Engineering & Big Data",
      description: "Collecte, structuration, automatisation (ETL, pipelines de données)",
      color: "bg-blue-500",
      details: {
        overview: "Nous concevons et déployons des architectures de données robustes et évolutives pour transformer vos données brutes en actifs stratégiques. Notre expertise couvre l'ensemble du cycle de vie des données, de la collecte à la mise à disposition.",
        services: [
          "Conception d'architectures de données sur mesure",
          "Développement de pipelines ETL/ELT performants",
          "Intégration de sources de données hétérogènes",
          "Automatisation des processus de traitement",
          "Optimisation des performances et de la scalabilité",
          "Mise en place de la gouvernance des données"
        ],
        technologies: ["Apache Spark", "Apache Airflow", "Kafka", "Snowflake", "Azure Data Factory", "AWS Glue", "Python", "SQL"],
        benefits: [
          "Réduction de 80% du temps de traitement des données",
          "Amélioration de la qualité et fiabilité des données",
          "Automatisation complète des processus répétitifs",
          "Évolutivité pour supporter la croissance"
        ],
        deliverables: ["Architecture technique détaillée", "Pipelines de données opérationnels", "Documentation complète", "Formation des équipes", "Support et maintenance"]
      }
    },
    {
      icon: Brain,
      title: "Data Science & Analyse prédictive",
      description: "Modélisation, machine learning, IA appliquée",
      color: "bg-purple-500",
      details: {
        overview: "Exploitez la puissance de l'intelligence artificielle et du machine learning pour découvrir des insights cachés dans vos données et prédire les tendances futures. Nos modèles sur mesure transforment vos données en avantage concurrentiel.",
        services: [
          "Développement de modèles prédictifs personnalisés",
          "Analyse exploratoire et découverte de patterns",
          "Implémentation d'algorithmes d'IA avancés",
          "Optimisation et déploiement de modèles",
          "Analyse de sentiment et NLP",
          "Vision par ordinateur et reconnaissance d'images"
        ],
        technologies: ["Python", "R", "TensorFlow", "PyTorch", "Scikit-learn", "Azure ML", "AWS SageMaker", "MLflow"],
        benefits: [
          "Augmentation de 25% de la précision des prévisions",
          "Identification proactive des opportunités et risques",
          "Automatisation des décisions complexes",
          "ROI mesurable sur les investissements data"
        ],
        deliverables: ["Modèles ML déployés en production", "Tableaux de bord prédictifs", "API de scoring", "Documentation scientifique", "Plan de monitoring continu"]
      }
    },
    {
      icon: BarChart3,
      title: "Business Intelligence & DataViz",
      description: "Power BI, Tableau, Looker Studio…",
      color: "bg-green-500",
      details: {
        overview: "Transformez vos données complexes en visualisations intuitives et tableaux de bord interactifs. Nos solutions BI permettent à vos équipes de prendre des décisions éclairées en temps réel.",
        services: [
          "Conception de tableaux de bord exécutifs",
          "Développement de rapports automatisés",
          "Création de KPI et métriques personnalisées",
          "Intégration multi-sources de données",
          "Formation utilisateurs avancée",
          "Optimisation des performances BI"
        ],
        technologies: ["Power BI", "Tableau", "Looker Studio", "QlikSense", "D3.js", "Plotly", "Excel avancé"],
        benefits: [
          "Réduction de 70% du temps de reporting",
          "Amélioration de 40% de la prise de décision",
          "Visibilité temps réel sur les performances",
          "Adoption utilisateur élevée grâce à l'UX"
        ],
        deliverables: ["Tableaux de bord interactifs", "Rapports automatisés", "Guide utilisateur", "Formation complète", "Maintenance et évolutions"]
      }
    },
    {
      icon: Calculator,
      title: "Études statistiques & analyses avancées",
      description: "Enquêtes, tendances, indicateurs de performance",
      color: "bg-orange-500",
      details: {
        overview: "Menez des analyses statistiques rigoureuses pour valider vos hypothèses business et mesurer l'impact de vos actions. Nos études approfondies révèlent les facteurs clés de votre performance.",
        services: [
          "Conception et analyse d'enquêtes sur mesure",
          "Tests statistiques et validation d'hypothèses",
          "Analyses de corrélation et causalité",
          "Segmentation avancée de clientèle",
          "A/B testing et expérimentation",
          "Études de marché et benchmarking"
        ],
        technologies: ["R", "Python", "SPSS", "SAS", "Stata", "Excel avancé", "Survey tools"],
        benefits: [
          "Validation scientifique de vos stratégies",
          "Compréhension fine de vos segments clients",
          "Optimisation basée sur des preuves",
          "Réduction des risques décisionnels"
        ],
        deliverables: ["Rapports d'analyse détaillés", "Recommandations actionables", "Présentation exécutive", "Dataset nettoyé", "Méthodologie reproductible"]
      }
    },
    {
      icon: Cloud,
      title: "Cloud & Architecture Data",
      description: "Azure, AWS, Google Cloud",
      color: "bg-cyan-500",
      details: {
        overview: "Concevez et déployez des infrastructures cloud modernes et sécurisées pour vos données. Nos architectures cloud native garantissent performance, évolutivité et maîtrise des coûts.",
        services: [
          "Migration cloud et modernisation legacy",
          "Architecture multi-cloud et hybride",
          "Optimisation des coûts cloud",
          "Sécurisation et gouvernance des données",
          "Déploiement automatisé (IaC)",
          "Monitoring et alerting avancés"
        ],
        technologies: ["Azure", "AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Azure DevOps", "Git"],
        benefits: [
          "Réduction de 60% des coûts d'infrastructure",
          "Amélioration de 99.9% de la disponibilité",
          "Scalabilité automatique selon la demande",
          "Sécurité renforcée et conformité"
        ],
        deliverables: ["Architecture cloud déployée", "Scripts d'automatisation", "Plan de reprise d'activité", "Documentation technique", "Formation DevOps"]
      }
    },
    {
      icon: Code,
      title: "Développement d'applications métiers",
      description: "Web, mobile, dashboards interactifs",
      color: "bg-indigo-500",
      details: {
        overview: "Développons des applications sur mesure qui s'intègrent parfaitement à vos processus métiers. Nos solutions web et mobile mettent la donnée au cœur de l'expérience utilisateur.",
        services: [
          "Applications web responsive et performantes",
          "Applications mobile natives et hybrides",
          "Dashboards interactifs temps réel",
          "APIs robustes et documentées",
          "Intégration système et middleware",
          "Tests automatisés et CI/CD"
        ],
        technologies: ["React", "Vue.js", "Node.js", "Python", "Flutter", "React Native", ".NET", "PostgreSQL", "MongoDB"],
        benefits: [
          "Amélioration de 50% de la productivité utilisateur",
          "Expérience utilisateur moderne et intuitive",
          "Intégration seamless avec vos outils existants",
          "Maintenance simplifiée et évolutions rapides"
        ],
        deliverables: ["Applications déployées", "Code source documenté", "Tests automatisés", "Guide utilisateur", "Support technique"]
      }
    },
    {
      icon: Presentation,
      title: "Data Storytelling & Stratégie",
      description: "Visualisation intelligente au service des décisions",
      color: "bg-pink-500",
      details: {
        overview: "Transformez vos analyses en récits percutants qui inspirent l'action. Nos experts combinent visualisation avancée et storytelling pour maximiser l'impact de vos présentations data.",
        services: [
          "Conception de présentations executives",
          "Création de narratifs data-driven",
          "Infographies et visualisations créatives",
          "Ateliers de storytelling pour équipes",
          "Stratégie de communication des insights",
          "Templates et guidelines visuelles"
        ],
        technologies: ["D3.js", "Flourish", "Adobe Creative Suite", "Figma", "Canva Pro", "PowerPoint avancé"],
        benefits: [
          "Augmentation de 80% de l'engagement audience",
          "Amélioration de la compréhension des enjeux",
          "Accélération de la prise de décision",
          "Renforcement de la culture data"
        ],
        deliverables: ["Présentations impactantes", "Templates réutilisables", "Guidelines storytelling", "Formation équipes", "Bibliothèque de visuels"]
      }
    },
    {
      icon: GraduationCap,
      title: "Formations professionnelles",
      description: "Power BI, Office 365 (Excel, PowerPoint, Word), data literacy…",
      color: "bg-emerald-500",
      details: {
        overview: "Développez l'autonomie data de vos équipes grâce à nos formations pratiques et certifiantes. Nos programmes sur mesure s'adaptent à tous les niveaux et besoins métiers.",
        services: [
          "Formations Power BI de base à expert",
          "Maîtrise avancée d'Excel et Office 365",
          "Data literacy et culture analytique",
          "Ateliers pratiques sur projets réels",
          "Certifications officielles Microsoft",
          "Accompagnement post-formation"
        ],
        technologies: ["Power BI", "Excel", "Power Platform", "SharePoint", "Teams", "Python", "SQL"],
        benefits: [
          "Autonomie complète des équipes sur les outils",
          "Réduction de 90% des demandes support",
          "Amélioration de la productivité individuelle",
          "Certification reconnue sur le marché"
        ],
        deliverables: ["Programmes de formation personnalisés", "Supports pédagogiques", "Exercices pratiques", "Certification", "Suivi post-formation"]
      }
    },
    {
      icon: Zap,
      title: "Microsoft Fabric",
      description: "Plateforme unifiée de données et d'analytique intégrant toutes les étapes du cycle de vie de la donnée",
      color: "bg-yellow-500",
      details: {
        overview: "Adoptez Microsoft Fabric, la plateforme tout-en-un qui révolutionne la gestion des données. Une solution unique pour ingérer, transformer, analyser et visualiser vos données à l'échelle entreprise.",
        services: [
          "Migration et implémentation Fabric",
          "Configuration des espaces de travail",
          "Développement de pipelines Fabric",
          "Intégration Power BI native",
          "Optimisation des performances OneLake",
          "Formation utilisateurs et administrateurs"
        ],
        technologies: ["Microsoft Fabric", "OneLake", "Data Factory", "Synapse Analytics", "Power BI", "Real-Time Analytics"],
        benefits: [
          "Réduction de 70% de la complexité technique",
          "Unification complète de la stack data",
          "Performance optimisée et coûts maîtrisés",
          "Gouvernance centralisée et sécurisée"
        ],
        deliverables: ["Environnement Fabric configuré", "Pipelines déployés", "Dashboards intégrés", "Documentation", "Plan de gouvernance"]
      }
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const modalVariants = {
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

  const handleServiceClick = (service) => {
    setSelectedService(service)
  }

  const closeModal = () => {
    setSelectedService(null)
  }

  return (
    <>
      <section id="services" className="py-28 bg-gray-50" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos domaines d'intervention
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Une expertise complète pour transformer vos données en avantage concurrentiel
            </p>
            <p className="text-sm text-gray-500 italic">
              Cliquez sur chaque service pour découvrir nos offres détaillées
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>

                  <motion.div
                    className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 pr-8">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-4 text-sm text-green-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Voir les détails →
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white overflow-hidden relative cursor-pointer"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleServiceClick(services.find(s => s.title.includes('Microsoft Fabric')))}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl" />
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold">Microsoft Fabric – Une révolution dans la gestion de la donnée</h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              Microsoft Fabric est une plateforme unifiée de données et d'analytique qui intègre toutes les étapes du
              cycle de vie de la donnée : ingestion, transformation, stockage, gouvernance, analyse et visualisation.
            </p>
            <div className="mt-4 text-yellow-400 font-medium">
              Découvrir notre expertise Fabric →
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
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
                  <div className={`w-16 h-16 ${selectedService.color} rounded-xl flex items-center justify-center mr-4`}>
                    <selectedService.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedService.title}</h2>
                    <p className="text-gray-600">{selectedService.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-blue-600" />
                      Vue d'ensemble
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedService.details.overview}
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Nos services
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {selectedService.details.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{service}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-orange-600" />
                      Bénéfices clients
                    </h3>
                    <ul className="space-y-2">
                      {selectedService.details.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <TrendingUp className="h-4 w-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Technologies & Outils
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedService.details.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-purple-600" />
                      Livrables
                    </h3>
                    <ul className="space-y-2 mb-8">
                      {selectedService.details.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{deliverable}</span>
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