import { aboutSection } from '@/lib/content/about';
import { educationItem } from '@/lib/content/education';
import { Education } from '@/components';
import { getSectionAnimation } from '@/animation/animation';
import { motion } from 'framer-motion';
import { cardVariants } from '@/animation/animation';

const About: React.FC = () => {
   const { title, content, subContent } = aboutSection;
   const { education } = educationItem;
   return (
      <>
         <motion.section id="about" animate={false} {...getSectionAnimation} className="py-24 md:py-32">
            <h2 className="heading-primary">
               {title}
            </h2>
            <p className="text-text text-justify text-base md:text-xl leading-relaxed">
               {content}
               <br />
               {subContent}
            </p>

            <h2 className="heading-primary mt-6 sm:mt-10">
               Education
            </h2>
            <div>
               {education.map((education, index) => (
                  <Education
                     {...education}
                     key={index}
                     variants={cardVariants}
                     initial="hidden"
                     whileInView="show"
                     custom={index}
                     viewport={{ once: true }}
                  />
               ))}
            </div>
         </motion.section>
      </>
   );
};

export default About;
