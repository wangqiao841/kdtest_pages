##  基础 
### time_sleep() 关键字
> 根据传入的秒数进行强制时间等待

**描述**<br/>
强制时间等待

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无参 | 非负数阿拉伯数字(0 - n 代表要停留的秒数)

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx  | time_sleep  | | 5 

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | xxx  | time_sleep  | | | 5 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.time_sleep(10)  # 强制时间等待10s
```

**注意事项**
* 传入的操作值你只要确定其为阿拉伯数字即可，不必在意它的类型，在关键字中会进行类型转换。
* 强制时间等待关键字不需要传入“元素定位信息”，对应的元素定位单元格为空即可。
* 你传入的操作值在关键字中会被识别为“秒s”，例如传入“5”则代表暂停5秒在执行之后的操作。
* 该关键字一般用在执行完某个操作，需要等待被测系统做出反应之后在进行操作的情况。例如 “发送完成一封邮件后等待系统接收”、“删除某个人员等待系统加载”等等。
***
### implicitly_time() 关键字
> 根据传入的秒数进行隐式时间等待 (一个driver对象只有一个隐式时间可以生效，按照顺序最近一次设置为有效，其它不生效)

**描述**<br/>
隐式时间等待

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无参 | 非负数阿拉伯数字(0 - n 代表要等待元素查找的秒数上限)

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx  | implicitly_time  | | 10

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | xxx  | implicitly_time| | | 10

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.implicitly_time(20)  # 设置隐式等待时长20s
```

**注意事项**
* 传入的操作值你只要确定其为阿拉伯数字即可，不必在意它的类型，在关键字中会进行类型转换。
* 隐式时间等待关键字不需要传入“元素定位信息”，对应的元素定位单元格为空即可。
* 需要你注意一个driver对象只有一个隐式时间可以生效，按照顺序最近一次设置为有效，其它不生效。
* 设置的隐式时间为全局生效，所以在调用该关键字后整个框架的隐式等待时间均会改变。
* 该关键字实际应用的场景并不多，只有在你认为框架默认的隐式等待时间过短或者过长，可能会影响用例执行结果的准确度时可使用该关键字进行修改(框架默认的隐式等待时间为10s，该默认值可在启动参数中设置)。
***
### explain() 关键字
> 在测试报告和测试日志中打印指定的内容

**描述**<br/>
无实际意义，只是用于将指定的内容打印在框架的测试报告和运行日志中

**参数**<br/>
(特殊，见关键字注意事项)

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | 要打印的文本 | explain | | 

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | 要打印的文本  | explain| | | 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.explain("要打印的文本内容")
```

**注意事项**
* 关键字所打印的内容信息为“操作步骤”单元格中的值，并非“操作值”单元格中的值
* 关键字主要负责将用例文件中的信息打印到运行日志和测试报告中，与脚本方法中的INFO()同等
* 关键字本身没有任何逻辑操作，故它不需要给“元素定位信息”和“操作值”单元格赋值
***
##  iframe处理
### frame_default() 关键字
> 初始化当前活动窗口的frame焦点

**描述**<br/>
将当前拥有句柄的窗口中的iframe焦点还原到初始状态
> iframe焦点：移入到**iframe页面**中的操作焦点(selenium焦点)
> iframe页面：通过 html中的`<iframe></iframe>`标签嵌入到窗口中的页面

**参数**<br/>
无参

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx | frame_default | | 

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | xxx  | frame_default | | | 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.frame_default()  # iframe焦点初始化
```

**注意事项**
* 关键字会将当前活动窗口中的iframe焦点还原到最初始状态(即焦点不进入任何iframe标签内)，不论你是否进行过iframe焦点跳转。
* 关键字主要应用于页面结构较为复杂或者多层ifram嵌套使用的场景下，例如“进行人员删除前需要先进入一个三级嵌套的iframe页面中获取到人员的基础信息，之后在回到最外层点击删除按钮”。
* 关键字本身没有任何逻辑操作，故它不需要给“元素定位信息”和“操作值”单元格赋值。
***
### parent_frame() 关键字
> 将当前活动窗口中的iframe焦点向上跳转一级

**描述**<br/>
将当前拥有句柄的窗口中的iframe焦点向上跳转一层级，主要应用在iframe页面嵌套的情况下
> iframe1页面 → iframe1.1页面 → iframe1.1.1页面  （←为向上，→为向下）
> > iframe焦点：移入到**iframe页面**中的操作焦点(selenium焦点)
> iframe页面：通过 html中的`<iframe></iframe>`标签嵌入到窗口中的页面

**参数**<br/>
无参

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx | parent_frame | | 

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | xxx  | parent_frame | | | 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.parent_frame()  # iframe焦点向上跳转一级
```

**注意事项**
* 与frame_default关键字类似，只不过前者是跳出所有而parent_frame关键字是向上跳出一级。
* 关键字的操作类似于文件夹目录结构的跳转，架设现在页面是一个三级嵌套的iframe页面，当前的iframe焦点在第三层，使用关键字后焦点会跳转至第二层。
* 该关键字能够灵活在iframe层级间跳转，适用于需要频繁切换或者涉及到iframe焦点上下切换的场景中。
* 关键字本身没有任何逻辑操作，故它不需要给“元素定位信息”和“操作值”单元格赋值。
***
### refresh_frame() 关键字
> 刷新当前拥有焦点的iframe页面
> > 框架1.1.4版本新增

**描述**<br/>
将当前拥有焦点的iframe页面刷新，注意此处刷新的并非窗口而是窗口中的iframe页面
>  iframe焦点：移入到**iframe页面**中的操作焦点(selenium焦点)
> iframe页面：通过 html中的`<iframe></iframe>`标签嵌入到窗口中的页面

**参数**<br/>
无参

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx | refresh_frame | | 

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | xxx  | refresh_frame | | | 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.refresh_frame()  # 当前iframe页面刷新
```

**注意事项**
* 注意与 `driver_refres()` 关键字的区别，前者是将拥有句柄的整个浏览器窗口包括iframe页面全部刷新，而后者则仅是刷新当前拥有焦点的iframe页面。
* 关键字本身没有任何逻辑操作，故它不需要给“元素定位信息”和“操作值”单元格赋值。
***
### switch_frame() 关键字
> 根据指定的iframe标识，进行iframe焦点跳转

**描述**<br/>
将操作焦点跳转到指定的iframe页面中
> iframe页面：通过 html中的`<iframe></iframe>`标签嵌入到窗口中的页面

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无参 | iframe标签ID属性值 / iframe标签在窗口中索引位置(索引从0开始)

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx | switch_frame| | id / index

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | xxx  | switch_frame| | | id / index

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.switch_frame(id || index)  # 焦点跳转到iframe中
```

**注意事项**
* 关键字用于将焦点跳转到指定的iframe页面中，已达到获取或者操作指定iframe页面中元素的目的。
* 关键字并不能支持一次性多级跳转，假设当前页面是一个两级嵌套的iframe页面，如果想要跳转到最底层的iframe页面中，你需要一级一级的调用它完成跳转，直接跳转到最底层会出现错误。
* 操作值中的“id” 代表指定页面所在的iframe标签的id属性值，关键字可根据它完成跳转。
* 操作值中的“index” 代表指定页面所在iframe标签在整个页面中的索引位置(起始为0)，在iframe标签不存在id属性的情况下关键字可根据它完成跳转。
* 同样如果使用index索引值进行定位，你不必在意它是否为数值类型的数字，关键字会自行转换。
* 注意关键字对iframe标签的定位采用的是“操作值”单元格中的id或者index索引值，并不是“元素定位信息”，故它不需要给“元素定位信息”单元格赋值。
***
##  窗口处理
### driver_back() 关键字
> 浏览器窗口返回上一页
>> 框架1.1.3版本新增

**描述**<br/>
将当前拥有句柄的浏览器窗口的页面栈向前跳转一次，类似浏览器中的“后退”按钮
> 页面1 → 页面2 → 页面3  （←为向前，→为向后）

**参数**<br/>
无参

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx | driver_back| | 

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | xxx  | driver_back| | | 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.driver_back()  # 返回上一页
```

**注意事项**
* 关键字主要用于将当前正在活动窗口的页面栈向前跳转，效果等同于点击浏览器的“返回上一页”按钮。
* 关键字本身没有任何逻辑操作，故它不需要给“元素定位信息”和“操作值”单元格赋值
***
### driver_refresh() 关键字
> 刷新当前正在活动的浏览器窗口

**描述**<br/>
将当前拥有句柄的浏览器窗口整个刷新，类似浏览器中的“重新加载”按钮

**参数**<br/>
无参

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx | driver_refresh | | 

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | xxx  | driver_refresh| | | 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.driver_refresh()  # 刷新
```

**注意事项**
* 关键字主要用于刷新当前正在活动的窗口，效果等同于点击浏览器的重新加载按钮。
* 关键字本身没有任何逻辑操作，故它不需要给“元素定位信息”和“操作值”单元格赋值
***
### driver_close() 关键字
> 关闭当前正在活动的浏览器窗口

**描述**<br/>
将当前拥有句柄的浏览器窗口关闭，类似浏览器中的“X 关闭”按钮

**参数**<br/>
无参

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx | quit_browser | | 

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | xxx  | quit_browser | | | 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.quit_browser()  # 窗口关闭
```

