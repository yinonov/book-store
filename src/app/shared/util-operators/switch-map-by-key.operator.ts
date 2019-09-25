import { Observable, OperatorFunction, EMPTY } from 'rxjs';
import {
    tap,
    groupBy,
    timeoutWith,
    ignoreElements,
    map,
    switchMap,
    mergeAll
} from 'rxjs/operators';

export function switchMapByKey<T, V>(
    keySelector: (item: T) => number,
    mapFn: (item: T) => Observable<V>
): OperatorFunction<T, V> {
    return observable$ =>
        observable$.pipe(
            groupBy(
                keySelector,
                item => item,
                itemsByGroup$ =>
                    itemsByGroup$.pipe(
                        // 15 seconds is the maximum timeout for http request
                        timeoutWith(15000, EMPTY),
                        ignoreElements()
                    )
            ),
            map((itemGroup$: Observable<T>) => itemGroup$.pipe(switchMap(mapFn))),
            mergeAll()
        );
}
