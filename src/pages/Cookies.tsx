import { motion } from 'framer-motion';

const Cookies = () => {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <div className="min-h-screen pt-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-12">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-4">Cookie Policy</motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-foreground/70">Last updated: 2024</motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
          {[
            { title: 'What Are Cookies', desc: 'Cookies are small files placed on your computer by websites you visit. They help us remember your preferences and improve your experience.' },
            { title: 'How We Use Cookies', desc: 'We use cookies for authentication, preferences, analytics, and to enhance your experience on our platform.' },
            { title: 'Essential Cookies', desc: 'These cookies are necessary for the website to function properly and cannot be disabled.' },
            { title: 'Managing Cookies', desc: 'You can control and/or delete cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent.' },
          ].map((section, idx) => (
            <motion.div key={idx} variants={itemVariants} className="card-base">
              <h2 className="text-2xl font-bold text-foreground mb-3">{section.title}</h2>
              <p className="text-foreground/70">{section.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