**注意事项**
* 关键字主要用于将当前拥有句柄的窗口关闭，效果等同于点击浏览器的关闭按钮。
* 关键字本身没有任何逻辑操作，故它不需要给“元素定位信息”和“操作值”单元格赋值
***
### gethandle() 关键字
> 获取当前窗口句柄
> 特殊：需要同 `enterWindow() 关键字` 和 `outWindow() 关键字` 一同使用，单独使用无意义

**描述**<br/>
获取当前活动窗口的句柄，并存入到缓存中

**参数**<br/>
无参

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | 进入登录窗口 | xxx |   |  
 |  | n |当前窗口句柄获取 | <font color="blue">**gethandle**</font>|   |  
 |  | n | 点击注册按钮，弹出注册窗口 | xxx |   |  
 |  | n | 窗口句柄跳转入注册窗口 | enterWindow |   |  
 |  | n | 输入用户名 | xxx |   |  
 |  | n | 输入密码 | xxx |   |  
 |  | n | 点击提交按钮 | xxx |   |  
 |  | n | 关闭注册窗口，句柄跳出回到登录窗口 | outWindow |   |  

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | gethandle|  |  |   

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.gethandle()  # 当前窗口句柄获取
```

**注意事项**
* 需要同 `enterWindow() 关键字` 和 `outWindow() 关键字` 一同使用，单独使用无意义。
***
### enterWindow() 关键字
> 窗口句柄跳入
> 特殊：需要同 `gethandle() 关键字` 和 `outWindow() 关键字` 一同使用，单独使用无意义

**描述**<br/>
找到当前测试环境中的“新窗口”，并将句柄跳转入其中(支持在句柄跳转时控制跳入窗口的大小)，当传入的操作值为`True`时表示要最大化窗口，值为空或者`False`时表示保持窗口原样

**参数**<br/>
无参

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | 进入登录窗口 | xxx |   |  
 |  | n |当前窗口句柄获取 | gethandle |   |  
 |  | n | 点击注册按钮，弹出注册窗口 | xxx |   |  
 |  | n | 窗口句柄跳转入注册窗口，并将其最大化 | <font color="blue">**enterWindow**</font> |   |  True
 |  | n | 输入用户名 | xxx |   |  
 |  | n | 输入密码 | xxx |   |  
 |  | n | 点击提交按钮 | xxx |   |  
 |  | n | 关闭注册窗口，句柄跳出回到登录窗口 | outWindow |   |  

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | enterWindow |  |  |  True / False

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.enterWindow('窗口最大化开关 True / False')  # 窗口句柄跳入
```

**注意事项**
* 需要同 `gethandle() 关键字` 和 `outWindow() 关键字` 一同使用，单独使用无意义。
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)为布尔型`True` || `False`，当值为`True`时表示要最大化窗口，值为空或者`False`时表示保持窗口原样。
***
### outWindow() 关键字
> 窗口句柄跳出
> 特殊：需要同 `gethandle() 关键字` 和 `enterWindow() 关键字` 一同使用，单独使用无意义

**描述**<br/>
将句柄返回上一级窗口，关闭当前拥有句柄的窗口并将该窗口的句柄从缓存中移除

**参数**<br/>
无参

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | 进入登录窗口 | xxx |   |  
 |  | n |当前窗口句柄获取 | gethandle |   |  
 |  | n | 点击注册按钮，弹出注册窗口 | xxx |   |  
 |  | n | 窗口句柄跳转入注册窗口 | enterWindow |   |
 |  | n | 输入用户名 | xxx |   |  
 |  | n | 输入密码 | xxx |   |  
 |  | n | 点击提交按钮 | xxx |   |  
 |  | n | 关闭注册窗口，句柄跳出回到登录窗口 | <font color="blue">**outWindow** </font> |   |  

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | outWindow|  |  | 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.outWindow()  # 窗口句柄跳出
```

**注意事项**
* 需要同 `gethandle() 关键字` 和 `enterWindow() 关键字` 一同使用，单独使用无意义。
* 该关键字在句柄跳出的同时，会将当前窗口的句柄从缓存中移除。
***
##  元素操作
### input_text() 关键字
<a id="input_text"></a>

> 在指定的元素中输入指定内容

**描述**<br/>
根据传入的元素定位信息找到元素，并在元素中输入指定的内容

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式，定位表达式 [, 索引位置][, 父级对象] | 要输入的内容
> *[, xxx]  代表可省略*

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx | input_text | key1/key2 | 要输入的内容

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | xxx  | input_text | id/name/… | 对应表达式 | 要输入的内容

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    - id || ids || xpath || xpaths …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.input_text('定位方式','定位表达式',content='要输入的内容'[,index='索引值'][,ParentObject='父级元素对象'])  # 内容输入

'''
def input_text(self, targeting, element, index=None, content=None, ParentObject=None) 注意关键字在定义时的参数顺序 
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ content: 要输入的内容
@ ParentObject: 父级element对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等。
'''
# 实例一
keyword.input_text('id', 'kw', 0, '百度搜索')  # 内容输入
	
# 实例二
keyword.input_text('id', 'kw', content='百度搜索')  # 内容输入

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.input_text('id', 'kw', content='百度搜索', ParentObject=elementObject)  # 内容输入
```

**注意事项**
* 关键字主要用于对当前活动页面中的指定元素输入指定的内容，注意只对可进行输入操作的元素有效。
* 如果想要在输入时清空对应元素的原始内容，则应将要输入的内容用中括号“[]”包裹，例如['xxx'] 、[10]；注意如果内容为字符串或者汉字则必须在中括号中用引号引起来，否则会出现错误。
* 如果你只是想清空值而不输入值，则可以直接传入“[]”即可。
* 至于关键字中的“父级对象”形参(后代元素定位)，主要在脚本中调用关键字时使用，用例步骤中不使用。
***
### click_btn() 关键字
<a id="click_btn"></a>

> 对指定的元素进行点击操作

**描述**<br/>
根根据传入的元素定位信息找到元素，并对该元素进行点击操作(鼠标左键单击)

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式，定位表达式 [, 索引位置][, 父级对象] | 无参
> *[, xxx]  代表可省略*

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx | click_btn| key1/key2 | 

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | xxx  | click_btn| id/name/… | 对应表达式 | 

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    - id || ids || xpath || xpaths …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.click_btn('定位方式','定位表达式'[,index='索引值'][,ParentObject='父级元素对象'])  # 元素点击

'''
def click_btn(self, targeting, element, index=None, ParentObject=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级element对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.click_btn('id', 'kw')  # 元素点击

# 实例二
keyword.click_btn('ids', 'kw', index=0)  # 元素点击

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.click_btn('ids', 'kw', index=0, ParentObject=elementObject)  # 元素点击
```

**注意事项**
* 关键字用于对指定元素进行点击操作(模拟鼠标左键点击)；并非只有按钮元素才可使用该方法，对页面中的任何元素均生效(点击效果需要视实际元素类型而定)。
* 至于关键字中的“父级对象”形参(后代元素定位)，主要在脚本中调用关键字时使用，用例步骤中不使用。
***
### js_control() 关键字
> 使用javaScript指令方式对指定元素进行操作（输入、点击等等）

**描述**<br/>
使用指定的 “javaScript定位操作表达式” 对目标元素进行操作

**参数**<br/>
(特殊，见关键字注意事项)

**用例步骤使用示例 （特殊）**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx | js_control | key1/key2 |  要输入的内容  # 操作方法为‘value’时书写

用例name     | 序号     | 操作步骤    | 关键字   | 定位方式| 定位表达式 | 操作 | 操作值
-------- | -----  | -----  | -----  | -----  | -----  | ----- | ----- 
不区分元素定位数据 | n | xxx | js_control | document.getElementById | 对应定位值 | 操作方法 |  要输入的内容  # 操作方法为‘value’时书写

**元素节点数据区分 elementData.yaml文件书写示例 （特殊）**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    - document.getElementById || document.getElementsByClassName || document.querySelectorAll  # 此处为列举，任何合法的JS定位方式均适用
    - 正常合法的定位表达式
    - value || click()  # 操作方式此处为列举，任何合法的JS操作方式均适用
    - [ 0-n ]  # index索引，非复数定位时不支持使用此项；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.js_control('JS定位方式','JS定位表达式','JS操作方式'[,index='索引值'][,content='要输入的值'])  # 元素操作

'''
def js_control(self, targeting, element, behavior, index=None, content=None) 注意关键字在定义时的参数顺序
@ targeting: javaScript定位方式
@ element: javaScript定位表达式
@ behavior: javaScript操作方式
@ index: 索引
@ content: 要输入的值

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.js_control('document.getElementById', 'kw', behavior='click()', index=0)  # 元素操作 - 点击

