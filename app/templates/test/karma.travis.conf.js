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
                browsers: ['PhantomJS'],
                phantomjsLauncher: {
                    // Have phantomjs exit if a ResourceError is encountered
                    // (useful if karma exits without killing phantom)
                    exitOnResourceError: true
                }
            }
        )
    );

};
