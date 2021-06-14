import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,args?: string) {
    console.log(value,args);
    if(!value){
      return null;
    }else if(!args){
      return value;
    }
    return value.filter((obj: { title: string; }) => obj.title.toLowerCase().includes(args.toLowerCase()));
  }

}