# 实例二
keyword.js_control('document.getElementById', 'kw', behavior='value', content="百度搜索")  # 元素操作 - 内容输入
```

**注意事项**
* 关键字主要应用在“input_text”和“click_btn”关键字无法有效操作元素的场景下，传递的元素定位数据与其它关键字有较大的差别，注意传值限制。
* 关键字的定位方式有格式限定例如 `document.getElementById 对应ID定位`、`document.querySelectorAll 对应CSS定位`、`document.getElementsByClassName 对应ClassName定位`、`document.getElementsByName 对应Name定位`，此处为列举任何合法的javaScript定位方式均适用。
* 关键字的操作方法格式限定例如 `click() 对应点击事件`、`value 对应输入操作`，此处为列举任何合法的javaScript操作方式均适用。
* 由于特殊的定位方式，关键字“是否复数定位”的区别在定位方式的中 `.getElement` 和 `.getElements`上体现。
* 关键字content形参(在用例步骤中为 “操作值” 单元格中书写的值)需要与`value` 操作方法同时使用，当操作方法为`click()`时该值不生效为空即可。
***
### alert_operation() 关键字
> 对alert提示弹框进行操作

**描述**<br/>
识别当前页面中的`alert`、`confirm`和 `prompt`弹框，并对其进行指定的操作

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无参 | string / boole / list

> *[, xxx]  代表可省略*

> string / boole / list : 代表参数类型，详细的说明见**参数说明**
>
**参数说明**
* 操作参数支持接收三种类型的参数值，关键字会根据参数值的类型进行相应的处理
	* string: 代表在 `prompt`弹框的输入框中输入的文本
	* boole: 代表点击 `alert`、`confirm`和 `prompt`弹框的那个操作按钮（True确定、False取消）
	* list: 上面两种类型数据的整合，[string, boole]; 代表对`prompt`弹框进行输入，并点击弹框的指定操作按钮
> 关键字会自动识别当前弹框的类型，不需要特殊指明；另外参数类型的选择并不是随意的，你需要根据实际的页面场景来决定，不恰当的参数会导致关键字执行出错。例如当弹窗类型为`alert`或者`confirm`时，你只能选择“boole类型”，若选择“list类型”和“string类型”关键字就会报错。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx | alert_operation |  | string / boole / list

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式  | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | xxx  | alert_operation |  |  | string / boole / list

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.alert_operation(content="操作数据 string / boole / list")  # alert弹框处理

'''
def alert_operation(self, content=None)
@ content: 操作数据
'''
# 实例一
keyword.alert_operation(False)  # 处理窗口的alert、confirm、prompt弹框，点击弹框【取消】按钮

# 实例二
keyword.alert_operation(True)  # 处理窗口的alert、confirm、prompt弹框，点击弹框【确定】按钮

# 实例三
keyword.alert_operation('文本内容')  # 处理窗口的prompt弹框，在输入框中输入内容后，点击弹框【取消】按钮

# 实例四
keyword.alert_operation(['文本内容',True])  # 处理窗口的prompt弹框，在输入框中输入内容后，点击弹框【确定】按钮
```

**注意事项**
* 关键字的弹框操作按钮类型默认为`Fasel取消`，即若不传入，则在处理弹框时将默认点击弹框的【取消】按钮。
* 参数值为string类型、list类型时，弹框类型必须为`prompt`，否则会出现异常报错。
* 在参数值为list类型时，列表子项必须由 string、boole两项组成，缺一不可；另外两项没有顺序限制，`[string, boole]` 和 `[boole, string]` 均可。
* 在处理 `prompt`弹框时建议参数类型为list类型，若单独传入“boole 点击操作按钮”或者“string 输入框文本输入”均无实际意义。
***
### selector_operation() 关键字
<a id="selector_operation"></a>

>对`<select></select>  下拉列表框`进行列表子项选择

**描述**<br/>
 根据元素定位数据找到指定的`<select></select> 下拉列表框`，并对其中的指定列表子项进行选择；关键字可以根据列表子项的 “value属性值”、“index索引值 ”和“text文本值”对其进行定位选择
 
**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式，定位表达式 [, 索引位置][, 父级对象] |  ['子项value值'] / ['子项index值'] / ['子项text文本值']
> *[, xxx]  代表可省略*

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | selector_operation| key1/key2 | ['value属性值'] / ['index索引值' / ['text文本值']

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | selector_operation| id/name/… | 对应表达式 | ['value属性值'] / ['index索引值'] / ['text文本值']

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    - id || ids || xpath || xpaths …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.selector_operation('定位方式','定位表达式',content='要选择的列表项的标识'[,index='索引值'][,ParentObject='父级元素对象'])  # 下拉列表项选择

'''
def selector_operation(self, targeting, element, index=None, ParentObject=None, content=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级element对象
@ content: 列表项标识值

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.selector_operation('id', 'kw', 0, content=['否'])  # 列表项选择，此处的‘否’为要选择列表项的text文本值

# 实例二
keyword.selector_operation('id', 'kw', content=['f'])  # 列表项选择，此处的‘f’为要选择列表项的value属性值

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.selector_operation('id', 'kw', content=[1], ParentObject=elementObject)  # 列表项选择，此处的‘1’为要选择列表项的index索引值
```

**注意事项**
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)应为list类型，支持接收“value属性值”、“index索引值”和“text文本值”中的任意一个。
* 关键字会根据实际的情况对传入值的类型进行判断，不需要特殊声明。
* content形参(在用例步骤中为 ‘操作值’ 单元格中书写的值)接收的列表中仅允许存在一个值，若存在多个值则以列表中0号索引的值为准。
* 至于关键字中的“父级对象”形参(后代元素定位)，主要在脚本中调用关键字时使用，用例步骤中不使用。
***
### radioCheck_operation() 关键字
<a id="radioCheck_operation"></a>

>对`单/复选按钮`进行选中操作

**描述**<br/>
 根据元素定位数据找到指定的`单/复选按钮`，并根据其当前的“选中状态”判断是否对其进行操作。
 
**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式，定位表达式 [, 索引位置][, 父级对象] |  True/False
> *[, xxx]  代表可省略*

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | radioCheck_operation| key1/key2 | True/False

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | radioCheck_operation| id/name/… | 对应表达式 | True/False

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    - id || ids || xpath || xpaths …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.radioCheck_operation('定位方式','定位表达式'[,index='索引值'][,ParentObject='父级元素对象'][,content='True/False'])  # 单/复选按钮选择

'''
def radioCheck_operation(self, targeting, element, index=None, ParentObject=None, content=True) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级element对象
@ content: 选中类型

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.radioCheck_operation('id', 'kw', 0, content=True)  # 将“单/复选”按钮选中

# 实例二
keyword.radioCheck_operation('id', 'kw', content=False)  # 取消“单/复选”按钮的选中

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.radioCheck_operation('id', 'kw', content=False, ParentObject=elementObject)  # 取消“单/复选”按钮的选中
```

**注意事项**
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)代表元素选中操作标识；`True [默认]` 对元素进行选中，`False`指定元素不选中。
* 若content形参(在用例步骤中为 “操作值” 单元格中书写的值)为空，或者书写了除 `True`、`False`之外的值，则默认对元素进行选中操作。
* 若元素的状态(选中状态)与元素选中标识(content)不一致则对元素进行操作，若一致则忽略跳过。
***
### drag_scrollBar() 关键字 
<a id="drag_scrollBar"></a>

>将当前活动窗口中的滚动条拖动到指定元素所在的位置

**描述**<br/>
根据元素定位数据找到对应的元素，并将窗口中的滚动条拖动到元素所在的位置，以解决在页面内容溢出时的元素遮挡问题

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式，定位表达式 [, 索引位置][, 父级对象] |  top / bottom
> *[, xxx]  代表可省略*

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | drag_scrollBar | key1/key2 | top

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | drag_scrollBar | id/name/… | 对应表达式 | bottom

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    - id || ids || xpath || xpaths …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.drag_scrollBar('定位方式','定位表达式'[,index='索引值'][,content='对齐参照'][,ParentObject='父级元素对象'])  # 窗口滚动条拖动

'''
def drag_scrollBar(self, targeting, element, index=None, content=None, ParentObject=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ content: 对齐参照
@ ParentObject: 父级element对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.drag_scrollBar('ids', 'kw', index=0)  # 将窗口滚动条拖动至目标元素与窗口顶部对齐的位置

# 实例二
keyword.drag_scrollBar('ids', 'kw', 0, content='bottom')  # 将窗口滚动条拖动至目标元素与窗口底部对齐的位置

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.drag_scrollBar('id', 'kw', content='top', ParentObject=elementObject)  # 将窗口滚动条拖动至目标元素与窗口顶部对齐的位置
```

**注意事项**
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)代表滚动条拖动结束后，目标元素与窗口对齐的位置，`top [默认]` 代表与窗口顶部对齐，`bottom` 代表与窗口底部对齐。
* 若content形参(在用例步骤中为 “操作值” 单元格中书写的值)为空，则默认代表滚动条拖动结束后，目标元素与窗口的顶部对齐。
* 关键字会根据实际情况对页面的“X轴”和“Y轴”进行拖动，不需要特殊标明。
* 注意关键字所定位的元素并不是要被拖动的元素，而是窗口滚动条拖动时的位置参照元素，通常是由于页面过长或者过宽导致无法显示的元素。
* 至于关键字中的“父级对象”形参(后代元素定位)，主要在脚本中调用关键字时使用，用例步骤中不使用。
***
##  数据断言
### title_assert() 关键字
>对页面的title标题值做断言判断

