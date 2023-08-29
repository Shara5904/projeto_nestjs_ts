import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService){}

    @Get()
    findAll(): Cat[]{
        return this.catsService.findAll();
    }
}
