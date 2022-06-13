import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}
  @Get(':name')
  fetchVideo(@Param('name') name: string, @Req() req, @Res() res) {
    return this.videosService.fetchVideo(name, req, res);
  }
}
