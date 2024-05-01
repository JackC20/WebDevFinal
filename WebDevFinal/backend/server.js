const app = require("./backend/app");
const debug = require("debug")("node-food-tracker");
const http = require("http");
const mongoose = require('mongoose');

const normalizePort = val => {
  let port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;  // named pipe
  }
  if (port >= 0) {
    return port; // port number
  }
  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);

const MONGO_URI = 'your_mongodb_connection_string_here';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(port, () => console.log(`Server running on http://localhost:${port}`));
  })
  .catch(err => {
    console.error('Database connection failed', err.message);
    process.exit(1);
  });
