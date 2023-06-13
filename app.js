'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const expressHandlebars = require('express-handlebars');

// cau hinh public start
app.use(express.static(__dirname + '/public'))

// cau hinh su dung express-handlebars
app.engine('hbs', expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },
}))
app.set('view engine', 'hbs');

// routes
app.use('/', require('./routes/indexRouter'));


// khoi dong web server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})