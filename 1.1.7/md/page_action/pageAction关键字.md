##  基础 
### time_sleep() 关键字
> 根据传入的秒数进行强制时间等待

**描述**<br/>
强制时间等待

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无参 | 非负数阿拉伯数字(0 - n 代表要停留的秒数)

**注意事项**
* 传入的操作参数你只要确定其为阿拉伯数字即可，不必在意它的类型，在关键字中会进行类型转换。
* 传入的操作参数在关键字中会被识别为“秒s”，例如传入“5”则代表暂停5秒在执行之后的操作。
* 该关键字一般应用在执行完某个操作，需要等待被测系统做出反应之后在进行操作的情况。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx  | time_sleep  | | | | 5 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.time_sleep(10)  # 强制时间等待10s
```
***
### implicitly_time() 关键字
> 根据传入的秒数进行隐式时间等待 (一个driver对象只有一个隐式时间可以生效，按照顺序最近一次设置为有效，其它不生效)

**描述**<br/>
隐式时间等待

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无参 | 非负数阿拉伯数字(0 - n 代表要等待元素查找的秒数上限)

**注意事项**
* 传入的操作参数你只要确定其为阿拉伯数字即可，不必在意它的类型，在关键字中会自动进行类型转换。
* 传入的操作参数在关键字中会被识别为“秒s”，例如传入“10”则代表设置隐式等待时长为10s。
* 注意一个driver对象只有一个隐式时间可以生效，按照顺序最近一次设置为有效，其它不生效。
* 设置的隐式时间为全局生效，调用关键字后，会将在“框架参数配置文件 `parameters.json`”中设置的“隐式等待时长参数 `implicitlyWait`”覆盖。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx  | implicitly_time  | | | | 10

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.implicitly_time(20)  # 设置隐式等待时长20s
```
***
### explain() 关键字
> 在测试报告和测试日志中打印指定的内容

**描述**<br/>
无实际意义，只是用于将指定的内容打印在框架的测试报告和运行日志中

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无参 | 要打印在测试报告和运行日志中的内容

**注意事项**
* 关键字主要用于将用例步骤中的信息打印到运行日志和测试报告中，与框架脚本方法中的`INFO()`同等

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx  | explain  | | | | 要打印的内容

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.explain("要打印的文本内容")
```
***
##  iframe处理
### frame_default() 关键字
> 初始化当前活动窗口的frame焦点

**描述**<br/>
将当前拥有句柄的窗口中的iframe焦点还原到初始状态
> iframe焦点：移入到**iframe页面**中的操作焦点(selenium焦点)<br/>
> iframe页面：通过 html中的`<iframe></iframe>`标签嵌入到窗口中的页面

**参数**<br/>
无参

**注意事项**
* 关键字会将当前活动窗口中的iframe焦点还原到最初始状态(即焦点不进入任何iframe标签内)，不论你是否进行过iframe焦点跳转。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx  | frame_default  | | | | 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.frame_default()  # iframe焦点初始化
```
***
### parent_frame() 关键字
> 将当前活动窗口中的iframe焦点向上跳转一级

**描述**<br/>
将当前拥有句柄的窗口中的iframe焦点向上跳转一层级，主要应用在iframe页面嵌套的情况下
> iframe1页面 → iframe1.1页面 → iframe1.1.1页面  （←为向上，→为向下）
> > iframe焦点：移入到**iframe页面**中的操作焦点(selenium焦点)<br/>
> iframe页面：通过 html中的`<iframe></iframe>`标签嵌入到窗口中的页面

**参数**<br/>
无参

**注意事项**
* 关键字的操作类似于文件夹目录结构的跳转，假设现在页面是一个三级嵌套的iframe页面，当前的iframe焦点在第三层，使用关键字后焦点会跳转至第二层。
* 该关键字能够灵活的在iframe层级之间进行跳转，适用于需要频繁切换iframe焦点或者涉及到iframe焦点上下切换的场景中。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx  | parent_frame  | | | | 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.parent_frame()  # iframe焦点向上跳转一级
```
***
### refresh_frame() 关键字
> 刷新当前拥有焦点的iframe页面
> > 框架1.1.4版本新增

**描述**<br/>
将当前拥有焦点的iframe页面刷新，注意此处刷新的并非窗口而是窗口中的iframe页面
>  iframe焦点：移入到**iframe页面**中的操作焦点(selenium焦点)<br/>
> iframe页面：通过 html中的`<iframe></iframe>`标签嵌入到窗口中的页面

**参数**<br/>
无参

**注意事项**
* 注意与 `driver_refres()` 关键字的区别，该关键字仅是刷新当前拥有焦点的iframe页面。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx  | refresh_frame  | | | | 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.refresh_frame()  # 当前iframe页面刷新
```
***
### switch_frame() 关键字
> 根据指定的iframe标识，进行iframe焦点跳转

**描述**<br/>
将操作焦点跳转到指定的iframe页面中
> iframe页面：通过 html中的`<iframe></iframe>`标签嵌入到窗口中的页面

**参数**<br/>
元素定位参数 | 操作参数 (三选一)
-------- | -----  
无参 | id / index / src
> **`id`**: 代表指定页面所在的iframe标签的id属性值，关键字可根据它完成跳转<br/>
> **`index`**: 代表指定页面所在的iframe标签，在当前页面下同一层级的(嵌套在iframe标签内的iframe标签不计数)所有iframe标签所组成的列表中的索引位置(起始为0)<br/>
> **`src`**: 代表指定页面所在iframe标签的src属性值，在传值时你只需要将属性值中一些主要的信息传入即可，例如: `Email.php`、`/test.js`、`https://www.xx.xx/index`等

> 注意：操作参数中的 `/` 符号表示为“或者”的意思，代表你可以在三者中任选其一。

**注意事项**
* 关键字用于将焦点跳转到指定的iframe页面中，已达到获取或者操作指定iframe页面中元素的目的。
* 关键字并不能支持一次性多级跳转，假设当前页面是一个两级嵌套的iframe页面，如果想要跳转到最底层的iframe页面中，你需要一级一级的完成跳转，直接跳转到最底层会出现错误。
* 在iframe标签不存在id属性的情况下关键字可根据“index 索引” 或者 “src 属性值”完成跳转，但是应尽可能的使用id属性进行跳转。
* 在使用index索引值进行跳转时，不必在意它是否为数值类型的数字，关键字会自行转换。

**用例步骤使用示例**
* 按照iframe标签的id属性值
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx  | switch_frame  | | | | frameID

* 按照iframe标签的index索引值
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx  | switch_frame  | | | | 0

* 按照iframe标签的src属性值
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx  | switch_frame  | | | | /test.php

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.switch_frame(id)  # 焦点跳转到iframe中
keyword.switch_frame(index)  # 焦点跳转到iframe中
keyword.switch_frame(src)  # 焦点跳转到iframe中
```
***
##  窗口处理
### driver_get() 关键字
> 浏览器对象url地址重置
>> 框架1.1.7版本新增

**描述**<br/>
动态设置当前浏览器对象的url地址（被测系统网址）

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无参 | url

**注意事项**
* 关键字的操作不可逆，即当修改成功之后所有的元素定位信息均以新的浏览器对象为准。
* 使用时需要保证所重置的url地址有效，若无效会形象后续用例的执行。
* 关键字会修改框架初始化时所获取到的参数配置文件中的“被测系统地址”，故关键字在调用之后，所有通过“框架全局变量”获取到的“被测系统地址”均为设置后的新地址。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx  | driver_get  | | | | http://localhost/

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
print(kdtest.GSTORE['START']['url'])  # 输出为 “http://localhost/”
keyword.driver_get('http://192.168.1.122/')  # 重置当前浏览器对象的url地址
print(kdtest.GSTORE['START']['url'])  # 输出为 “http://192.168.1.122/”
```
***
### driver_back() 关键字
> 浏览器窗口返回上一页
>> 框架1.1.3版本新增

**描述**<br/>
将当前拥有句柄的浏览器窗口的页面栈向前跳转一次，类似浏览器中的“后退”按钮
> 页面1 → 页面2 → 页面3  （←为向前，→为向后）

**参数**<br/>
无参

**注意事项**
* 关键字主要用于将当前正在活动窗口的页面栈向前跳转，效果等同于点击浏览器的“返回上一页”按钮。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx  | driver_back  | | | | 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.driver_back()  # 返回上一页
```
***
### driver_refresh() 关键字
> 刷新当前正在活动的浏览器窗口

**描述**<br/>
将当前拥有句柄的浏览器窗口整个刷新，类似浏览器中的“重新加载”按钮

**参数**<br/>
无参

**注意事项**
* 关键字主要用于刷新当前正在活动的窗口，效果等同于点击浏览器的重新加载按钮。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx  | driver_refresh  | | | | 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.driver_refresh()  # 刷新
```
***
### driver_close() 关键字
> 关闭当前正在活动的浏览器窗口

**描述**<br/>
将当前拥有句柄的浏览器窗口关闭，类似浏览器窗口中的“X 关闭”按钮

**参数**<br/>
无参

**注意事项**
* 关键字主要用于将当前拥有句柄的窗口关闭，效果等同于点击浏览器窗口的关闭按钮。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx  | driver_close  | | | | 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.driver_close()  # 窗口关闭
```
***
### gethandle() 关键字
> 获取当前窗口句柄

**描述**<br/>
获取当前活动窗口的句柄，并存入到框架的缓存中。

**参数**<br/>
无参

**注意事项**
* 需要同 `enterWindow 关键字` 和 `outWindow 关键字` 一同使用，单独使用无意义。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | 进入登录窗口 | xxx |   |  |
 |  | n |当前窗口句柄获取 | <font color="blue">**gethandle**</font>|   |  |
 |  | n | 点击注册按钮，弹出注册窗口 | xxx |   |  |
 |  | n | 窗口句柄跳转入注册窗口 | enterWindow |   | | 
 |  | n | 输入用户名 | xxx |   |  |
 |  | n | 输入密码 | xxx |   |  |
 |  | n | 点击提交按钮 | xxx |   |  |
 |  | n | 关闭注册窗口，句柄跳出回到登录窗口 | outWindow |  |  |

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.gethandle()  # 当前窗口句柄获取
```
***
### enterWindow() 关键字
> 窗口句柄跳入

**描述**<br/>
找到当前测试环境中的“新窗口”，并将句柄跳转入其中；支持在跳转时将目标窗口最大化

> “新窗口”的判定标准: 未通过 `gethandle 关键字`获取过句柄的窗口。

**参数**<br/>
元素定位参数 | 操作参数(三选一)
-------- | -----  
无参 | True / False / 空

