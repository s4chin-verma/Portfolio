import { Header, Home, Projects, TechStack, About, Contact, Email, SocialLinks, Footer } from '@/containers';

const Layout = () => {
   return (
      <>
         <Header />
         <main className="mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-xl">
            <Home />
            <Projects />
            <TechStack />
            <About />
            <Contact />
         </main>
         <Footer />
         <SocialLinks />
         <Email />
      </>
   );
};

export default Layout;
