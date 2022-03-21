type MyReverse<T extends any[]> = T extends [head: infer H, ...tail: infer Tail] ? [...MyReverse<Tail>, H] : [];
type Tail_<T extends any[]> = T extends [head: any, ...tail: infer tail] ? tail : [];

type Pop<T extends any[]> =  MyReverse<Tail_<MyReverse<T>>>
