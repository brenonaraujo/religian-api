import { Connection } from 'mongoose';
import { ApostleSchema } from './entity/apostle.schema'

export const apostlesProvider = [
  {
    provide: 'APOSTLE_MODEL',
    useFactory: (connection: Connection) => connection.model('Apostle', ApostleSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];