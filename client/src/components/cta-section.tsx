import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const stats = [
    { value: "100K+", label: "Pengguna Aktif", color: "text-purple-main" },
    { value: "50+", label: "Chat Rooms", color: "text-pink-gift" },
    { value: "1M+", label: "Pesan Terkirim", color: "text-blue-chat" },
    { value: "500K+", label: "Hadiah Dikirim", color: "text-orange-accent" }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-purple-main via-pink-gift to-orange-accent bg-clip-text text-transparent">
              Gabung sekarang dan rasakan keseruan sosial yang berbeda bersama ChatMe!
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Obrolan bukan sekadar teks—di ChatMe, semuanya jadi lebih hidup!
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-main to-pink-gift px-10 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-purple-main/40 transition-all duration-300"
                data-testid="button-play-store"
              >
                <a 
                  href="https://play.google.com/store/apps/details?id=com.chatme1.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Download di Play Store
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-chat to-purple-light px-10 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-blue-chat/40 transition-all duration-300"
                data-testid="button-app-store"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                Download di App Store
              </Button>
            </motion.div>
          </motion.div>

          {/* Social proof or stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + (index * 0.1),
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                data-testid={`stat-${index}`}
              >
                <motion.div 
                  className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
                  animate={{ 
                    textShadow: [
                      "0 0 0px currentColor",
                      "0 0 10px currentColor",
                      "0 0 0px currentColor"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: index * 0.5
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
