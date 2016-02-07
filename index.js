var koa = require('koa');
var app = koa();
var views = require('koa-views');

// Must be used before any router is used
app.use(views(__dirname + '/views', {
    extension: 'dust'
}));

app.use(require('koa-static')(__dirname + '/bower_components'));

// app.use(function *(next){
//   var start = new Date;
//   yield next;
//   var ms = new Date - start;
//   this.set('X-Response-Time', ms + 'ms');
// });
//
// // logger
//
// app.use(function *(next){
//   var start = new Date;
//   console.log("gahhh3")
//   yield next;
//   console.log("gahhh4")
//   var ms = new Date - start;
//   console.log('%s %s - %sms', this.method, this.url, ms);
// });
//
// // response
//
app.use(function *() {
    console.log(this.state)
    yield this.render('index', {
      user: 'John'
    });
});

app.listen(3000);
