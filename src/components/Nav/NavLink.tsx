interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
   className?: string;
   children: React.ReactNode;
   onClick?: (event: React.MouseEvent) => void;
}

const NavLink = ({ href, className = '', children, onClick = () => {}, ...rest }: Props) => {
   return (
      <a href={href} className={`group ${className}`} onClick={onClick} {...rest}>
         <span className="relative w-fit">
            {children}
            <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:w-full bg-accent duration-300 ease-in-scroll"></span>
         </span>
      </a>
   );
};

export default NavLink;
