type First<T extends any[]> = T extends [head: infer H, ...tail: any[]] ? H : never;
