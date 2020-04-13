# CSS基础知识（一）
css介绍
- CSS 指层叠样式表 (Cascading Style Sheets)
- CSS通常称为CSS样式表或层叠样式表（级联样式表），主要用于设置HTML页面中的文本内容（字体、大小、对齐方式等）、图片的外形（宽高、边框样式、边距等）以及版面的布局等外观显示样式。
- CSS以HTML为基础，提供了丰富的功能，如字体、颜色、背景的控制及整体排版等，而且还可以针对不同的浏览器设置不同的样式。
- CSS就是控制页面布局和样式
## 1.HTML、CSS、JavaScript关系
|名称|层级|功能|
|:---:|:---:|:---:|
|HTML|结构层|负责从语义的角度搭建页面结构|
|CSS|样式层|负责从审美的角度美化页|
|JavaScript|行为层|负责从交互的角度提升用户体验|

## 2.css语法
选择器:是一个选择谁（标签）的过程。

选择器位置：
```HTML
<head>
  <meta charset="utf-8">
  <title>标签选择器学习</title>
  <style type="text/css">
    div{
      样式表内容
    }
  </style>
</head>
```

结构:
>选择器{属性:值;属性:值...}

![选择器图片](./img/图片1.png)

|属性|解释|
|:---:|:---:|
|Width:20px;|	宽|
|Height:20px;|	高|
|Background-color:red;|	背景颜色|
|font-size:24px;	|文字大小|
|text-align:left \| center\| right	|内容的水平对齐方式|
|text-indent:2em;	|首行缩进|
|Color:red;	|文字颜色|

**一个em相当于两个文字**

## 3.选择器
### 3.1 基础选择器
#### ◆标签选择器
结构：
>标签{属性:值}

```HTML
    <style type="text/css">
      div{
        font-size:50px;
        color:green;
        background-color:yellow;
        width:300px;
        height:200px;
      }
      p{
        color:pink;
        font-size:30px;
      }
    </style>
```
[案例](./css练习/demo01标签选择器.html)

#### ◆类选择器（重点）

#### ◆ID选择器
#### ◆通配符选择器

### 3.2 复合选择器
#### ◆交集选择器
#### ◆后代选择器（重点）
#### ◆子代选择器
#### ◆并集选择器
