type ReturnSagaType<T extends Function> =
  T extends (...args: any[]) => Generator<V, infer R, N> ? R :
    T extends (...args: any[]) => Promise<infer V> ? V :
      T extends (...args: any[]) => infer V ? V : any;
