export type Dir = {
  name: string;
  src?: string;
  folders?: Dir[];
  files?: {
    name: string;
    type: string;
    src?: string;
  }[];
};