**注意事项**
* 需要同 `gethandle 关键字` 和 `outWindow 关键字` 一同使用，单独使用无意义。
* 操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为布尔型，当值为`True`时表示要最大化窗口，省略不写或者为`False`时表示保持窗口原样。
* 关键字在进行跳转时，会自动将窗口句柄跳转到“新”打开的窗口中，不需要特殊指定。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | 进入登录窗口 | xxx |   |  |
 |  | n |当前窗口句柄获取 | gethandle |   |  |
 |  | n | 点击注册按钮，弹出注册窗口 | xxx |  |  |
 |  | n | 窗口句柄跳转入注册窗口，并将其最大化 | <font color="blue">**enterWindow**</font> | | | | True
 |  | n | 输入用户名 | xxx |  |  |
 |  | n | 输入密码 | xxx |  |  |
 |  | n | 点击提交按钮 | xxx |  |  |
 |  | n | 关闭注册窗口，句柄跳出回到登录窗口 | outWindow |  |  |

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.enterWindow(True)  # 窗口句柄跳入
```
***
### outWindow() 关键字
> 窗口句柄跳出

**描述**<br/>
将句柄返回上一级窗口，并将跳出窗口的句柄从缓存中移除

**参数**<br/>
无参

**注意事项**
* 需要同 `gethandle 关键字` 和 `enterWindow 关键字` 一同使用，单独使用无意义。
* 关键字在句柄跳出的同时，会将当前窗口的句柄从缓存中移除，并自动将跳出的窗口关闭。
* 关键字在跳出当前窗口后，会自动回退到 “最近一次通过 `gethandle`关键字获取过句柄”的窗口中。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | 进入登录窗口 | xxx |   |  |
 |  | n |当前窗口句柄获取 | gethandle |   |  |
 |  | n | 点击注册按钮，弹出注册窗口 | xxx |  |  |  
 |  | n | 窗口句柄跳转入注册窗口 | enterWindow |  |  |
 |  | n | 输入用户名 | xxx |  |  |  
 |  | n | 输入密码 | xxx |  |  |  
 |  | n | 点击提交按钮 | xxx |  |  |  
 |  | n | 关闭注册窗口，句柄跳出回到登录窗口 | <font color="blue">**outWindow**</font> |  |  |  

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.outWindow()  # 窗口句柄跳出
```
***
##  元素操作
### input_text() 关键字
> 在指定的元素中输入指定的内容

**描述**<br/>
根据传入的元素定位数据找到元素，并在元素中输入指定的内容

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式，定位表达式 [, 索引位置][, 父级对象] | 要输入的内容
> *[, xxx]  代表可省略*

**特殊传参**<br/>
 * `[xxx]`: 特殊传参方式，代表在输入前清除元素中的原始内容；注意如果内容为字符串或者汉字则必须在中括号中用引号引起来，否则会出现错误。
 * `[]`: 特殊传参方式，代表只清除元素中的原始内容，不做输入。

**注意事项**
* 关键字主要用于对当前活动页面中的指定元素输入指定的内容，注意只对可进行输入操作的元素有效。
* 关键字“元素定位参数”中的“父级对象”形参，主要在脚本中调用关键字时使用，用例步骤中不使用。

**用例步骤使用示例**
* 正常传参，在元素中输入内容
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | input_text | xx | xx | | 要输入的内容

* 特殊传参，清空元素中的原始内容后输入内容
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | input_text | xx | xx | | ['要输入的内容']

* 特殊传参，清空元素中的原始
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | input_text | xx | xx | | []

**关键字元素定位数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    - id / ids / xpath / xpaths …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.input_text('定位方式','定位表达式'[,'索引值'][,'父级元素对象'],content='要输入的内容')  # 内容输入，[, xxx]表示可省略

'''
# 注意关键字在定义时的参数顺序 
def input_text(self, targeting, element, index=None, ParentObject=None, content=None)
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级element对象
@ content: 要输入的内容

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等。
'''
# 实例一
keyword.input_text('ids', 'kw', 0, '百度搜索')  # 内容输入
	
# 实例二
keyword.input_text('id', 'kw', content='百度搜索')  # 内容输入

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.input_text('id', 'kw', ParentObject=elementObject, content='百度搜索')  # 内容输入

# 实例四
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.input_text('ids', 'kw', 0, elementObject, '百度搜索')  # 内容输入
```
***
### click_btn() 关键字
> 对指定的元素进行点击操作

**描述**<br/>
根根据传入的元素定位数据找到元素，并对该元素进行点击操作(鼠标左键单击)

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式，定位表达式 [, 索引位置][, 父级对象] | 无参
> *[, xxx]  代表可省略*

**注意事项**
* 关键字用于对指定元素进行点击操作(模拟鼠标左键点击)；并非只有按钮元素才可使用该方法，对页面中的任何元素均生效(点击效果需要视实际元素而定)。
* 关键字“元素定位参数”中的“父级对象”形参，主要在脚本中调用关键字时使用，用例步骤中不使用。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx | click_btn| xx | xx | |

**关键字元素定位数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    - id / ids / xpath / xpaths …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.click_btn('定位方式','定位表达式'[,'索引值'][,'父级元素对象'])  # 元素点击，[, xxx]表示可省略

'''
# 注意关键字在定义时的参数顺序
def click_btn(self, targeting, element, index=None, ParentObject=None)
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级element对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.click_btn('id', 'kw')  # 元素点击

# 实例二
keyword.click_btn('ids', 'kw', 0)  # 元素点击

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.click_btn('id', 'kw', ParentObject=elementObject)  # 元素点击

# 实例四
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.click_btn('ids', 'kw', 0, elementObject)  # 元素点击
```
***
### js_control() 关键字
> 使用javaScript指令方式对指定元素进行操作（输入、点击）

**描述**<br/>
使用指定的 “javaScript定位操作表达式” 对目标元素进行操作

**参数**<br/>
元素定位参数 | 操作参数     
-------- | ----- 
js定位方式，js定位表达式，js操作方式 [, 索引位置] | [, 要输入的文本内容]
> *[, xxx]  代表可省略*

**特殊参数解释**<br/>
参数名 | 是否限制输入 | 值示例 
-------- | ----- | -----
js定位方式 | 否，任何合法的js定位方式均可用 | `document.getElementById`、`document.querySelectorAll`、`document.getElementsByClassName` 、`document.getElementsByName`
js操作方式 | 是，在示例列表中任选其一 | `click()` 、`value` 

> **js定位方式**<br/>
> `document.getElementById` 对框架中的id定位<br/>
> `document.querySelectorAll` 对应框架中的css_selector定位<br/>
> `document.getElementsByClassName` 对应框架中的class_name定位<br/>
> `document.getElementsByName` 对应框架中的name定位

> **js操作方式**<br/>
> `click()` 点击操作<br/>
> `value` 输入操作

**注意事项**
* 关键字主要应用在 `input_text` 和 `click_btn` 关键字无法有效操作元素的场景下，传递的元素定位数据与其它关键字有较大的差别，注意传值限制。
* 关键字的定位方式格式限制,只可书写能够被javaScript识别的定位方式。
* 关键字的操作方法仅支持从 `click()` 和 `value` 中任选其一。
* 由于特殊定位方式的缘故，关键字“是否进行复数定位”在定位方式中的 `document.getElement` 和 `document.getElements`上体现。
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)需要与`value 输入` 操作方法同时使用，当操作方法为`click()`时该参数无论是否有值均不会生效。

**用例步骤使用示例 （特殊）**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx | js_control | xx | xx | | 要输入的内容


**关键字元素节点数据 elementData.yaml文件书写示例 （特殊）**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    - document.getElementById / document.querySelectorAll  # 此处为列举，任何合法的JS定位方式均适用
    - 正常合法的定位表达式
    - value / click()  # 二选其一
    - [ 0-n ]  # index索引，非复数定位时不支持使用此项；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.js_control('JS定位方式','JS定位表达式','JS操作方式'[,'索引值'][,content='要输入的值'])  # 元素操作

