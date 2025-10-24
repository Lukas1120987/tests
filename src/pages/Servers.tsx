import { motion } from 'framer-motion';
import { Globe, Users, Zap, Shield } from 'lucide-react';

const Servers = () => {
  const servers = [
    { name: 'Server Alpha', players: 245, status: 'Online', region: 'EU' },
    { name: 'Server Beta', players: 189, status: 'Online', region: 'EU' },
    { name: 'Server Gamma', players: 312, status: 'Online', region: 'EU' },
    { name: 'Server Delta', players: 156, status: 'Maintenance', region: 'EU' },
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
            Our Servers
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Choose your preferred server and start your roleplay journey
          </motion.p>
        </motion.div>

        {/* Servers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {servers.map((server, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card-base hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">{server.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  server.status === 'Online'
                    ? 'bg-success/20 text-success'
                    : 'bg-warning/20 text-warning'
                }`}>
                  {server.status}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-foreground/70">
                  <Users className="w-5 h-5" />
                  <span>{server.players} players</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Globe className="w-5 h-5" />
                  <span>{server.region}</span>
                </div>
              </div>
              <button className="mt-4 btn-primary w-full">Join Server</button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Servers;
