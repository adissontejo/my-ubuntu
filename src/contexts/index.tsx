import { GithubProvider } from './github';
import { WindowsProvider } from './windows';

export const ContextProvider = ({ children }) => (
  <GithubProvider>
    <WindowsProvider>{children}</WindowsProvider>
  </GithubProvider>
);

export * from './github';
export * from './windows';
