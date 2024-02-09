import { useState } from 'react';
import { author } from '@/lib/content/author';
import { NavButton, NavItem, DarkModeBtn } from '@/components';
import { navbarSection } from '@/lib/content/navbar';
import { Author } from '@/components';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { slideIn } from '@/animation/animation';
import useWindowWidth from '@/lib/contexts/WindowWidth';

const Header = () => {
   const [navbarCollapsed, setNavbarCollapsed] = useState(false);
   const { navLinks } = navbarSection;
   const { scrollY } = useScroll();
   const windowWidth = useWindowWidth();
   const [hidden, setHidden] = useState(false);
   const ANIMATION_DELAY = windowWidth <= 768 ? 0 : 0.8;

   useMotionValueEvent(scrollY, 'change', latest => {
      const previous = scrollY.getPrevious();
      setHidden(latest > previous && latest > 150);
   });

   const headerVariants = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: '-100%' },
   };

   const renderNavLinks = () => (
      <ul className="flex flex-col items-stretch gap-3 list-style-none lg:gap-5 xl:gap-6 md:flex-row md:items-center">
         {navLinks.map(({ name, url }, i) => (
            <NavItem
               key={i}
               href={url}
               onClick={() => setNavbarCollapsed(false)}
               index={i}
               delay={ANIMATION_DELAY}>
               {name}
            </NavItem>
         ))}
         <motion.div
            variants={slideIn({
               delay: ANIMATION_DELAY,
               direction: 'down',
            })}
            initial="hidden"
            animate="show">
            <DarkModeBtn onClick={() => setNavbarCollapsed(false)} />
         </motion.div>
      </ul>
   );

   return (
      <motion.header
         variants={headerVariants}
         animate={hidden ? 'hidden' : 'visible'}
         transition={{ type: 'spring', opacity: 1 }}
         className="fixed inset-x-0 top-0 right-0 z-50 flex items-end justify-between px-8 py-4  md:px-6 xl:px-12 backdrop-blur-sm">
         <motion.div
            variants={slideIn({
               delay: ANIMATION_DELAY + (navLinks.length + 1) / 10,
               direction: 'down',
            })}
            initial="hidden"
            animate="show">
            <Author href={'#home'} children={author.name} />
         </motion.div>

         <NavButton
            onClick={() => setNavbarCollapsed(prev => !prev)}
            navbarCollapsed={navbarCollapsed}
            className="md:invisible"
         />

         {(navbarCollapsed || windowWidth > 768) && (
            <motion.nav className="capitalize absolute text-lg duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto">
               {renderNavLinks()}
            </motion.nav>
         )}
      </motion.header>
   );
};

export default Header;
