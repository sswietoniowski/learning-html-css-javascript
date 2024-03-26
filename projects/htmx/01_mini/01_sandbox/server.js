import express from 'express';
import xss from 'xss';
import dotenv from 'dotenv';
import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

dotenv.config();

const app = express();

app.use(urlencoded({ extended: false }));
app.use(cookieParser('cookie-parser-secret'));
sessionSecret = process.env.SESSION_SECRET;
app.use(session({ secret: sessionSecret }));
csrfSecret = process.env.CSRF_SECRET;
app.use(csurf(csrfSecret['POST']));

app.use(helmet({ hidePoweredBy: true }));

app.use(express.static('public'));
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
