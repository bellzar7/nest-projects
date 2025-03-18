import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';

export class BaseQueryDto {
  @IsOptional()
  @IsNumberString()
  sort: string;

  @IsEnum(['ASC', 'DESC'])
  @IsOptional()
  order = 'ASC';

  @IsOptional()
  page: string;

  @IsOptional()
  limit: string;

  @IsString()
  @IsOptional()
  search: string;
}
