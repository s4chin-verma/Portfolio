import { Button, ShowLottie } from '@/components';
import { Layout } from '@/containers';

const NotFound = () => {
  return (
    <Layout className="grid h-screen place-items-center">
      <div className="w-full max-w-xl text-center">
        <ShowLottie path="/lotties/coding.json" className="mx-auto" />

        <p className="mt-5 text-md md:text-xl text-dark-2 ">
          Sorry, Currently this project live preview not available
        </p>

        <Button type="link" href="/" size="lg" className="mt-10" sameTab center>
          go home
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
