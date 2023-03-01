import { useEffect } from 'react';
import { useRef } from 'react';

const Spinner = () => {
  const circleRef = useRef<SVGCircleElement>(null);
  const animateRef = useRef<SVGAnimateElement>(null);

  useEffect(() => {
    if (circleRef.current && animateRef.current) {
      const totalL = circleRef.current.getTotalLength() || 0;
      const quarterL = totalL / 4;

      circleRef.current.style.strokeDasharray = `${quarterL} ${ totalL - quarterL}`;

      animateRef.current.setAttribute('from', String(quarterL));
      animateRef.current.setAttribute('to', String(-totalL));
      animateRef.current.setAttribute('from', '0');
    } 
  }, []);

  return (
    <svg width="3em" height="3em">
      <circle cx="1.5em" cy="1.5em" r="1em" fill="none" stroke="#f3f4f6" strokeWidth="4px" />
      <circle ref={circleRef} cx="1.5em" cy="1.5em" r="1em" fill="none" stroke="#0e99e9" strokeWidth="4px" strokeLinecap="round">
        <animate ref={animateRef} attributeName="stroke-dashoffset" repeatCount="indefinite" restart="always" dur="500ms"/>
      </circle>
    </svg>
  );
}

export default Spinner;