'''
# 注意关键字在定义时的参数顺序
def js_control(self, targeting, element, behavior, index=None, content=None)
@ targeting: javaScript定位方式
@ element: javaScript定位表达式
@ behavior: javaScript操作方式
@ index: 索引
@ content: 要输入的值

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.js_control('document.getElementById', 'kw', 'click()', index=0)  # 元素操作 - 点击

# 实例二
keyword.js_control('document.getElementById', 'kw', 'value', content="百度搜索")  # 元素操作 - 内容输入

# 实例三
keyword.js_control('document.getElementsById', 'kw', 'value', 0, "百度搜索")  # 元素操作 - 内容输入
```
***
### alert_operation() 关键字
> 对alert提示弹框进行操作

**描述**<br/>
识别当前页面中的`alert`、`confirm`和 `prompt`弹框，并对其进行指定的操作

**参数**<br/>
元素定位参数 | 操作参数(四种参数类型选其一)
-------- | -----  
无参 | 空 / boole / string / list

> *[, xxx]  代表可省略*

> 空 / boole / string / list : 代表参数类型，详细的说明见 **参数说明**
>
**参数说明**
* `空`: 代表要点击 alert、confirm 和 prompt 弹框的“取消”按钮
* `boole`: 代表要点击 alert、confirm 和 prompt 弹框的那个操作按钮 (True 确定、False 取消)
* `string`: 文本类型，代表要在 prompt 弹框的输入框中输入的文本
* `list`: string和boole类型的整合，[string, boole]; 代表对 prompt 弹框进行输入，并点击弹框的指定操作按钮

> 参数类型的选择并不是随意的，你需要根据实际的页面场景来决定，不恰当的参数会导致关键字执行出错。例如当弹窗类型为 alert 或者 confirm时，你只能选择“boole类型”，若选择“list类型”和“string类型”关键字就会报错。

**注意事项**
* 关键字会自动识别当前弹框的类型，不需要特殊指明。
* 关键字的弹框操作按钮类型默认为`Fasel`，即若不传入，则在处理弹框时将默认点击弹框的【取消】按钮。
* 当参数值为`string`类型 和 `list`类型时，弹框类型必须为 prompt，否则会出现异常报错。
* 当参数值为`list`类型时，列表子项必须由 string、boole两项组成缺一不可；另外两者之间没有顺序限制，[string, boole] 和 [boole, string] 均可。
* 在处理 prompt 弹框时建议参数类型为list类型。
* 当窗口弹框中仅存在一个操作按钮时，传入的“操作按钮类型”无论为何，均会点击该按钮。

**用例步骤使用示例**
* 不传参，不区分弹框类型直接点击弹框的【取消】按钮
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | alert_operation | xx | xx |  | 

* 参数为 `boole` 类型，不区分弹框类型点击指定的弹框按钮
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | alert_operation | xx | xx |  | True
	
* 参数为 `string` 类型，处理窗口的 prompt 弹框，在输入框中输入内容后点击弹框的【取消】按钮
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | alert_operation | xx | xx |  | 要在prompt弹框中输入的内容

* 参数为 `list` 类型，处理窗口的 prompt 弹框，在输入框中输入内容后点击弹框的指定按钮
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | alert_operation | xx | xx |  | ['要在prompt弹框中输入的内容', True]

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.alert_operation(content="操作数据")  # alert弹框处理

'''
def alert_operation(self, content=None)
@ content: 操作数据
'''
# 实例一
keyword.alert_operation()  # 处理窗口的alert、confirm、prompt弹框，点击弹框【取消】按钮

# 实例二
keyword.alert_operation(False)  # 处理窗口的alert、confirm、prompt弹框，点击弹框【取消】按钮

# 实例三
keyword.alert_operation(True)  # 处理窗口的alert、confirm、prompt弹框，点击弹框【确定】按钮

# 实例四
keyword.alert_operation('文本内容')  # 处理窗口的prompt弹框，在输入框中输入内容后，点击弹框【取消】按钮

# 实例五
keyword.alert_operation(['文本内容',True])  # 处理窗口的prompt弹框，在输入框中输入内容后，点击弹框【确定】按钮
```
***
### selector_operation() 关键字
>对`<select></select>  下拉列表框`进行列表子项选择

**描述**<br/>
 根据元素定位数据找到指定的`<select></select> 下拉列表框`，并对其中的指定列表子项进行选择；关键字可以根据列表子项的 “value属性值”、“index索引值 ”和“text文本值”对其进行定位选择
 
**参数**<br/>
元素定位参数 | 操作参数
-------- | -----  
定位方式，定位表达式 [, 索引位置][, 父级对象] | 要选择的列表子项标识
> *[, xxx]  代表可省略*

**注意事项**
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)应为list类型，支持接收列表子项的 `value属性值`、`index索引值` 和 `text文本值` 中的任意一个。
* 关键字会根据实际的情况对传入的操作参数类型进行判断，不需要特殊声明。
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)接收的列表中仅允许存在一个值，若存在多个值则以列表中0号索引位置的值为准。
* 关键字“元素定位参数”中的“父级对象”形参，主要在脚本中调用关键字时使用，用例步骤中不使用。

**用例步骤使用示例**
* 按照列表子项的的 `value属性值` 进行选择
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selector_operation| xx | xx | | ['value']

* 按照列表子项的的 `index索引值` 进行选择
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selector_operation| xx | xx | | [0]

* 按照列表子项的的 `text文本值` 进行选择
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selector_operation| xx | xx | | ['列表子项文本']

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    - id / ids / xpath / xpaths …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.selector_operation('定位方式','定位表达式'[,'索引值'][,'父级元素对象'],content='列表项的标识')  # 下拉列表项选择

'''
# 注意关键字在定义时的参数顺序
def selector_operation(self, targeting, element, index=None, ParentObject=None, content=None)
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级element对象
@ content: 列表项标识值

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.selector_operation('id', 'kw', 0, content=['否'])  # 列表项选择，此处的‘否’为要选择列表项的text文本值

# 实例二
keyword.selector_operation('id', 'kw', content=['f'])  # 列表项选择，此处的‘f’为要选择列表项的value属性值

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.selector_operation('id', 'kw', ParentObject=elementObject, content=[1])  # 列表项选择，此处的‘1’为要选择列表项的index索引值
```
***
### radioCheck_operation() 关键字
>对`单/复选按钮`进行选中操作

**描述**<br/>
 根据元素定位数据找到指定的`单/复选按钮`，并根据其当前的“选中状态”判断是否对其进行操作。
 
**参数**<br/>
元素定位参数 | 操作参数(三选一)
-------- | -----  
定位方式，定位表达式 [, 索引位置][, 父级对象] | True / False / 空
> *[, xxx]  代表可省略*

**注意事项**
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)应为布尔类型，代表元素的选中操作标识；`True [默认]` 对元素进行选中，`False`指定元素不选中。
* 若关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为空，或者书写了除 `True`、`False`之外的值，则默认对元素进行选中操作。
* 只有在元素的“选中状态”与关键字传入的“操作参数”不一致时，关键字才会进行对应的操作，若一致则会忽略跳过。

**用例步骤使用示例**
* 选中指定元素
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | radioCheck_operation| xx | xx | | True

* 指定元素取消选中
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | radioCheck_operation| xx | xx | | False


**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    - id / ids / xpath / xpaths …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.radioCheck_operation('定位方式','定位表达式'[,'索引值'][,'父级元素对象'][,content=True])  # 单/复选按钮选择

'''
# 注意关键字在定义时的参数顺序
def radioCheck_operation(self, targeting, element, index=None, ParentObject=None, content=True) 
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级element对象
@ content: 选中操作标识

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.radioCheck_operation('id', 'kw', 0, content=True)  # 将“单/复选”按钮选中

# 实例二
keyword.radioCheck_operation('id', 'kw', content=False)  # 取消“单/复选”按钮的选中

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.radioCheck_operation('id', 'kw', ParentObject=elementObject, content=False)  # 取消“单/复选”按钮的选中
```
***
### drag_scrollBar() 关键字 
>将当前活动窗口中的滚动条拖动到指定元素所在的位置

**描述**<br/>
根据元素定位数据找到对应的元素，并将窗口中的滚动条拖动到元素所在的位置，以解决在页面内容溢出时的元素遮挡问题

**参数**<br/>
元素定位参数 | 操作参数(三选一)
-------- | -----  
定位方式，定位表达式 [, 索引位置][, 父级对象] |  top / bottom / 空
> *[, xxx]  代表可省略*

**注意事项**
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)应为布尔类型；代表滚动条拖动结束后目标元素与窗口对齐的位置，`top [默认]` 代表与窗口顶部对齐，`bottom` 代表与窗口底部对齐。
* 若关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为空，则默认代表滚动条拖动结束后，目标元素与窗口的顶部对齐。
* 关键字会根据实际情况对页面的 “X轴” 和 “Y轴” 进行拖动，不需要特殊标明。
* 注意关键字所定位的元素并不是要被拖动的元素，而是窗口滚动条拖动时的位置参照元素，通常是由于页面过长或者过宽导致无法显示的元素。
* 关键字“元素定位参数”中的“父级对象”形参，主要在脚本中调用关键字时使用，用例步骤中不使用。

**用例步骤使用示例**
* 拖动结束后与“窗口顶部”对齐
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | drag_scrollBar | xx | xx | | top

* 拖动结束后与“窗口底部”对齐
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | drag_scrollBar | xx | xx | | bottom

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    - id / ids / xpath / xpaths …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.drag_scrollBar('定位方式','定位表达式'[,'索引值'][,'父级元素对象'][,content='对齐参照'])  # 窗口滚动条拖动

'''
# 注意关键字在定义时的参数顺序
def drag_scrollBar(self, targeting, element, index=None, ParentObject=None, content=None) 
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级element对象
@ content: 对齐参照

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.drag_scrollBar('ids', 'kw', index=0)  # 将窗口滚动条拖动至目标元素与窗口顶部对齐的位置

# 实例二
keyword.drag_scrollBar('ids', 'kw', 0, content='bottom')  # 将窗口滚动条拖动至目标元素与窗口底部对齐的位置

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.drag_scrollBar('id', 'kw', ParentObject=elementObject, content='top')  # 将窗口滚动条拖动至目标元素与窗口顶部对齐的位置
```
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

**特殊传参**<br/>
 * `[xxx]`: 特殊传参方式(中括号包裹预期结果)，代表对预期结果进行“值包含比较”；注意如果内容为字符串或者汉字则必须在中括号中用引号引起来，否则会出现错误。
 * `*xxx*`: 特殊传参方式(预期结果首尾加`*`号)，代表对预期结果进行“值包含比较”；该方式仅能在内容为字符时使用。

**注意事项**<br/>
无

**用例步骤使用示例**
* 正常传参
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | title_assert| xx | xx | | 预期title标题值

* 特殊传参；对窗口title值进行包含值比较
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | title_assert| xx | xx | | `['预期title标题值']`
	
* 特殊传参；对窗口title值进行包含值比较
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | title_assert| xx | xx | | `*预期title标题值*`


**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
if keyword.title_assert('百度一下'):  # 页面title值断言
	print(True)
else:
	print(False)

if keyword.title_assert('*百度*'):  # 页面title值断言
	print(True)
else:
	print(False)

if keyword.title_assert(['百度']):  # 页面title值断言
	print(True)
else:
	print(False)
```
***
### alert_assert() 关键字
>对页面的alert弹框提示文本进行断言

**描述**<br/>
识别当前页面中的 alert 弹框，并对其中的提示文本进行断言

**参数**<br/>
元素定位参数 | 操作参数
-------- | -----  
无参 | 预期提示文本值

**特殊传参**<br/>
 * `[xxx]`: 特殊传参方式(中括号包裹预期结果)，代表对预期结果进行“值包含比较”；注意如果内容为字符串或者汉字则必须在中括号中用引号引起来，否则会出现错误。
 * `*xxx*`: 特殊传参方式(预期结果首尾加`*`号)，代表对预期结果进行“值包含比较”；该方式仅能在内容为字符时使用。

**注意事项**<br/>
无

**用例步骤使用示例**
* 正常传参
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | alert_assert| | | | 预期提示文本

* 特殊传参；对alert弹框的提示文本进行包含值比较
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | alert_assert| | | | `['预期提示文本']`

* 特殊传参；对alert弹框的提示文本进行包含值比较
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | alert_assert| | | | `*预期提示文本*`

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
if keyword.alert_assert('确定此操作吗？'):  # alert弹框提示文本断言
	print(True)
else:
	print(False)

if keyword.alert_assert(['确定']):  # alert弹框提示文本断言
	print(True)
else:
	print(False)

if keyword.alert_assert('*确定*'):  # alert弹框提示文本断言
	print(True)
else:
	print(False)
```
***
### selector_assert() 关键字
>对`<select>下拉列表框`中的列表子项进行断言检查

**描述**<br/>
用于对`<select>下拉列表框`中的列表子项进行断言检查，关键字可根据“操作参数”的不同进行两种不同的断言判断，分别为“`验证预期列表项是否存在`”和“`当前选中的列表项是否为预期列表项`”，不管是那种断言判断成立则返回`True`不成立则返回`False`

**参数**<br/>
元素定位参数 | 操作参数(二选一)
-------- | -----  
定位方式, 定位表达式 [, 索引位置][, 父级对象] |  预期列表项text文本值 / ('预期列表项text文本值',)
> *[, xxx]  代表可省略* <br/>
> *(xxx,) 代表 python tuple元组 数据类型*

**参数说明**<br/>
* 预期列表项text文本值: 代表关键字将进行“`当前选中的列表项是否为预期列表项`”的断言。(验证下拉列表框当前选中的“列表项”是否与“预期列表项名称”一致)
* ('预期列表项text文本值',): 代表关键字将进行“`验证预期列表项是否存在`”的断言。(要验证的“预期列表项名称”是否包含在`<select>下拉列表框`的子项中)

**特殊传参**<br/>
 * `[xxx]`: 特殊传参方式(中括号包裹预期结果)，代表对预期结果进行“值包含比较”；注意如果内容为字符串或者汉字则必须在中括号中用引号引起来，否则会出现错误。
 * `*xxx*`: 特殊传参方式(预期结果首尾加`*`号)，代表对预期结果进行“值包含比较”；该方式仅能在内容为字符时使用。
> 预期列表项text文本值: `['预期列表项text文本值']`  或者 `*预期列表项text文本值*`<br/>
> ('预期列表项text文本值',): `(['预期列表项text文本值'],)` 或者 `('*预期列表项text文本值*',)`

**注意事项**
* 关键字中所有有关列表项的“值断言”均采用的是列表项的text文本值，不支持对value值和index值做断言
* 在进行“`验证预期列表项是否存在`”断言时，要注意tuple(元组)参数中的“ `,` 逗号”为python语法不可省略；('预期值',) 或者 (['预期值'],)。
* 关键字“元素定位参数”中的“父级对象”形参，主要在脚本中调用关键字时使用，用例步骤中不使用。

**用例步骤使用示例**
* 验证当前选中的列表项是否为预期列表项
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selector_assert| xx | xx | | 预期子项text文本值

* 验证当前选中的列表项是否为预期列表项 -- 值包含判断
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selector_assert| xx | xx | | `['预期子项text文本值']`

* 验证当前选中的列表项是否为预期列表项 -- 值包含判断
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selector_assert| xx | xx | | `*预期子项text文本值*`

* 验证预期列表项是否存在
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selector_assert| xx | xx | | ('预期子项text文本值',)

* 验证预期列表项是否存在 -- 值包含判断
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selector_assert| xx | xx | | `(['预期子项text文本值'],)`

* 验证预期列表项是否存在 -- 值包含判断
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selector_assert| xx | xx | | `('*预期子项text文本值*',)`


**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    - id / ids / xpath / xpaths …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.selector_assert('定位方式','定位表达式'[,'索引值'][,'父级元素对象'],content='预期列表项')  # select下拉列表框，列表项断言

'''
#  注意关键字在定义时的参数顺序
def selector_assert(self, targeting, element, index=None, ParentObject=None, content=None)
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级element对象
@ content: 代表预期列表项

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
实例一：
keyword.selector_assert('id', 'kw', content='预期列表项text文本值')  # 判断当前选中的列表项是否为预期列表项

