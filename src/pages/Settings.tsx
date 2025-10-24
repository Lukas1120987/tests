import { motion } from 'framer-motion';
import { Settings, Bell, Shield, User } from 'lucide-react';

const SettingsPage = () => {
  const sections = [
    { icon: <User className="w-6 h-6" />, title: 'Account', desc: 'Manage your profile and personal information' },
    { icon: <Bell className="w-6 h-6" />, title: 'Notifications', desc: 'Control how you receive updates' },
    { icon: <Shield className="w-6 h-6" />, title: 'Privacy & Security', desc: 'Manage your privacy settings' },
    { icon: <Settings className="w-6 h-6" />, title: 'Preferences', desc: 'Customize your experience' },
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
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Settings
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70"
          >
            Manage your account and preferences
          </motion.p>
        </motion.div>

        {/* Settings Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {sections.map((section, idx) => (
            <motion.button
              key={idx}
              variants={itemVariants}
              className="w-full card-base flex items-center justify-between hover:border-primary/50 text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{section.title}</h3>
                  <p className="text-sm text-foreground/70">{section.desc}</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SettingsPage;
