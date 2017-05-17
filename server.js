'use strict';

/* get modules */
const app = require('./server/app');
const port = process.env.PORT || 3000;

/* start server */
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