**描述**<br/>
取出页面的title标题值，将其与 ‘预期结果’ 做断言判断，若两值一致则返回 `True` 反之返回 `False`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无参 |  预期title标题值
> *[, xxx]  代表可省略*

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | title_assert|  | 预期title标题值

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | title_assert|  |  | 预期title标题值

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
if keyword.title_assert('百度一下'):  # 页面title值断言
	print(True)
else:
	print(False)
```

**注意事项**
* 如果需要对预期结果进行值包含比较，则应将要比较的预期结果用中括号“[]”包裹，例如['xxx'] 、[10]；注意如果预期结果为字符串或者汉字则必须在中括号中用引号引起来，否则会出现错误。
***
### alert_assert() 关键字
>对页面的alert弹框提示文本进行断言

**描述**<br/>
识别当前页面中的`alert`弹框，并对其中的提示文本进行断言

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无参 |  预期提示文本值 / ['预期提示文本值']

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | alert_assert|  | 预期title标题值 / ['预期提示文本值']

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | alert_assert |  |  | 预期title标题值 / ['预期提示文本值']

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
if keyword.alert_assert('确定此操作吗？'):  # alert弹框提示文本断言
	print(True)
else:
	print(False)
```

**注意事项**
* 如果需要对预期结果进行值包含比较，则应将要比较的预期结果用中括号“[]”包裹，例如['xxx'] 、[10]；注意如果预期结果为字符串或者汉字则必须在中括号中用引号引起来，否则会出现错误。
***
### selector_assert() 关键字
<a id="selector_assert"></a>

>对`<select></select> 下拉列表框`中的列表子项进行断言检查

**描述**<br/>
用于对`<select></select> 下拉列表框`中的列表子项进行断言检查，关键字可根据“操作参数”的不同进行两种不同的断言判断，分别为“`验证预期列表项是否存在`”和“`当前选中的列表项是否为预期列表项`”，不管是那种断言判断成立则返回`True`不成立则返回`False`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [, 索引位置][, 父级对象] |  预期列表项text文本值 / ('预期列表项text文本值',)
> *[, xxx]  代表可省略* 
> (xxx,) 代表python `tuple`元组数据类型

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | selector_assert|  key1/key2 | 预期子项text文本值 // (' 预期子项text文本值',)

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | selector_assert| id/css… | 对应表达式 | 预期子项text文本值 // (' 预期子项text文本值',)

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    - id || ids || xpath || xpaths …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.selector_assert('定位方式','定位表达式', content='预期列表项'[,index='索引值'][,ParentObject='父级元素对象'])  # select下拉列表框，列表项断言

'''
def selector_assert(self, targeting, element, index=None, content=None, ParentObject=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ content: 代表预期列表项
@ ParentObject: 父级element对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
实例一：
keyword.selector_assert('id', 'kw', content='预期列表项text文本值')  # 判断当前选中的列表项是否为预期列表项

实例二：
keyword.selector_assert('ids', 'kw', index=0, content=('预期列表项text文本值',))  # 判断预期列表项是否存在

实例三：
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.selector_assert('id', 'kw', content=('预期列表项text文本值',), ParentObject=elementObject )  # 判断预期列表项是否存在
```

**注意事项**
* 关键字中参与比较断言的是`<select></select>下拉列表框`中列表子项的“text文本值”，不支持对子项的“index索引”和“value属性”做比较断言。
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)支持两种值书写方式分别为“`'预期子项text文本值'` ”和  “`('预期子项text文本值',)`”。
	+ `'预期子项text文本值'`：代表验证当前选中的列表项是否为预期列表项。(验证下拉列表框当前选中的列表项的“text文本值”是否与预期的“列表项text文本值”一致)
	+ `('预期子项text文本值',)`：代表验证预期列表项是否存在于`<select></select>下拉列表框`子项中。(验证下拉列表框中是否包含有和预期“列表项”text文本值一致的列表项)
* 如果想要进行值“包含”比较，则需要将要比较的预期值包裹在中括号[]中，例如 ['预期值']   (['预期值'],)。
* 在进行“`验证预期列表项是否存在`”断言时，要注意参数中的“ ,逗号”为python语法不可省略；('预期值',)   (['预期值'],)。
* 关键字中的“父级对象”形参(后代元素定位)，主要在脚本中调用关键字时使用，用例步骤中不使用。
***
### selfText_assert() 关键字 
<a id="selfText_assert"></a>

> 元素text文本值比较断言

**描述**<br/>
对指定元素的text文本值进行比较断言，若预期文本值与实际文本值一致则返回`True`反之则返回`False`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [, 索引位置] | 预期文本值 / ['预期文本值'] / ""
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | selfText_assert|  key1/key2 |  预期文本值 / ['预期文本值'] / ""

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | selfText_assert| id/dis/xpaths… | 对应表达式 |  预期文本值 / ['预期文本值'] / ""

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    -  id || xpath || css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.selfText_assert('定位方式','定位表达式',content='预期文本值'[,index='索引值'])  # 元素text文本值断言

'''
def selfText_assert(self, targeting, element, index=None, content=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ content: 预期文本值

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.selfText_assert('id', 'kw', content="百度一下")  # 元素文本值断言

# 实例二
keyword.selfText_assert('ids', 'kw', index=0, content=["百度"])  # 元素文本值包含断言

# 实例三
keyword.selfText_assert('ids', 'kw', index=0, content="")  # 元素文本为空判断
```

**注意事项**
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)传入"" 代表做值为空判断。
* 如果想要进行包含值比较，则需要将要比较的预期结果用中括号“[]”包裹，如果预期结果为字符串或者汉字则必须在中括号中用引号引起来否则会出错误。
* 若直接原样传入预期结果，则关键字将进行“相等值断言比较”。
* 该关键字只支持对string类型的数据进行“包含值比较”，其它类型的数据会自动判别为“相等值比较”，例如 “传入[12]关键字会认为是对“数字12”与实际结果做相等值比较”。
* 不必担心传入的content形参(在用例步骤中为 “操作值” 单元格中书写的值)是否为string类型，关键字会自动进行类型转换例如 “传入数字5会自动转换成'5'”。
***
### selfAttribute_assert() 关键字
<a id="selfAttribute_assert"></a>

> 元素指定属性值比较断言

**描述**<br/>
对指定元素的指定值进行比较断言，若预期属性值与实际属性值一致则返回`True`反之则返回`False`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [, 索引位置] | ['属性名','预期结果'[,'是否截取']]
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | selfAttribute_assert |  key1/key2 |   ['属性名','预期结果'[,'是否截取']]

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | selfAttribute_assert | id/dis/xpaths… | 对应表达式 |   ['属性名','预期结果'[,'是否截取']]

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    -  id || xpath || css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.selfAttribute_assert('定位方式','定位表达式',content='断言数据'[,index='索引值'])  # 元素指定属性值断言

'''
def selfAttribute_assert(self, targeting, element, index=None, content=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ content: 断言数据

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.selfAttribute_assert('id', 'kw', content=['百度一下','value'])  # 元素value属性值断言

# 实例二
keyword.selfAttribute_assert('ids', 'kw', index=0, content=[['百度'],'value'])  # 元素value属性值包含断言

# 实例三
keyword.selfAttribute_assert('id', 'kw', content=['baidu.jpg','src', True])  # 图片元素src属性值截取断言
```

**注意事项**
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)为list列表类型，列表第一项代表属性名，列表第二项代表预期结果，列表第三项代表是否对实际结果按照预期结果进行长度截取，例如 `['src','test2.jpeg',True]`。
* 对content形参(在用例步骤中为 “操作值” 单元格中书写的值)做重点解释：
    + 列表中的第三项为布尔类型，如果为`True`则代表根据预期结果对实际结果进行长度截取，若省略不写则默认为`False`代表原样，该值主要应用在对图片或者文件路径做判断的场景下(例如预期结果：test2.jpeg、实际结果：c:\xxx\xxx\xx\test1.jpeg，截取后的实际结果为 test1.jpeg)；
    + 如果想要对预期结果进行值“包含”比较则需要将预期结果用中括号“[]”包裹，如果预期结果为字符串或者汉字则必须在中括号中用引号引起来否则会出错误，例如 `['src',['123']]` 或者 `['src',[0]]`；
    + 在实际调用时“实际结果长度截取”与“值包含比较”可同时使用，例如 `[['baidu'],'src', True]`；
***
### elementNumber_assert() 关键字
>对页面中指定元素的个数进行断言判断

**描述**<br/>
获取页面中指定元素的个数，并将其与预期个数进行断言判断；若预期个数与元素的实际个数一致则返回`True`反之则返回`False`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
复数定位方式, 定位表达式 [, 父级对象] |  预期个数
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | elementNumber_assert |  key1/key2 | 预期个数

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | elementNumber_assert | ids/xpaths… | 对应表达式 | 预期个数

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    -  ids || xpaths || css_selectors …   # 框架中支持即可，只允许使用复数定位方式
    - 对应方式的定位表达式
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.elementNumber_assert('复数定位方式','定位表达式', '预期个数' [,ParentObject='父级元素对象'])  # 元素个数断言

