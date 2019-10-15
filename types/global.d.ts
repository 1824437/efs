import { execFileSync } from "child_process";

export as namespace efs;
type path  = string;
type depth = number;
type callback = () => void;
type isBoolean = boolean;

export = efs;
declare interface efs {

  eachDir: (config : {
    depth: depth, 
    _path: path, 
    forEachCb: callback, 
    cb: callback
  }) => void;
  
   cat: (config: {
    _path: path, 
    ext: string[],
    cb: callback, 
    isClearComment: isBoolean
  }) => string|undefined

}