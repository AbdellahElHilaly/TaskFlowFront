export interface SimpleError{
  timestamp:string;
  message:string;
  details: Array<any>;
  "path": string;
}
