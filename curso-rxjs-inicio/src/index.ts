import { Observable } from 'rxjs';

const obj$ = new Observable<string>(subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');
    subscriber.complete();
});

obj$.subscribe(console.log);

obj$.subscribe(
    resp => console.log('next ', resp),
    error => console.log('Error ', error),
    () => console.log('complete')  
);





