import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormGroupDirective, NgForm} from '@angular/forms';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchForm!: FormGroup;
  
  validUsername = "^[-a-zA-Z0-9]*$";
  
  
  


  constructor(private fb: FormBuilder, private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchFormControl: new FormControl('', [Validators.minLength(1), Validators.required, Validators.pattern(this.validUsername)]),
  
      
    });  
    
  }

  

  onSubmit(){
    const userInput = this.searchForm.get('searchFormControl')?.value;
    this.searchService.getUserInput(userInput);
    this.router.navigateByUrl('/results');
  }
  

}


