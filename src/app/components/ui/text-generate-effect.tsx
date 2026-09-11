import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '../../../lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const linesArray = words.split('\n');

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      },
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {linesArray.map((line, lineIdx) => {
          return (
            <span key={`line-${lineIdx}`} className="block">
              {line
                .split(' ')
                .filter(Boolean)
                .map((word, idx) => {
                  return (
                    <motion.span
                      key={`line-${lineIdx}-word-${idx}`}
                      className="text-black opacity-0"
                      style={{
                        filter: filter ? 'blur(10px)' : 'none',
                      }}
                    >
                      {word}{' '}
                    </motion.span>
                  );
                })}
            </span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('text-black', className)}>
      <div className="mt-4">
        <div className="text-inherit">{renderWords()}</div>
      </div>
    </div>
  );
};
