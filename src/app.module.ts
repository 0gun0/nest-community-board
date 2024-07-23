import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // 데이터베이스 파일 경로
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
