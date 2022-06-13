import { Injectable, Logger } from '@nestjs/common';
import { createReadStream, statSync } from 'fs';
import { join } from 'path';

@Injectable()
export class VideosService {
  private readonly logger = new Logger('VideosCDN');
  //constructor() {}
  fetchVideo(name: string, req: Request, res) {
    this.logger.log(`Fetching video : ${name}`);
    const path = join(__dirname, '../../assets/videos/') + name;
    const stat = statSync(path);
    const fileSize = stat.size;
    const range = (req.headers as any).range;
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = end - start + 1;
      const file = createReadStream(path, { start, end });
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      };
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      };
      res.writeHead(200, head);
      createReadStream(path).pipe(res);
    }
  }
}
