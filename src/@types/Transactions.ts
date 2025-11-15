export interface TransactionCreate {
    description: string;
    type: 'entry' | 'exit';
    category: string;
    value: number;
}

export type TransactionUpdate = Partial<TransactionCreate> & {
  id: number;
};