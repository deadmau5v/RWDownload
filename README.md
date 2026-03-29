# RWDownload

铁锈战争下载站，基于 Next.js App Router 构建，当前以静态导出方式部署到 Cloudflare Pages。

线上地址：

- `https://pan.d5v.cc`
- `https://rw-download.denox.cc`
- `https://rw-download.pages.dev`

## 功能

- 展示多个铁锈战争版本的下载信息
- 支持按关键词、平台、版本类型筛选
- 支持版本详情页静态生成
- 移动端提供折叠筛选和模组站快捷入口

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Radix UI

## 本地开发

安装依赖：

```bash
bun install
```

启动开发环境：

```bash
bun run dev
```

生产构建：

```bash
bun run build
```

## Cloudflare Pages

项目采用静态导出部署：

- 构建命令：`bun run build`
- 输出目录：`out`
- Pages 项目名：`rw-download`

相关文件：

- [`next.config.mjs`](/Users/d5v/codes/RWDownload/next.config.mjs)
- [`wrangler.jsonc`](/Users/d5v/codes/RWDownload/wrangler.jsonc)

手动发布命令：

```bash
bun run cf:deploy
```

## 自动部署

仓库已连接 Cloudflare Pages Git 集成：

- GitHub 仓库：`deadmau5v/RWDownload`
- 生产分支：`main`

推送到 `main` 后会自动触发 Cloudflare Pages 构建和部署。

## 目录结构

```text
app/                App Router 页面
components/         页面组件与 UI 组件
lib/                数据与工具函数
public/             静态资源
wrangler.jsonc      Cloudflare Pages 配置
```
