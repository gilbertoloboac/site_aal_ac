'use client';

import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Editora() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <BookOpen className="w-16 h-16 text-indigo-900 mb-6 animate-bounce" />
      </motion.div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-indigo-900 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Em breve você poderá ler ou baixar todos
        <br className="hidden md:block" />
        os livros da Editora da AAL neste espaço.
      </motion.h2>
      <p className="text-lg text-gray-600">
          Estamos preparando um acervo digital incrível para você!
        </p>
    </div>
  );
}
