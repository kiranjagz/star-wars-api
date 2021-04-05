import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleController } from './people/people.controller';
import { PeopleService } from './people/people.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PeopleController],
  providers: [AppService, PeopleService],
})
export class AppModule {}
