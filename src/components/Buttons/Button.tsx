import React from 'react';

type ButtonProps = {
   children: React.ReactNode;
   url?: string;
   className?: string; // Corrected typo: classname -> className
   onClick?: (event: React.MouseEvent) => void;
};

const Button = ({ children, url, className, onClick }: ButtonProps) => {
   return (
      <a
         href={url}
         target="_blank"
         className={`text-sm p-3 md:p-4 px-6 border-2 block w-fit font-mono capitalize rounded-md border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer ${className}`}
         onClick={onClick}>
         {children}
      </a>
   );
};

export default Button;
