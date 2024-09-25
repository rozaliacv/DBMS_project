import express from "express";

import { apiRouter } from "./routes/api/api.js";

import { errorHandler } from "./middleware/errorHandler.js";
import morgan from "morgan";

const app = express();

app.use(morgan("short"));
app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use("/api", apiRouter);
app.use(errorHandler);


app.listen(process.env.PORT , () => console.log('server started'));