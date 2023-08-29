import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';

@Injectable()
export class CatsService {

// constructor(){
//     this.cats = []
// }

    private readonly cats: Cat[]=[];

    findAll(): Cat[] {
        return this.cats
    }
}