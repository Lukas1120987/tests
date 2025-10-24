import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Status = () => {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <div className="min-h-screen pt-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-16">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-4">System Status</motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-foreground/70">All systems operational</motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
          {['API Status', 'Database', 'Discord Integration', 'Game Servers'].map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} className="card-base flex items-center justify-between">
              <span className="text-foreground font-medium">{service}</span>
              <div className="flex items-center gap-2 text-success"><CheckCircle className="w-5 h-5" />Operational</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Status;
