import { motion } from 'framer-motion';
import { Zap, Shield, Users, Award, Gamepad2, Rocket } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <Gamepad2 className="w-8 h-8" />, title: 'Realistic Gameplay', desc: 'Immersive mechanics and engaging gameplay systems' },
    { icon: <Zap className="w-8 h-8" />, title: 'Custom Scripts', desc: 'Unique features and systems you won\'t find elsewhere' },
    { icon: <Shield className="w-8 h-8" />, title: 'Anti-Cheat', desc: 'Advanced security systems to keep the game fair' },
    { icon: <Users className="w-8 h-8" />, title: 'Community Events', desc: 'Regular events and competitions with great prizes' },
    { icon: <Award className="w-8 h-8" />, title: 'Ranking System', desc: 'Climb the ranks and earn recognition' },
    { icon: <Rocket className="w-8 h-8" />, title: 'Regular Updates', desc: 'Continuous improvements and new content' },
  ];

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
            Our Features
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Discover what makes our roleplay experience unique
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card-base group hover:border-primary/50"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
