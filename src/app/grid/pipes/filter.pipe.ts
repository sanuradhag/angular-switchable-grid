import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filter'})
/**
 * Pipe for filtering the device list.
 */
export class ItemFilterPipe implements PipeTransform {
  transform(itemList: any[], filterTerm?: string, filterBy?: any) {
    filterBy = filterBy.toString();
    if (filterTerm === '') {
      return itemList;
    }
    return itemList.filter((item: any) => {
      if(item[filterBy]) {
        return item[filterBy].toString().toLowerCase().includes(filterTerm.toLowerCase());  
      }
    });

  }
}
