import { HTMLAttributes, useEffect, useMemo, useRef, useState } from 'react';

function MovingBand({ className }: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [paragraphQuantity, setParagraphQuantity] = useState<number>(() => {
    if (ref.current) {
      const paragraphWidth = ref.current.getBoundingClientRect().width;
      const windowWidth = window.innerWidth;
      return Math.ceil(windowWidth / paragraphWidth);
    }
    return 1;
  });

  const handleResize = useMemo(
    () => () => {
      if (ref.current) {
        const paragraphWidth = ref.current.getBoundingClientRect().width;
        const windowWidth = window.innerWidth;
        setParagraphQuantity(Math.ceil(windowWidth / paragraphWidth));
      }
    },
    [],
  );

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  return (
    <div className={`flex w-screen bg-black ${className ?? ''}`}>
      {Array.from({ length: paragraphQuantity ?? 1 }).map((_, index) => (
        <p
          ref={ref}
          key={`p-${index.toString()}`}
          className="py-6 mx-2 uppercase font-chivo text-background text-2xl"
        >
          open to work
        </p>
      ))}
    </div>
  );
}

export default MovingBand;
