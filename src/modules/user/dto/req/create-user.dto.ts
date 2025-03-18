import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { IsCityAllowed } from '../../../../common/decorators/city.decorator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @Transform(({ value }) => value.trim())
  name?: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  // @IsStrongPassword()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%_*#?&])[A-Za-z\d@$_!%*#?&]{8,}$/)
  password: string;

  @Type(() => Date)
  @IsOptional()
  date: string;

  @IsOptional()
  @IsString()
  @IsCityAllowed({
    groups: ['Lviv', 'Odessa', 'Kyiv'],
    message: 'City is not allowed',
  })
  city: string;
}
