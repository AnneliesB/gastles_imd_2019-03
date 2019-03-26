const { validate } = require('../middleware');
const MessagesController = require('../controllers/messages');

module.exports = (app) => {
    app.route('/messages').post(
        validate,
        MessagesController.add,
    );
};
