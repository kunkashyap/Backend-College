## COMMON JS Pattern (require/ module.exports)

```
1. CommonJS is Node.js's default module system
2. Uses require('<file-path>') to import and modules.exports(<function - name>) to export

3. Synchronous Loading, Works everywhere in Node.js

require() import core modules and require('./filename') import local files or modules in that particular file
```

### Use case and Real World Example
```
Works with all Node versions and every npm package uses it because its the default

99% of npm packages uses CommonJS
Express, MongoDB uses CommonJS too {we will use these libraries later}
```
### Difference bw Module and Library
```
Module : a module is a single, self-contained file of code representing a narrow piece of functionality

Library :a library is a larger collection of multiple modules or packages
```


## ES Modules (import | export)
```
1. Uses import and export
2. file extension as .mjs or .js (with type:module)
3. Asynchronous
4. Supported after Node 12 version
5. Native Browser support
```


### Some points
```
Module catching in Node.Js MEANS once required, module result is catched and reused for all future requires

require('fs') => core module, no path needed
require('./math') => ./ means local file in current directory
require('../db') => ../ means file in parent directory

Path tells NodeJs where to look 
```