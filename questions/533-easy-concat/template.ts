type Tail<A extends any[]> = A extends [head: any, ...tail: infer tail] ? tail: [];

type Concat<T extends any[], U extends any[]> = U extends []
    ? T
    : Concat<[...T, U[0]], Tail<U>>;

type t = Concat<[1, 2], [3, 4]>;
