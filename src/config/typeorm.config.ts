import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";


@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {

    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions  {
        return {
            type: 'postgres',
            password: 'test123',
            username: 'test',
            synchronize: false,
            autoLoadEntities: true,
            database: 'blogs'
        };
    }
}