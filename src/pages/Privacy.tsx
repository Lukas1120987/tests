import { motion } from 'framer-motion';

const Privacy = () => {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <div className="min-h-screen pt-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-12">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-foreground/70">Last updated: 2024</motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
          {[
            { title: '1. Information We Collect', desc: 'We collect information you provide directly, such as when you create an account or contact us.' },
            { title: '2. How We Use Information', desc: 'We use the information we collect to provide, maintain, and improve our services.' },
            { title: '3. Data Security', desc: 'We implement appropriate technical and organizational security measures to protect your personal information.' },
            { title: '4. Your Rights', desc: 'You have the right to access, correct, or delete your personal information at any time.' },
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

export default Privacy;
