import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfig } from './config/app.config';
import { EnvValidationSchema } from './config/env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [AppConfig],
      validationSchema: EnvValidationSchema,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
