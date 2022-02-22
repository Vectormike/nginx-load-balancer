const app = require('express')();
const PORT = process.env.PORT;

if (!PORT) throw new Error('Port not set');

app.get('/', (req, res) => {
  res.send({ message: `This is port ${PORT}` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
