import { motion, Variants } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 via-amber-500 to-green-700"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="col-span-2" variants={itemVariants}>
            <motion.div
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 p-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center">
                  <span className="text-yellow-400 font-bold text-lg">D</span>
                </div>
              </motion.div>
              <div>
                <h3 className="font-bold text-lg">Data Conseil Entreprises</h3>
                <p className="text-yellow-300 text-sm">
                  Spécialiste de la donnée
                </p>
              </div>
            </motion.div>
            <p className="text-gray-400 mb-4 max-w-md">
              Nous accompagnons les entreprises dans la valorisation stratégique
              de leurs données pour optimiser leurs performances et guider leurs
              décisions.
            </p>
            <div className="space-y-2">
              {[
                {
                  icon: Phone,
                  href: "tel:+2250757041368",
                  text: "+225 0757041368",
                },
                {
                  icon: Mail,
                  href: "mailto:affiansergekonin@gmail.com",
                  text: "affiansergekonin@gmail.com",
                },
              ].map((contact, index) => (
                <motion.div
                  key={`${index}-${contact?.text}`}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <contact.icon className="h-4 w-4 text-yellow-400" />
                  <a
                    href={contact.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {contact.text}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4 text-yellow-400">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                "Data Engineering",
                "Data Science",
                "Business Intelligence",
                "Cloud & Architecture",
                "Formations",
              ].map((service, index) => (
                <motion.li
                  key={`${index}-${service}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                >
                  <motion.button
                    onClick={() => scrollToSection("#services")}
                    className="hover:text-yellow-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4 text-green-400">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { text: "Accueil", href: "#accueil" },
                { text: "Services", href: "#services" },
                { text: "Engagements", href: "#engagements" },
                { text: "Valeurs", href: "#valeurs" },
                { text: "Contact", href: "#contact" },
              ].map((nav, index) => (
                <motion.li
                  key={`${index}-${nav?.text}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                >
                  <motion.button
                    onClick={() => scrollToSection(nav.href)}
                    className="hover:text-green-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {nav.text}
                  </motion.button>
                </motion.li>
                ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-400">
            © 2024 Data Conseil Entreprises. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}