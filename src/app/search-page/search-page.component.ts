import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchForm!: FormGroup;
  isValidUsername: any = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchFormControl: new FormControl('', [Validators.minLength(1), Validators.required ]),
  
     
    },{validators: this.checkValid});    
  }

  


  checkValid: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    
    const validUsername = group.get('searchInfo')?.value;
    const regEx = "^[a-zA-Z0-9-]*$";

    return  validUsername.match(regEx) ? { [this.isValidUsername]: true } : null;
  }
}
