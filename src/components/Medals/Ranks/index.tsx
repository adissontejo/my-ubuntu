import { FC } from 'react';

import { Medal } from '~/data/medals';

import { Container, Rank } from './styles';

export type RanksProps = Medal;

export const Ranks: FC<RanksProps> = ({ name, src, fullName, year, ranks }) => (
  <Container className="slide">
    <div className="wrapper">
      <div className="header">
        <img src={src} alt={name} className="icon" />
        <h1 className="title">{name}</h1>
        <h3 className="subtitle">
          {fullName}
          <br />
          {year}
        </h3>
      </div>
      <div className="content">
        {ranks.map((item, index) => (
          <Rank key={index}>
            <img src={item.src} alt={item.name} className="icon" />
            <p className="alt">
              {item.name}
              {item.mode && (
                <>
                  <br />
                  {item.mode}
                </>
              )}
            </p>
          </Rank>
        ))}
      </div>
    </div>
  </Container>
);
