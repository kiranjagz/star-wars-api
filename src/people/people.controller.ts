import {
  Controller,
  Get,
  Post,
  HttpStatus,
  Res,
  Req,
  Param,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { response } from 'express';
import { Request } from 'express';
import { get } from 'node:http';
import { PeopleModel } from './people.data';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}

  @Get()
  async findAll(): Promise<any> {
    var response = await this.peopleService
      .findAll()
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((e) => {
        console.log(e);
      });

    return response;
  }

  @Get(':id')
  async findOne(@Param() params): Promise<any> {
    // console.log(params.id);

    var response = await this.peopleService
      .findOnePerson(params.id)
      .then((res) => {
        return res;
      })
      .catch((e) => console.log(e));

    return response;
  }
}
