# 72 DANCE PROFILE

一个使用原生 HTML、CSS、JavaScript 搭建的静态个人品牌网站，主题人物为 72 老师 / 邹倩。

## 文件结构

```text
.
├── index.html          # 网站页面结构与全部内容模块
├── style.css           # 全站视觉样式、响应式布局、卡片、动效与移动端适配
├── script.js           # 移动端菜单、滚动出现动画、导航高亮、返回顶部、视频卡片跳转
├── assets/
│   └── images/         # 放置人物照片、视频封面、图集、LOGO、集训海报
└── README.md           # 项目说明与部署指南
```

## 图片放置位置

所有图片都放在 `assets/images/` 文件夹中。当前页面已经预留以下路径：

- `/assets/images/hero-72.jpg`：首屏人物主视觉图
- `/assets/images/video-1.jpg`、`/assets/images/video-2.jpg`、`/assets/images/video-3.jpg`：教学视频封面
- `/assets/images/gallery-1.jpg` 到 `/assets/images/gallery-6.jpg`：照片展示区图片
- `/assets/images/logo-studio.png`：工作室 LOGO
- `/assets/images/logo-team-1.png`、`/assets/images/logo-team-2.png`：团队 LOGO
- `/assets/images/training-camp.jpg`：8月集训海报

## 如何替换照片、LOGO、视频封面

1. 准备好对应图片文件，建议使用 `.jpg` 或 `.png`。
2. 将图片放入 `assets/images/`。
3. 使用与页面中一致的文件名覆盖原文件，例如把首屏照片命名为 `hero-72.jpg`。
4. 如果想使用不同文件名，请在 `index.html` 中搜索对应路径并修改，例如：

```html
<img src="/assets/images/hero-72.jpg" alt="72老师邹倩个人主视觉照片" />
```

将 `hero-72.jpg` 改成你的新文件名即可。

## 如何替换抖音视频链接

在 `index.html` 中搜索 `https://v.douyin.com/`，替换每张视频卡片的：

- `data-url`
- `<a href="...">`

“查看更多抖音作品”目前使用占位链接 `https://www.douyin.com/`，后续可以替换为你的抖音主页链接。

## 本地预览网站

方式一：直接打开

1. 双击 `index.html` 用浏览器打开。
2. 如果图片使用 `/assets/images/...` 绝对路径时显示异常，建议使用方式二。

方式二：使用本地静态服务器

```bash
python3 -m http.server 8000
```

然后在浏览器访问：

```text
http://localhost:8000
```

## 上传到 GitHub Pages

1. 在 GitHub 新建一个仓库。
2. 将本项目文件上传到仓库根目录。
3. 进入仓库的 **Settings**。
4. 找到 **Pages**。
5. 在 **Build and deployment** 中选择：
   - Source：`Deploy from a branch`
   - Branch：`main`
   - Folder：`/root`
6. 保存后等待 GitHub Pages 构建完成。
7. GitHub 会生成一个可访问的网址。

## 技术特点

- 原生 HTML / CSS / JavaScript，无复杂框架依赖。
- 支持手机端和电脑端浏览。
- 黑白灰高级街舞视觉，少量荧光绿色点缀。
- 包含平滑滚动、移动端导航、滚动出现动画、导航高亮、返回顶部按钮。
- 所有外链默认新窗口打开。
- 页面中文使用 UTF-8 编码，避免乱码。
