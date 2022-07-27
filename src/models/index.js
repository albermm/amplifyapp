// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tokens } = initSchema(schema);

export {
  Tokens
};