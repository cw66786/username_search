import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { User } from '../users';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  users: any = [];


  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getResults().subscribe((res) =>
    res.items.forEach((user: User) => {
      this.users.push({
        id: user.id,
        username: user.login,
        profile: user.html_url

      });
      
    }));
  }

}
