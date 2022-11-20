import { Request, Response } from 'express';
import TransactionService from '../Services/transaction.service';

export default class TransactionController {
  constructor(private registerService: TransactionService) {}

  public async transaction(req: Request, res: Response) {
    const { username, value } = req.body;
    const { authorization } = req.headers as { authorization: string };

    const user = await this.registerService.transaction({
      username,
      value,
      authorization,
    });

    return res.status(201).json(user);
  }

  public async getTransactions(req: Request, res: Response) {
    const { authorization } = req.headers;

    const transactions = await this.registerService.getTransactions(
      authorization as string
    );

    return res.status(200).json(transactions);
  }

  // public async getCreditedTransactions(req: Request, res: Response) {
  //   const { authorization } = req.headers;

  //   const transactions = await this.registerService.getCreditedTransactions(
  //     authorization as string
  //   );

  //   return res.status(200).json(transactions);
  // }

  // public async getDebitedTransactions(req: Request, res: Response) {
  //   const { authorization } = req.headers;

  //   const transactions = await this.registerService.getDebitedTransactions(
  //     authorization as string
  //   );

  //   return res.status(200).json(transactions);
  // }

  public async getTransactionsByDate(req: Request, res: Response) {
    const { authorization } = req.headers as { authorization: string };
    const { date, type } = req.body;

    const transactions = await this.registerService.getTransactionsByDate(
      authorization,
      date,
      type
    );

    return res.status(200).json(transactions);
  }
}
