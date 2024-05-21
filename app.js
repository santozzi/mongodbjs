"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const root_routes_1 = __importDefault(require("./routes/root.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const category_routes_1 = __importDefault(require("./routes/category.routes"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const express_handlebars_1 = require("express-handlebars");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
//Template engine
/*
app.set('views', path.join(__dirname, 'views'));


app.engine(".hbs", engine({
    defaultLayout: 'home',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
  
}));
app.set("view engine",".hbs");
app.set("views","./src/views/layouts");
*/
app.engine('.hbs', (0, express_handlebars_1.engine)());
app.set('view engine', '.hbs');
app.set('views', path_1.default.join(__dirname, 'views'));
app.use('/public', express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//routes
app.use(root_routes_1.default);
app.use("/api/users", user_routes_1.default);
app.use("/api/categories", category_routes_1.default);
app.use("/api/products", product_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map