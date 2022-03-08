"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _UserRoute = _interopRequireDefault(require("../Route/UserRoute"));

var _CategoryRoute = _interopRequireDefault(require("../Route/CategoryRoute"));

var _ProductRoute = _interopRequireDefault(require("../Route/ProductRoute"));

var _LoginRoute = _interopRequireDefault(require("../Route/LoginRoute"));

var _SessionRoute = _interopRequireDefault(require("../Route/SessionRoute"));

var _cors = _interopRequireDefault(require("cors"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _expressSession = _interopRequireDefault(require("express-session"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"]["static"](__dirname));
app.use((0, _expressSession["default"])({
  secret: 'Your_Secret_Key',
  resave: true,
  saveUninitialized: true
}));
app.use((0, _cors["default"])({
  credentials: true,
  origin: "http://localhost:3000"
}));
app.use((0, _cookieParser["default"])());
app.use('/user', _UserRoute["default"]);
app.use('/category', _CategoryRoute["default"]);
app.use('/product', _ProductRoute["default"]);
app.use('/login', _LoginRoute["default"]);
app.use('/session', _SessionRoute["default"]);

_mongoose["default"].connect('mongodb+srv://vagesh12:vageshVora@cluster0.prgxn.mongodb.net/mini?retryWrites=true&w=majority').then(function () {
  console.log("mongodb started.");
})["catch"](function () {
  console.log("mongodb connection failed.");
});

app.listen(9000, function () {
  console.log("SERVER STARTED");
});
//# sourceMappingURL=index.js.map