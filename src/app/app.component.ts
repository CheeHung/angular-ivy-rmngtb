import { Component, VERSION } from '@angular/core';
import { of, from } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 8)
      .pipe(
        // tap(item => console.log(item)),
        map(item => item * 2),
        take(2)
      )
      .subscribe(console.log);

    from([2, 4, 6, 8]).subscribe(
      item => console.log(`item... ${item}`),
      err => console.error(`error occurred ${err}`),
      () => console.log(`complete`)
    );
  }
}
