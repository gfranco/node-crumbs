/**
 * Get value from object for provided property
 *
 * @param {Object} object
 * @param {String|Array} property
 * @param {*} [defaultValue]
 * @returns {*}
 */
var get = exports.get = function(object, property, defaultValue) {

    if(!Array.isArray(property))
        return get(object, property.split('.'), defaultValue)

    if(!object) return defaultValue

    var propName = property[0]
    property = property.slice(1)

    if(!property.length)
        return object.hasOwnProperty(propName)
            ? object[propName]
            : defaultValue

    var value = object[propName]
    if(classOf(value) === 'Object')
        return get(value, property, defaultValue)

    return defaultValue

}

/**
 * Set value for provided property
 *
 * @param {Object} object
 * @param {String|Array} property
 * @param {*} value
 */
var set = exports.set = function(object, property, value) {

    if(!Array.isArray(property))
        return set(object, property.split('.'), value)

    var propName = property[0]
    property = property.slice(1)

    if(!property.length)
        return object[propName] = value

    object = object.hasOwnProperty(propName)
        ? object[propName]
        : object[propName] = {}

    return set(object, property, value)

}

function classOf(something) {
    return Object.prototype.toString.call(something).slice(8, -1)
}
