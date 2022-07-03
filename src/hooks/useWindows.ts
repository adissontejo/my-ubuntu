import { useContext } from 'react';

import { WindowsContext } from '~/contexts';

export const useWindows = () => useContext(WindowsContext);
