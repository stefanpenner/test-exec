'use strict';

const exec = require('execa');

const fs = require('fs');

fs.chmodSync('./foo', 0x755);
const a = exec('./foo');

a.on('exit', () => console.log('exit'))
a.on('processExit', () => console.log('processExit')) // never seems to fire
a.then(() => {
  console.log('OMG')
}).catch(e => {
  console.log('OMG ERROR:', e)
})
