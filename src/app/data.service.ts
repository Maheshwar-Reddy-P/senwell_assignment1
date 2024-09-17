import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // This Function is used to get data
  getNames() {
    return [
      'Mahesh', 'Rajesh', 'Rakesh', 'Mahesh', 'Abhi', 'Madhu', 'Mahendra','Mahesh', 'Abhi', 'Abhi',
       'Abhi',  'Abhi',  'Abhi', 'Abhi', 'Abhi', 'Abhi', 'Abhi',  'Abhi', 'Rakesh', 'Mahesh', 'Abhi', 'Madhu', 'Madhu'
    ];
  }
}
