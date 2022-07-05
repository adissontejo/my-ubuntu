import { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Container, Indicator, Wrapper } from './styles';

export type CarouselProps<U> = {
  data: U[];
  pos: number;
  forward: boolean;
  render: (item: U, index: number) => ReactNode;
};

export function Carousel<U>({ data, pos, forward, render }: CarouselProps<U>) {
  return (
    <Container>
      {data.map((item, index) => (
        <CSSTransition
          key={index}
          classNames="slide"
          timeout={1000}
          in={index === pos}
        >
          <Wrapper
            key={index}
            show={index === pos}
            forward={forward}
            className="slide"
          >
            {render(item, index)}
          </Wrapper>
        </CSSTransition>
      ))}
      <div className="indicators">
        {data.map((item, index) => (
          <Indicator key={index} show={index === pos} />
        ))}
      </div>
    </Container>
  );
}
