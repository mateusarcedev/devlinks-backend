import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateFavoriteDto {

  @IsNotEmpty()
  @ApiProperty({
    description: 'The ID of the user who favorites the tool',
    example: 'user-uuid',
  })
  userId: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'The ID of the tool being favorited',
    example: 'tool-uuid',
  })
  toolId: string;
}
