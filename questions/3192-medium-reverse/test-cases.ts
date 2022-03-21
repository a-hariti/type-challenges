import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<MyReverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
]
