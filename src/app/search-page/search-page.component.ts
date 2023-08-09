import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormGroupDirective, NgForm} from '@angular/forms';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchForm!: FormGroup;
  
  validUsername = "^[a-zA-Z0-9-]*$";
  
  


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchFormControl: new FormControl('', [Validators.minLength(1), Validators.required, Validators.pattern(this.validUsername)]),
  
      
    });  
    
  }

  

  
  

}


