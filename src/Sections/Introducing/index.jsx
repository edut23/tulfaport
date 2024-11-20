import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import BackImage from '../../Assets/backImage.png'

const Introducing = () => {
  // Configuração da animação de zoom e desvanecimento
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [refTotal, outView] = useInView({ threshold: 0.1 });

  const imageZoom = useSpring({
    opacity: 1,
    transform: inView ? 'scale(1.5)' : 'scale(1)',
    delay: inView ? 0 : 1000,
    //transitionDelay: '5s',
    config: { mass: 1, tension: 200, friction: 60},
  });

  const textOverlay = useSpring({
    opacity: 1,
    transform: inView ? 'scale(190)' : 'scale(1)',
    config: { mass: 1, tension: 200, friction: 60 },
  });

  return (
    <div ref={refTotal} style={{ height: '210vh', overflow: 'hidden', position: 'relative' }}>
      {/* Imagem de fundo */}
      <animated.img
        src={BackImage}
        style={{
          ...imageZoom,
          backgroundImage: 'url(https://cdn.wallpaperhub.app/cloudcache/6/9/0/e/e/f/690eefe3ba1f553e0ea527f51ee407b604b681b4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          position: 'fixed',
          width: '100%',
          top: 0,
          left: 0,
        }}
      />

      <div ref={ref} style={{height: '90vh', width: '100vw'}} />

      {/* Texto sobreposto */}
      <div style={{ height: '120vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <animated.h1
          style={{
            ...textOverlay,
            fontSize: '10rem',
            fontWeight: 'bold',
            color: '#000000',
            backgroundColor: 'white',
            padding: '20px 40px',
            width: '100vw',
            height: '120vh',
            display: 'flex',
            position: 'absolute',
            justifyContent: 'center', 
            alignItems: 'center',
            mixBlendMode: 'screen', // Efeito de diferença
          }}
        >
          Introducing
        </animated.h1>
      </div>
    </div>
  );
};

export default Introducing;