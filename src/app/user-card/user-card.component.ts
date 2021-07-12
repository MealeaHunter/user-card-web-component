import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../mock-data.service';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  users: any;
  ellipsis = faEllipsisV;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit(): void {
    this.mockDataService.get().subscribe((data: any) => {
      this.users = data['results'];
    });
  }

  onDelete(user: any) {
    const index = this.users.indexOf(user);
    this.users.splice(index, 1)
  }
}