实例二：
keyword.selector_assert('id', 'kw', content='*预期列表项text文本值*')  # 判断当前选中的列表项是否为预期列表项

实例三：
keyword.selector_assert('ids', 'kw', 0, content=('预期列表项text文本值',))  # 判断预期列表项是否存在

实例四：
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.selector_assert('id', 'kw', ParentObject=elementObject, content=('*预期列表项text文本值*',))  # 判断预期列表项是否存在
```
***
### selfText_assert() 关键字 
> 元素text文本值比较断言

**描述**<br/>
对指定元素的text文本值进行比较断言，若预期文本值与实际文本值一致则返回`True`反之则返回`False`

**参数**<br/>
元素定位参数 | 操作参数
-------- | -----  
定位方式, 定位表达式 [, 索引位置] | 预期文本值
> *[, xxx]  代表可省略* 

**特殊传参**<br/>
* `[xxx]`: 特殊传参方式(中括号包裹预期结果)，代表对预期结果进行“值包含比较”；注意如果内容为字符串或者汉字则必须在中括号中用引号引起来，否则会出现错误。
* `*xxx*`: 特殊传参方式(预期结果首尾加`*`号)，代表对预期结果进行“值包含比较”；该方式仅能在内容为字符时使用。
* `""`: 特殊传参方式；代表进行空值判断。

**注意事项**
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)传入 "" 代表做值为空判断。
* 关键字只支持对string类型的数据进行“包含值比较”，其它类型的数据会自动判别为“相等值比较”。

**用例步骤使用示例**
* 正常传参；验证指定元素的文本是否与预期文本相等
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selfText_assert| xx | xx | | 预期文本值

* 特殊传参；验证指定元素的文本是否包含预期文本
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selfText_assert| xx | xx | | `['预期文本值']`

* 特殊传参；验证指定元素的文本是否包含预期文本
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selfText_assert| xx | xx | | `*预期文本值*`

* 特殊传参；验证指定元素的文本是否为空
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selfText_assert| xx | xx | | `""`

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  id / xpath / css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.selfText_assert('定位方式','定位表达式'[,'索引值'],content='预期文本值')  # 元素text文本值断言

'''
# 注意关键字在定义时的参数顺序
def selfText_assert(self, targeting, element, index=None, content=None) 
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ content: 预期文本值

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.selfText_assert('id', 'kw', content="百度一下")  # 元素文本值断言

# 实例二
keyword.selfText_assert('ids', 'kw', 0, content=["百度"])  # 元素文本值包含断言

# 实例三
keyword.selfText_assert('ids', 'kw', index=0, content="")  # 元素文本为空判断
```
***
### selfAttribute_assert() 关键字
> 元素指定属性值比较断言

**描述**<br/>
对指定元素的指定属性值进行比较断言，若预期属性值与实际属性值一致则返回`True`反之则返回`False`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [, 索引位置] | ['属性名','预期结果'[,'是否截取']]
> *[, xxx]  代表可省略* 

**参数说明**<br/>
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为 `list列表` 类型，
	* 列表第一项代表属性名
	* 列表第二项代表预期结果
	* 列表第三项代表是否对实际结果按照预期结果进行长度截取，该项可省略

> 传值示例：`['src','test2.jpeg',True]` 或者 `['src','test2.jpeg']`

**特殊传参**<br/>
* `[xxx]`: 特殊传参方式(中括号包裹预期结果)，代表对预期结果进行“值包含比较”；注意如果内容为字符串或者汉字则必须在中括号中用引号引起来，否则会出现错误。
* `*xxx*`: 特殊传参方式(预期结果首尾加`*`号)，代表对预期结果进行“值包含比较”；该方式仅能在内容为字符时使用。

**注意事项**
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)列表中的第三项为布尔类型，如果为`True`则代表根据预期结果对实际结果进行长度截取，若省略不写则默认为`False`代表原样，该值主要应用在对图片或者文件路径做判断的场景下(例如预期结果：test2.jpeg、实际结果：c:\xxx\xxx\xx\test1.jpeg，截取后的实际结果为 test1.jpeg)；
* 在实际调用时“实际结果长度截取”与“值包含比较”可同时使用，例如 `[['baidu'],'src', True]` 或者 `['*baidu*','src', True]`；

**用例步骤使用示例**
* 正常传参；对指定元素的value属性值进行断言
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selfAttribute_assert | xx | xx | | ['value','预期结果']

* 正常传参；将指定元素的src属性值进行字符截取，并与预期结果进行断言
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selfAttribute_assert | xx | xx | | ['src','预期结果',True]

* 特殊传参；验证指定元素的value属性值是否包含预期结果
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selfAttribute_assert | xx | xx | | `['value',['预期结果']]`

* 特殊传参；验证指定元素的src属性值是否包含预期结果
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | selfAttribute_assert | xx | xx | | `['src','*预期结果*']`


**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  id / xpath / css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.selfAttribute_assert('定位方式','定位表达式'[,'索引值'],content='断言数据')  # 元素指定属性值断言

'''
# 注意关键字在定义时的参数顺序
def selfAttribute_assert(self, targeting, element, index=None, content=None)
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ content: 断言数据

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.selfAttribute_assert('id', 'kw', content=['百度一下','value'])  # 元素value属性值断言

# 实例二
keyword.selfAttribute_assert('ids', 'kw', 0, ['*百度*','value'])  # 元素value属性值包含断言

# 实例三
keyword.selfAttribute_assert('id', 'kw', content=['baidu.jpg','src', True])  # 图片元素src属性值截取断言
```
***
### elementNumber_assert() 关键字
>对页面中指定元素的个数进行断言判断

**描述**<br/>
统计指定元素的个数，并与传入的预期个数进行比较；若预期个数与元素的实际个数一致则返回`True`反之则返回`False`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
复数定位方式, 定位表达式 [,父级对象] | 预期个数
> *[, xxx]  代表可省略* 

**特殊传参**<br/>
* `[python表达式]`: 特殊传参方式(python表达式计算结果)，代表预期结果为python表达式的计算结果。
* `python表达式`: 特殊传参方式(python表达式计算结果)，代表预期结果为python表达式的计算结果。

> 注意两种方式中的 python表达式 均不需要使用引号包裹

**注意事项**
* 关键字中仅允许采用复数定位方式，不允许使用索引值，不支持对单元素进行断言。
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)中的预期个数可以是数字文本也可以是纯数字，关键字会自动对其进行类型转换你只要保证它是阿拉伯数字即可。
* 若关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)中出现多个数字，则默认取获取到的第一个数字，例如 “测试12测试34” [处理后得到] 数字12。
* 若传入的为python表达式，则关键字不会进行“条目3”中所述的筛选；
* 关键字“元素定位参数”中的“父级对象”形参，主要在脚本中调用关键字时使用，用例步骤中不使用。

**用例步骤使用示例**
* 正常传参；验证指定元素的实际个数是否为 5
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementNumber_assert | xx | xx | | 5

* 特殊传参；验证指定元素的实际个数是否为 5(触发关键字筛选，得到数字5)
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementNumber_assert | xx | xx | | `是否为5个0`

* 特殊传参；验证指定元素的实际个数是否为 python表达式的计算结果
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementNumber_assert | xx | xx | | `int('6') + 1 - 2`

* 特殊传参；验证指定元素的实际个数是否为 python表达式的计算结果
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementNumber_assert | xx | xx | | `[int('6') + 1 - 2]`

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  ids / xpaths / css_selectors …   # 框架中支持即可，只允许使用复数定位方式
    - 对应方式的定位表达式
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.elementNumber_assert('复数定位方式','定位表达式'[,'父级元素对象'], content='预期个数' )  # 元素个数断言

'''
# 注意关键字在定义时的参数顺序
def elementNumber_assert(self, targeting, element, ParentObject=None, content=None)
@ targeting: 定位方式
@ element: 定位表达式
@ ParentObject: 父级element对象
@ content: 预期个数

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.elementNumber_assert('ids', 'kw', content=1)  # 判断指定元素是否在页面中有且仅有一个

