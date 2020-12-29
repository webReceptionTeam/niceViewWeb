
# 个人存储数据项目

各位宝宝此项目本地是打算第一版为单纯的存储个人的一些数据等 的后台管理系统
 

参与者
Mrxiaotaotao 创建
webxiaodudu 参与
SongTodog  参与

## 用到的技术栈

### 前台
vue3 + vuex + elementui + echarts
### 后台
express、koa2 + mysql mysql添加创建语句需要备份打git上方便其他学习小伙伴进行测试前端项目




开发时间 为 2021、1、1 到 2021、5、31 
六个月时间 后台及前台学习带开发共6个月
12、1到1、1 为架构设计及思想时间

试着用一下
    nginx 
    使用一下环境变量 less sass
    测试一下 工程组件的打包后的组件
    有可能写一下打包配置化 window和mac 都要写
    ts
开发一下组件库 并采用线上文档似的组件库
考虑 个性化 配置上在


有头部及菜单栏 加入 国际化 和 颜色配置话 
备注加上，添加删除console及注释插件 
需要有icons图标库
需要有公共样式 scss
vuex 适用模块的写法
需要添加mock进行调整

需要有 公共类 公共方法 结构分明


登录 退出 

首页 查询表格 删除是跳转到详情修改页面

切换添加的库表

添加页面  添加数据

修改数据 


管理系统
1、涛涛打算自己写一个存储自己账号和纪要等查询系统
2、一个查询前台csdn各个用户的大致信息及整体发布量统计情况
3、可配置前台首页展示附加内容区域、超级管理员有查封前台账号
4、会有一个配置后台系统账号的页面只支持超级管理员
    整体布局
        头部
        左侧菜单
        中间区域
    菜单布局
        根据账号权限展示对应的系统展示
    头部布局
        面包屑
        头像等

用户页面 仿csdn https://www.csdn.net/ 详情请以csdn网站为准
关联性比较大 有些效果是要做出来的
    首页 有一个响应式
        头部栏 
            分类
            搜索
            用户信息
            消息
            收藏
            动态
        导航条
            拖拽效果
            位置定位效果
            回到顶部效果
        内容区域
            分类导航 
            模块分类 热门话题 精选头条 精彩视频 技术团队/社区号 会员精选 Python 等
            侧边栏
            页脚 备案号
    个人设置
        个人资料
        我的收藏
        我的关注
        我的粉丝
        我关注的人
        我的标签
        我的博客 跳转路由
    管理博客
        首页 常用入口 数据 近期发布文章 近期上传资源
        富文本编辑器 可最后写 先用文本框来代替
        左侧导航
            数据观星
                博文数据
                粉丝数据
            内容创作
                发布博客
                上传资源
            内容管理
                资源管理
                评论管理
                模块管理
    博客    
        左侧导航栏
        中间内容区域 上方有一个走马灯效果 及图片放大效果
        右侧 今日推荐及 备案号
    我的博客
        左侧信息栏 本人热门文章 分类专栏 及最新文章
        中间信息列表及ta页签切换
    

            


设计表

login 添加用户及用户信息
userTable  用户表



##### 友情链接
前端ui框架
ElementUI
官网地址:http://element-cn.eleme.io/#/zh-CN
Github: https://github.com/ElementUI/element-starter
element ui框架的按钮组件，这款由饿了么前端开源的UI框架，一经面世，就收获大量程序员的芳心，在github 上更是高达29.8k的star早已说明一切，用于开发PC端的页面还是绰绰有余的，如果说你是用vue开发者，却没用过element UI，那你肯定不是合格的vue开发者。

Mint UI
官网地址：https://weui.io/
Github: https://github.com/weui/weui.git
由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库，自 开源以来，根据社区和团队内部的反馈，修复了一些 bug 并新增了部分组件。

WeUI
官网地址：https://weui.io/
Github: https://github.com/weui/weui.git
WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。

iView UI
官网地址：https://www.iviewui.com
Github: https://github.com/TalkingData/iview-weapp
一套基于 Vue.js 的高质量UI 组件库，主要服务于 PC 界面的中后台产品，过去的两年里，iView 开源项目已经帮助成千上万的开发者快速完成网站开发，大幅度提高了开发效率，成为 Vue.js 生态里重要的一部分。

layui
官网地址:https://www.layui.com
Github: https://github.com/sentsin/layui/
经典模块化前端框架由职业前端倾情打造，面向所有层次的前后端开发者，零门槛开箱即用的前端UI解决方案 ，在年度最受欢迎的框架排名榜上也是前三名的。

Bootstrap
官网：http://getbootstrap.com/
Github：https://github.com/twbs/bootstrap/
Bootstrap 最大的优势就是它非常流行，流行就代表你有问题就有很多人帮你解决问题，就代表装逼它就是利器，还有就是界面比较和谐，容易上手，关注它的童鞋应该发现最新 V4 版也开始支持 FlexBox 布局，这是非常好的升级体验。 劣势是 class 命名不够语义化，并且各种缩写，以至于我离了文档就是个菜，最近开始整混合 APP，选框架的时候首选就是它，但之前搞 PC 一直没注意，后来搞混合右键属性看它的时候，瞬间一阵凉风袭来，Bootstrap 好小，小到我只好选择别的框架。

Frozen UI
官网：http://frozenui.github.io/
Github：https://github.com/frozenui/frozenui
总结：如果拿 Frozen UI 配合一些如 APICloud 用来做混合 APP 感觉就太酷了，或者原生的火鸡们拿去嵌套在应用中做前端开发，这个框架对 android 2.3 +、ios 4.0 + 做了兼容，或者拿来做 Web App 也是极好的选择，劣势的话从 UI 层面就可以看到了，谁让它是出生在QQ会员前端的呢。