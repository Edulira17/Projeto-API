const express = require('express');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Sincronize os modelos e inicie o servidor
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
