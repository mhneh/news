'use strict';
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const models = require('./models');
const app = express();
const port = process.env.PORT || 5000;
const expressHandlebars = require('express-handlebars');
const flash = require('connect-flash');
const { createPagination } = require('express-handlebars-paginate');
const { handleSelected } = require('./controllers/handlebarsHelper')
const passport = require("./authentication/passport");
const cookieParser = require("cookie-parser");

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
    helpers: {
        handleSelected,
        createPagination,
    }
}))
app.set('view engine', 'hbs');

// cau hinh doc du lieu post tu body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// cau hinh su dung session
app.use(session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 20 * 60 * 1000
    }
}));

// cấu hình sử dụng passport
app.use(passport.initialize());
app.use(passport.session());

// cấu hình sử dụng flash
app.use(flash());

const FetchCategories = async (req, res, next) => {
    const categories = await models.Category.findAll({
        include: [{
            model: models.Category,
            as: 'children'
        }],
        where: { parentId: null }
    });
    res.locals.categoriesForLayout = categories;
    res.locals.isLoggedIn = req.isAuthenticated();

    const userId = (req.isAuthenticated()) ? req.user.id : 0;
    let admin = await models.Admin.findOne({ where: { userId: userId } });
    if (admin) {
        res.locals.isAdmin = true;
        let informationAdmin = await models.User.findOne({ where: { id: userId } });
        res.locals.informationAdmin = informationAdmin;
    }
    else {
        res.locals.isAdmin = false;
    }

    let editor = await models.Editor.findOne({ where: { userId: userId } });
    if (editor) {
        res.locals.isEditor = true;
    }
    else {
        res.locals.isEditor = false;
    }

    let writer = await models.Writer.findOne({ where: { userId: userId } });
    if (writer) {
        res.locals.isWriter = true;
    }
    else {
        res.locals.isWriter = false;
    }

    next();
};

app.use(async function (req, res, next) {
    const isAuthenticated = req.isAuthenticated();
    res.locals.notAuthenticated = !isAuthenticated;
    if (isAuthenticated) {
        res.locals.role = {
            isUser: req.user.role == "user",
            isWriter: req.user.role == "writer",
            isEditor: req.user.role == "editor",
            isAdmin: req.user.role == "admin"
        }
        res.locals.user = req.user;

        let subscriber = await models.Subscriber.findOne({ where: { userId: req.user.id } });
        if (subscriber) {
            res.locals.isSubscribed = true;
        }
    }
    next();
});

// routes
app.use('/', FetchCategories, require('./routes/indexRouter'));
app.use('/articles', FetchCategories, require('./routes/articleRouter'));
app.use('/auth', require('./routes/authRouter'));
app.use('/editor', require('./routes/editorRouter'));
app.use('/writer', require('./routes/writerRouter'));
app.use('/admin', require('./routes/adminRouter'));
app.use('/user', require('./routes/userRouter'));

// khoi dong web server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
