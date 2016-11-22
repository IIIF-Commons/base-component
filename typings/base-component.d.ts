interface Window {
    _Components: any;
}

// remove if https://github.com/scottcorgan/tiny-emitter/pull/14 is merged
interface EventEmitter {
  on   (event: string, callback: Function, ctx?: any): EventEmitter;
  once (event: string, callback: Function, ctx?: any): EventEmitter;
  emit (event: string, ...args: any[]): EventEmitter;
  off  (event: string, callback?: Function): EventEmitter;
}