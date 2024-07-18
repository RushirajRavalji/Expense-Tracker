const IncomeSchema = require("./modules/incomeModules");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    date
  });

  try {
    //validations
    if (!title || !category || !description || !date) {
      return res.status(400), json({ message: "All fileds are required" });
    }
    if (amount <= 0 || !amount === "number") {
      return res.status(400), json({ message: "Amount must be positive" });
    }
    await income.save();
    res.status.(200).json({ message: 'income Added' });
  } catch (error) {
  }
  console.log(income);
};
