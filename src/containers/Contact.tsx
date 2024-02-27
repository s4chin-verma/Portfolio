import { AnimatedImage } from '@/components';
import { footerSection } from '@/lib/content/contact';
import { Button } from '@/components';
import { author } from '@/lib/content/author';
import { getSectionAnimation } from '@/animation/animation';
import { motion } from 'framer-motion';
import contact from '@/assets/lotties/Contact.json';

const Contact = () => {
   const { title, heading, paragraph } = footerSection;
   return (
      <motion.section id="contact" animate={false} {...getSectionAnimation} className="py-24 md:py-28">
         <div className="mt-6 md:mt-0 flex flex-col items-center md:gap-10 gap-3">
            <h2 className="md:text-4xl text-center mb-8 md:mb-10 text-lg sm:text-3xl capitalize font-mono md:font-medium sm:mb-12 text-accent lg:text-dark-2">
               {title}
            </h2>
            <div className="flex gap-8 sm:gap-14 flex-col lg:flex-row lg:justify-between items-center odd:lg:flex-row-reverse">
               <AnimatedImage data={contact} classname={'sm:min-w-[40%]'} />
               <div className=" flex justify-center flex-col items-center gap-7">
                  <h3 className="text-center text-2xl md:text-3xl text-dark-2">{heading}</h3>
                  <h5 className="text-center text-base md:text-xl text-text">{paragraph}</h5>
                  <Button children={'Say Hello'} url={`mailto:${author.email}`} />
               </div>
            </div>
         </div>
      </motion.section>
   );
};

export default Contact;
