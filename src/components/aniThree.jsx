import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AniThree = () => {
  return (
    <div style={{ width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <DotLottieReact
        src="https://lottie.host/ea506f50-fb8f-4eaa-bf6c-caff22629c41/IymiVCpvcd.lottie"
        loop
        autoplay
        width={300}
        height={300}
      />
    </div>
  );
};

export default AniThree;