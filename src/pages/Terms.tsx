import { motion } from 'framer-motion';

const Terms = () => {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <div className="min-h-screen pt-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-12">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-foreground/70">Last updated: 2024</motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="prose-invert max-w-none">
          <motion.div variants={itemVariants} className="card-base mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p className="text-foreground/70">By accessing and using NRW RP DE, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="card-base mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">2. Use License</h2>
            <p className="text-foreground/70">Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="card-base mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">3. Disclaimer</h2>
            <p className="text-foreground/70">The materials on NRW RP DE are provided on an 'as is' basis. NRW RP DE makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
