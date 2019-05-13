import { asyncLoop, inverseAsyncLoop } from './index';

test('Simple iterator', done => {
    let sum = 0;
    asyncLoop([1, 2, 3], (item, loop) => {
        setTimeout(() => {
            sum += item;
            loop.next();
        });
    }, () => {
        expect(sum).toBe(6);
        done();
    });
});

test('Simple inverse iterator', done => {
    let arr = [];
    inverseAsyncLoop([1, 2, 3], (item, loop) => {
        setTimeout(() => {
            arr.push(item);
            loop.next();
        });
    }, () => {
        expect(arr[0]).toBe(3);
        expect(arr[1]).toBe(2);
        expect(arr[2]).toBe(1);
        done();
    });
});

test('Cancel loop', done => {
    let sum = 0;
    asyncLoop([1, 2, 3], (item, loop) => {
        setTimeout(() => {
            if (item === 3) {
                return loop.break();
            }
            sum += item;
            loop.next();
        });
    }, () => {
        expect(sum).toBe(3);
        done();
    });
});

test('Test indexes', done => {
    let sum = 0;
    asyncLoop([1, 1, 1], (item, loop) => {
        setTimeout(() => {
            sum += loop.iteration();
            loop.next();
        });
    }, () => {
        expect(sum).toBe(3);
        done();
    });
});