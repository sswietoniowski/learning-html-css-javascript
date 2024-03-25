import express from 'express';
import xss from 'xss';
import dotenv from 'dotenv';
import csurf from 'csurf';
import helmet from 'helmet';

const app = express();

app.use(csurf());
app.use(helmet({ hidePoweredBy: true }));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