# 实例二
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.elementNumber_assert('ids', 'kw', elementObject, content=int('2')-1)  # 判断指定元素是否在页面中有且仅有一个
```
***
### elementErgodic_assert() 关键字
> 对元素的某项值进行遍历比较 - 该值预期存在

**描述**<br/>
对界面指定元素的某项值进行遍历比较；关键字支持两种断言模式分别为: <br/>
`正常逻辑(默认)` ：即当前实际结果中有任意一条记录与预期结果不相等则返回`False`，如果所有记录全部相符则返回`True`； <br/>
`取反逻辑` ：即当前实际结果中有任意一条记录与预期结果相等则返回`True`，如果没有一条记录相符则返回`False`；

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
复数定位方式, 定位表达式 |  ['预期结果'[,'指定属性名'][,'逻辑是否取反']]
> *[, xxx]  代表可省略* 

**参数说明**<br/>
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为 `list列表` 类型，
	* 列表第一项代表预期结果
	* 列表第二项代表指定属性名，该项可省略
	* 列表第三项代表是否对关键字的断言逻辑进行取反，该项可省略

> 传值示例：`['预期文本内容']`、`['预期文本内容', False]`、`['checked','value']` 或者 `['checked','value', True]`

**特殊传参**<br/>
* `[xxx]`: 特殊传参方式(中括号包裹预期结果)，代表对预期结果进行“值包含比较”；注意如果内容为字符串或者汉字则必须在中括号中用引号引起来，否则会出现错误。
* `*xxx*`: 特殊传参方式(预期结果首尾加`*`号)，代表对预期结果进行“值包含比较”；该方式仅能在内容为字符时使用。

**注意事项**
* 关键字中仅允许采用复数定位方式，不允许使用索引值，不对单元素定位进行操作。
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)列表中第二项为要获取元素的那个属性值，如 value` 或者 class 如果省略则默认为text文本值，属性名需用引号引起来。
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)列表第三项为布尔值代表取反逻辑标识，如果省略则默认为`True`。
* 关键字正常断言逻辑`True(默认)`，即当前实际结果中有任意一条记录与预期结果不相等则返回`False`，如果所有记录全部相符则返回`True`”。
* 关键字断言逻辑取反`False`，即当前实际结果中有任意一条记录与预期结果相等则返回`True`，如果没有一条记录相符则返回`False`”。

**用例步骤使用示例**
* 正常传参；验证界面所有指定元素的text文本值是否均为预期结果
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementErgodic_assert | xx | xx | | ['预期结果']

* 正常传参；验证界面所有指定元素的value属性值是否有一条为预期结果
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementErgodic_assert | xx | xx | | ['预期结果','value',False]

* 特殊传参；验证界面所有指定元素的value属性值是否有一条包含有“预期”二字
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementErgodic_assert | xx | xx | | `['*预期*','value',False]`

* 特殊传参；验证界面所有指定元素的text文本值是否均包含有“预期”二字
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementErgodic_assert | xx | xx | | `['*预期*']`

* 特殊传参；验证界面所有指定元素的value属性值是否均包含有“预期”二字
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementErgodic_assert | xx | xx | | `[['预期'],'value']`

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  ids / xpaths / css_selectors …   # 框架中支持即可，只允许使用复数定位方式
    - 对应方式的定位表达式
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.elementErgodic_assert('复数定位方式','定位表达式',content=['操作参数'])  # 元素指定值遍历比较断言

'''
# 注意关键字在定义时的参数顺序
def elementErgodic_assert(self, targeting, element, content) 
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
***
### elementErgodicNot_assert() 关键字
> 对元素的某项值进行遍历比较 - 该值预期不存在

**描述**<br/>
对界面指定元素的某项值进行遍历比较；当前实际结果中有任意一条记录与预期结果相等则返回`False`，如果所有记录均不相符则返回`True`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
复数定位方式, 定位表达式 | ['预期结果'[,'指定属性名']]
> *[, xxx]  代表可省略* 

**参数说明**<br/>
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为 `list列表` 类型，
	* 列表第一项代表预期结果
	* 列表第二项代表指定属性名，该项可省略

> 传值示例：`['预期文本内容']` 或者 `['checked','value']`

**特殊传参**<br/>
* `[xxx]`: 特殊传参方式(中括号包裹预期结果)，代表对预期结果进行“值包含比较”；注意如果内容为字符串或者汉字则必须在中括号中用引号引起来，否则会出现错误。
* `*xxx*`: 特殊传参方式(预期结果首尾加`*`号)，代表对预期结果进行“值包含比较”；该方式仅能在内容为字符时使用。

**注意事项**
* 关键字中仅允许采用复数定位方式，不允许使用索引值，不对单元素定位进行操作。
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)列表第二项为要获取元素的那个属性值，如 value 或者 class 如果省略则默认为text文本值，属性名需用引号引起来。

**用例步骤使用示例**
* 正常传参，验证界面所有指定元素中是否不存在text文本值为“预期结果”的
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementErgodicNot_assert| xx | xx | | ['预期结果']

* 正常传参，验证界面所有指定元素中是否不存在value属性值为“预期结果”的
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementErgodicNot_assert| xx | xx | | ['预期结果', 'value']

* 特殊传参，验证界面所有指定元素中是否不存在text文本值包含有“预期”二字的
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementErgodicNot_assert| xx | xx | | `['*预期*']`

* 特殊传参，验证界面所有指定元素中是否不存在value属性值包含有“预期”二字的
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementErgodicNot_assert| xx | xx | | `['*预期*','value']`

* 特殊传参，验证界面所有指定元素中是否不存在src属性值包含有“预期”二字的
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementErgodicNot_assert| xx | xx | | `[['预期'],'src']`

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  ids / xpaths / css_selectors …   # 框架中支持即可，只允许使用复数定位方式
    - 对应方式的定位表达式
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.elementErgodicNot_assert('复数定位方式','定位表达式',content=['操作参数'])  # 元素指定值遍历比较断言

'''
# 注意关键字在定义时的参数顺序
def elementErgodicNot_assert(self, targeting, element, content)
@ targeting: 定位方式
@ element: 定位表达式
@ content: 断言数据信息
'''
# 实例一
keyword.elementErgodicNot_assert('ids', 'kw', content=['自动化','value'])  # 对界面所有id属性值为kw的元素的value属性值进行遍历，验证值是否均不为'自动化'

# 实例二
keyword.elementErgodicNot_assert('ids', 'kw', content=['自动化'])  # 对界面所有id属性值为kw的元素的text文本值进行遍历，验证值是否均不为'自动化'
```
***
### elementExistence_assert() 关键字 
> 断言指定元素是否存在(指定元素是否存在于DOM树中并可见)

**描述**<br/>
 断言判断指定的元素是否存在，关键字支持根据传入的操作参数更改断言逻辑；

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [, 索引位置][, 父级对象] |  True / False / 空
> *[, xxx]  代表可省略* 

**参数说明**<br/>
* 操作参数传入 `True`：指定元素存在返回 True 不存在则返回 False
* 操作参数传入 `False` 或 `空`：元素存在返回 False 不存在则返回 True

**注意事项**
* 关键字中“元素存在与否”的判断标准：存在于DOM树中，可见且元素的高和宽都大于0
* 关键字“元素定位参数”中的“父级对象”形参，主要在脚本中调用关键字时使用，用例步骤中不使用。

**用例步骤使用示例**
* 验证指定元素是否存在
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementExistence_assert| xx | xx | | True

* 验证指定元素是否不存在
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementExistence_assert| xx | xx | | False

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  id / xpath / css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.elementExistence_assert('定位方式','定位表达式'[,'索引值'][,'父级元素对象'][,content=断言方式])  # 元素存在与否断言

'''
# 注意关键字在定义时的参数顺序
def elementExistence_assert(self, targeting, element, index=None, ParentObject=None, content=None)
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级element对象
@ content: 断言逻辑类型

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.elementExistence_assert('id', 'kw', content=True)  # 判断界面id属性值为kw的元素是否存在

# 实例二
keyword.elementExistence_assert('ids', 'kw', 0)  # 判断界面id属性值为kw的元素是否不存在

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.elementExistence_assert('id', 'kw', ParentObject=elementObject, content=True)  # 判断界面id属性值为kw的元素是否存在
```
***
### elementComparison_assert() 关键字
> 元素指定值大小比较断言

**描述**<br/>
对指定元素的指定值进行大小值比较断言，支持对 “单个元素” 和 “复数元素” 进行关系运算(<, >, >=, <=, ==)。若表达式成立则返回 `True` 不成立则返回 `False`

**参数**<br/>
元素定位参数 | 操作参数(两种参数类型选其一)
-------- | -----  
定位方式, 定位表达式 [,索引位置] | string / list
> *[, xxx]  代表可省略* 

**参数说明**<br/>
* 操作参数为`string 类型`：代表要进行比较的预期结果；关键字将默认以 “> 大于运算符” 对实际结果(元素的text文本值)和预期结果进行比较。
* 操作参数为`list 类型`：表示要对指定元素的指定值进行某种关系的比较。
	* 列表第一项代表 “预期结果”
	* 列表第二项代表 “关系运算符”
	* 列表第三项则代表指定元素的“属性”值，该项可省略，若省略则默认取元素的“text文本值”

> list类型 传参格式：`['预期结果', '关系运算符'[,'属性名']]`

**注意事项**
* 关键字同时支持对 “单个元素” 和 “复数元素” 进行操作，关键字会根据实际传入的“元素定位数据”来进行判断，无需特殊指明。
* 无论是进行那种关系运算，关键字的比较值均为“实际结果”；例如 “实际结果 > 预期结果”、“实际结果 < 预期结果”...
* 当关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)传入为`list 类型`时除“预期结果”为非字符串和汉字时不需要用引号标注，其它情况下列表中的各项均需要用引号标注；

**用例步骤使用示例**
* 对指定元素的text文本值进行比较，验证是否均大于预期结果
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementComparison_assert| xx | xx | | 10

* 对指定元素的value属值进行比较，验证是否均大于预期结果
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementComparison_assert| xx | xx | | [10, '>', 'value']

* 对指定元素的text文本值进行比较，验证是否均小于等于预期结果
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | elementComparison_assert| xx | xx | | [10, '<=']

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  id / xpath / css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.elementComparison_assert('定位方式','定位表达式'[,'索引值'][,content='断言参数'])  # 元素指定值大小值比较

'''
# 注意关键字在定义时的参数顺序
def elementComparison_assert(self, targeting, element, index=None, content=None)
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ content: 断言参数

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.elementComparison_assert('ids', 'kw', content=[123, '>=', 'value'])  # 判断界面所有id属性值为kw的元素的value属性值是否均 >= 123

# 实例二
keyword.elementComparison_assert('id', 'kw', content=[123, '<'])  # 判断界面id属性值为kw的元素的text文本值是否 < 123

# 实例三
keyword.elementComparison_assert('id', 'kw', content=123)  # 判断界面id属性值为kw的元素的text文本值是否 > 123
```
***
### functionReturn_assert() 关键字
> 自定义插件方法返还结果断言

