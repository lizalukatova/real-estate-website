if(process.env.MODE_ENV === 'production'){
    module.exports = require('./configureStore.prod.js');
} else {
    module.exports = require('./configureStore.dev.js');
}
