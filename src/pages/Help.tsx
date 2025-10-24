import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare, Globe } from 'lucide-react';

const Help = () => {
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
            Help Center
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70"
          >
            Find answers to common questions
          </motion.p>
        </motion.div>

        {/* Help Resources */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: <HelpCircle className="w-8 h-8" />, title: 'FAQ', desc: 'Frequently asked questions' },
            { icon: <MessageSquare className="w-8 h-8" />, title: 'Contact Support', desc: 'Get in touch with our team' },
            { icon: <Globe className="w-8 h-8" />, title: 'Community', desc: 'Ask the community' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card-base text-center cursor-pointer hover:border-primary/50"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary text-white flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/70">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="card-base text-center py-12 border-2 border-dashed border-border"
        >
          <p className="text-xl text-foreground/70">Help articles and resources coming soon...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Help;
