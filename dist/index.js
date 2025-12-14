"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const routes_1 = require("./presentation/routes");
const server_1 = require("./presentation/server");
(async () => {
    main();
})();
function main() {
    const server = new server_1.Server({
        port: 3030,
        routes: routes_1.AppRoutes.routes,
    });
    server.start();
}
