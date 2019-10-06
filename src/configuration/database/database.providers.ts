import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://religian-backend:mkcntu9b@ds237707.mlab.com:37707/religian-api'),
  },
];