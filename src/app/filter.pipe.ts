import { Pipe, PipeTransform } from '@angular/core';
import { Results } from './results';
import { __values } from 'tslib';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tableData: Results[], filterString: string): Results {
    const sortBy: string = filterString.toLowerCase().trim();
    

    if(!sortBy){
      return value;
    }

    

    

  }


}
