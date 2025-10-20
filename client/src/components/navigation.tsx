import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDownloadConfig } from "@/hooks/useDownloadConfig";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const downloadConfig = useDownloadConfig();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
      data-testid="navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-main to-pink-gift rounded-xl flex items-center justify-center">
              <MessageCircle className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-main to-pink-gift bg-clip-text text-transparent">
              ChatMe
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white/70 hover:text-white transition-colors duration-300"
              data-testid="nav-features"
            >
              Fitur
            </button>
            <button 
              onClick={() => scrollToSection('games')}
              className="text-white/70 hover:text-white transition-colors duration-300"
              data-testid="nav-games"
            >
              Game
            </button>
            <button 
              onClick={() => scrollToSection('gifts')}
              className="text-white/70 hover:text-white transition-colors duration-300"
              data-testid="nav-gifts"
            >
              Hadiah
            </button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                className="bg-gradient-to-r from-purple-main to-pink-gift px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-main/25 transition-all duration-300"
                data-testid="button-download-nav"
              >
                <a 
                  href={downloadConfig.apkUrl || downloadConfig.playStoreUrl}
                  download={downloadConfig.apkUrl ? "ChatMe.apk" : undefined}
                  target={downloadConfig.apkUrl ? "_self" : "_blank"}
                  rel={downloadConfig.apkUrl ? undefined : "noopener noreferrer"}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-white/70 hover:text-white transition-colors duration-300 text-left"
                data-testid="nav-features-mobile"
              >
                Fitur
              </button>
              <button 
                onClick={() => scrollToSection('games')}
                className="text-white/70 hover:text-white transition-colors duration-300 text-left"
                data-testid="nav-games-mobile"
              >
                Game
              </button>
              <button 
                onClick={() => scrollToSection('gifts')}
                className="text-white/70 hover:text-white transition-colors duration-300 text-left"
                data-testid="nav-gifts-mobile"
              >
                Hadiah
              </button>
              <Button 
                asChild
                className="bg-gradient-to-r from-purple-main to-pink-gift px-6 py-2 rounded-full font-semibold w-fit"
                data-testid="button-download-mobile"
              >
                <a 
                  href={downloadConfig.apkUrl || downloadConfig.playStoreUrl}
                  download={downloadConfig.apkUrl ? "ChatMe.apk" : undefined}
                  target={downloadConfig.apkUrl ? "_self" : "_blank"}
                  rel={downloadConfig.apkUrl ? undefined : "noopener noreferrer"}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
