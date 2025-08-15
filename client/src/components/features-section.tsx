import { motion } from "framer-motion";
import { MessageCircle, Gamepad2, Gift, Smartphone } from "lucide-react";

export default function FeaturesSection() {
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

  const features = [
    {
      icon: MessageCircle,
      title: "💬 Chat Real-Time",
      description: "Ngobrol bebas dengan teman atau pengguna lain dari berbagai room. Dukungan multi-room & notifikasi langsung!",
      gradient: "from-blue-chat to-purple-light",
      borderColor: "hover:border-blue-chat/50",
      textColor: "text-blue-chat"
    },
    {
      icon: Gamepad2,
      title: "🎮 Game Seru dalam Chat",
      description: "Nikmati mini-game seperti Lowcard, Sicbo, dan lainnya langsung di dalam chat room. Main bareng, adu keberuntungan, dan menangkan hadiah!",
      gradient: "from-purple-main to-pink-gift",
      borderColor: "hover:border-purple-main/50",
      textColor: "text-purple-main"
    },
    {
      icon: Gift,
      title: "🎁 Virtual Gift Animasi",
      description: "Kirim dan terima hadiah virtual dengan efek animasi keren. Dari balon hingga kado spesial, semua tampil atraktif di layar!",
      gradient: "from-pink-gift to-orange-accent",
      borderColor: "hover:border-pink-gift/50",
      textColor: "text-pink-gift"
    },
    {
      icon: Smartphone,
      title: "✨ Antarmuka Simpel & Modern",
      description: "Desain bersih, navigasi mudah, dan tema warna menarik yang nyaman digunakan siapa saja.",
      gradient: "from-orange-accent to-purple-light",
      borderColor: "hover:border-orange-accent/50",
      textColor: "text-orange-accent"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-main to-pink-gift bg-clip-text text-transparent">
              Fitur Unggulan ChatMe
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Nikmati pengalaman sosial yang tak terlupakan dengan fitur-fitur canggih kami
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className={`group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 ${feature.borderColor} transition-all duration-300 cursor-pointer`}
              data-testid={`feature-card-${index}`}
            >
              <motion.div 
                whileHover={{ 
                  y: [0, -10, 0],
                  transition: { duration: 0.6 }
                }}
                className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}
              >
                <feature.icon className="text-2xl text-white" size={24} />
              </motion.div>
              <h3 className={`text-xl font-bold mb-3 ${feature.textColor}`}>
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
