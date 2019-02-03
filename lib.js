const fs = require('fs')
const path = require('path')

const interface = {
    anchor(data, callback) {
        if (fs.existSync(path.resolve(process.cwd(), 'markdown.js'))) {
            const plug = require.main.require('./markdown')
            if (typeof plug == 'function') {
                plug(data)
            }
        }
        if (callback) {
            callback(null, data)
        }
    }
}

module.exports = interface