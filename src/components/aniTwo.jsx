import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const aniTwo = () => {
  return (
    <div style={{ width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <DotLottieReact
        src="https://lottie.host/2b572f3a-1d80-4e03-9250-2a6ec9d84e6b/X6t4Movv1p.lottie"
        loop
        autoplay
        width={200}
        height={200}
      />
    </div>
  );
};

export default aniTwo;


