type propTypes = {
   href?: string;
   children: React.ReactNode;
};

const Author = ({ children, href }: propTypes) => {
   return (
      <a className="block" href={href}>
         <h1 className="relative md:text-3xl text-2xl capitalize font-signature text-accent group top-1">
            {children}
            <div className="absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></div>
         </h1>
      </a>
   );
};

export default Author;
