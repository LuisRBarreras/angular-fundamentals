import { Component } from '@angular/core';

interface Child {
  name: string;
  age: number;
}

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate: number | null;
  children: Child[] | null;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input
        type="text"
        [value]="name"
        (input)="handleChange($event.target.value)"
      />
      <div *ngIf="name.length > 2">Searching for... {{ name }}</div>

      <h3>Airline Passengers</h3>

      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
          <div class="date">
            Check in date:
            {{
              passenger.checkInDate
                ? (passenger.checkInDate | date: 'yMMMMd' | uppercase)
                : 'Not checked in'
            }}
          </div>
          <div class="children">
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  name: string = '';
  handleChange(value: string) {
    this.name = value;
  }

  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Nicolas', age: 5 }]
    },
    {
      id: 3,
      fullname: 'Luis',
      checkedIn: true,
      checkInDate: null,
      children: [{ name: 'Ted', age: 15 }]
    }
  ];
}
