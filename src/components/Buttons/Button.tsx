type propType = {
   children: React.ReactNode;
   url?: string;
   classname?: string;
};

const Button = ({ children, url, classname }: propType) => {
   return (
      <a
         href={url}
         target="_blank"
         className={`text-sm p-3 md:p-4 px-6 border-2 block w-fit font-mono capitalize rounded-md border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer ${classname}`}
      >
         {children}
      </a>
   );
};

export default Button;
