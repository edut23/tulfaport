import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Product from '../../Assets/ProductOne.jpg'

const Example = () => {
  // Configuração da animação de zoom e desvanecimento
  const [ref, inView] = useInView({ threshold: 0.5 });


  const textOverlay = useSpring({
    opacity: inView ? 1 : 0,
    delay: 1000,
    transform: inView ? 'translate(0px, -400px)' : 'translate(0px, 200px)',
    config: { mass: 1, tension: 200, friction: 60 },
  });

  const imageMove = useSpring({
    opacity: inView ? 1 : 0,
    delay: 2500,
    transform: inView ? 'translate(0px, 30px)' : 'translate(0px, 500px)',
    config: { mass: 1, tension: 200, friction: 60 },
  });

  return (
    <div style={{ height: '120vh', overflow: 'hidden', backgroundColor: '#FFFFFF', zIndex: 1, display: 'flex' }}>

      {/* Texto sobreposto */}
      <div ref={ref} 
        style={{ 
            height: '100vh',
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: '#FFFFFF', 
            overflow: 'hidden'
        }}>
        <animated.h1
          style={{
            ...textOverlay,
            fontSize: '5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #433E99, #EF4B32)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            padding: '20px 40px',
            width: '90%',
            position: 'absolute',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',
            //mixBlendMode: 'screen', // Efeito de diferença
          }}
        >
          Virtual Product Photography
        </animated.h1>

        <animated.img src={Product} style={{...imageMove, width: '80vw'}} />
      </div>
    </div>
  );
};

export default Example;