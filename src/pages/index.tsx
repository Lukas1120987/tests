import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/layout/Sidebar';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import HighlightsSection from '@/components/sections/HighlightsSection';
import DiscordSection from '@/components/sections/DiscordSection';
import Footer from '@/components/layout/Footer';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section with Canvas Animation */}
        <HeroSection />

        {/* Stats Section with Counter Animations */}
        <StatsSection />

        {/* Highlights Section with Cards */}
        <HighlightsSection />

        {/* Discord Integration Section */}
        <DiscordSection />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Index;
