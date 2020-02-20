import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

let i = 0;

// const stream$ = new Subject();

// const stream$ = new BehaviorSubject(i++);

const stream$ = new ReplaySubject(1);
stream$.next(i++);
stream$.next(i++);

stream$.subscribe(value => console.log(value));


document.addEventListener('click', () => {

  stream$.next(i++);

});


