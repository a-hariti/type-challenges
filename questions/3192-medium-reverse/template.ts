type Reverse<T> = T extends [head: infer H, ...tail: infer Tail] ? [...MyReverse<Tail>, H] : [];
