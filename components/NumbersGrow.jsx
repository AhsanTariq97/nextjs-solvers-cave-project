import React, { useState, useEffect, useRef } from 'react';

const NumbersGrow = ({ increments, targetValue }) => {
  const time = 2000 / targetValue;
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsIntersecting(entry.isIntersecting);
      });
    });
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) {
      return;
    }

    let intervalId = setInterval(() => {
      if (value >= targetValue) {
        clearInterval(intervalId);
        return;
      }
      setValue(value + increments);
    }, time);
    return () => clearInterval(intervalId);
  }, [isIntersecting, value, targetValue]);

  return (
    <div ref={ref}>
      {value}
    </div>
  );
};

export default NumbersGrow;
