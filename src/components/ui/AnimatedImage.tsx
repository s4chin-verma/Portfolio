import Lottie from 'lottie-react';

type PropType = {
   data: any;
   classname?: string;
};

const AnimatedImage = ({ data, classname }: PropType) => {
   return (
      <div className="">
         <Lottie autoplay loop animationData={data} className={`${classname}`} />
      </div>
   );
};

export default AnimatedImage;
