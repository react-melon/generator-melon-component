/**
 * @file travis karma
 * @author <%-author%> <<%-email%>>
 */

const karmaConfig = require('./karma.conf.js');

module.exports = function (config) {

    config.set(
        Object.assign(
            {},
            karmaConfig,
            {
                customLaunchers: {
                    ChromeTravis: {
                        base: 'Chrome',
                        flags: ['--no-sandbox']
                    }
                },
                browsers: ['ChromeTravis']
            }
        )
    );

};
