import React from "react";
import ExpenseDetails from "./ExpenseDetails";

/*
  expense categories: housing, healthcare/medical, entertainment, transportation,
              education, debt/loans, household supplies, personal care, clothing,
              utilities, food/drinks, travel, gift and donations, pets, miscellaneous
              saving/investing
  */

const ExpenseContainer = () => {
  const expenses = [
    {
      id: 1,
      description: "Rent",
      value: 1000,
      category: "housing",
      recurring: true,
      frequency: "monthly",
    },
    {
      id: 2,
      description: "Phone Bill",
      value: 55,
      category: "utilities",
      recurring: true,
      frequency: "monthly",
    },
    {
      id: 3,
      description: "Gas",
      value: 40,
      category: "transportation",
      recurring: true,
      frequency: "weekly",
    },
  ];

  const renderExpenses = () =>
    expenses.map((expense) => (
      <ExpenseDetails key={expense.id} expense={expense} />
    ));

  return <>{renderExpenses()}</>;
};

export default ExpenseContainer;
