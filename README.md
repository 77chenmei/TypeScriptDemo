# TypeScriptDemo

## 配置项目

### 创建配置文件
> 直接在目录下创建  `tsconfig.json` 文件

> 使用命令 `tsc --init` 创建 `tsconfig.json`文件

[配置参数说明](./config/index.md)

#
使用配置文件之后，使用tsc进行编译，不能+文件名，如果直接跟上文件名，会忽略配置文件

## 使用第三方库简化流程

> ts-node：将ts代码在内存中完成编译，同时完成运行

```javascript
    // 安装命令：
    npm install -g ts-node

    // 执行命令为：
    ts-node src/index.ts
```

> nodemon: 监测文件的变化

```javascript
   // 安装命令：
    npm install -g nodemon

   // 执行命令为：
    nodemon --exec ts-node src/index.ts

    // 执行上面命令之后，nodemon监控的是整个项目，进一步配置，只监控ts文件
    nodemon -e ts --exec ts-node src/index.ts

    // 执行上面命令之后，nodemon只监控ts文件，但是还监控src之外的文件
    nodemon --watch src -e ts --exex ts-node src/index.ts

    // 现在nodemon只监控src中的ts文件，可在package.json中配置，简化执行代码
    {
        "script":{
            "dev":"nodemon --watch src -e ts -exec ts-node src/index.ts"
        }
    }

    // 现在运行文件，你只需要执行下面命令即可
    npm run dev 
```