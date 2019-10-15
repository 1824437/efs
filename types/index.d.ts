type path  = string;
type depth = number;
type callback = () => void;
type isBoolean = boolean;

export declare namespace efs {

  function eachDir (config : {
    depth: depth, 
    _path: path, 
    forEachCb: callback, 
    cb: callback
  }) : void;

   function cat (config: {
    _path: path, 
    ext: string[],
    cb: callback, 
    isClearComment: isBoolean
  }) : string|undefined

}

