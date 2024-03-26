import express, { urlencoded } from 'express';
import session from 'express-session';
import xss from 'xss';
import dotenv from 'dotenv';
import csurf from 'tiny-csrf';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

dotenv.config();

// deepcode ignore UseCsurfForExpress: protection configured in csurf
const app = express();

app.use(urlencoded({ extended: false }));
app.use(cookieParser('cookie-parser-secret'));
const sessionSecret = process.env.SESSION_SECRET;
app.set('trust proxy', 1);
app.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
const csrfSecret = process.env.CSRF_SECRET;
app.use(csurf(csrfSecret, ['POST']));

app.use(
  helmet({
    hidePoweredBy: true,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          'https://cdn.jsdelivr.net',
          'https://unpkg.com',
          'https://cdn.tailwindcss.com',
        ],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://cdn.jsdelivr.net'],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'", 'https://jsonplaceholder.typicode.com'],
        fontSrc: ["'self'", 'https://cdn.jsdelivr.net'],
        objectSrc: ["'none'"],
        mediaSrc: ["'none'"],
        frameSrc: ["'none'"],
        childSrc: ["'none'"],
        formAction: ["'self'"],
        upgradeInsecureRequests: [],
      },
    },
  })
);

app.use(express.static('public'));
app.use(express.json());

app.get('/users', async (req, res) => {
  setTimeout(async () => {
    const limit = +req.query.limit || 10;

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?_limit=${limit}`
    );
    const users = await response.json();

    res.send(`
    <h1 class="text-2xl font-bold my-4">Users</h1>
    <ul>
      ${users.map((user) => `<li>${user.name}</li>`).join('')}
    </ul>
  `);
  }, 2000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
