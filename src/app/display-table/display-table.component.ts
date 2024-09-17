import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent {
  nameCounts: { name: string, count: number }[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const names = this.dataService.getNames();
    this.nameCounts = this.getDistinctNameCounts(names);
  }

  // This Function to used to get distinct names and their counts
  getDistinctNameCounts(names: string[]): { name: string, count: number }[] {
    const nameCountMap: { [key: string]: number } = {};

    names.forEach(name => {
      if (nameCountMap[name]) {
        nameCountMap[name]++;
      } else {
        nameCountMap[name] = 1;
      }
    });

    return Object.keys(nameCountMap).map(key => ({
      name: key,
      count: nameCountMap[key]
    }));
  }

  // This Function is used to set the row background color based on the count
  getRowColor(count: number): string {
    if (count > 0 && count < 3) {
      return 'red';
    } else if (count >= 3 && count < 10) {
      return 'yellow';
    } else if (count >= 10) {
      return 'green';
    }
    return '';
  }
}