import { Injectable } from '@angular/core';
import { Passenger } from './models/passenger.interface';
import { Http } from '@angular/http';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Passenger[] {
    return [
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
}
