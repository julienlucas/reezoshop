const express = require('express')
const next = require('next')
const logger = require('morgan')
const helmet = require('helmet')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
// const ROOT_URL = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL;
const app = next({ dev });
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.use(helmet());
    /* Compression gives us gzip compression */
    server.use(compression());
  }

  server.use(express.json());

  /* give all Next.js's requests to Next.js server */
  server.get('/_next/*', (req, res) => {
    handle(req, res);
  });

  server.get('/static/*', (req, res) => {
    handle(req, res);
  });

  if (!dev) {
    sessionConfig.cookie.secure = true; // serve secure cookies in production environment
    server.set('trust proxy', 1); // trust first proxy
  }

  /* morgan for request logging from client
  - we use skip to ignore static files from _next folder */
  server.use(
    logger('dev', {
      skip: req => req.url.includes('_next')
    })
  )

  /* Error handling from async / await functions */
  server.use((err, req, res, next) => {
    const { status = 500, message } = err;
    res.status(status).json(message);
  })

  server.get('/api', (req, res) => {

   //  fetch('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=AIzaSyDMts3UNSnNeHy09kR0X75SgW75KVMIuWY')
   //    .then((res) => {
   //      console.log(res)
   //    })
   //    .catch((err) => {
   //      console.log('Looks like there was a problem: \n', err);
   //    })

  })

  /* default route
     - allows Next to handle all other routes
     - includes the numerous `/_next/...` routes which must    be exposedfor the next app to work correctly
     - includes 404'ing on unknown routes */
  server.get('*', (req, res) => {
    handle(req, res);
  })

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000')
  })
})