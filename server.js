const app = require('./app');
const config = require('./app/config');
const POST = config.app.port;
app.listen(POST, () => {
    console.log(`Server is running on port ${POST}.`);
});