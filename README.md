# local-persist
A simplified client `localStorage` API

# Install
Using `npm`
```shell
npm install local-persist --save
```

Using `yarn`
```shell
yarn add local-persist
```

# API

The API is a simplified way to interact with all things `localStorage`. Note that when `localStorage` is unsupported in the current browser, a fallback to an in-memory store is used transparently.

## `localPersist(key, value?)`

If a `value` argument is provided, acts as `localPersist.set`. When `value` isn't provided, acts as `localPersist.get`.

##### Example

```js
var localPersist = require('local-persist');

localPersist('key');
// <- null

localPersist('key', 'value');
// <- true

localPersist('key');
// <- 'value'
```

## `localPersist.get(key)`

Returns value under `key` in local storage. Equivalent to `localPersist(key)`.

##### Example

```js
var localPersist = require('local-persist');

localPersist('key', 'value');
// <- true

localPersist.get('key');
// <- 'value'
```

## `localPersist.set(key, value)`

Persists `value` under `key` in local storage. Equivalent to `localPersist(key, value)`

##### Example

```js
var localPersist = require('local-persist');

localPersist.set('key', 'value');
// <- true

localPersist.get('key');
// <- 'value'
```

## `localPersist.remove(key)`

Removes `key` from local storage. Returns `true` if the property was successfully deleted, and `false` otherwise.

##### Example

```js
var localPersist = require('local-persist');

localPersist.set('key', 'value');
// <- true

localPersist.remove('key');
// <- true
```

## `localPersist.clear()`

Clears local storage.

##### Example

```js
var localPersist = require('local-persist');

localPersist.set('key1', 'value1');
localPersist.set('key2', 'value2');
localPersist.clear();
```