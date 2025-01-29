import 'css-doodle';

function LinesAnimation() {
  return (
    <div style={{ width: '100vw', height: '90vh', margin: 'auto', position: 'fixed', top: '5vh' }}>
      <css-doodle>{`
        :doodle {
          @grid: 500x1/ 100%;
          width: 100%;
          height: 100%;
        }
        
        :container {
          perspective: 10vmin;
          width: 100%;
          height: 100%;
        }

        @place-cell: center;
        @size: 40% 3px;

        will-change: transform, opacity;
        transform-style: preserve-3d;

        background: linear-gradient(to left,
          @multi(@p([2-4]), @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d)),
          transparent @r(90%)
        );

        animation: move @r(1s, 2s, .1) linear infinite;
        animation-delay: -@r(.1s, 2s);

        --trans:
          translateX(50%)
          rotateX(@r(-180deg, 180deg))
          rotateY(@r(-180deg, 180deg))
          rotateZ(@r(-180deg, 180deg));

        transform-origin: 0 center;
        transform: var(--trans) scale(2);
        opacity: 0;

        @keyframes move {
          20% { opacity: 1; }
          100% { transform: var(--trans) scale(0); }
        }
      `}</css-doodle>
    </div>
  );
}

export default LinesAnimation;