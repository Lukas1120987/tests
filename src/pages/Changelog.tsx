import { motion } from 'framer-motion';

const Changelog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen pt-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Changelog
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70"
          >
            Latest updates and improvements
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="card-base text-center py-12 border-2 border-dashed border-border"
        >
          <p className="text-xl text-foreground/70">Changelog coming soon...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Changelog;