**描述**<br/>
按照需求调用指定的插件方法，并对插件方法的返还结果进行断言判断，若预期结果与实际结果一致则返回 `True` 反之则返回 `False`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无 | ['预计比对结果文本','[插件名]方法名'[,插件方法参数]]
> *[, xxx]  代表可省略* 

**参数说明**<br/>
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为list列表：
	* 列表第一项为要进行比较的预期结果；
	* 列表第二项为要进行调用的插件方法名，按照“[插件名]方法名”的方式书写；
	* 列表第三项为插件方法的参数列表，支持采用list(顺序传递)和dict(指定参数)两种方式传参；若无需参数时该项可省略不写；

**插件方法的参数传递方式说明**<br/>
* 顺序传参(即参数位置传入list列表)
	```python
	def function(ID=None, NAME=None, AGE=None):
		...

	['12', '王明', 10]
	各参数值为：ID:12  NAME:王明  AGE:10

	['12', '王明']
	各参数值为：ID:12  NAME:王明  AGE:None
	```

* 指定参数传参(即参数位置传入dict字典)
	```python
	def function(ID=None, NAME=None, AGE=None):
		...

	{'ID':'12','AGE':10,'NAME':'王明'}
	各参数值为：ID:12  NAME:王明  AGE:10

	{'ID':'12','AGE':10}
	各参数值为：ID:12  NAME:None  AGE:10
	```

**注意事项**
* 在关键字中带有插件方法时，注意书写格式 `[插件名]方法名`

**用例步骤使用示例**
* 无参调用插件方法
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | functionReturn_assert| | | | ['预期结果', '[CJ]test']

* 带参调用插件方法-顺序传参
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | functionReturn_assert| | | | ['预期结果', '[CJ]test', [1,2]]

* 带参调用插件方法-指定参数传参
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | functionReturn_assert| | | | ['预期结果', '[CJ]test', {'key1':1,'ke2':2}]]

**脚本使用示例**
> <font color="red"> 关键字不支持在脚本中使用 </font>

***
### downloadExport_assert() 关键字
> 对下载或者导出项(文件)进行断言判断

**描述**<br/>
对下载或者导出的项(文件)进行断言判断，若预期文件名与实际文件名一致则返回`True`反之则返回`False`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无 | 预期文件名.xxx
> *[, xxx]  代表可省略* <br/>
> *文件名应带有拓展名 xxx.xx*

**特殊传参**<br/>
* `[xxx]`: 特殊传参方式(中括号包裹预期结果)，代表对预期结果进行“值包含比较”；注意如果内容为字符串或者汉字则必须在中括号中用引号引起来，否则会出现错误。
* `*xxx*`: 特殊传参方式(预期结果首尾加`*`号)，代表对预期结果进行“值包含比较”；该方式仅能在内容为字符时使用。

**注意事项**
* 关键字主要对导出项(文件)的名称做断言，不支持对内容做断言。
* 关键字在使用时不需要指明导出项(文件)所在的位置，关键字会自动在你工作目录的“download 文件夹”(框架在执行时自动创建)下查找。
* 若你工作目录的“download 文件夹”下存在与“实际导出项”同名同类型的文件，关键字会自动找寻创建时间最近的一个文件作为实际文件。

**用例步骤使用示例**
* 正常传参；验证导出文件的文件名是否正确
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | downloadExport_assert| | | | 文件名.xxx 

* 特殊传参；验证导出的文件是否为“.docx”类型
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | downloadExport_assert| | | | `['.docx']`

* 特殊传参；验证导出文件的文件名是否包含有“文件”二字
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | downloadExport_assert| | | | `*文件*`

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.downloadExport_assert('预期文件名')  # 文件下载导出检查

'''
#  注意关键字在定义时的参数顺序
downloadExport_assert(self, content)
@ content: 预期对照文件名，文件名中应包含拓展名
'''
# 实例一
keyword.downloadExport_assert('查询结果.txt')  # 导出文件名断言

# 实例二
keyword.downloadExport_assert(content=['查询结果'])  # 导出文件名断言

# 实例三
keyword.downloadExport_assert(content='*查询结果*')  # 导出文件名断言
```
***
##  鼠标、键盘类
### actionBuilder_Move() 关键字 
> 鼠标悬停

**描述**<br/>
在指定元素上悬停鼠标

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [,索引位置][,父级对象] | 无
> *[, xxx]  代表可省略* 

**注意事项**
* 关键字“元素定位参数”中的“父级对象”形参，主要在脚本中调用关键字时使用，用例步骤中不使用。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx | actionBuilder_Move | xx | xx | |

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  id / xpath / css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.actionBuilder_Move('定位方式','定位表达式'[,'索引值'][,'父级对象'])  # 鼠标悬停

'''
# 注意关键字在定义时的参数顺序
def actionBuilder_Move(self, targeting, element, index=None, ParentObject=None)
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级元素对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.actionBuilder_Move('id', 'kw')  # 鼠标悬停

# 实例二
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.actionBuilder_Move('ids', 'kw', 0, elementObject)  # 鼠标悬停

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.actionBuilder_Move('id', 'kw', ParentObject=elementObject)  # 鼠标悬停
```
***
### actionBuilder_RightClick() 关键字 
> 鼠标右击

**描述**<br/>
在指定元素上右击鼠标

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [,索引位置][,父级对象] | 无
> *[, xxx]  代表可省略* 

**注意事项**
* 关键字“元素定位参数”中的“父级对象”形参，主要在脚本中调用关键字时使用，用例步骤中不使用。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx | actionBuilder_RightClick| xx | xx | | 

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  id / xpath / css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.actionBuilder_RightClick('定位方式','定位表达式'[,'索引值'][,'父级对象'])  # 鼠标右击

'''
# 注意关键字在定义时的参数顺序
def actionBuilder_RightClick(self, targeting, element, index=None, ParentObject=None) 
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级元素对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.actionBuilder_RightClick('id', 'kw')  # 鼠标右击

# 实例二
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.actionBuilder_RightClick('ids', 'kw', 0, elementObject)  # 鼠标右击

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.actionBuilder_RightClick('id', 'kw', ParentObject=elementObject)  # 鼠标右击
```
***
### actionBuilder_DoubleClick() 关键字 
> 鼠标双击

**描述**<br/>
在指定元素上双击鼠标

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [,索引位置][,父级对象] | 无
> *[, xxx]  代表可省略* 

**注意事项**
* 关键字“元素定位参数”中的“父级对象”形参，主要在脚本中调用关键字时使用，用例步骤中不使用。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx | actionBuilder_DoubleClick| xx | xx | |

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  id / xpath / css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.actionBuilder_DoubleClick('定位方式','定位表达式'[,'索引值'][,'父级对象'])  # 鼠标双击

'''
# 注意关键字在定义时的参数顺序
def actionBuilder_DoubleClick(self, targeting, element, index=None, ParentObject=None)
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级元素对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.actionBuilder_DoubleClick('id', 'kw')  # 鼠标双击

# 实例二
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.actionBuilder_DoubleClick('ids', 'kw', 0, elementObject)  # 鼠标双击

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.actionBuilder_DoubleClick('id', 'kw', ParentObject=elementObject)  # 鼠标双击
```
***
### actionBuilder_HoldClick() 关键字 
> 鼠标指定元素位置拖拽分划步骤一：鼠标左键按下

**描述**<br/>
在指定的元素上按下鼠标左键

**参数**<br/>
元素定位参数 | 操作参数
-------- | -----  
定位方式, 定位表达式 [,索引位置][,父级对象] | 无
> *[, xxx]  代表可省略* 

**注意事项**
* 关键字“元素定位参数”中的“父级对象”形参，主要在脚本中调用关键字时使用，用例步骤中不使用。
* 关键字在使用后配合调用 `actionBuilder_MoveTo()`关键字可完成鼠标拖拽操作，单独使用没有意义。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx | actionBuilder_HoldClick| xx | xx | |

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  id / xpath / css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.actionBuilder_HoldClick('定位方式','定位表达式'[,'索引值'][,'父级对象'])  # 鼠标左键按下

'''
# 注意关键字在定义时的参数顺序
def actionBuilder_HoldClick(self, targeting, element, index=None, ParentObject=None) 
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级元素对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.actionBuilder_HoldClick('id', 'kw')  # 鼠标左键按下

# 实例二
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.actionBuilder_HoldClick('ids', 'kw', 0, elementObject)  # 鼠标左键按下

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.actionBuilder_HoldClick('id', 'kw', ParentObject=elementObject)  # 鼠标左键按下
```
***
### actionBuilder_MoveTo() 关键字 
> 鼠标指定元素位置拖拽分划步骤二：鼠标拖拽至指定的目标元素，并释放鼠标左键

**描述**<br/>
将鼠标拖拽至定位的目标元素，并释放鼠标左键

**参数**<br/>
元素定位参数 | 操作参数
-------- | -----  
定位方式, 定位表达式 [,索引位置][,父级对象] | 无
> *[, xxx]  代表可省略* 

**注意事项**
* 关键字中定位的元素并非是“要拖拽的元素”，而是要拖拽至的目标位置。
* 关键字在使用前，需要配合调用 `actionBuilder_HoldClick()`关键字使用，单独使用没有意义。
* 关键字“元素定位参数”中的“父级对象”形参，主要在脚本中调用关键字时使用，用例步骤中不使用。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx | actionBuilder_MoveTo| xx | xx | |

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
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
keyword.actionBuilder_MoveTo('定位方式','定位表达式'[,'索引值'][,'父级对象'])  # 拖拽至目标元素后释放鼠标左键

