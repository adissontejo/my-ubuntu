import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Container } from './styles';

export const Header = () => {
  const getDate = () => {
    return format(new Date(), "iiiiii dd 'de' MMM HH:mm", { locale: ptBR });
  };

  const [date, setDate] = useState(getDate());

  useEffect(() => {
    setInterval(() => {
      setDate(getDate());
    }, 1000);
  }, []);

  return (
    <Container>
      <small>{date}</small>
    </Container>
  );
};
