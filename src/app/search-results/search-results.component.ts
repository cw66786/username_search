import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../search.service';
import { User } from '../users';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Results } from '../results';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  @ViewChild(MatSort, {static: false})
  sort!: MatSort;


  users: any = [];
  dataSource!: MatTableDataSource<Results>;
  displayedColumns: string[] = ['id','username','profile'];
  filter!: string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getResults().subscribe((res) =>
    res.items.forEach((user: User) => {
      this.users.push({
        id: user.id,
        username: user.login,
        profile: user.html_url

      });
      
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }));
  }

}
