const ExpenseSchema = require("../modules/ExpenseModule");

exports.addExpense = async (req, res) => {
  const { title, amount, type, category, description, date } = req.body;

  const income = ExpenseSchema({
    title,
    amount,
    type,
    category,
    description,
    date,
  });
  
  try {
    //validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fileds are required" });
    }
    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ message: "All fileds are required" });
    }
    await income.save();
    return res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }

  console.log(income);
};

exports.getExpense = async (req, res) => {
  try {
    const incomes = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  ExpenseSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Expense Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Expense Error" });
    });
};
