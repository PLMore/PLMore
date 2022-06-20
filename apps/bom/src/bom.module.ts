import {ConsulServiceKeys} from '@ezyfs/internal';
import {ConsulConfigModule} from '@ezyfs/internal/modules/consul-config.module';
import {dbConnectionFactory, Email, User} from '@ezyfs/repositories';
import {Module} from '@nestjs/common';
import {ConsulService} from 'nestjs-consul';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BomAction} from '@ezyfs/repositories/entities/bom/action';
import {BomItem} from '@ezyfs/repositories/entities/bom/items';
import {Material} from '@ezyfs/repositories/entities/materials';
import {Project} from '@ezyfs/repositories/entities/project';
import {Workspace} from '@ezyfs/repositories/entities/workspace';
import {BomService} from './bom.service';
import {BomController} from './bom.controller';

@Module({
  imports: [
    ConsulConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConsulConfigModule],
      useFactory: (consul) =>
        dbConnectionFactory(
          consul,
          ConsulServiceKeys.BOM,
          '/dist/apps/bom/libs/repositories/src/**/*.entity{.ts,.js}',
        ),
      inject: [ConsulService],
    }),

    TypeOrmModule.forFeature([
      User,
      BomAction,
      BomItem,
      Material,
      Project,
      Workspace,
    ]),
  ],
  controllers: [BomController],
  providers: [BomService],
})
export class BomModule {}
