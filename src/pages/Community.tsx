import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart, Award } from 'lucide-react';

const Community = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
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
            Join Our Community
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Connect with thousands of players and become part of the NRW RP family
          </motion.p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: <Users className="w-8 h-8" />, value: '15K+', label: 'Members' },
            { icon: <MessageSquare className="w-8 h-8" />, value: '100K+', label: 'Messages Daily' },
            { icon: <Heart className="w-8 h-8" />, value: '99%', label: 'Satisfaction' },
            { icon: <Award className="w-8 h-8" />, value: '50+', label: 'Events Monthly' },
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
          <p className="text-xl text-foreground/70">More community features coming soon...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
