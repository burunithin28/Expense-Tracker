import moment from "moment";
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import TransitionInfoCard from "../cards/TransitionInfoCard";

const ExpenseTransactions = ({ transactions, onSeeMore }) => {
    
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Expenses</h5>
        <button className="card-btn" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>
      <div className="mt-6">
        {transactions?.slice(0, 4)?.map((expense) => (
          <TransitionInfoCard
            key={expense._id}
            title={expense.type == "expense" ? expense.category : expense.source}
            icon={expense.icon}
            date={moment(expense.date).format(" Do MMM YYYY")}
            amount={expense.amount}
            type={expense.type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseTransactions;
