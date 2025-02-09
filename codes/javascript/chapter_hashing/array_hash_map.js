/*
 * File: array_hash_map.js
 * Created Time: 2022-12-26
 * Author: Justin (xiefahit@gmail.com)
 */

/* 键值对 Number -> String */
class Entry {
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}

/* 基于数组简易实现的哈希表 */
class ArrayHashMap {
    #bucket;
    constructor() {
        // 初始化一个长度为 100 的桶（数组）
        this.#bucket = new Array(100).fill(null);
    }

    /* 哈希函数 */
    #hashFunc(key) {
        return key % 100;
    }

    /* 查询操作 */
    get(key) {
        let index = this.#hashFunc(key);
        let entry = this.#bucket[index];
        if (entry === null) return null;
        return entry.val;
    }

    /* 添加操作 */
    set(key, val) {
        let index = this.#hashFunc(key);
        this.#bucket[index] = new Entry(key, val);
    }

    /* 删除操作 */
    delete(key) {
        let index = this.#hashFunc(key);
        // 置为 null ，代表删除
        this.#bucket[index] = null;
    }

    /* 获取所有键值对 */
    entries() {
        let arr = [];
        for (let i = 0; i < this.#bucket.length; i++) {
            if (this.#bucket[i]) {
                arr.push(this.#bucket[i]);
            }
        }
        return arr;
    }

    /* 获取所有键 */
    keys() {
        let arr = [];
        for (let i = 0; i < this.#bucket.length; i++) {
            if (this.#bucket[i]) {
                arr.push(this.#bucket[i]?.key);
            }
        }
        return arr;
    }

    /* 获取所有值 */
    values() {
        let arr = [];
        for (let i = 0; i < this.#bucket.length; i++) {
            if (this.#bucket[i]) {
                arr.push(this.#bucket[i]?.val);
            }
        }
        return arr;
    }

    /* 打印哈希表 */
    print() {
        let entrySet = this.entries();
        for (const entry of entrySet) {
            if (!entry) continue;
            console.info(`${entry.key} -> ${entry.val}`);
        }
    }
}

/* Driver Code */
/* 初始化哈希表 */
const map = new ArrayHashMap();
/* 添加操作 */
// 在哈希表中添加键值对 (key, value)
map.set(12836, '小哈');
map.set(15937, '小啰');
map.set(16750, '小算');
map.set(13276, '小法');
map.set(10583, '小鸭');
console.info('\n添加完成后，哈希表为\nKey -> Value');
map.print();

/* 查询操作 */
// 向哈希表输入键 key ，得到值 value
let name = map.get(15937);
console.info('\n输入学号 15937 ，查询到姓名 ' + name);

/* 删除操作 */
// 在哈希表中删除键值对 (key, value)
map.delete(10583);
console.info('\n删除 10583 后，哈希表为\nKey -> Value');
map.print();

/* 遍历哈希表 */
console.info('\n遍历键值对 Key->Value');
for (const entry of map.entries()) {
    if (!entry) continue;
    console.info(entry.key + ' -> ' + entry.val);
}
console.info('\n单独遍历键 Key');
for (const key of map.keys()) {
    console.info(key);
}
console.info('\n单独遍历值 Value');
for (const val of map.values()) {
    console.info(val);
}
