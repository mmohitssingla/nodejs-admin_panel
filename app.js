const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes = require('./routes/admin');

app.use('/admin', adminRoutes.routes);

app.listen(3000);