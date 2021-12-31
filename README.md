# notEmptyPlainObject({})

> 检查传入参数是不是非空对象字面量。

## 使用

```js
import { log } from "console";
import notEmptyPlainObject from "@iyowei/not-empty-plain-object";

log(notEmptyPlainObject({})); // false
log(notEmptyPlainObject({ a: "after" })); // true
log(notEmptyPlainObject('')); // false
log(notEmptyPlainObject(123)); // false
```

## 安装

![esm][esm] [![Node Version Badge][node version badge]][download node.js] ![browser][browser]

```shell
# Pnpm
pnpm add @iyowei/not-empty-plain-object

# yarn
yarn add @iyowei/not-empty-plain-object

# npm
npm add @iyowei/not-empty-plain-object
```

## 参与贡献

![PRs Welcome][prs welcome badge]

## 其它

"@iyowei/not-empty-plain-object" 使用 [@iyowei/create-esm][create-esm] 脚手架生成。

[browser]: https://img.shields.io/badge/Browser-orange?style=flat
[node version badge]: https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js
[download node.js]: https://nodejs.org/en/download/
[prs welcome badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat
[esm]: https://img.shields.io/badge/ESM-brightgreen?style=flat
[create-esm]: https://github.com/iyowei/create-esm
