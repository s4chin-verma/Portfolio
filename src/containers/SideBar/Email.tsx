import { author } from '@/lib/author';
import { motion } from 'framer-motion';
import { fadeIn } from '@/animation/animation';

const Email = () => {
   const { email } = author;

   return (
      <motion.div
         variants={fadeIn(2.1)}
         initial="hidden"
         animate="show"
         className="fixed bottom-0 flex-col items-center hidden md:flex  right-6 xl:right-12"
      >
         <a
            href={`mailto:${email}`}
            target="_blank"
            className="block text-sm text-text p-2.5 hover:text-accent hover:-translate-y-1 focus:outline-none focus:-translate-y-1 duration-200 [writing-mode:vertical-lr] font-mono tracking-widest"
         >
            {email}
         </a>

         <div className="bg-slate-500 h-24 w-0.5 mt-5"></div>
      </motion.div>
   );
};

export default Email;
