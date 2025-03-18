import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  id: string;

  @ApiProperty({
    description: 'User name',
    default: 'John Doe',
    required: false,
  })
  name: string;
  @ApiProperty({
    description: 'user email',
    default: 'user@gmail.com',
  })
  email: string;
}