'''
def elementNumber_assert(self, targeting, element, content, ParentObject=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ content: 预期个数
@ ParentObject: 父级element对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.elementNumber_assert('ids', 'kw', content=1)  # 判断指定元素是否在页面中有且仅有一个

# 实例二
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.elementNumber_assert('ids', 'kw', content='1', ParentObject=elementObject)  # 判断指定元素是否在页面中有且仅有一个
```

**注意事项**
* 关键字中仅允许采用复数定位方式，不允许使用索引值，不支持对单元素进行断言。
* 关键字content形参(在用例步骤中为 “操作值” 单元格中书写的值)中的预期个数可以是数字文本也可以是纯数字，关键字会自动对其进行类型转换你只要保证它是阿拉伯数字即可。
* 如果 content形参(在用例步骤中为 “操作值” 单元格中书写的值)中出现多个数字，则默认取获取到的第一个数字，例如 “测试12测试34” [处理后] “12”。
* 如果想要使用python表达式来计算预期结果，则需要将你的表达式包裹在中括号“[]”中传给关键字；例如 [int('2') - (int('1')-1)*10]。
* 若传入的为python表达式，则关键字不会进行“条目3”中所述的筛选；
* 关键字中的“父级对象”形参(后代元素定位)，主要在脚本中调用关键字时使用，用例步骤中不使用。
***
### elementErgodic_assert() 关键字
> 对元素的某项值进行遍历比较 - 该值预期存在

**描述**<br/>
对界面指定元素的某项值进行遍历比较，该值预期存在；关键字支持两种断言模式分别为 “**正常逻辑(默认)**，即当前实际结果中有任意一条记录与预期结果不相等则返回`False`，如果所有记录全部相符则返回`True`”；“**取反逻辑**，即当前实际结果中有任意一条记录与预期结果相等则返回`True`，如果没有一条记录相符则返回`False`”

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
复数定位方式, 定位表达式 |  ['预期结果'[, '指定属性名'][, 逻辑是否取反]]
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | elementErgodic_assert | key1/key2 | ['预期结果'[, '指定属性名'][, 逻辑是否取反]]

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | elementErgodic_assert | ids/xpaths… | 对应表达式 |  ['预期结果'[, '指定属性名'][, 逻辑是否取反]]

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    -  ids || xpaths || css_selectors …   # 框架中支持即可，只允许使用复数定位方式
    - 对应方式的定位表达式
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.elementErgodic_assert('复数定位方式','定位表达式',['预期结果'[,'指定属性名'][,'是否取反']])  # 元素指定值遍历比较断言

'''
def elementErgodic_assert(self, targeting, element, content) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ content: 断言数据信息
'''
# 实例一
keyword.elementErgodic_assert('ids', 'kw', content=['自动化','value',False])  # 对界面所有id属性值为kw的元素的value属性值进行遍历，验证是否存在一个值为'自动化'的元素

# 实例二
keyword.elementErgodic_assert('ids', 'kw', content=['自动化'])  # 对界面所有id属性值为kw的元素的text文本值进行遍历，验证值是否均为'自动化'

# 实例三
keyword.elementErgodic_assert('ids', 'kw', content=['自动化', False])  # 对界面所有id属性值为kw的元素的text文本值进行遍历，验证是否存在一个值为'自动化'的元素
```

**注意事项**
* 关键字中仅允许采用复数定位方式，不允许使用索引值，不对单元素定位进行操作。
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)应为list类型：
	+ 列表第一项为要进行比较的预期结果值，如果想要对预期结果进行值“包含”比较，则需要将要比较的预期结果用中括号“[]”包裹，如果预期结果为字符串或者汉字则必须在中括号中用引号引起来，否则会出错误；例如 ['123']、[0]。
	+ 列表第二项为要获取元素的那个属性值，如 `value` / `class`...如果省略则默认为text文本值，属性名需用引号引起来，例如 ['123','src']、['123']。
	+ 列表第三项为布尔值代表取反逻辑标识，如果省略则默认为`True`，例如 ['123','src',True] 、['123',False]。
* 逻辑取反`True(默认)`，即当前实际结果中有任意一条记录与预期结果不相等则返回`False`，如果所有记录全部相符则返回`True`”。
* 逻辑取反`False`，即当前实际结果中有任意一条记录与预期结果相等则返回`True`，如果没有一条记录相符则返回`False`”。
***
### elementErgodicNot_assert() 关键字
> 对元素的某项值进行遍历比较 - 该值预期不存在

**描述**<br/>
对界面指定元素的某项值进行遍历比较，该值预期不存在；当前实际结果中有任意一条记录与预期结果相等则返回`False`，如果所有记录均不相符则返回`True`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
复数定位方式, 定位表达式 |  ['预期结果'[, '指定属性名']]
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | elementErgodicNot_assert|  key1/key2 | ['预期结果'[, '指定属性名']]

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | elementErgodicNot_assert| ids/xpaths… | 对应表达式 | ['预期结果'[, '指定属性名']]

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    -  ids || xpaths || css_selectors …   # 框架中支持即可，只允许使用复数定位方式
    - 对应方式的定位表达式
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.elementErgodicNot_assert('复数定位方式','定位表达式',['预期结果'[,'指定属性名']])  # 元素指定值遍历比较断言

'''
def elementErgodicNot_assert(self, targeting, element, content) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ content: 断言数据信息
'''
# 实例一
keyword.elementErgodicNot_assert('ids', 'kw', content=['自动化','value'])  # 对界面所有id属性值为kw的元素的value属性值进行遍历，验证值是否均不为'自动化'

# 实例二
keyword.elementErgodicNot_assert('ids', 'kw', content=['自动化'])  # 对界面所有id属性值为kw的元素的text文本值进行遍历，验证值是否均不为'自动化'
```

**注意事项**
* 关键字中仅允许采用复数定位方式，不允许使用索引值，不对单元素定位进行操作。
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)应为list类型：
	+ 列表第一项为要进行比较的预期结果值，如果想要对预期结果进行值“包含”比较，则需要将要比较的预期结果用中括号“[]”包裹，如果预期结果为字符串或者汉字则必须在中括号中用引号引起来，否则会出错误；例如 ['123']、[0]
	+ 列表第二项为要获取元素的那个属性值，如 `value` / `class`...如果省略则默认为text文本值，属性名需用引号引起来，例如 ['123','src']、['123']
***
### elementExistence_assert() 关键字 
<a id="elementExistence_assert"></a>

> 断言指定元素是否存在(指定元素是否存在于DOM树中并可见)

**描述**<br/>
 断言判断指定的元素是否存在(指定元素是否存在于DOM树中，可见且元素的高和宽都大于0)；关键字支持两种断言模式分别为 “**True**，元素存在返回`True`不存在则返回`False`” 和 “**False(默认)**，元素存在返回`False`不存在则返回`True`”

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [, 索引位置][, 父级对象] |  True / False / 空
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | elementExistence_assert|  key1/key2 | True / False / 空

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | elementExistence_assert| id/dis/xpaths… | 对应表达式 | True / False / 空

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    -  id || xpath || css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.elementExistence_assert('定位方式','定位表达式'[,index='索引值'][,ParentObject='父级元素对象'][,content='断言方式'])  # 元素存在与否断言

'''
def elementExistence_assert(self, targeting, element, index=None, ParentObject=None, content=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级element对象
@ content: 断言逻辑类型

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.elementExistence_assert('id', 'kw', content=True)  # 判断界面id属性值为kw的元素是否存在

# 实例二
keyword.elementExistence_assert('ids', 'kw', index=0)  # 判断界面id属性值为kw的元素是否不存在

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.elementExistence_assert('id', 'kw', ParentObject=elementObject, content=True)  # 判断界面id属性值为kw的元素是否存在
```

**注意事项**
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)为布尔类型，代表关键字的判定依据“`True`：指定元素预期存在”、“`False(默认)`：指定元素预期不存在”。
* 若content形参(在用例步骤中为 “操作值” 单元格中书写的值)为空则关键字按False“指定元素预期不存在”做断言。
* 关键字中的“父级对象”形参(后代元素定位)，主要在脚本中调用关键字时使用，用例步骤中不使用。
***
### elementComparison_assert() 关键字
> 元素指定值大小比较断言

**描述**<br/>
对元素指定值的大小进行比较断言，支持对 “单个元素” 和 “复数元素” 进行关系运算(<, >, >=, <=, ==)。若表达式成立则返回`True`不成立则返回`False`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [, 索引位置] | 预期值 / ['预期值', '关系运算符'[, '属性名']]
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | elementComparison_assert|  key1/key2 | 预期值 / ['预期值', '关系运算符'[,'属性名']]

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | elementComparison_assert | id/dis/xpaths… | 对应表达式 | 预期值 / ['预期值', '关系运算符'[,'属性名']]

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    -  id || xpath || css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.elementComparison_assert('定位方式','定位表达式'[,index='索引值'][,content='断言参数'])  # 元素指定值大小值比较

'''
def elementComparison_assert(self, targeting, element, index=None, content=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ content: 断言参数

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.elementComparison_assert('ids', 'kw', content=[123, '>=', 'value'])  # 判断界面所有id属性值为kw的元素的value属性值是否均 >= 123

# 实例二
keyword.elementComparison_assert('id', 'kw', content=[123, '<'])  # 判断界面id属性值为kw的元素的text文本值是否 < 123

# 实例三
keyword.elementComparison_assert('id', 'kw', content=123)  # 判断界面id属性值为kw的元素的text文本值是否 > 123
```

**注意事项**
* 关键字同时支持对 “单个元素” 和 “复数元素” 进行操作，关键字会根据实际传入的“定位方式”进行判断，无需特殊指明。
* 关键字的比较值为“实际结果”，例如 “实际结果 > 预期结果”、“实际结果 < 预期结果”...，要注意传入的关系运算符是否对应有效。
*  content形参(在用例步骤中为 “操作值” 单元格中书写的值)可接收 “`string`” 和 “`list`” 两种类型的参数，代表要进行操作的表达式。
   +  “`string`” 类型，代表要进行比较的预期结果；关键字将默认以 “>大于” 对预期结果和实际结果(指定元素的text文本值)进行比较；
    + “`list`” 类型，['预期结果', '关系运算符', ['属性名']]，表示要对指定元素的某个预期属性值进行某种关系的比较；列表首项代表“预期结果”，第二项代表要关键字进行何种“关系运算”，第三项则代表要关键字对指定元素的那个“属性”的值做比较(可省略，若省略则默认取元素的“text文本值”)；
   + “`list类型`” 两种合法传值举例： `['预期结果', '关系运算符']`  ||  `['预期结果', '关系运算符', '属性名']`，注意除“预期结果”为非字符串和汉字时不需要用引号标注，其它情况下“list列表”中的各项均需要用引号标注；
***
### functionReturn_assert() 关键字
> 自定义插件方法返还结果断言

**描述**<br/>
按照需求调用指定的插件方法，并对插件方法的返还`return`结果进行断言判断，若预期结果与实际结果一致则返回`True`反之则返回`False`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无 | ['预计比对结果文本','[插件名]方法名'[,插件方法参数]]
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | functionReturn_assert|   |  ['预期比对结果','[插件名]方法名'[,插件方法参数]]

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | functionReturn_assert|  |  |   ['预期比对结果','[插件名]方法名'[,插件方法参数]]

**脚本使用示例**
> <font color="red"> 关键字不支持在脚本中使用 </font>

**注意事项**
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)为list列表类型存放三个值：
	+ 第一个值为要进行比较的预期结果；
    + 第二个值为要进行调用的插件方法名，按照“[插件名]方法名”的方式书写；
    + 第三个值为插件方法的参数列表，支持采用list(顺序传递)和dict(指定参数)两种方式传参；若无需参数时该项可省略不写；
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)书写示例：
```python
['预计比对结果','[插件名]方法名',['1','2','3']]  # 插件方法带参调用，并按照list(顺序传递)方式将参数传递给插件方法。
['预计比对结果文本','[插件名]方法名',{'参数1':'1', '参数3':'3', '参数2':'2'}]  # 插件方法带参调用，并按照dict(指定参数)方式将参数传递给插件方法。
['预计比对结果','[插件名]方法名']  # 插件方法无参调用
```
***
### downloadExport_assert() 关键字
> 文件下载/导出断言判断

