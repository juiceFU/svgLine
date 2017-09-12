# svgLine

> 还存在一些bug  封装不够完善 待修复

使用svg划线程序，移动端 ，修改变量参数后， 可以不使用jq

### 参数

- dom：划线的dom

- line：线条参数

```
var line = [
	{span: [-275,196,'肩宽'],//span元素的坐标和内容
	 Svgline: ["0,0,65,0","65,0,112,26"]}//两根折线的坐标 
	
	]

```
### 一些配置

- baseW  页面相对宽度

- baseH  页面相对高度

- baseDom 基于页面显示


### 使用方法

- 引入svgline.js

- new Svg(dom , line);