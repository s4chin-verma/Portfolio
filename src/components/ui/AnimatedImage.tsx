import Lottie from 'lottie-react';

type PropType = {
   data: any;
   classname?: string;
};

const AnimatedImage = ({ data, classname }: PropType) => {
   return <Lottie autoplay loop animationData={data} className={`${classname}`} />;
};

export default AnimatedImage;
