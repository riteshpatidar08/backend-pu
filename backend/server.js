const express = require('express');
const app = express();

function middleware1(req, res, next) {
  req.middleware1 = 'this is middleware1';
  console.log('1st middleware is started');
  next();
  console.log('1st middleware is end');
}


function middleware2(req, res, next) {
  console.log(req.middleware1);
  req.middleware2 = 'this is middleware second';
  console.log('2nd middleware is started');
  next();
  console.log('2nd  middleware is end');
}

//1st

//2nd
app.use(middleware1);
app.use(middleware2);
app.use((req, res, next) => {
  console.log(req.middleware2);
  const authenticate = true;
  if (authenticate) {
    next();
  }
});


app.get('/', (req, res) => {
  console.log(req.middleware1, req.middleware2);
  res.json({
    data: 'authenticate successfull',
  });
});


app.listen(8000, () => {
  console.log('server is running on the port 8000');
});
