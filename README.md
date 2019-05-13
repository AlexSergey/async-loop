# Asyncloops

Async loop and inverse async loop

```js
import { asyncLoop, inverseAsyncLoop } from 'asyncloops';

asyncLoop(items, (item, loop) => {
    //.. async logic
    loop.iteration() // return index of array iteration
    loop.next() // next iteration
    loop.break() // cancel loop
}, () => {
    // it calls after all iterations
})
```