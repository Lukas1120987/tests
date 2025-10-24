import { motion } from 'framer-motion';
import { Globe, TrendingUp, Users, Zap } from 'lucide-react';

const Global = () => {
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
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            Global Statistics
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Real-time data from our entire network
          </motion.p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: <Users className="w-8 h-8" />, value: '10.4K', label: 'Active Now' },
            { icon: <TrendingUp className="w-8 h-8" />, value: '+2.3K', label: 'This Week' },
            { icon: <Zap className="w-8 h-8" />, value: '99.9%', label: 'Uptime' },
            { icon: <Globe className="w-8 h-8" />, value: '7', label: 'Servers' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card-base text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary text-white flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          variants={itemVariants}
          className="card-base text-center py-12 border-2 border-dashed border-border"
        >
          <p className="text-xl text-foreground/70">Global features and leaderboards coming soon...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Global;
