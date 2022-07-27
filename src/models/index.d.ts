import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TokensMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tokens {
  readonly id: string;
  readonly contract?: string | null;
  readonly token?: string | null;
  readonly results?: string | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tokens, TokensMetaData>);
  static copyOf(source: Tokens, mutator: (draft: MutableModel<Tokens, TokensMetaData>) => MutableModel<Tokens, TokensMetaData> | void): Tokens;
}