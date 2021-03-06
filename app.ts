import express, { Application, NextFunction, Request, Response } from "express";
import createError from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

var debug = require("debug")("expressapp:server");
var http = require("http");

const indexRouter = require("./routes/index");
const pokemonRouter = require("./routes/pokemon");

const app: Application = express();

app.set("port", port);

var server = http.createServer(app);

var port = normalizePort(process.env.PORT || "5000");

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/pokemon", pokemonRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

type ErrorHandlerType = Error & { status: number };

// error handler
app.use(function (
  err: ErrorHandlerType,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

function normalizePort(val: any) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

module.exports = app;
