let dbConfig = {
    synchronize: false,
    migrations: ['migrations/*.js'],
    cli: {
      migrationsDir: 'migrations',
    },
  };

  console.log(process.env.NODE_ENV);
  
  switch (process.env.NODE_ENV) {
    case 'development':
      Object.assign(dbConfig, {
        type: 'postgres',
        database: 'blogs',
        entities: ['**/*.entity.js'],
      });
      break;
    case 'test':
      Object.assign(dbConfig, {
        type: 'postgres',
        database: 'blogs',
        entities: ['**/*.entity.ts'],
        migrationsRun: true,
      });
      break;
    case 'production':
      break;
    default:
      throw new Error('unknown environment');
  }
  
  module.exports = dbConfig;
  