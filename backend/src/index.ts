import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/todos", (req: Request, res: Response) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);

      res.json(error);
    });
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
