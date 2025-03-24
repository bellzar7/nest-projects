import { Module } from '@nestjs/common';

import { CommentsModule } from '../comments/comments.module';
import { UsersModule } from '../users/users.module';
import { ArticlesService } from './services/articles.service';
import { ArticlesController } from './articles.controller';

@Module({
  imports: [CommentsModule, UsersModule],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
