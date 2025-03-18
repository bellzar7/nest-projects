import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { Match } from '../../../../common/decorators';

export class ForgotPasswordDto {
  @IsString()
  // @IsStrongPassword()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%_*#?&])[A-Za-z\d@$_!%*#?&]{8,}$/)
  password: string;

  @IsNotEmpty()
  @Match('password', { message: 'Passwords do not match' })
  repeatPassword: string;
}
