import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
  Github,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const icons = [
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/keshav-agrawal025/",
      label: "LinkedIn",
    },
    {
      Icon: Mail,
      href: "mailto:keshavagr204@gmail.com",
      label: "Email",
    },
    {
      Icon: Github,
      href: "https://github.com/keshavagr025",
      label: "GitHub",
    },
    {
      Icon: Twitter,
      href: "https://x.com/KESHAVAGRA8670?s=09",
      label: "Twitter",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-cyan-100 text-black p-6 flex flex-col md:flex-row justify-between items-center">
      <p className="mb-4 md:mb-0 font-semibold tracking-wider">Keshav Agrawal</p>
      <div className="flex gap-6 text-2xl">
        {icons.map(({ Icon, href, label }, index) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-indigo-600 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}  // up-down float animation
            transition={{
              delay: index * 0.2,
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </footer>
  );
}
