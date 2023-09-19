import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from  '@nestjs/typeorm';import { DataSource } from 'typeorm';
;

@Module({
  imports: [CatsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-ck4uieui9prc73akurf0-a.oregon-postgres.render.com',
      port: 5432,
      username: 'shara_user',
      password: '5904',
      database: 'shara',
      entities: [],
      synchronize: true,
      ssl: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
