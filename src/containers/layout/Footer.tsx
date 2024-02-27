import { FooterLinks } from '@/components';
import { getSectionAnimation } from '@/animation/animation';
import { motion } from 'framer-motion';

const Footer = () => {
   return (
      <motion.footer
         className="mx-auto px-6 pb-8 md:py-12 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg"
         animate={false}
         {...getSectionAnimation}>
         <div className="pt-1 flex flex-col items-center">
            <FooterLinks />
            <div className="bg-text w-full h-[2px] rounded invisible md:my-6 md:visible"></div>
            <div className="flex flex-col items-center gap-4 mt-1">
               <h3 className="font-mono text-sm text-dark-1 md:text-lg text-center">
                  Designed and built by <span className="font-mono special">Sachin Verma</span>
                  <span> with</span>
                  <span className="font-mono text-accent special"> Mouse</span>
                  <span className="font-mono"> & </span>
                  <span className="font-mono special">Keyboard</span>
               </h3>
               <h3 className="font-mono text-sm text-center text-accent">Copyright © 2024</h3>
            </div>
         </div>
      </motion.footer>
   );
};

export default Footer;
