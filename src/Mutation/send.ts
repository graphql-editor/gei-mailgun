import { FieldResolveInput } from 'stucco-js';
import { sendMessage } from '../utils';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('Mutation', 'send', async (args) =>
    sendMessage({ ...args.mailgunData, from: args.mailgunData.from || undefined }),
  )(input.arguments);
