import { useState } from 'react';

import { DockItemProps, WindowProps } from '~/components';

export const useWindows = () => {
  type State = Record<string, Partial<WindowProps>>;

  const [windows, setWindows] = useState<State>({});

  const registerDockItem = (key: string): Partial<DockItemProps> => ({
    action: () =>
      setWindows(prev => ({
        ...prev,
        [key]: {
          minimized: false,
          onClose: () => setWindows(prev => ({ ...prev, [key]: undefined })),
          onMinimize: () =>
            setWindows(prev => ({
              ...prev,
              [key]: {
                ...prev[key],
                minimized: true,
              },
            })),
        },
      })),
    open: !!windows[key],
    focus:
      Object.keys(windows)
        .filter(key => windows[key] && !windows[key].minimized)
        .pop() === key,
  });

  return { windows, registerDockItem };
};
