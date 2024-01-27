import { DataSource, DataSourceOptions } from "typeorm";


export const appDataSource = new DataSource({
    type: 'postgres',
    database: 'blogs',
    username: 'test',
    password: 'test123',
    port: 5432,
    entities: ['**/*.entity.ts'],
    migrations: [__dirname + '/migrations/*.ts']
} as DataSourceOptions);

