'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Lottie component with SSR disabled
const LottieComponent = dynamic(() => import('./LottieComponent'), {
  ssr: false, // This will disable server-side rendering for this component
});

type Props = {
  jsonPath: string;
  className?: string;
};

const ShowLottie = (props: Props) => {
  return <LottieComponent {...props} />;
};

export default ShowLottie;
