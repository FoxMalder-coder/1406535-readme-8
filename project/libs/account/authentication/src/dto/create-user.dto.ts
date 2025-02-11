import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsMongoId, IsOptional, IsString, Length, Matches } from 'class-validator';

const IMAGES_TYPES = /\.(gif|jpeg|jpg|png|webp|bmp)$/i;
export class CreateUserDto {
  @ApiProperty({
    description: 'User email address',
    example: 'john_doe@gmail.com'
  })
  @IsEmail()
  public email: string;

  @ApiProperty({
    description: 'User name with/without surname',
    example: 'John Doe'
  })
  @IsString()
  @Length(3, 50)
  public fullName: string;

  @ApiProperty({
    description: 'User password',
    example: 'SupeRpass123'
  })
  @IsString()
  @Length(6, 12)
  public password: string;

  @ApiProperty({
    description: 'User avatar ID (optional)',
    example: '67865f49e29de26ecff7e44a'
  })
  @IsMongoId()
  @IsOptional()
  public avatar?: string;
}