**描述**<br/>
对下载或者导出的项(文件)进行断言判断，若预期文件名与实际文件名一致则返回`True`反之则返回`False`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无 | 预期文件名.xxx / ['预期文件名.xxx']
> *[, xxx]  代表可省略* 
> 文件名应带有拓展名 xxx.xx

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | downloadExport_assert|   |  预期文件名.xxx / ['预期文件名.xxx']

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | downloadExport_assert|  |  |  预期文件名.xxx / ['预期文件名.xxx']

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.downloadExport_assert('预期文件名')  # 文件下载导出检查

'''
downloadExport_assert(self, prospectiveControl) 注意关键字在定义时的参数顺序
@ prospectiveControl: 预期对照文件名，文件名中应包含拓展名
'''
# 实例一
keyword.downloadExport_assert('查询结果.txt')  # 导出文件名断言

# 实例二
keyword.downloadExport_assert(prospectiveControl=['查询结果'])  # 导出文件名断言
```

**注意事项**
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)应为`string`类型代表预期对照值(文件名)；若需要进行包含值比较则需要将要比较的预期对照值用中括号“[]”包裹，如果预期结果为字符串或者汉字则必须在中括号中用引号引起来否则会出错误。
***
##  鼠标、键盘类
### actionBuilder_Move() 关键字 
<a id="actionBuilder_Move"></a>

> 鼠标悬停

**描述**<br/>
在指定的元素上悬停鼠标

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [, 索引位置][, 父级对象] | 无
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | actionBuilder_Move |  key1/key2 |  

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | actionBuilder_Move | id/dis/xpaths… | 对应表达式 |   

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    -  id || xpath || css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.actionBuilder_Move('定位方式','定位表达式'[,index='索引值'][,ParentObject='父级对象'])  # 鼠标悬停

'''
def actionBuilder_Move(self, targeting, element, index=None, ParentObject=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级元素对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.actionBuilder_Move('id', 'kw')  # 鼠标悬停

# 实例二
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.actionBuilder_Move('ids', 'kw', index=0, ParentObject=elementObject )  # 鼠标悬停
```

**注意事项**
* 关键字中的“父级对象”形参(后代元素定位)，主要在脚本中调用关键字时使用，用例步骤中不使用。
***
### actionBuilder_RightClick() 关键字 
<a id="actionBuilder_RightClick"></a>

> 鼠标右击

**描述**<br/>
在指定的元素上右击鼠标

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [, 索引位置][, 父级对象] | 无
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | actionBuilder_RightClick|  key1/key2 |  

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | actionBuilder_RightClick| id/dis/xpaths… | 对应表达式 |   

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    -  id || xpath || css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.actionBuilder_RightClick('定位方式','定位表达式'[,index='索引值'][,ParentObject='父级对象'])  # 鼠标右击

'''
def actionBuilder_RightClick(self, targeting, element, index=None, ParentObject=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级元素对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.actionBuilder_RightClick('id', 'kw')  # 鼠标右击

# 实例二
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.actionBuilder_RightClick('ids', 'kw', index=0, ParentObject=elementObject )  # 鼠标右击
```

**注意事项**
* 关键字中的“父级对象”形参(后代元素定位)，主要在脚本中调用关键字时使用，用例步骤中不使用。
***
### actionBuilder_DoubleClick() 关键字 
<a id="actionBuilder_DoubleClick"></a>

> 鼠标双击

**描述**<br/>
在指定的元素上双击鼠标

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [, 索引位置][, 父级对象] | 无
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | actionBuilder_DoubleClick|  key1/key2 |  

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | actionBuilder_DoubleClick| id/dis/xpaths… | 对应表达式 |   

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    -  id || xpath || css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.actionBuilder_DoubleClick('定位方式','定位表达式'[,index='索引值'][,ParentObject='父级对象'])  # 鼠标双击

'''
def actionBuilder_DoubleClick(self, targeting, element, index=None, ParentObject=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级元素对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.actionBuilder_DoubleClick('id', 'kw')  # 鼠标双击

# 实例二
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.actionBuilder_DoubleClick('ids', 'kw', index=0, ParentObject=elementObject )  # 鼠标双击
```

**注意事项**
* 关键字中的“父级对象”形参(后代元素定位)，主要在脚本中调用关键字时使用，用例步骤中不使用。
***
### keyBoard_Events() 关键字 
<a id="keyBoard_Events"></a>

> 键盘按键模拟

**描述**<br/>
在指定的元素上模拟键盘按键点击

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [, 索引位置][, 父级对象] | 键盘按键标识
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | keyBoard_Events|  key1/key2 |  键盘按键标识

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | keyBoard_Events| id/dis/xpaths… | 对应表达式 |  键盘按键标识

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    -  id || xpath || css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.keyBoard_Events('定位方式','定位表达式', content='键盘按键标识'[,index='索引值'][,ParentObject='父级对象'])  # 键盘按键模拟点击

'''
def keyBoard_Events(self, targeting, element, index=None, content=None, ParentObject=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ content: 键盘按键标识
@ ParentObject: 父级元素对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.keyBoard_Events('id', 'kw', content='Keys.ENTER')  # 模拟键盘‘回车’键点击
# 实例二
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.keyBoard_Events('ids', 'kw', content='Keys.BACK_SPACE', index=0, ParentObject=elementObject)  # 模拟键盘‘退格’键点击
```

**注意事项**
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)如果为“退格键标识”则关键字会自动根据操作元素中的文字数量进行相应次数的按键点击。
* 部分键盘按键标识：`Keys.BACK_SPACE  退格键`、`Keys.ENTER  回车键`、`Keys.SPACE 空格键`、`Keys.ESCAPE  esc键`。
* 关键字中的“父级对象”形参(后代元素定位)，主要在脚本中调用关键字时使用，用例步骤中不使用。
***
##  数据缓存
### getElementText() 关键字
<a id="getElementText"></a>

