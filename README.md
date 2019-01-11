# 描述

> 原来用过.net 的 T4 现在用 node 也实现一个模板生成器， 模板引擎使用的是swig.js，请参照swig的api进行模板书写

## 使用方法

```bash
# 安装
npm i -g t4node
# 看下是否安装全局成功
 t4 -h
# 建立一个模板 例如 template.html 文档格式不限
# 新建一个模板帮助方法 help.js
----多文件 示例----
#name 属性位必须属性，是要生成文件的文件名，可以在下一级的文件夹内,请自行创建此文件夹
module.exports = [
  {
    name: 'out/result.html', // 当前文件夹下要有 out文件夹
    text: '文字1',
  },
  {
    name: 'result2.html',
    text: '文字3',
  },
]
---- 单文件 示例 ----
module.exports={
  name:'result.html',
  text:'文字'
}
# 运行生成命令
t4 -c template.html help.js
```
# 用途

> 原来做后端用T4生成 数据库对应表的类，生成三层相关的类，生成基础api 在利用部分类进行拓展
> 
> 前端可以用了生成 ajax帮助方法，根据后端swagger返回的接口描述，生成指定格式的js文件(这个示例已经完成,sample/ajax中)。 生成模型、生成重复的页面代码 我会在sample里完善各种例子