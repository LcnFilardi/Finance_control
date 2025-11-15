import type { TransactionCreate, TransactionUpdate } from "../@types/Transactions";
import { api } from "../lib/axios";


export function useApiTransactions() {
  async function getTransactions(query?: string) {
    const { data } = await api.get("/transactions", {
      params: { q: query },
    });
    return data;
  }

  async function createTransaction(payload: TransactionCreate) {
    const { data } = await api.post("/transactions", {
      ...payload,
      createdAt: new Date(),
    });
    return data;
  }

  async function updateTransaction(payload: TransactionUpdate) {
    const { id, ...fields } = payload;
    const { data } = await api.put(`/transactions/${id}`, fields);
    return data;
  }

  async function deleteTransaction(id: number) {
    await api.delete(`/transactions/${id}`);
    return true;
  }

  return {
    getTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
  };
}