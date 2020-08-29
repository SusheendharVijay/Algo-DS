class HashTable {
  constructor(keySize = 53) {
    this.keyMap = new Array(keySize);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let midHash = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + midHash) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let hash = this._hash(key);
    if (this.keyMap[hash] === undefined) {
      this.keyMap[hash] = [];

      this.keyMap[hash].push([key, value]);
    } else this.keyMap[hash].push([key, value]);
  }
  get(key) {
    let hash = this._hash(key);
    let keyValuePair = this.keyMap[hash];
    if (keyValuePair === undefined) return undefined;

    for (let element of keyValuePair) {
      if (element[0] === key) return element[1];
    }
    return undefined;
  }
  values() {
    let valuesArr = [];
    for (let entry of this.keyMap) {
      if (entry) {
        for (let keyValuePair of entry) {
          if (!valuesArr.includes(keyValuePair[1])) {
            valuesArr.push(keyValuePair[1]);
          }
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];
    for (let entry of this.keyMap) {
      if (entry) {
        for (let keyValuePair of entry) {
          if (!keysArr.includes(keyValuePair[0])) keysArr.push(keyValuePair[0]);
        }
      }
    }

    return keysArr;
  }
}
