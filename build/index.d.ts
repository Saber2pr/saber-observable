declare module "lib/Observable" {
    /**
     * compose
     *
     * @export
     * @template argType
     * @param {...Array<(...args: argType[]) => argType>} funcs
     * @returns
     */
    export function compose<argType>(...funcs: Array<(...args: argType[]) => argType>): (...args: argType[]) => argType;
    /**
     * clone
     *
     * @export
     * @template T
     * @param {T} value
     * @returns {T}
     */
    export function clone<T>(value: T): T;
    /**
     * Observer
     *
     * @export
     * @interface Observer
     * @template T
     */
    export interface Observer<T> {
        (state: T): void;
    }
    export interface UnSubscribe<T> {
        (): Observer<T>[];
    }
    /**
     * Observable
     *
     * @export
     * @class Observable
     * @template T
     */
    export class Observable<T = any> {
        /**
         *Creates an instance of Observable.
         * @param {T} state
         * @memberof Observable
         */
        constructor(state: T);
        protected state: T;
        private observers;
        /**
         * subscribe
         *
         * @param {Observer<T>} observer
         * @returns {UnSubscribe<T>}
         * @memberof Observable
         */
        subscribe(observer: Observer<T>): UnSubscribe<T>;
        /**
         * pipe
         *
         * @param {...Array<(...args: T[]) => T>} funcs
         * @memberof Observable
         */
        pipe(...funcs: Array<(...args: T[]) => T>): this;
        /**
         * push
         *
         * @param {T} state
         * @memberof Observable
         */
        push(state: T): this;
        /**
         * pull
         *
         * @returns {T}
         * @memberof Observable
         */
        pull(): T;
    }
}
declare module "test/test" { }