'''
def actionBuilder_MoveTo(self, targeting, element, index=None, ParentObject=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级元素对象

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.actionBuilder_MoveTo('id', 'kw')  # 拖拽至目标元素后释放鼠标左键

# 实例二
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.actionBuilder_MoveTo('ids', 'kw', 0, elementObject)  # 拖拽至目标元素后释放鼠标左键

# 实例三
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.actionBuilder_MoveTo('id', 'kw', ParentObject=elementObject)  # 拖拽至目标元素后释放鼠标左键
```
***
### actionBuilder_MoveOffset() 关键字 
> 使用鼠标将指定元素拖拽至目标坐标点

**描述**<br/>
使用鼠标将指定元素拖拽至目标坐标点，可独自完成鼠标拖拽操作

**参数**<br/>
元素定位参数 | 操作参数
-------- | -----  
定位方式, 定位表达式 [,索引位置][,父级对象] | [x轴坐标, y轴坐标]
> *[, xxx]  代表可省略* 


**参数说明**<br/>
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)应传递 `list类型` 的参数；
	* 列表第一项为X轴坐标，int类型
	* 列表第二项为Y轴坐标，int类型

> 坐标的原点在页面的左上角，记为(0, 0)

**注意事项**
* 关键字以定位元素(要拖拽的元素)的位置进行相对移动，坐标移动的起始位置为定位元素的位置。
* 参考“页面左上角为坐标原点”的规则，元素向左和向上拖拽时对应的坐标应为负数，例如: `[-100, -200]`向左上角移动。
* 若传递的各轴坐标值超过实际的可操作坐标值范围，关键字会触发异常。
* 关键字“元素定位参数”中的“父级对象”形参，主要在脚本中调用关键字时使用，用例步骤中不使用。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx | actionBuilder_MoveOffset| xxx | xx | | [10, 20]

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  id / xpath / css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.actionBuilder_MoveOffset('定位方式','定位表达式'[,'索引值'][,'父级对象'],'coord'=[x轴坐标,y轴坐标])  # 将指定元素拖拽至目标坐标点

'''
# 注意关键字在定义时的参数顺序
def actionBuilder_MoveOffset(self, targeting, element, index=None, ParentObject=None, coord=None)
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级元素对象
@ coord: 目标位置坐标

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.actionBuilder_MoveOffset('id', 'kw', coord=[0, 200])  # 将指定元素拖拽至目标坐标点(0,200)

# 实例二
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.actionBuilder_MoveOffset('ids', 'kw', 0, elementObject, [100, -200])  # 将指定元素拖拽至目标坐标点(100, -200)
```
***
### keyBoard_Events() 关键字 
> 键盘按键模拟

**描述**<br/>
在指定的元素上模拟键盘按键点击

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [,索引位置][,父级对象] | 键盘按键标识
> *[, xxx]  代表可省略* 

**参数说明**<br/>
 * 部分键盘按键标识：`Keys.BACK_SPACE  退格键`、`Keys.ENTER  回车键`、`Keys.SPACE 空格键`、`Keys.ESCAPE  esc键`

> 所有合法的 selenium框架中 Keys类的 键盘按键标识，关键字均支持识别

**注意事项**
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)中键盘按钮标识符的 `Keys.` 不可省略。
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)如果为“退格键标识”则关键字会自动根据操作元素中的文字数量进行相应次数的按键点击。
* 关键字“元素定位参数”中的“父级对象”形参，主要在脚本中调用关键字时使用，用例步骤中不使用。

**用例步骤使用示例**
* 在指定元素上点击 键盘Enter键
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | keyBoard_Events| xx | xx | | Keys.ENTER

* 在指定元素上点击 键盘Back_Space键
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | keyBoard_Events| xx | xx | | Keys.BACK_SPACE

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  id / xpath / css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.keyBoard_Events('定位方式','定位表达式'[,'索引值'][,'父级对象'], content='键盘按键标识')  # 键盘按键模拟点击

'''
# 注意关键字在定义时的参数顺序
def keyBoard_Events(self, targeting, element, index=None, content=None, ParentObject=None)
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ ParentObject: 父级元素对象
@ content: 键盘按键标识

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.keyBoard_Events('id', 'kw', content='Keys.ENTER')  # 模拟键盘‘回车’键点击

# 实例二
elementObject = keyword.locator('tag_name', 'body')  # 父级元素定位
keyword.keyBoard_Events('ids', 'kw', 0, elementObject, 'Keys.BACK_SPACE')  # 模拟键盘‘退格’键点击
```
***
##  数据缓存
### getElementText() 关键字
> 获取元素数据值，并存入框架缓存

**描述**<br/>
获取指定元素的指定值，并将其存入到框架的缓存中，以供其它关键字或者方法读取使用

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式 [,索引位置] | 关键字操作依据
> *[, xxx]  代表可省略* 

**参数说明**<br/>
> 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)，可接收三种参数类型

* 参数值为`空`：代表要对指定元素的text文本值进行原样保存，保存时的key键为“key_当前时间戳”
* 参数值为`string类型`：关键字可以接收三种操作值中的任意一个 `key键`、`属性名`、`筛选类型`
* 参数值为`list类型`：可以同时接收三种操作值 `[key键, 属性名, 筛选类型]` 进行处理

**注意事项**
* 不管关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为何种参数形式，三种操作值(key键，属性名，筛选类型)不需要特殊标明，关键字会自动识别它们。
* 不管关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为何种参数形式，只要是出现 “未指定key键” 的情况，则关键字默认以 “key_当前时间戳” 为key键将获取到的值存入到缓存中。
* 不管关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为何种参数形式，只要是出现 “未指定属性名” 的情况，则关键字默认获取元素的“text文本值”。
* 关键字中支持5种数据类型的筛选，分别为`int 整型`、 `text 文本字符串`、`date 日期` 、`time 时间`、`dateTime 日期时间`。
* 当关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为 `list类型` 时，列表中各项的位置可随意书写，关键字会自动进行判别筛选; 例如`[key键, 属性名, 筛选类型]` 或者 `[属性名, 筛选类型 , key键]`。

**关键字使用规则解释**<br/>
* 如果出现 `指定属性名不存在` 的情况，则指定的属性名将视情况而定自动转为key键。
* 如果出现 `指定属性名重复` 的情况，则“位置权重低”的属性名将视情况而定自动转为key键。
* 如果出现 `key键与属性名同名`的情况，则位置权重高的值判定为属性，顺位为key键。
* 如果出现 `关键字筛选结果不唯一` 的情况，则筛选结果列表中的第一项为筛选的最终结果。

**用例步骤使用示例**
* 获取指定元素的text文本值，并以随机键名存入缓存中
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | getElementText| xx | xx | | 

* 获取指定元素的value属性值，并以随机键名存入缓存中
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | getElementText| xx | xx | | value

* 获取指定元素text文本值中“数字类型”的数据，并以随机键名存入缓存中
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | getElementText| xx | xx | | int
	
* 获取指定元素的text文本值，并以“keyName”为键名存入缓存中
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | getElementText| xx | xx | | keyName

* 获取指定元素src属性值中“日期类型”的数据，并以随机键名存入缓存中
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | getElementText| xx | xx | | ['src', 'date']

* 获取指定元素的value属性值，并以“keyName”为键名存入缓存中
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | getElementText| xx | xx | | ['value', 'keyName']

* 获取指定元素value属性值中“汉字文本类型”的数据，并以“keyName”为键名存入缓存中
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | getElementText| xx | xx | | ['value', 'keyName', 'text']

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  id / xpath / css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.getElementText('定位方式','定位表达式'[,'索引值'][,'操作依据'])  # 元素数据值缓存

'''
def getElementText(self, targeting, element, index=None, content=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ index: 索引
@ content: 操作依据

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.getElementText('id', 'kw')  # 元素text文本值获取，缓存key键默认

# 实例二
keyword.getElementText('ids', 'kw', index=0, content='value')  # 元素value属性值获取，缓存key键默认

# 实例三
keyword.getElementText('id', 'kw', content='key123')  # 元素text文本值获取，缓存key键为“key123”

# 实例四
keyword.getElementText('ids', 'kw', 0, ['key123','value'])  # 元素value属性值获取，缓存key键为“key123”

# 实例五
keyword.getElementText('ids', 'kw', 0, ['value', 'int'])  # 元素value属性值中的阿拉伯数字获取，缓存key键默认

# 实例六
keyword.getElementText('ids', 'kw', 0, ['value', 'key345', 'date'])  # 元素value属性值中的日期数据获取，缓存key键为“key345”
```
***
### takeElementText() 关键字
> 取出缓存中的元素数据值，并以该值为依据对指定元素的指定值做断言判断

**描述**<br/>
取出缓存中通过“`getElementText 关键字`”缓存的数据值，并以该值为依据对页面中指定元素的指定值做遍历断言，若条件成立则返回`False`不成立则返回`True`
> 框架的默认断言逻辑为 `A == B 时抛出错误`，取反后的断言逻辑为 `A != B时抛出错误`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
复数定位方式, 定位表达式 | 关键字操作依据
> *[, xxx]  代表可省略* 

**参数说明**<br/>
> 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)，可接收三种参数类型
* 当参数值为`空`：代表“指定元素的text文本值”要与“缓存数据中最后一个key键对应的value值”进行比对判断；
* 当参数值为`string 类型`：关键字可以接收三种操作值中的任意一个 `key键`、`属性名`、`逻辑取反`进行处理；
* 当参数值为`list 类型`：可以同时接收三种操作值 `["key键", "属性名", "逻辑取反"]` 进行处理。

> 逻辑取反，布尔类型(`True`代表取反，关键字默认为 `False`)：取反状态 A!=B抛出错误，关键字默认状态 A==B抛出错误。

**注意事项**
* 关键字中仅允许采用复数定位方式，不允许使用索引值，不对单元素定位进行操作。
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为`list 类型`时，其中各项可随意书写不需要按照特定顺序书写，关键字会自动进行判别筛选。例如 `['属性名','key键',逻辑取反]` 或者 `[逻辑取反,'key','属性名']`。
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为`list 类型`时，子项个数需要在 2 - 3 个范围内否则无实际意义。
* 不管关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为何种参数形式，三种操作值(key键，属性名，逻辑取反)不需要特殊标明，关键字会自动识别它们。
* 不管关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为何种参数形式，只要是出现“未指定key键”的情况，则关键字默认将缓存数据中最后一个key键对应的值取出作为断言判断依据。
* 不管关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)为何种参数形式，只要是出现“未指定属性名”的情况，则关键字默认获取元素的“text文本值”。

**关键字使用规则解释**
* 如果出现 `key键与属性名同名` 的情况，则位置权重最高的值判定为key键顺位为属性名。
* 如果出现 `重复key键` 的情况，则位置权重最高的判定为key键顺位为属性名。
* 如果出现 `重复属性` 的情况，则将给出的所有属性名做字符串拼接后判定为最终的属性名。

**用例步骤使用示例**
* 取出“最近一次”缓存的数据值，对界面指定元素的txt文本值做遍历检查，验证是否均不等于缓存数据
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | takeElementText| xx | xx | |

* 取出“最近一次”缓存的数据值，对界面指定元素的txt文本值做遍历检查，验证是否均等于缓存数据
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | takeElementText| xx | xx | | True

* 取出“最近一次”缓存的数据值，对界面指定元素的value属性值做遍历检查，验证是否均不等于缓存数据
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | takeElementText| xx | xx | | value

* 取出“最近一次”缓存的数据值，对界面指定元素的value属性值做遍历检查，验证是否均等于缓存数据
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | takeElementText| xx | xx | | ['value', True]

* 取出缓存中key键名为“keyName”的数据值，对界面指定元素的txt文本值做遍历检查，验证是否均不等于缓存数据
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | takeElementText| xx | xx | | keyName

* 取出缓存中key键名为“keyName”的数据值，对界面指定元素的value属性值值做遍历检查，验证是否均不等于缓存数据
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | takeElementText| xx | xx | | ['keyName', 'value']

* 取出缓存中key键名为“keyName”的数据值，对界面指定元素的value属性值值做遍历检查，验证是否均等于缓存数据
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | takeElementText| xx | xx | | ['keyName', 'value', True]

**关键字元素节点数据 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  ids / xpaths / css_selectors …   # 框架中支持即可，仅允许使用复数定位方式
    - 对应方式的定位表达式
```

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.takeElementText('复数定位方式','定位表达式'[,'操作依据'])  # 元素数据值缓存

'''
def takeElementText(self, targeting, element, content=None) 注意关键字在定义时的参数顺序
@ targeting: 定位方式
@ element: 定位表达式
@ content: 操作依据

