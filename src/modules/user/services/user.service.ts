import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/req/update-user.dto';
import { CreateUserDto } from '../dto/req/create-user.dto';

@Injectable()
export class UserService {
  create(_createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, _updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
