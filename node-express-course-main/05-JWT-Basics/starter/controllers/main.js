const login = async (req, res) => {
  res.send("Fake Login/Registe/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is you authorized data, yout lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
