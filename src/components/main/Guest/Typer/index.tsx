import { type PropsWithChildren, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

interface TyperProps {
  sequence: Sentence[];
  span: {
    fill: number;
    full: number;
    erase: number;
    empty: number;
  };
  onSentenceChange?: (sentence: Sentence, index: number) => void;
}

type Sentence = {
  text: string;
  style?: {
    color?: string;
  };
}[];

const Typer = (props: PropsWithChildren<TyperProps>) => {
  const { sequence, span, onSentenceChange } = props;

  const startTimestampRef = useRef(Date.now());
  const [sequenceId, setSequenceId] = useState(0);
  const [charId, setCharId] = useState(0);

  const currentSeqId = sequenceId % sequence.length;
  const currentSeq = sequence[currentSeqId];

  const flatten = currentSeq.flatMap((token, tokenIdx) => {
    return [...token.text].map((char, charIdx) => {
      return (
        <Char key={`${tokenIdx}-${token.text.slice(0, charIdx)}`} color={token.style?.color}>
          {char}
        </Char>
      );
    });
  });

  const filtered = flatten.slice(0, charId);

  useEffect(() => {
    let rafToken: ReturnType<typeof requestAnimationFrame> | null = null;
    const startTimestamp = startTimestampRef.current;
    const iterSpan = span.fill + span.full + span.erase + span.empty;

    function raf() {
      const currentTimestamp = Date.now();
      const elapsed = currentTimestamp - startTimestamp;

      const iterSeq = Math.floor(elapsed / iterSpan);
      const iterProgress = elapsed % iterSpan;

      // console.log('elapsed', elapsed, 'iterSeq', iterSeq, 'iterProgress', iterProgress, 'sequenceId', sequenceId);
      if (sequenceId != iterSeq) {
        setSequenceId(iterSeq);
        onSentenceChange?.(sequence[iterSeq % sequence.length], iterSeq % sequence.length);
      }

      const s = sequence[iterSeq % sequence.length];
      const n = s.reduce((prev, k) => k.text.length + prev, 0);

      // console.log('s', s, 'n', n);

      if (iterProgress <= span.fill) {
        const charSpan = Math.floor(span.fill / n);
        setCharId(Math.floor(iterProgress / charSpan));
      } else if (iterProgress <= span.fill + span.full) {
        setCharId(n);
      } else if (iterProgress <= span.fill + span.full + span.erase) {
        const charSpan = Math.floor(span.erase / n);
        const fillProgress = iterProgress - (span.fill + span.full);
        setCharId(Math.max(0, n - Math.floor(fillProgress / charSpan)));
      } else {
        setCharId(0);
      }

      rafToken = requestAnimationFrame(raf);
    }

    raf();

    return () => {
      if (rafToken != null) {
        cancelAnimationFrame(rafToken);
      }
    };
  }, [sequence, span, onSentenceChange]);

  return <>{filtered}</>;
};

export default Typer;

const Char = styled.span<{ color?: string }>`
  color: ${(props) => props.color ?? 'unset'};
`;
