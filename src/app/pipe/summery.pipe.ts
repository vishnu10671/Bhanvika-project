import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'summery'
})
export class SummeryPipe implements PipeTransform {
    transform(value: string, limit: number): any {
        if (!value) {
            return value;
        }
        let actuallimit = limit ? limit : 15;
        if (value.length > actuallimit) {
            return value.substr(0, actuallimit) + '.....';
        }
        else {
            return value;
        }
    }

}