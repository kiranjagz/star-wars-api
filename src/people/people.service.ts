import { Injectable, HttpService } from '@nestjs/common';
import { PeopleCollectionModel } from './people.collection.data';
import { PeopleModel } from './people.data';

@Injectable()
export class PeopleService {
  private baseUrl: string;

  constructor(private httpService: HttpService) {
    this.baseUrl = 'https://swapi.dev/api/people/';
  }

  public async findAll(): Promise<PeopleCollectionModel> {
    var response = await this.httpService
      .get<PeopleCollectionModel>(this.baseUrl)
      .toPromise();

    return response.data;
  }

  public async findOnePerson(personId: number): Promise<PeopleModel> {
    var response = await this.httpService
      .get<PeopleModel>(`${this.baseUrl}${personId}/`)
      .toPromise();

    return response.data;
  }
}