注意：根据python的函数传参规则，若要按照顺序传参的方式调用关键字，
则需要严格按照关键字在定义时的参数位置顺序进行参数值书写，若不按照顺序传参的方式调用关键字，
则需要在调用时标明参数值的形参名称如 ‘targeting=xx’ ‘element=xx’ ‘index=xx’等等。
'''
# 实例一
keyword.takeElementText('ids', 'kw')  # 取出“最近一次”缓存的元素数据值，对界面中指定元素的txt文本值做遍历检查，验证是否均不等于缓存数据

# 实例二
keyword.takeElementText('ids', 'kw', content='value')  # 取出“最近一次”缓存的元素数据值，对界面中指定元素的value属性值做遍历检查，验证是否均不等于缓存数据

# 实例三
keyword.takeElementText('ids', 'kw', content='key123')  # 取出缓存数据中“key123”键对应的元素数据值，对界面中指定元素的txt文本值做遍历检查，验证是否均不等于缓存数据

# 实例四
keyword.takeElementText('ids', 'kw', content=['key123','value'])  # 取出缓存数据中“key123”键对应的元素数据值，对界面中指定元素的value属性值做遍历检查，验证是否均不等于缓存数据

# 实例五
keyword.takeElementText('ids', 'kw', content=['value', True])  # 取出“最近一次”缓存的元素数据值，对界面中指定元素的text文本值做遍历检查，验证是否均与缓存数据一致

# 实例六
keyword.takeElementText('ids', 'kw', content=['value', 'key345', True])  # 取出缓存数据中“key345”键对应的元素数据值，对界面中指定元素的value属性值做遍历检查，验证是否均与缓存数据一致
```
***
##  特殊功能
### Interface_Invoke() 关键字
> 根据指定的接口数据文件路径，找到并执行文件中的接口数据

**描述**<br/>
根据传入的接口数据文件路径，找到并将文件中的数据逐条读出，根据数据中的接口信息在逐条进行后台接口请求
> 接口数据文件：用来存放接口请求信息的数据文件，固定为：`InterfaceData.yaml`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无参 | 接口数据文件路径

**注意事项**
* 关键字主要用于弥补框架在用例文件中不可调用接口执行的不足，你可以通过调用该关键字执行任意一组合法的接口数据。
* 在脚本中调用该关键字时需注意关键字本身没有返回值，若接口执行失败(请求异常、响应结果断言未通过)则会触发异常。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx | Interface_Invoke | | | | C:\xxx\xxx\xxx

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
***
### ternary_Judgement() 关键字
> 三元判断，控制用例步骤执行

**描述**<br/>
支持对指定元素的属性、文本值以及单独的条件表达式进行判断，若条件成立则不再执行所控制的用例步骤行，若条件不成立则所控制的用例步骤行正常执行

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
 [定位方式, 定位表达式][,索引位置] |  [判断条件, 控制行数]
 > *[, xxx]  代表可省略* 

**参数说明**
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)应为`list类型`
	* 列表第一项为判断条件，可接受两种类型参数 、
		* `list 类型`：在对元素的属性、文本值做判断时传入该类型 `[[属性名,]关系运算符,预期值]`，属性名可省略
		* `string 类型`：表示单独条件表达式；例如 A==B、C>=D
	* 第二项为控制行数 `int`类型；代表在关键字条件成立的情况下所控制的用例步骤行数

> 关键字传值格式：`['条件表达式', '控制行数']` 或者 `[[属性名,关系运算符,预期值], 控制行数]`

**注意事项**
* 不论判断条件采用何种形式书写，条件成立则关键字所控制的用例步骤行将不再执行，条件不成立则关键字所控制的用例步骤行自动释放执行。
* 不论判断条件采用何种形式书写，可选用的关系运算符为 `==`、`>=`、`<=`、`!=`、`>`、`<`、`not in`、`in` 其它的关系运算符无法识别(`not in`，运算符中间需要用空格分开)。
* 关键字所控制的单元行从当前行向下覆盖，不包括当前行，例如 “当前行为3，若控制行数为2，则控制 4、5两行”。
* 在判断条件采用 “`string`单独条件表达式” 形式时，支持在表达式中使用逻辑运算符 and、or、not。
* 在判断条件采用 “`string`单独条件表达式” 形式时，与元素定位相关的数据无论书写与否均不会生效。
* 在判断条件采用 “`list`元素判断” 形式时，元素定位参数为必填项。
* 在判断条件采用 “`list`元素判断” 形式时，元素属性值若省略则代表对元素的text文本值做判断。
* 在判断条件采用“`list`元素判断”形式时，若所指定的 “属性名” 在元素中不存在将其直接拼接在“预期结果”中。
* 在判断条件采用“`list`元素判断”形式时，若所指定的 “关系运算符” 不合法将其直接拼接在“预期结果”中。
* 在判断条件采用“`list`元素判断”形式时，关键字的条件判断依据为 “实际结果”；例如 “实际结果 >= 预期结果”、“实际结果 包含 预期结果”。

**用例步骤使用示例**
* 验证表达式“1 >= 0”是否成立，若成立则当前行下的一行将不再执行
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | ternary_Judgement| xx | xx | | ["1 >= 0", 1]

* 验证表达式“1 or 0”是否成立，若成立则当前行下的四行将不再执行
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | ternary_Judgement| xx | xx | | ["1 or 0", 4]

* 对指定元素的value属性值做判断，验证其是否大于等于25，若成立则当前行下的两行将不再执行
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | ternary_Judgement| xx | xx | | [['value','>=','25'], 2]

* 对指定元素的文本值做判断，验证其是否等于“测试文本”，若成立则当前行下的三行将不再执行
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | ternary_Judgement| xx | xx | | [['==','测试文本'], 3]

* 对指定元素的文本值做判断，验证其是否包含“测试”二字，若成立则当前行下的三行将不再执行
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | ternary_Judgement| xx | xx | | [['in','测试'], 3]

* 对指定元素的文本值做判断，验证其是否不包含“文本”二字，若成立则当前行下的三行将不再执行
	用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
	-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
	xxxx | n | xxx | ternary_Judgement| xx | xx | | [['not in','文本'], 3] 

**元素节点数据区分 elementData.yaml文件书写示例**
```yaml
# 区分元素节点数据 - “元素定位数据”elementData.yaml文件书写示例
key1:
  key2:
    -  id / xpath / css_selectors …   # 框架中支持即可
    - 对应方式的定位表达式
    - [ 0-n ]  # index索引，在复数定位时可使用此项(定位方式末尾带有‘s’时为复数定位)；可省略
```

**脚本使用示例**
> <font color="red">关键字不支持在脚本中使用</font>
***
### winUpload() 关键字
> 文件批量上传

**描述**<br/>
处理页面非`<input type="file">`标签(窗口批量上传)的文件上传，支持同一目录/不同目录下的多文件上传

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
无 | ['文件路径1'[,'文件路径2'][,'文件路径n'…]]
> *[, xxx]  代表可省略* 

**参数说明**<br/>
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)应为`list类型`代表要上传的文件路径列表。
* 传值示例：`['c:\xxx\xxx\xxx\xxx.txt','c:\xxx\xxx\xxx\xxx.jpeg']`

**注意事项**
* 关键字操作参数(在用例步骤中为 “操作值” 单元格中书写的值)列表中的文件路径应采用绝对路径格式。
* 目前关键字只针对windows操作系统。

**用例步骤使用示例**
用例name     | 序号     | 操作步骤    | 关键字 | 定位参数1 | 定位参数2 | ... | 操作值
-------- | -----  | -----  | -----  | -----  | ----- | ----- | -----
xxxx | n | xxx | winUpload| | | | ['文件路径1','文件路径2']

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.winUpload(['文件路径1','文件路径2'])  # 文件批量上传

'''
def winUpload(self, content) 注意关键字在定义时的参数顺序
@ content: 要上传的文件的绝对路径列表
'''
# 实例一
keyword.winUpload(['c:/xx/xx/xx.xx','c:/xx/xx/xx.xx'])  # 文件批量上传

# 实例二
keyword.winUpload(content=['c:/xx/xx/xx.xx','c:/xx/xx/xx.xx'])  # 文件批量上传
```
***