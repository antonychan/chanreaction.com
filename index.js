var koa = require('koa');
var app = koa();

app.use(function *(next){
  var start = new Date;
  console.log("gahhh1")
  yield next;
  console.log("gahhh2")
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date;
  console.log("gahhh3")
  yield next;
  console.log("gahhh4")
  var ms = new Date - start;
  console.log('%s %s - %sms', this.method, this.url, ms);
});

// response

app.use(function *(){
  this.body = 'Hello World';
});
app.listen(3000);
