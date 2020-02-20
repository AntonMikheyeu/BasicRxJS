import { of, from, Observable, fromEvent, interval, timer, range } from 'rxjs';
import { filter, scan, map } from 'rxjs/operators';

// const stream$ = of(1,2,3,4,5,6,7);

// stream$.subscribe(value => {
//   console.log(value);
// });

// const arr$ = from([1,2,3,4,5,6,7]);

// arr$.pipe(filter(value => value > 3), scan((acc, value) => [...acc, value], [])).subscribe(value => {
//   console.log(value);
// });

// const stream$ = new Observable(observer => {
//   let i = 0;

//   setInterval(() => observer.next(i++), 1000);

//   setTimeout(() => observer.error(new Error("Hello")), 10000);

//   setTimeout(() => observer.complete(), 5000);

// });

// stream$.subscribe(value => {
//   console.log(value);
// }, error => console.log(error), () => console.log("Compl"));

// setTimeout(() => {
//   stream$.subscribe({
//     next(value) {
//       console.log(value);
//     },
//     error(error) {
//       console.log(error);
//     },
//     complete() {
//       console.log("Completed");
//     }
//   });
// }, 3000);

// const canvas = document.querySelector('canvas');
// const clear = document.getElementById('clear');

// fromEvent(canvas, 'mousemove')
//   .pipe(
//     map(({ offsetX: x, offsetY: y, target }) => ({
//       x,
//       y,
//       ctx: target.getContext('2d')
//     }))
//   )
//   .subscribe(({ x, y, ctx }) => {
//     ctx.fillRect(x, y, 2, 2);
//   });

// const clear$ = fromEvent(clear, 'click');

// clear$.subscribe(() => canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height));

// const sub = interval(200).subscribe(value => console.log(value));

// setTimeout(() => sub.unsubscribe(), 2000);

// timer(500).subscribe(value => console.log(value));

range(55, 10).subscribe(value => console.log(value));
