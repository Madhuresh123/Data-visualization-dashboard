var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var testAPIRouter = require('./routes/TestApi');
var productAPIRouter = require('./routes/productsRoute');

const connectDB = require("./db/connect")


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const PORT = process.env.PORT ||5000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);
app.use('/api', productAPIRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get("/", (req,res) => {
  res.send("Hi, i am live")
});

const start = async() => {

  try{

    await connectDB();

    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am connected`);
    });

  }catch(error){
    console.log(error)
  }

};

start();

module.exports = app;
