import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CreateUserReqDto } from '../models/dto/req/create-user.req.dto';
import { UpdateUserReqDto } from '../models/dto/req/update-user.req.dto';
import { UserResDto } from '../models/dto/res/user.res.dto';
import { AppConfig, Config } from '../../../common/config/config.type';

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService<Config>) {}

  public async create(_createUserDto: CreateUserReqDto): Promise<UserResDto> {
    const appConfig = this.configService.get<AppConfig>('database');
    console.log(appConfig);
    return {} as UserResDto;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, _updateUserDto: UpdateUserReqDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  public async checkAbilityToEditArticle(_userId: string, _articleId: string) {
    // Check if the user has permission to edit the article
  }
}
