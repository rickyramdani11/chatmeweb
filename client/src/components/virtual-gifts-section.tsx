import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function VirtualGiftsSection() {
  const features = [
    {
      emoji: "🎈",
      title: "Beragam Pilihan Hadiah",
      description: "Dari balon cantik hingga kado spesial, pilih hadiah yang sesuai dengan momen special kamu.",
      gradient: "from-pink-gift to-orange-accent"
    },
    {
      emoji: "✨",
      title: "Animasi Memukau",
      description: "Setiap hadiah dilengkapi dengan efek animasi yang menawan dan interaktif di layar chat.",
      gradient: "from-purple-main to-pink-gift"
    },
    {
      emoji: "💝",
      title: "Mudah Dikirim",
      description: "Kirim hadiah hanya dengan sekali tap. Teman kamu akan langsung melihat animasi hadiah di chat.",
      gradient: "from-blue-chat to-purple-light"
    }
  ];

  const gifts = [
    { emoji: "🎈", name: "Balon", delay: 0 },
    { emoji: "🌹", name: "Mawar", delay: 0.3 },
    { emoji: "🎁", name: "Kado", delay: 0.6 },
    { emoji: "💎", name: "Berlian", delay: 0.9 },
    { emoji: "🎂", name: "Kue", delay: 1.2 },
    { emoji: "🚗", name: "Mobil", delay: 1.5 }
  ];

  const giftBounceVariants = {
    animate: {
      y: [0, -10, -5, 0],
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="gifts" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-gift to-orange-accent bg-clip-text text-transparent">
              Virtual Gift Animasi
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ekspresikan perasaan dengan hadiah virtual yang menawan dan animasi yang memukau
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-pink-gift">Kirim Hadiah, Buat Kesan!</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                  data-testid={`gift-feature-${index}`}
                >
                  <motion.div 
                    variants={giftBounceVariants}
                    animate="animate"
                    style={{ animationDelay: `${index * 0.5}s` }}
                    className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center flex-shrink-0 text-xl`}
                  >
                    {feature.emoji}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-pink-gift/20 to-orange-accent/20 rounded-2xl p-8 backdrop-blur-lg border border-white/20 relative overflow-hidden">
              <div className="grid grid-cols-3 gap-4">
                {gifts.map((gift, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: gift.delay,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    variants={giftBounceVariants}
                    animate="animate"
                    style={{ animationDelay: `${gift.delay}s` }}
                    className="bg-white/10 rounded-xl p-4 text-center cursor-pointer hover:bg-white/20 transition-colors duration-300"
                    data-testid={`gift-${index}`}
                  >
                    <div className="text-3xl mb-2">{gift.emoji}</div>
                    <div className="text-sm">{gift.name}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Floating gift animation */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-gift to-orange-accent rounded-full flex items-center justify-center"
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, 360],
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
              >
                <Heart className="text-white text-xl" size={24} />
              </motion.div>

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
