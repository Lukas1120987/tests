import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const Support = () => {
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
            Support
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70"
          >
            We're here to help. Get in touch with our support team.
          </motion.p>
        </motion.div>

        {/* Support Options */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            { icon: <Mail className="w-8 h-8" />, title: 'Email Support', desc: 'support@nrwrp.de' },
            { icon: <MessageCircle className="w-8 h-8" />, title: 'Discord Support', desc: 'Join our Discord server' },
          ].map((option, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card-base cursor-pointer hover:border-primary/50"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary text-white flex items-center justify-center mb-4">
                {option.icon}
              </div>
              <h3 className="font-bold text-foreground mb-2">{option.title}</h3>
              <p className="text-foreground/70 mb-4">{option.desc}</p>
              <button className="btn-primary w-full">Contact Now</button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Support;
