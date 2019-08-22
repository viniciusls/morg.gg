const app = require('./config/server');

app.listen(process.env.port, () => {
    console.log('Local HTTP Express server started on http://localhost:' + process.env.port);
});
