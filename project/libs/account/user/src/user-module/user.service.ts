import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { ApiResponseMessage } from '@project/shared-types';
@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  public async register(dto: CreateUserDto): Promise<UserEntity | null> {
    const { email, fullName, password, avatar } = dto;

    const existUser = await this.userRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(ApiResponseMessage.UserExist);
    }

    const user = { email, fullName, avatar, passwordHash: '' };
    const userEntity = await new UserEntity(user).setPassword(password);
    this.userRepository.save(userEntity);

    return userEntity;
  }

  public async getById(id: string): Promise<UserEntity | null> {
    const existUser = await this.userRepository.findById(id);

    if (!existUser) {
      throw new NotFoundException(ApiResponseMessage.UserNotFound);
    }

    return existUser;
  }
}
