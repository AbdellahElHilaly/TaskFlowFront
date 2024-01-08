export  interface ValidationError{
  timestamp: string;
  message: string;
  path: string;
  details: {
    [key: string]: Array<string>;
  };
}
