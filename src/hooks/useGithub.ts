import { useContext } from 'react';

import { GithubContext } from '~/contexts';

export const useGithub = () => useContext(GithubContext);
