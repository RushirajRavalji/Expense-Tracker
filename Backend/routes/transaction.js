const {
  addExpense,
  getExpense,
  deleteExpense,
} = require("../controllers/expense");
const {
  addIncome,
  deleteIncome,
  getIncomes,
} = require("../controllers/income");

const router = require("express").Router();

router
  .post("/add-incomes", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-incomes/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expense", getExpense)
  .delete("/delete-expense/:id", deleteExpense);

module.exports = router;
