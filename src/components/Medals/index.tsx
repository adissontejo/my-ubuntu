import { FC } from 'react';

import { Medal, medals } from '~/data/medals';
import { useCarousel } from '~/hooks';

import { Container } from './styles';
import { Window, WindowProps } from '../Window';
import { Carousel } from '../Carousel';
import { Ranks } from './Ranks';

export type MedalsProps = WindowProps;

export const Medals: FC<WindowProps> = ({ ...rest }) => {
  const { pos, previous, next, forward } = useCarousel(medals);

  return (
    <Window
      title="Medalhas"
      defaultWidthPercent={60}
      defaultHeightPercent={80}
      backEnabled
      forwardEnabled
      navigateEnabled
      onBack={previous}
      onForward={next}
      minWidth={500}
      minHeight={500}
      {...rest}
    >
      <Container>
        <Carousel
          data={medals}
          render={(item: Medal) => <Ranks {...item} />}
          pos={pos}
          forward={forward}
        />
      </Container>
    </Window>
  );
};
