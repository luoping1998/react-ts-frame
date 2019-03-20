## READEME
一个手搭的react、typescript、less、tslint、webpack的脚手架。

### 目录介绍
- /srcipts
> 存放webpack配置文件，其中common为公共配置文件，dev为dev环境下的配置文件，prod为prod环境下的配置文件。

使用的是webpack4，entry\output\module\plugin没变化，和3中使用和意义一致。主要添加了mode用于表示当前的生产状态，optimization主要是进行手动的优化配置和重写。具体参照 [webpack官网]("https://webpack.docschina.org")

- /src
> 用于存放主要的项目文档

- /dist
> 用于存放打包后的文件

- tsconfig.json
> 存放于根目录，用于指定用来编译这个项目的跟文件和编译选择。具体参照 [ts官网]("https://www.tslang.cn/docs/handbook/tsconfig-json.html")

- tslint.json
> tslint的配置项

### 踩坑记录
1. 在配置html-webpack-plugin的时候，没有指定template。
>  [具体参照文档]("https://github.com/jantimon/html-webpack-plugin#options")

2. ts中import图片报错：cannot find module 'path.jpg'。
> 在ts中import图片是无法识别非代码资源，所以需要主动声明各个module，新建一个ts声明文件如，images.d.ts。当然.d.ts文件也不能随便放置在项目中，这类文件和ts文件一样需要被typescript编译，所以一样只能放置在tsconfig.json中include属性所配置的文件夹下。

3. clean-webpack-plugin报错：Error: clean-webpack-plugin only accepts an options object.
> 因为版本升级导致的传参不一致，最新版本的参数仅一个对象。更多参考[clean-webpack-plugin 文档]("https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional")

4. 配置多git账号
- 在～/.ssh下生成第二对秘钥(需要指定第二对秘钥的名字这里假设为id_rsa_2)
```
ssh-keygen -t rsa -f ~/.ssh/id_rsa_2 -C "youremail@xxx.com"
```
- 在config文件中添加内容如下
```
#Host github.com // 指定host
    #HostName github.com // 主机名 可用ip或者域名
    #User git // 登陆用户名
    #IdentityFile ~/.ssh/id_rsa_2 // 指定配对秘钥文件名
```
- 把刚生成的公钥加到git的setting中
- 执行 ssh -T git@github.com 测试连接