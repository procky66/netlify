import  express from"express";
import serverless from "serverless-http";

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ hello: "hi!" });
  });

  router.get("/test", (req, res) => {
    res.json({ hello: "test!" });
  });
    
  //app.use('/.netlify/functions/api',router)    
  app.use('/api',router)

export const handler = serverless(app);
