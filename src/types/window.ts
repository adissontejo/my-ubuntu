import { BashProps, MedalsProps, NautilusProps } from '~/components';

export type Windows = {
  bash?: BashProps;
  medals?: MedalsProps;
  nautilus?: NautilusProps;
};

export type WindowKey = keyof Windows;

export type WindowValue = Windows[WindowKey];
