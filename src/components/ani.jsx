import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ani = () => {
  return (
    <div style={{ width: '100%', height: '100%', minWidth: '300px', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <DotLottieReact
        src="https://lottie.host/ead78542-ec1b-441b-a9e0-cad5306c2a87/Qc81djbfz4.lottie"
        loop
        autoplay
        width={300}
        height={300}
      />
    </div>
  );
};

export default ani;
