import { motion } from 'framer-motion';
import NavLink from './NavLink';
import { slideIn } from '@/animation/animation';

type NavItemsProps = {
   href?: string;
   children: React.ReactNode;
   index: number;
   delay: number;
   onClick?: (event: React.MouseEvent) => void;
};

const NavItem = ({ href, children, onClick, index, delay }: NavItemsProps) => {
   return (
      <motion.li
         variants={slideIn({ delay: delay + index / 10, direction: 'down' })}
         initial="hidden"
         animate="show"
         className="group"
      >
         <NavLink
            href={href}
            className="block p-2 duration-500 hover:text-accent text-text"
            onClick={onClick}
         >
            {children}
         </NavLink>
      </motion.li>
   );
};

export default NavItem;
