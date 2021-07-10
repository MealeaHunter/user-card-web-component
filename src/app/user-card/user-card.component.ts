import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  users: any;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit(): void {
    this.mockDataService.get().subscribe((data: any) => {
      this.users = data['results'];
    });
  }

}
