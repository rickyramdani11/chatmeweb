import { motion } from "framer-motion";
import { MessageCircle, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Fitur",
      color: "text-purple-main",
      links: [
        {name: "Chat Real-time", href: "intent://open#Intent;scheme=chatme;package=com.chatme1.app;end" },
        {  name: "Game", href: "intent://open#Intent;scheme=chatme;package=com.chatme1.app;end" } ,
        { name: "Virtual Gifts", href: "intent://open#Intent;scheme=chatme;package=com.chatme1.app;end"},
        { name: "Multi Rooms", href: "intent://open#Intent;scheme=chatme;package=com.chatme1.app;end" },
      ]
    },
    {
      title: "Support",
      color: "text-pink-gift",
      links: [
        { name: "Help Center", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Privacy Policy", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1BGG7DpVCT/", color: "hover:bg-purple-main/50" },
    { icon: Instagram, href: "https://www.instagram.com/chatmeoffice?igsh=a2ppenAzdTQ5YWE0", color: "hover:bg-pink-gift/50" },
    { icon: Twitter, href: "https://x.com/Chatmeapps?t=a1qjC9c8yORIP5IFIw8lcA&s=09", color: "hover:bg-blue-chat/50" },
    { 
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.53.02C13.84 0 15.14.01 16.44 0.08C17.23 0.1 17.97 0.34 18.57 0.85C19.17 1.36 19.62 2.02 19.85 2.74C20.09 3.46 20.1 4.24 19.89 4.96C19.64 5.74 19.17 6.4 18.56 6.91C17.97 7.4 17.24 7.71 16.48 7.81C15.6 7.93 14.70 7.99 13.80 8.01C13.39 8.02 12.97 8.01 12.56 8.01C12.18 8.01 11.8 8.02 11.41 8.01C10.51 7.99 9.61 7.93 8.73 7.81C7.97 7.71 7.24 7.4 6.65 6.91C6.04 6.4 5.57 5.74 5.32 4.96C5.11 4.24 5.12 3.46 5.36 2.74C5.59 2.02 6.04 1.36 6.64 0.85C7.24 0.34 7.98 0.1 8.77 0.08C10.07 0.01 11.37 0 12.53.02M12.53 2.13C11.3 2.13 10.08 2.14 8.86 2.18C8.53 2.19 8.21 2.29 7.95 2.47C7.69 2.65 7.5 2.91 7.39 3.21C7.28 3.51 7.27 3.84 7.35 4.15C7.43 4.46 7.6 4.74 7.84 4.94C8.08 5.14 8.38 5.26 8.69 5.29C9.5 5.37 10.32 5.42 11.14 5.44C11.6 5.45 12.07 5.44 12.53 5.44C12.99 5.44 13.46 5.45 13.92 5.44C14.74 5.42 15.56 5.37 16.37 5.29C16.68 5.26 16.98 5.14 17.22 4.94C17.46 4.74 17.63 4.46 17.71 4.15C17.79 3.84 17.78 3.51 17.67 3.21C17.56 2.91 17.37 2.65 17.11 2.47C16.85 2.29 16.53 2.19 16.2 2.18C14.98 2.14 13.76 2.13 12.53 2.13Z"/>
        </svg>
      ), 
      href: "#", 
      color: "hover:bg-orange-accent/50" 
    }
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-main to-pink-gift rounded-xl flex items-center justify-center">
                <MessageCircle className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-main to-pink-gift bg-clip-text text-transparent">
                ChatMe
              </span>
            </motion.div>
            <p className="text-white/70 leading-relaxed">
              Platform sosial yang menggabungkan chat, game, dan virtual gift dalam satu aplikasi yang seru dan menarik.
            </p>
          </motion.div>
          
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className={`font-semibold text-lg mb-4 ${section.color}`}>
                {section.title}
              </h4>
              <ul className="space-y-2 text-white/70">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a 
                      href={link.href} 
                      className="hover:text-white transition-colors"
                      data-testid={`footer-link-${section.title.toLowerCase()}-${linkIndex}`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          {/* Social Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4 text-blue-chat">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center ${social.color} transition-colors`}
                  data-testid={`social-link-${index}`}
                >
                  <social.icon size={20} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-white/20 mt-8 pt-8 text-center text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 ChatMe. All rights reserved. Made with ChatMe app for awesome conversations!</p>
        </motion.div>
      </div>
    </footer>
  );
}
