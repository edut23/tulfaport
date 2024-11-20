import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './HighlightText.css'; // CSS personalizado

const HighlightText = () => {
  const sentences = [
    "Lorem ipsum dolor sit amet.",
    "Quo odit atque ut architecto obcaecati rem",
    "vitae tempore non asperiores consequatur",
    "ut error facilis est architecto",
    "doloribus eos laborum praesentium!"
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="container">
        <p className="paragraph">
            {sentences.map((sentence, index) => (
            <Sentence
                key={index}
                text={sentence}
                isActive={index === activeIndex}
                onChange={(inView) => inView && setActiveIndex(index)}
            />
            ))}
      </p>
    </div>
  );
};

const Sentence = ({ text, isActive, onChange }) => {
  const { ref, inView } = useInView({
    threshold: 1, // Quando 60% da frase está visível
    triggerOnce: false,
  });

  // Atualiza o estado de visibilidade
  React.useEffect(() => {
    onChange(inView);
  }, [inView, onChange]);

  return (
    <span
      ref={ref}
      className={`sentence ${isActive ? 'highlight' : ''}`}
    >
      {text + " "}
    </span>
  );
};
export default HighlightText;