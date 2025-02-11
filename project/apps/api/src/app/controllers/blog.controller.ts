import { Body, Controller, Post, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectUserIdInterceptor } from '@project/shared-interceptors';
import { CreatePostDto } from '@project/blog-post';
import { ApplicationServiceURL } from '@project/shared-types';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AxiosExceptionFilter } from '../filters/axios-exception.filter';
import { CheckAuthGuard } from '../guards/check-auth.guard';

@Controller('posts')
@UseFilters(AxiosExceptionFilter)
export class BlogController {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  @ApiBearerAuth('accessToken')
  @UseGuards(CheckAuthGuard)
  @UseInterceptors(InjectUserIdInterceptor)
  @Post('/')
  public async create(@Body() dto: CreatePostDto) {
    const { data } = await this.httpService.axiosRef.post(`${ApplicationServiceURL.Posts}/`, dto);
    return data;
  }
}
