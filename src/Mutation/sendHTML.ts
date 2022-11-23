import { FieldResolveInput } from 'stucco-js';
import { sendMessageHTML } from '../utils';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('Mutation', 'sendHTML', async (args) =>
    sendMessageHTML({ ...args.mailgunData, from: args.mailgunData.from || undefined }),
  )(input.arguments);
