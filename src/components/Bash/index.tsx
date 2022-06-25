import { useState } from 'react';

import { Container } from './styles';
import { BashLine } from '../BashLine';

export const Bash = () => {
  const [bashes, setBashes] = useState(['']);

  return (
    <Container>
      <header>Terminal</header>
      <div className="content">
        {bashes.map((item, index) => (
          <BashLine
            key={String(index)}
            onSubmit={() => setBashes(prev => [...prev, ''])}
          />
        ))}
      </div>
    </Container>
  );
};
