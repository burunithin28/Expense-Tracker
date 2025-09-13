import Expense from "../models/Expense.js";
import Income from "../models/Income.js";
import { isValidObjectId, Types } from "mongoose";

export const getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;
    const userObjectId = new Types.ObjectId(String(userId));

 
    const [totalIncome, totalEXpense] = await Promise.all([
      Income.aggregate([
        { $match: { userId: userObjectId } },
        { $group: { _id: null, total: { $sum: "$amount" } } },
      ]),
      Expense.aggregate([
        { $match: { userId: userObjectId } },
        { $group: { _id: null, total: { $sum: "$amount" } } },
      ]),
    ]);

    
    const [last60DaysIncomeTransactions, last30DaysExpenseTransactions] = await Promise.all([
      Income.find({
        userId,
        date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) },
      }).sort({ date: -1 }),
      Expense.find({
        userId,
        date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
      }).sort({ date: -1 }),
    ]);

    const incomeLast60Days = last60DaysIncomeTransactions.reduce(
      (sum, transaction) => sum + transaction.amount, 0
    );

    const ExpenseLast30Days = last30DaysExpenseTransactions.reduce(
      (sum, transaction) => sum + transaction.amount, 0
    );

   
    const [recentIncomes, recentExpenses] = await Promise.all([
      Income.find({ userId }).sort({ date: -1 }).limit(5),
      Expense.find({ userId }).sort({ date: -1 }).limit(5),
    ]);
    
    
    const lastTransactions = [
      ...recentIncomes.map((txn) => ({ ...txn.toObject(), type: "income" })),
      ...recentExpenses.map((txn) => ({ ...txn.toObject(), type: "expense" })),
    ].sort((a, b) => new Date(b.date) - new Date(a.date));


    res.json({
      totalBalance: (totalIncome[0]?.total || 0) - (totalEXpense[0]?.total || 0),
      totalIncome: totalIncome[0]?.total || 0,
      totalEXpenses: totalEXpense[0]?.total || 0,
      last30DaysExpenses: {
        total: ExpenseLast30Days,
        transactions: last30DaysExpenseTransactions,
      },
      last60DaysIncome: {
        total: incomeLast60Days,
        transactions: last60DaysIncomeTransactions,
      },
      recentTransactions: lastTransactions,
    });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Server error", error: error.message });
  }
};