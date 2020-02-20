import { interval, fromEvent } from 'rxjs';
import { map, filter, tap, take, takeLast, takeWhile, scan, reduce, switchMap } from 'rxjs/operators';


const stream$ = interval(200).pipe(
  tap(value => console.log("Tap1: ", value)),
  map(value => value * 2),
  tap(value => console.log("Tap2: ", value)),
  filter(value => value % 10 === 0),
  take(10),
  takeWhile(value => value <= 70),
  takeLast(2),
  scan((acc, value) => acc + value),
  tap(value => console.log("- ", value)),
  reduce((acc, value) => acc + value)
);

const stream2$ = fromEvent(document, 'click')
  .pipe(
    switchMap(_event => stream$)
  );

stream2$.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("Completed");
  }
})
