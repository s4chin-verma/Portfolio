import { useLottie } from 'lottie-react';

type Props = {
  jsonPath: string;
  className?: string;
};

const LottieComponent = ({ jsonPath, className = '' }: Props) => {
  const defaultOptions = {
    animationData: jsonPath,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <div className={`max-w-sm md:max-w-md ${className}`}>
      <div className="w-full">{View}</div>
    </div>
  );
};

export default LottieComponent;