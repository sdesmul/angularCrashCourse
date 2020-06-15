import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'summary'
})

//Pipe must be registered in app.module, like a component
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number){
        if(!value)
        return null;
        
        let actualLimit = (limit) ? limit : 50;
        return value.substr(0,actualLimit) + "...";
    }

}