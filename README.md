## node-crumbs
```javascript
var crumbs = require('crumbs')

var obj = {}
crumbs.set(obj, 'foo.bar.baz', 'YARRR!!!')

console.log(obj) // => { foo: { bar: { baz: 'YARRR!!!' } } }

console.log(crubs.get(obj, 'foo.bar')) // => { baz: 'YARRR!!!' }
console.log(crubs.get(obj, 'foo.bar.baz')) // => YARRR!!!
console.log(crubs.get(obj, 'foo.bar.ololo')) // => undefined
```
