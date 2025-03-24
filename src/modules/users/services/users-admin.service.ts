import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersAdminService {
  ban(_id: string) {
    return 'user banned';
  }
}
