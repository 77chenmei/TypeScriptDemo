
# 配置参数

## compilerOptions 编译选项
| 参数       | 含义     |  默认值  | 备注 |
| --------   | -----    | ------- |------|
|target      | 编译目标代码的版本标准  |  es3    | es6就是es2015|
|module      | 编译目标代码使用的模块化标准  |  commonjs    | es6/commonjs | 
|lib         | 编译环境                    | ['es2016']    |es2016，dom |
|outDir      | 编译后文件存放位置           |  ---    | './dist' |

## inClude 需要编译的文件目录
数组类型，可以填写多个文件目录

## files 指定编译某一个文件及它所依赖的文件
数组类型，可以填写多个文件



# 安装第三方库
@types/node ts官方类型库，其中包含了很多对js代码的类型描述。

> jquery :用js写，没有类型检查
> 安装@type/jquery，为jquery库添加类型检查