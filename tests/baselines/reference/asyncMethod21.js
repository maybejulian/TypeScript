//// [asyncMethod21.ts]
declare class Promise<T> {
    constructor(init: (resolve: (value?: T | IPromise<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromise<TResult>, onrejected?: (reason: any) => TResult | IPromise<TResult>): Promise<TResult>;
}

var o = {
  async bar(): Promise<void> {
    // 'await' here is an identifier, and not a yield expression.
    async function foo(a = await): Promise<void> {
    }
  }
}

//// [asyncMethod21.js]
var o = {
    bar: function () {
        // 'await' here is an identifier, and not a yield expression.
        function foo(a) {
            if (a === void 0) { a = await; }
            return new Promise(function (_resolve) {
                _resolve(__awaiter(__generator(function (_state) {
                    return [2 /*return*/];
                })));
            });
        }
        return new Promise(function (_resolve) {
            _resolve(__awaiter(__generator(function (_state) {
                return [2 /*return*/];
            })));
        });
    }
};