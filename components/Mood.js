import { useEffect, useRef } from 'react';

import Link from 'next/dist/client/link';
import styles from '../styles/Mood.module.css';

import lottie from 'lottie-web';

export default function Mood(props) {
  const lottieWrapper = useRef(null);
  const lottieFile = props.mood.lottie;
  const colors = props.mood.colors;

  const color1 = `rgb(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]})`;
  const color2 = `rgb(${colors[1][0]}, ${colors[1][1]}, ${colors[1][2]})`;

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieWrapper.current,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: lottieFile,
    });

    return () => {
      lottie.destroy();
    };
  }, [lottieFile]);

  return (
    <div style={{ background: `linear-gradient(45deg, ${color1}, ${color2})` }}>
      <Link
        href={{
          pathname: '/moods/[slug]',
          query: {
            slug: props.mood.key,
            gender: props.gender?.query,
          },
        }}
      >
        <a>
          <div className={styles.mood}>
            <h2>{props.mood.name}</h2>
            <div
              ref={lottieWrapper}
              className={styles.lottie}
              onMouseEnter={() => lottie.play()}
              onMouseLeave={() => lottie.pause()}
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
