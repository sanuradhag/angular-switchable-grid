import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filter'})
/**
 * Pipe for filtering the device list.
 */
export class ItemFilterPipe implements PipeTransform {
  transform(itemList: any[], filterTerm?: string, filterBy?: any) {
    if (filterTerm === '') {
      return itemList;
    }
    return itemList.filter((item: any) => {
      return item[filterBy].toLowerCase().includes(filterTerm.toLowerCase());
    });

  }
}
