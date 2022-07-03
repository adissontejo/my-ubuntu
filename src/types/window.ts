import { BashProps, NautilusProps } from '~/components';

export type Windows = {
  bash?: BashProps;
  nautilus?: NautilusProps;
};

export type WindowKey = keyof Windows;

export type WindowValue = Windows[WindowKey];
