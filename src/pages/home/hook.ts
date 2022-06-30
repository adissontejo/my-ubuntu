import { useState } from 'react';

import { DockItemProps, WindowProps } from '~/components';

export const useWindows = () => {
  type State = Record<string, Partial<WindowProps>>;

  const [windows, setWindows] = useState<State>({});

  const [order, setOrder] = useState<string[]>([]);

  const focus = order
    .filter(item => windows[item] && !windows[item].minimized)
    .pop();

  const positions = order.reduce<Record<string, number>>(
    (acc, curr, index) => ({ ...acc, [curr]: index }),
    {}
  );

  const bringWindowUp = (key: string) => {
    setOrder(prev => [...prev.filter(item => item !== key), key]);
  };

  const bringWindowDown = (key: string) => {
    setOrder(prev => [key, ...prev.filter(item => item !== key)]);
  };

  const action = (key: string) => {
    bringWindowUp(key);

    setWindows(prev => ({
      ...prev,
      [key]: {
        closed: false,
        minimized: false,
      },
    }));
  };

  const registerDockItem = (key: string): Partial<DockItemProps> => ({
    action: () => action(key),
    open: !!windows[key],
    focus: key === focus,
  });

  const onClose = (key: string) => {
    setWindows(prev => ({ ...prev, [key]: undefined }));
  };

  const onMinimize = (key: string) => {
    bringWindowUp(key);

    setWindows(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        minimized: true,
      },
    }));
  };

  const registerWindow = (key: string): Partial<WindowProps> => ({
    closed: true,
    ...(windows[key] || {}),
    positionZ: positions[key] + 1,
    onClose: () => onClose(key),
    onMinimize: () => onMinimize(key),
    bringWindowUp: () => bringWindowUp(key),
    bringWindowDown: () => bringWindowDown(key),
  });

  return { registerDockItem, registerWindow };
};