> 获取元素数据值，并存入缓存

**描述**<br/>
获取指定元素的某个属性值或者text文本值，并将获取到的数据值存入到缓存中

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [, 索引位置] | [['key键名'][,'属性名'][,'筛选类型']] / key键名 / 属性名 / 筛选类型 / 空
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | getElementText|  key1/key2 |  [['key键名'][,'属性名'][,'筛选类型']] / key键名 / 属性名 / 筛选类型 / 空

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | getElementText| id/dis/xpaths… | 对应表达式 |  [['key键名'][,'属性名'][,'筛选类型']] / key键名 / 属性名 / 筛选类型 / 空

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    -  id || xpath || css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.getElementText('定位方式','定位表达式'[,index='索引值'][,content='操作依据'])  # 元素数据值缓存

'''
def getElementText(self, targeting, element, index=None, content=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ content: 操作依据

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.getElementText('id', 'kw')  # 元素text文本值获取，缓存key键默认

# 实例二
keyword.getElementText('ids', 'kw', index=0, content='value')  # 元素value属性值获取，缓存key键默认

# 实例三
keyword.getElementText('id', 'kw', content='key123')  # 元素text文本值获取，缓存key键为“key123”

# 实例四
keyword.getElementText('ids', 'kw', index=0, content=['key123','value'])  # 元素value属性值获取，缓存key键为“key123”

# 实例五
keyword.getElementText('ids', 'kw', index=0, content=['value', 'int'])  # 元素value属性值中的阿拉伯数字获取，缓存key键默认

# 实例六
keyword.getElementText('ids', 'kw', index=0, content=['value', 'key345', 'date'])  # 元素value属性值中的日期数据获取，缓存key键为“key345”
```

**注意事项**
* 关键字主要用于获取指定元素的数据值，并将该值存放到缓存中，以供其它关键字或者方法读取使用。
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)代表要获取元素值的操作依据，可接收三种类型的数据 “空 / string / list”。
	+ 当参数值为空(None)时：代表要对元素的text文本值进行随机保存；随机保存时的key键为“key_当前时间戳”；
    + 当参数值为string类型时：关键字可以接收三种操作值中的任意一个 `key键`、`attribute何种属性`、`condition筛选出何种类型的数据`，并根据传入的操作值对目标元素进行处理；
	+ 当参数值为list类型时：可以同时接收三种操作值 ['`key键`', '`attribute何种属性`', '`condition筛选出何种类型的数据`']进行处理，并根据传入的操作值对目标元素进行处理。
* 关键字中支持5种数据类型的筛选，分别为`int 整型`、 `text 文本字符串`、`date 日期` 、`time 时间`、`dateTime 日期时间`。
 * 不管content形参(在用例步骤中为 “操作值” 单元格中书写的值)为何种参数形式，只要是出现“未指定key键”的情况，关键字则默认以“key_当前时间戳”为key键将获取到的值存入到缓存中。
 * 不管content形参(在用例步骤中为 “操作值” 单元格中书写的值)为何种参数形式，只要是出现“未指定attribute属性值”的情况，关键字则默认获取元素的“text文本值”。

**关键字使用规则解释**
 * 当content形参为list类型时，其中各项不需要按照特定顺序可随意书写，关键字会自动进行判别筛选; 例如`[key, attribute, condition]` || `[attribute, condition , key]`。
 * 如果出现 “指定属性名不存在”的情况，则该“不存在”的属性名将视情况而定自动转为key键。
	+ 关键字未指定key键: 例如'value(属性不存在)'则key键名为：value
	+ 关键字已指定key键: 例如 ['key_One(这里表示key键)', 'value(属性不存在)'] 则key键名为：key_Onevalue
* 如果出现“获取属性重复”的情况，则“权重低”的属性名将视情况而定自动转为key键。
	+ 关键字未指定key键: 例如 ['value'(判定为属性),'onclick'(判定为key键)]
	+ 关键字已指定key键: 例如 ['key_One(这里表示key键)', 'value(表示属性，判定为属性)', 'onclick(表示属性，判定为key键)'] 则key键名为：key_Oneonclick
* 如果出现 “`key键`” 与 “`attribute何种属性`”同名情况时，权重最高的值判定为属性，顺位为key键；例如['value'(判定为属性),'value'(判定为key键)]。
* 如果出现“关键字筛选结果不唯一”的情况，则筛选结果列表中的第一项为筛选的最终结果。
	+ 12VALUE14: 使用“`int`”筛选标识，将目标数据中的所有“整型数字”筛选出来的结果为 “12”
	+ 汉123字: 使用“`text`”筛选标识，将目标数据中所有“汉字文本”筛选出来的结果为 “汉”

> **特殊名词解释：**
> `content形参`：在用例步骤中为 “操作值” 单元格中书写的值，在脚本中为关键字名为“content”的形参
> `key`：代表缓存和取出缓存时的key键
> `attribute`：代表要获取元素的那个属性
> `condition`：代表要对获取数据进行何种类型的筛选
***
### takeElementText() 关键字
> 取出缓存中的元素数据值，并以该值为依据对某个结果做断言判断

**描述**<br/>
取出缓存中通过“`getElementText 关键字`”缓存的元素数据值，并以该值为依据对页面中某些元素的指定值做遍历断言，若条件成立则返回`True`不成立则返回`False`，关键字的默认断言逻辑为 “当预期结果与实际结果一致时条件不成立，当预期结果与实际结果不一致时条件成立”

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
复数定位方式, 定位表达式 | [['key键名'][,'属性名'][,'是否取反']] / key键名 / 属性名 / 逻辑取反 / 空
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | takeElementText|  key1/key2 | [['key键名'][,'属性名'][,'是否取反']] / key键名 / 属性名 / 逻辑取反 / 空

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | takeElementText| id/dis/xpaths… | 对应表达式 |  [['key键名'][,'属性名'][,'是否取反']] / key键名 / 属性名 / 逻辑取反 / 空

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    -  ids || xpaths || css_selectors …   # 框架中支持即可，仅允许使用复数定位方式
    - 对应方式的定位表达式
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.takeElementText('复数定位方式','定位表达式'[,content='操作依据'])  # 元素数据值缓存

'''
def takeElementText(self, targeting, element, content=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ content: 操作依据

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.takeElementText('ids', 'kw')  # 取出“最近一次”缓存的元素数据值，对界面中指定元素的txt文本值做遍历检查，验证是否均不等于缓存数据

# 实例二
keyword.takeElementText('ids', 'kw', content='value')  # 取出“最近一次”缓存的元素数据值，对界面中指定元素的value属性值做遍历检查，验证是否均不等于缓存数据

# 实例三
keyword.takeElementText('ids', 'kw', content='key123')  # 取出缓存数据中“key123”键对应的元素数据值，对界面中指定元素的txt文本值做遍历检查，验证是否均不等于缓存数据

# 实例四
keyword.takeElementText('ids', 'kw', index=0, content=['key123','value'])  # 取出缓存数据中“key123”键对应的元素数据值，对界面中指定元素的value属性值做遍历检查，验证是否均不等于缓存数据

# 实例五
keyword.takeElementText('ids', 'kw', index=0, content=['value', True])  # 取出“最近一次”缓存的元素数据值，对界面中指定元素的text文本值做遍历检查，验证是否均与缓存数据一致

# 实例六
keyword.takeElementText('ids', 'kw', index=0, content=['value', 'key345', True])  # 取出缓存数据中“key345”键对应的元素数据值，对界面中指定元素的value属性值做遍历检查，验证是否均与缓存数据一致
```

**注意事项**
* 关键字主要用于取出通过`getElementText 关键字`缓存的元素数据，并对指定元素的指定值进行遍历检查。
* 在使用关键字时所传入的元素定位信息应为“复数定位”(定位方式末尾带有‘s’时为复数定位)且不允许使用索引值，若传入“单元素定位”会使关键字无法做出正确的判断。
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)代表要断言的依据，可接收三种类型的数据 “空 / string / list”。
	+ 当参数值为空(None)时：代表“指定元素的text文本值”要与“缓存数据中最后一个key键对应的value值”进行比对判断；
	+ 当参数值为(string)时：关键字可以接收三种操作值中的任意一个 `key键`、`attribute何种属性`、`reversal是否需要逻辑取反`进行处理；
	+ 当参数值为(list)时：可以同时接收三种操作值 ["`key键`", "`attribute何种属性`", "`reversal是否需要逻辑取反`"]进行处理。
* 逻辑取反(传入True代表取反，关键字默认为False)：当“取反状态”时 A!=B抛出错误，当“非取反状态(默认状态)”时 A==B抛出错误。
 * 不管content形参(在用例步骤中为 “操作值” 单元格中书写的值)为何种参数形式，只要是出现“未指定key键”的情况，关键字则默认将缓存数据中最后一个key键对应的value值取出作为断言判断依据。
 * 不管content形参(在用例步骤中为 “操作值” 单元格中书写的值)为何种参数形式，只要是出现“未指定attribute属性值”的情况，关键字则默认获取元素的“text文本值”。

**关键字使用规则解释**
* “要进行比较的元素”必须是一个元素列表，定位方式必须是复数定位形式。
* 当content形参为list类型时，其中各项可随意书写不需要按照特定顺序书写，关键字会自动进行判别筛选。例如 `['value','key_one',True]` || `[True,'key_one','value']`。
* 当content形参为list类型时，子项个数需要在 2 - 3 个范围内否则无实际意义。例如 `['value','key_one']` || `['value', True]` || `[True,'key_one','value']`。
* 如果出现 “`key键`” 与 “`attribute何种属性`”同名情况时，权重最高的值判定为key键顺位为属性值，例如 `['value'(判定为key),'value'(判定为属性值)]`。
* 如果出现 “重复key键”的情况，则权重最高的判定为key键顺位为属性值，例如 `['key_One'(判定为key),'key_Two'(判定为属性值)]`。
* <font color="red">[非法]</font> 如果出现 “重复属性”的情况，则对给出的所有属性做字符串拼接后判定为属性值，例如 `['value','onclick']`，处理结果为 `['valueonclick'(判定为属性值)]`。

> **特殊名词解释：**
> `content形参`：在用例步骤中为 “操作值” 单元格中书写的值，在脚本中为关键字名为“content”的形参
> `key`：代表要取出数据所对应的key键
> `attribute`：代表要对指定元素的那个属性做比较
> `reversal`：代表是否将关键字的断言逻辑“取反”(从默认的“A!=B”条件成立，修改为取反后的“A==B”条件成立)
***
##  特殊功能
### Interface_Invoke() 关键字
> 根据指定的接口数据文件路径，找到并执行文件中的接口数据

**描述**<br/>
根据传入的接口数据文件路径，找到并将文件中的数据逐条读出，根据数据中的接口信息在逐条进行后台接口请求
> 接口数据文件：用来存放接口请求信息的数据文件，固定为：InterfaceData.yaml
> >接口请求由框架中‘接口处理模块’完成并非关键字自身的逻辑，你也可以理解为`Interface_Invoke()`关键字就是框架中‘接口处理模块’的入口函数

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无参 | 接口数据文件路径

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx | Interface_Invoke | | C:\xxx\xxx\xxx

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | xxx  | Interface_Invoke | | | C:\xxx\xxx\xxx

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
try:
	keyword.Interface_Invoke(r'c:\xxx\xx\xx')  # 接口数据执行
except Exception as error:
	print(f"接口执行失败，捕获异常：{error}")
else:
	pass  # 接口执行成功
```

**注意事项**
* 关键字主要用于弥补框架在用例文件中不可调用接口执行的不足，你可以通过调用该关键字执行任意一组合法的接口数据，而不需要像与用例步骤文件配套的接口数据一样需要注意与用例步骤文件的文件夹层级关系。
* 关键字所使用的接口数据与“用例配套的接口数据”语法和格式均一致，本身没有任何逻辑操作，它主要是靠调用框架中的接口处理模块来完成与接口相关的操作，故它不需要给“元素定位信息”单元格赋值。
* 在脚本中调用该关键字时需注意关键字本身没有返回值，若接口执行失败(执行异常、执行结果断言未通过)则会触发异常。
***
### ternary_Judgement() 关键字
 <a id="ternary_Judgement"></a>
 
> 三元判断，控制用例步骤执行

**描述**<br/>
三元判断，支持对指定元素的属性、文本值以及单独的条件表达式进行处理，已达到控制用例步骤执行的目的

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
 [定位方式, 定位表达式][, 索引位置] |  [条件list / string, 控制行数int]
 > *[, xxx]  代表可省略* 

**参数说明**
* content形参(在用例步骤中为 “操作值” 单元格中书写的值) ` list `类型；列表第一项为判断条件，第二项为关键字控制行数。
	* 判断条件：可接受两种类型参数 `list`类型、`string`类型
		* list：在对元素的属性、文本值做判断时传入该类型； `[[属性名,]关系运算符,预期值]`，属性名可省略
		* string：表示单独条件表达式；例如 A==B、C>=D
	* 控制行数：`int`类型；代表在关键字条件成立的情况下所控制的步骤行数

```python
# 传值示例一：
[['value','>=','25'], 2]  # 对指定元素的value属性值做判断，验证其是否大于等于25，若成立则当前行下的两行将不再执行

# 传值示例二：
[['==','测试文本'], 3]  # 对指定元素的文本值做判断，验证其是否等于“测试文本”，若成立则当前行下的三行将不再执行

# 传值示例三：
[['in','测试'], 3]  # 对指定元素的文本值做判断，验证其是否包含“测试”二字，若成立则当前行下的三行将不再执行

# 传值示例四：
[['not in','文本'], 3]  # 对指定元素的文本值做判断，验证其是否不包含“文本”二字，若成立则当前行下的三行将不再执行

# 传值示例五：
["1 >= 0", 1]  # 验证表达式“1 >= 0”是否成立，若成立则当前行下的一行将不再执行

# 传值示例六：
["1 or 0", 4]  # 验证表达式“1 or 0”是否成立，若成立则当前行下的四行将不再执行
```

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- 
区分元素定位数据 | n | xxx | ternary_Judgement| key1/key2 | [条件, 控制行数]

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | -----
不区分元素定位数据 | n | xxx  | ternary_Judgement| id/dis/xpaths… | 对应表达式 | [条件, 控制行数]

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位信息”elementData.yaml文件书写示例
key1:
  key2:
    -  ids || xpaths || css_selectors …   # 框架中支持即可，仅允许使用复数定位方式
    - 对应方式的定位表达式
```

**脚本使用示例**
> <font color="red">关键字不支持在脚本中使用</font>

**注意事项**
* 不论判断条件采用何种形式书写，若条件成立则关键字所控制的用例步骤行将不再执行。
* 不论判断条件采用何种形式书写，若条件不成立则关键字作废，所控制的用例步骤行自动释放执行。
* 不论判断条件采用何种形式书写，可选用的关系运算符为 ==、>=、<=、!=、>、<、not in、in，其它的关系运算符无法识别(`not in`，运算符中间需要用空格分开)。
* 关键字所控制的单元行从当前行向下覆盖，不包括当前行，例如 “当前行为3，若控制行数为2，则控制 4、5两行”。
* 在判断条件采用 “单独条件表达式 `string`” 形式时，支持在表达式中使用逻辑运算符 and、or、not。
* 在判断条件采用 “单独条件表达式 `string`” 形式时，与元素定位相关的数据无论书写与否均不会生效。
* 在判断条件采用 “元素判断 `list`” 形式时，元素定位参数为必填项，为空则关键字无法正常执行。
* 在判断条件采用 “元素判断 `list`” 形式时，元素属性值若省略则代表对元素的text文本值做判断。
* 在判断条件采用“元素判断  `list`”形式时，若所指定的 “属性名” 在元素中不存在，则将其直接拼接在“预期结果”中。
* 在判断条件采用“元素判断  `list`”形式时，若所指定的 “关系运算符” 不合法，则将其直接拼接在“预期结果”中。
* 在判断条件采用“元素判断  `list`”形式时，关键字的条件判断依据为 “实际结果”；例如 “实际结果 >= 预期结果”、“实际结果 包含 预期结果”。
***
### winUpload() 关键字
> 文件批量上传

**描述**<br/>
处理页面非`<input type="file">`标签(窗口批量上传)的文件上传，支持同一目录、不同目录下的多文件上传；目前只针对windows操作系统

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无 | ['文件路径1'[,'文件路径2'][,'文件路径n'…]]
> *[, xxx]  代表可省略* 

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字     | 元素定位信息  | 操作值
------- | -----  | -----  | -----  | -----  | :----- 
区分元素定位数据 | n | xxx | winUpload|   | ['文件路径1'[,'文件路径2'][,'文件路径n'…]]

用例name     | 序号     | 操作步骤    | 关键字    | 定位方式 | 定位表达式  | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | :----
不区分元素定位数据 | n | xxx  | winUpload|  |  |  ['文件路径1'[,'文件路径2'][,'文件路径n'…]]

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.winUpload(['文件路径1'[,'文件路径2'][,'文件路径n'…]])  # 文件批量上传

'''
def winUpload(self, filePath) 注意关键字在定义时的参数顺序
@ filePath: 要上传的文件的绝对路径列表
'''
# 实例一
keyword.winUpload(['c:/xx/xx/xx.xx','c:/xx/xx/xx.xx'])  # 文件批量上传

# 实例二
keyword.winUpload(filePath=['c:/xx/xx/xx.xx','c:/xx/xx/xx.xx'])  # 文件批量上传
```

**注意事项**
* content形参(在用例步骤中为 “操作值” 单元格中书写的值)应为list类型代表要上传的文件路径列表，路径应采用绝对路径形式。
* 传值示例：`['c:\xxx\xxx\xxx\xxx.txt','c:\xxx\xxx\xxx\xxx.jpeg']`
***