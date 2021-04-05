import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleController } from './people/people.controller';
import { PeopleService } from './people/people.service';
import { PlanetsController } from './planets/planets.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PeopleController, PlanetsController],
  providers: [AppService, PeopleService],
})
export class AppModule {}
