type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer Args) => infer R
    ? (...args: Reverse<Args>) => R
    : never;
