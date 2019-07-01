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
> nodemon: 监测文件的变化