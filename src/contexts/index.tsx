import { GithubProvider } from './github';

export const ContextProvider = ({ children }) => (
  <GithubProvider>{children}</GithubProvider>
);

export * from './github';
