var assert = require('assert'),
    breadcrubs = require('../')

var get = breadcrubs.get,
    set = breadcrubs.set

var object
describe('node-breadcrubs', function() {

    beforeEach(function() {
        object = {
            foo: {
                bar: {
                    baz: 'YARRR'
                }
            }
        }
    })

    describe('get', function() {

        it('should return expected value', function() {
            assert.equal(get(object, 'foo.bar.baz'), object['foo']['bar']['baz'])
            assert.equal(get(object, 'foo.bar.baz'.split('.')), object['foo']['bar']['baz'])
        })

        it('should return undefined for property that does not exist', function() {
            assert.equal(get(object, 'foo.bar.bar'), undefined)
        })

        it('should return default value for property that does not exist', function() {
            assert.equal(get(object, 'foo.bar.bar', 'YARRR'), 'YARRR')
        })

    })

    describe('set', function() {

        it('should set provided value', function() {
            set(object, 'foo.bar.xxx', 'YARRR')
            assert.equal(object['foo']['bar']['xxx'], 'YARRR')

            set(object, 'foo.xxx.zzz', true)
            assert.equal(object['foo']['xxx']['zzz'], true)
        })

    })

})
