import { createContext, MutableRefObject, useRef, useState } from 'react';

import { Windows, WindowKey } from '~/types';

export type WindowsContextProps = {
  windows: Windows;
  order: WindowKey[];
  positions: Partial<Record<WindowKey, number>>;
  focus?: WindowKey;
  openWindow: (key: WindowKey) => void;
  minimizeWindow: (key: WindowKey) => void;
  softCloseWindow: (key: WindowKey) => void;
  closeWindow: (key: WindowKey) => void;
  main: MutableRefObject<HTMLElement>;
};

export const WindowsContext = createContext<WindowsContextProps>({
  windows: {},
  order: [],
  positions: {},
  focus: null,
  openWindow: () => null,
  minimizeWindow: () => null,
  softCloseWindow: () => null,
  closeWindow: () => null,
  main: null,
});

export const WindowsProvider = ({ children }) => {
  const [windows, setWindows] = useState<Windows>({});

  const order = useRef<WindowKey[]>([]);

  const focus = order.current
    .filter(
      item => windows[item] && !windows[item].minimized && !windows[item].closed
    )
    .pop();

  const positions = order.current.reduce<Record<string, number>>(
    (acc, curr, index) => ({ ...acc, [curr]: index }),
    {}
  );

  const main = useRef<HTMLElement>();

  const bringWindowUp = (key: WindowKey) => {
    order.current = order.current.filter(item => item !== key);

    order.current.push(key);
  };

  const openWindow = (key: WindowKey) => {
    const window = windows[key];

    if (window) {
      setWindows(prev => ({
        ...prev,
        [key]: {
          ...window,
          minimized: false,
        },
      }));
      bringWindowUp(key);

      return;
    }

    setWindows(prev => ({
      ...prev,
      [key]: {
        minimized: false,
        closed: false,
      },
    }));
    bringWindowUp(key);
  };

  const minimizeWindow = (key: WindowKey) => {
    const window = windows[key];

    if (!window) {
      return;
    }

    setWindows(prev => ({
      ...prev,
      [key]: {
        ...window,
        minimized: true,
      },
    }));
    bringWindowUp(key);
  };

  const softCloseWindow = (key: WindowKey) => {
    const window = windows[key];

    if (!window) {
      return;
    }

    setWindows(prev => ({
      ...prev,
      [key]: {
        ...window,
        closed: true,
      },
    }));
    bringWindowUp(key);
  };

  const closeWindow = (key: WindowKey) => {
    setWindows(prev => ({
      ...prev,
      [key]: undefined,
    }));
  };

  return (
    <WindowsContext.Provider
      value={{
        windows,
        order: order.current,
        positions,
        focus,
        openWindow,
        minimizeWindow,
        softCloseWindow,
        closeWindow,
        main,
      }}
    >
      {children}
    </WindowsContext.Provider>
  );
};
