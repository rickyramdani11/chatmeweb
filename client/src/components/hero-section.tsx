import { motion } from "framer-motion";
import { Download, Play, MessageCircle, Gamepad2, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadConfig } from "@/config/download";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-purple-main/20 rounded-full"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 bg-pink-gift/20 rounded-full"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-24 h-24 bg-blue-chat/20 rounded-full"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-14 h-14 bg-orange-accent/20 rounded-full"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 3 }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-main via-pink-gift to-orange-accent bg-clip-text text-transparent">
              Selamat datang di
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-chat to-purple-light bg-clip-text text-transparent">
              ChatMe
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 mb-4 max-w-4xl mx-auto leading-relaxed"
          >
            <span className="font-semibold text-pink-gift">Obrolan Seru</span>, 
            <span className="font-semibold text-orange-accent"> Hadiah Menarik</span> & 
            <span className="font-semibold text-purple-light"> Game Seru!</span>
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-white/70 mb-8 max-w-3xl mx-auto"
          >
            ChatMe adalah aplikasi sosial yang menggabungkan <strong className="text-blue-chat">chatting interaktif</strong>, 
            <strong className="text-purple-light"> game seru</strong>, dan <strong className="text-pink-gift">virtual gift animasi</strong> 
            dalam satu platform seru!
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-main to-pink-gift px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-main/30 transition-all duration-300"
                data-testid="button-download-hero"
              >
                <a 
                  href={downloadConfig.apkUrl || downloadConfig.playStoreUrl}
                  download={downloadConfig.apkUrl ? "ChatMe.apk" : undefined}
                  target={downloadConfig.apkUrl ? "_self" : "_blank"}
                  rel={downloadConfig.apkUrl ? undefined : "noopener noreferrer"}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Sekarang
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 bg-transparent text-white"
                data-testid="button-demo"
              >
                <Play className="w-5 h-5 mr-2" />
                Lihat Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Phone Mockup */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative"
        >
          <motion.div 
            variants={floatingVariants}
            animate="animate"
            className="mx-auto w-80 h-96 bg-gradient-to-b from-dark-card to-purple-900 rounded-3xl shadow-2xl p-6 border border-white/20"
            data-testid="phone-mockup"
          >
            <div className="bg-gradient-to-r from-purple-main to-pink-gift rounded-xl p-4 mb-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Gamepad2 className="w-4 h-4" />
                </div>
                <span className="font-semibold">Game Room #1</span>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-sm flex items-center">
                <Gamepad2 className="w-4 h-4 mr-2" />
                Lowcard sedang dimainkan...
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-3 text-sm flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                💬 Ayo main bareng!
              </div>
              <motion.div 
                className="bg-gradient-to-r from-pink-gift/20 to-orange-accent/20 rounded-lg p-3 text-sm flex items-center"
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, -2, 2, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Gift className="w-4 h-4 mr-2" />
                🎁 Kamu mendapat hadiah!
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
