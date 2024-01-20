import { EducationIcon } from '@/components';
import { motion, MotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';

type propType = {
   standard: string;
   institution: string;
   location: string;
   time: string;
};

const Education = ({ standard, institution, location, time, ...rest }: propType & MotionProps) => {
   const [domLoaded, setDomLoaded] = useState(false);

   useEffect(() => {
      setDomLoaded(true);
   });

   return domLoaded ? (
      <>
         <motion.div {...rest} className="flex flex-col md:gap-4 gap-2 mt-12 md:mt-16">
            <div className="flex flex-row justify-between gap-2">
               <h2 className="text-base md:text-3xl font-normal tracking-wider text-text">{standard}</h2>
               <div className="time-status flex justify-center items-center w-20 h-7 md:w-32 md:h-9 rounded-3xl bg-green-200 text-green-800 text-xs md:text-base">
                  Full Time
               </div>
            </div>

            <div className="flex flex-col gap-2 justify-item-start mt-1 md:mt-2 md:flex-row md:justify-between">
               <EducationIcon icon={'maki:college'} children={institution} />
               <div className="flex justify-between md:w-8/12">
                  <EducationIcon icon={'mdi:location'} children={location} />
                  <EducationIcon icon={'mingcute:time-fill'} children={time} />
               </div>
            </div>
         </motion.div>
      </>
   ) : (
      <></>
   );
};

export default Education;
