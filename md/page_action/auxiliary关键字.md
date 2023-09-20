### element_index() 关键字
> 索引位置标识转换

**描述**<br/>
返回指定的“位置标识”在实际元素列表中的位置索引(0 - n)；返回值类型为`int`
> 位置标识：`last`对应元素列表最后一项，`center`对应元素列表索引位置折中项

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
复数定位方式, 定位表达式 | 位置标识

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.element_index('复数定位方式', '定位表达式', '位置标识')  # 位置标识转换

# 实例一
index = keyword.element_index('ids', 'kw', 'last')  # 获取页面中id值为kw的所有元素中的最后一项的索引值
```

**注意事项**
* 在使用关键字时所传入的元素定位信息应为“复数定位”(定位方式末尾带有‘s’时为复数定位)且不允许使用索引值，若传入“单元素定位”关键字将会报错。
* 关键字的返回结果为int类型的阿拉伯数字。
* 关键字所有参数均为必填项。
***
### locator() 关键字
> 元素定位 - 单元素

**描述**<br/>
根据传入的定位方式+定位表达式，找到并返回该元素；返回值类型为`elementObject`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
单元素定位方式, 定位表达式 | 无参

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.locator('单元素定位方式', '定位表达式')  # 元素定位

# 实例一
element = keyword.locator('id', 'kw')  # 定位id值为kw的元素
```

**注意事项**
* 关键字仅支持对单元素定位，无法识别复数定位方式。
* 关键字的返回结果为elementObject，返回值可直接操作。
* 关键字所有参数均为必填项。
***
### locators() 关键字
> 元素定位 - 复数元素

**描述**<br/>
根据传入的定位方式+定位表达式，找到并返回该元素；返回值类型为`list`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
复数定位方式, 定位表达式[, 索引位置] | 无参

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.locators('复数定位方式', '定位表达式'[,'索引位置'])  # 元素定位

# 实例一
elements = keyword.locators('ids', 'kw')  # 定位id值为kw的所有元素

# 实例二
element = keyword.locators('ids', 'kw', 0)  # 定位id值为kw的所有元素中的第一项
```

**注意事项**
* 关键字仅支持对复数元素定位，无法识别单元素定位方式。
* 关键字的返回结果为list列表，列表子项为elementObject，返回值列表子项可直接操作。
* `index 索引形参`不支持使用“索引位置标识”。
* 除`index 索引形参`外，关键字其它参数均为必填项。
***
### offLocator() 关键字
> 元素定位 - 后代元素

**描述**<br/>
根据传入的定位数据(支持处理“复数定位”和“单元素定位”)，找到并返回该元素；返回值类型为`elementObject`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式, 父级元素对象[, 索引值] | 无参
> *[, xxx]  代表可省略* 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.offLocator('父级元素对象', '定位方式', '定位表达式'[,'索引值'])  # 元素定位

# 实例一
elemetnObject = keyword.locator('tag_name', 'body')
element = keyword.offLocator(elemetnObject, 'id', 'kw')  # 定位body标签下的id值为kw的元素

# 实例二
elemetnObject = keyword.locator('tag_name', 'body')
element = keyword.offLocator(elemetnObject, 'ids', 'kw', index=0)  # 定位body标签下的所有id值为kw的元素中的第一项
```

**注意事项**
* 关键字对定位方式不做限制，“复数定位”、“单元素定位”均支持。
* 若使用关键字进行“后代单元素定位”，`index 索引形参`不参与处理是否书写均可。
* 若使用关键字进行“后代复数元素定位”，`index 索引形参`为必填项，且不支持使用“索引位置标识”。
* 除`index 索引形参`外，关键字其它参数均为必填项。
***
### location_ScreenOperation() 关键字
> 元素筛选定位

**描述**<br/>
根据传入的定位数据(支持处理“复数定位”和“单元素定位”)，找到并返回该元素；返回值类型为`elementObject`

**参数**<br/>
元素定位参数 | 操作参数     
-------- | -----  
定位方式, 定位表达式,[, 索引值][,父级元素对象] | 无参
> *[, xxx]  代表可省略* 

**脚本使用示例**
```python
# 导入框架
import kdtest
keyword = kdtest.GSTORE['keyword']  # 取出关键字对象
keyword.location_ScreenOperation('定位方式', '定位表达式'[,'索引值'][,'父级元素对象'])  # 元素筛选定位

# 实例一
element = keyword.location_ScreenOperation('id', 'kw')  # 定位id值为kw的元素

# 实例二
element = keyword.location_ScreenOperation('ids', 'kw')  # 定位id值为kw的所有元素中的第一项

# 实例三
element = keyword.location_ScreenOperation('ids', 'kw', 1)  # 定位id值为kw的所有元素中的第二项

# 实例四
elemetnObject = keyword.locator('tag_name', 'body')
elements = keyword.location_ScreenOperation('ids', 'kw', ParentObject=elemetnObject, index=0)  # 定位body标签下的所有id值为kw的元素中的第一项
```

**注意事项**
* 关键字对定位方式不做限制，“复数定位”、“单元素定位”均支持。
* 关键字支持对“后代元素定位”。
* 若使用关键字进行“单元素定位”或者“后代单元素定位”，`index 索引形参`不参与处理是否书写均可。
* 若使用关键字进行“后代复数元素定位”，`index 索引形参`为必填项，且不支持使用“索引位置标识”。
* 若使用关键字进行“复数元素定位”，`index 索引形参`支持使用“索引位置标识”；若`index 索引形参`为空或者不合法，关键字默认取定位列表中索引位置为0的元素。