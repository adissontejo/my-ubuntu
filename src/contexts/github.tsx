import { createContext, useEffect, useState } from 'react';

import { getRepositories } from '~/services/github/repositories';

export type GithubContextProps = {
  repos: string[];
};

export const GithubContext = createContext<GithubContextProps>({ repos: [] });

export const GithubProvider = ({ children }) => {
  const [repos, setRepos] = useState<string[]>([]);

  useEffect(() => {
    const request = async () => {
      const response = await getRepositories();

      setRepos(response.data.map(item => item.name));
    };

    request();
  }, []);

  return (
    <GithubContext.Provider value={{ repos }}>
      {children}
    </GithubContext.Provider>
  );
};
