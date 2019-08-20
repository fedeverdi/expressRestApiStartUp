import { AuthRoute } from "./routes/auth.routes";
import { UsersRoute } from "./routes/users.routes";

export class mainRoutes {
    constructor(app) {
        new UsersRoute(app);
        new AuthRoute(app);
    }
}


