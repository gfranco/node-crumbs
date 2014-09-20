/**
 * Get value from object for provided property
 *
 * @param {Object} object
 * @param {String} property
 * @param {*} [defaultValue]
 * @returns {*}
 */
var get = exports.get = function(object, property, defaultValue) {

    if(!Array.isArray(property))
        property = property.split('.')

    if(!object) return defaultValue

    var propName = property.shift()
    if(!property.length)
        return propName in object
            ? object[propName]
            : defaultValue

    return get(object[propName], property, defaultValue)

}

/**
 * Set value for provided property
 *
 * @param {Object} object
 * @param {String} property
 * @param {*} value
 * @returns {*}
 */
var set = exports.set = function(object, property, value) {

    if(!Array.isArray(property))
        property = property.split('.')

    var propName = property.shift()
    if(!property.length)
        return object[propName] = value

    object = propName in object
        ? object[propName]
        : object[propName] = {}

    return set(object, property, value)

}
