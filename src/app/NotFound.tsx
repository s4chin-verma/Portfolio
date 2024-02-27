import { Button, AnimatedImage } from '@/components';
import { Header, Email, SocialLinks } from '@/containers';
import Error from '@/assets/lotties/404_Page_Not_Found.json';

const NotFound = () => {
   return (
      <>
         <Header />
         <div className="grid h-screen place-items-center">
            <div className="w-full max-w-xl flex flex-col items-center">
               <AnimatedImage data={Error} classname="mx-auto md:w-[400px]" />
               <p className="mt-5 text-3xl capitalize md:text-4xl text-dark-2">page not found</p>
               <Button url={'/'} className="mt-8" children={'Go Home'} />
            </div>
         </div>
         <Email />
         <SocialLinks />
      </>
   );
};

export default NotFound;
