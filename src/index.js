import { isFunction, isArray } from 'valid-types';
/*
 * example
 * loop.iteration() // return index of array iteration
 * loop.next() // next iteration
 * loop.break() // cancel loop
 */
const asyncLoop = (items, func, callback) => {
    if (!isArray(items)) {
        return false;
    }

    let iterations = items.length;

    if (iterations === 0) {
        return false;
    }

    let index = 0;
    let done = false;
    let loop = {
        next: function() {
            if (done) {
                return;
            }

            if (index < iterations) {
                index++;
                let item = items[loop.iteration()];
                func(item, loop);

            } else {
                done = true;
                if (isFunction(callback)) {
                    callback();
                }
            }
        },

        iteration: function() {
            return index - 1;
        },

        break: function() {
            done = true;
            if (isFunction(callback)) {
                callback();
            }
        }
    };
    loop.next();
    return loop;
};

const inverseAsyncLoop = (items, func, callback) => {
    if (!isArray(items)) {
        return false;
    }

    let iterations = items.length;

    if (iterations === 0) {
        return false;
    }

    let index = iterations + 1;
    let done = false;
    let loop = {
        next: function() {
            if (done) {
                return;
            }

            if (index === 0) {
                done = true;
                if (isFunction(callback)) {
                    callback();
                }
            } else {
                index--;
                let item = items[loop.iteration()];
                func(item, loop);
            }
        },

        iteration: function() {
            return index - 1;
        },

        break: function() {
            done = true;
            if (isFunction(callback)) {
                callback();
            }
        }
    };
    loop.next();
    return loop;
};

export { asyncLoop, inverseAsyncLoop }