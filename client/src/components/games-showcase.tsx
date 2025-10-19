import { motion } from "framer-motion";
import { Spade, Dice6, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GamesShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const games = [
    {
      icon: Spade,
      title: "🃏 Lowcard",
      description: "Game kartu seru yang menguji keberuntungan dan strategi. Dapatkan kartu dengan nilai terendah untuk menang!",
      gradient: "from-purple-main/30 to-pink-gift/30",
      borderColor: "hover:border-purple-main/50",
      buttonGradient: "from-purple-main to-pink-gift",
      buttonText: "Main Sekarang",
      deepLink: "chatme://open"
    },
    {
      icon: Dice6,
      title: "🎲 Sicbo",
      description: "Tebak hasil lemparan tiga dadu dan menangkan hadiah besar. Game klasik dengan sensasi modern!",
      gradient: "from-blue-chat/30 to-purple-light/30",
      borderColor: "hover:border-blue-chat/50",
      buttonGradient: "from-blue-chat to-purple-light",
      buttonText: "Main Sekarang",
      deepLink: "chatme://open"
    },
    {
      icon: Plus,
      title: "🎯 Game Lainnya",
      description: "Lebih banyak game seru sedang dalam pengembangan. Nantikan update terbaru dari ChatMe!",
      gradient: "from-orange-accent/30 to-pink-gift/30",
      borderColor: "hover:border-orange-accent/50",
      buttonGradient: "from-orange-accent to-pink-gift",
      buttonText: "Coming Soon"
    }
  ];

  return (
    <section id="games" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-main to-blue-chat bg-clip-text text-transparent">
              Game Seru dalam Chat
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Main bareng teman-teman dengan berbagai mini-game yang seru dan menantang
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {games.map((game, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className={`bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 ${game.borderColor} transition-all duration-300 group cursor-pointer`}
              data-testid={`game-card-${index}`}
            >
              <div className={`w-full h-48 bg-gradient-to-br ${game.gradient} flex items-center justify-center relative overflow-hidden`}>
                <motion.div 
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.6 }
                  }}
                  className="text-center z-10"
                >
                  <game.icon className="text-4xl text-white mb-2" size={48} />
                  <div className="text-white font-bold text-lg">
                    {game.title.includes("Lowcard") ? "LOWCARD" : 
                     game.title.includes("Sicbo") ? "SICBO" : "SEGERA"}
                  </div>
                </motion.div>
                {/* Animated background particles */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/20 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  {game.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {game.description}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {game.deepLink ? (
                    <Button 
                      asChild
                      className={`bg-gradient-to-r ${game.buttonGradient} px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                      data-testid={`button-play-${index}`}
                    >
                      <a href={game.deepLink}>
                        {game.buttonText}
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      className={`bg-gradient-to-r ${game.buttonGradient} px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                      data-testid={`button-play-${index}`}
                    >
                      {game.buttonText}
                    </Button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
