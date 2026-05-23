# Mark.cc HR 招聘数据仪表盘

基于 **Next.js 15、React 19、TypeScript 与 Tailwind CSS** 构建的中文 HR 招聘运营仪表盘，用于展示候选人流转、职位管道、招聘漏斗、渠道表现与系统设置等核心招聘管理场景。

[在线预览](https://mark-maker006.github.io/Mark.github.io/) · [功能特性](#功能特性) · [技术栈](#技术栈) · [本地开发](#本地开发) · [部署说明](#部署说明) · [问题排查](#问题排查)

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=222)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwindcss&logoColor=fff)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222?logo=github)

## 项目简介

Mark.cc 是一个面向 HR 与招聘运营场景的前端仪表盘示例项目。项目以静态数据驱动页面展示，覆盖从工作台概览、候选人管理、职位进度、数据分析到系统设置的完整后台体验，适合作为招聘 SaaS 原型、管理后台 UI 模板或前端作品集项目继续扩展。

项目重点放在现代前端工程实践：使用 Next.js App Router 组织页面，使用组件化方式拆分业务模块与通用 UI，使用 Tailwind CSS 构建设计系统，并通过 GitHub Actions 自动构建部署到 GitHub Pages。

## 功能特性

- 招聘工作台：展示核心招聘指标、任务进度、时间安排与团队动态。
- 候选人页面：展示候选人阶段、评分、面试时间、标签与阶段分布。
- 职位页面：展示开放职位、招聘管道、岗位优先级、负责人和招聘进度。
- 数据分析页面：展示招聘漏斗、渠道表现、趋势摘要和关键指标。
- 系统设置页面：展示组织设置、通知偏好、权限角色与集成状态。
- 响应式布局：适配桌面端与移动端视图。
- 主题支持：支持浅色与深色模式。
- 交互动效：复用卡片 Tilt hover 动效，增强仪表盘操作反馈。
- 静态部署：支持 Next.js static export，并通过 GitHub Pages 发布。

## 技术栈

| 分类        | 技术                                      |
| ----------- | ----------------------------------------- |
| 应用框架    | Next.js 15 App Router                     |
| UI 框架     | React 19                                  |
| 类型系统    | TypeScript                                |
| 样式方案    | Tailwind CSS 3                            |
| UI 基础组件 | Radix UI / shadcn 风格组件                |
| 图标        | lucide-react                              |
| 主题        | next-themes                               |
| 动效        | Framer Motion、自定义 TiltCard hover 效果 |
| 数据        | 本地 mock/static 数据                     |
| 部署        | GitHub Actions + GitHub Pages             |

## 项目架构

```text
.
├── app/                    # Next.js App Router 页面与路由
│   ├── dashboard/          # 工作台页面
│   ├── candidates/         # 候选人页面
│   ├── jobs/               # 职位页面
│   ├── analytics/          # 数据分析页面
│   └── settings/           # 系统设置页面
├── components/
│   ├── dashboard/          # 仪表盘业务组件与交互动效组件
│   ├── shared/ui/          # 通用 UI 组件
│   └── landing/            # 落地页相关组件
├── data/                   # 仪表盘 mock 数据
├── lib/                    # 工具函数与通用逻辑
├── public/                 # 静态资源
├── scripts/                # 构建辅助脚本
├── next.config.js          # Next.js、静态导出、basePath 与安全头配置
└── .github/workflows/      # GitHub Pages 自动部署流程
```

### 架构设计思路

- **页面与组件分离**：`app/` 负责路由页面组织，`components/` 负责可复用 UI 和业务模块。
- **数据与视图分离**：演示数据集中放在 `data/`，便于后续替换为真实 API。
- **设计系统统一**：通过 Tailwind token、共享 UI 组件和一致的卡片样式保持页面风格统一。
- **最小客户端边界**：页面默认保持 Server Component，只在需要交互的组件中使用 Client Component。
- **静态站点友好**：通过 `NEXT_EXPORT`、`NEXT_PUBLIC_BASE_PATH`、`assetPrefix` 和图片非优化配置适配 GitHub Pages。

## 本地开发

### 环境要求

- Node.js `>= 22.0.0`
- npm

### 安装依赖

```bash
npm install
```

### 启动开发环境

```bash
npm run dev
```

项目默认开发端口由脚本指定为 `30001`：

```text
http://localhost:30001
```

如果当前环境设置了 `NEXT_PUBLIC_BASE_PATH=/Mark.github.io`，本地访问路径可能需要带上 basePath：

```text
http://localhost:30001/Mark.github.io
```

### 生产构建

```bash
npm run build
```

## 部署说明

项目已配置 GitHub Pages 自动部署流程：

1. 推送代码到 `main` 分支。
2. GitHub Actions 使用 Node.js 22 安装依赖。
3. 构建时注入：

```bash
NEXT_EXPORT=true
NEXT_PUBLIC_BASE_PATH=/Mark.github.io
```

4. 执行 `npm run build` 生成静态产物。
5. 将 `out/` 上传并发布到 GitHub Pages。

线上访问入口：

[https://mark-maker006.github.io/Mark.github.io/](https://mark-maker006.github.io/Mark.github.io/)

## 问题排查

### 本地访问出现 404

如果 `.env` 或部署配置中启用了 `NEXT_PUBLIC_BASE_PATH=/Mark.github.io`，开发环境访问页面时也需要带上对应路径，例如：

```text
http://localhost:30001/Mark.github.io/candidates
```

### GitHub Pages 静态资源路径错误

检查以下配置是否一致：

- `NEXT_PUBLIC_BASE_PATH=/Mark.github.io`
- `next.config.js` 中的 `basePath`
- `next.config.js` 中的 `assetPrefix`
- GitHub Actions 中的构建环境变量

### 构建失败

建议依次检查：

```bash
npm install
npm run build
```

如果是类型或 lint 问题，优先根据终端输出定位到具体文件修复。

### 页面内容看起来像“已连接系统”

当前项目主要使用本地 mock/static 数据展示 HR SaaS 场景，页面中的集成状态、系统连接和候选人数据属于演示内容，不代表真实后端服务已经接入。

## 开发手法

- 使用 TypeScript 保证组件 props 与数据结构更清晰。
- 使用 Tailwind CSS 原子化样式快速构建响应式后台界面。
- 使用 Radix UI / shadcn 风格组件提升交互控件一致性。
- 使用可复用卡片、进度条、Tabs、Switch、Badge 等组件减少重复实现。
- 使用 GitHub Actions 自动化构建和部署，保证主分支更新后可自动发布。
- 部署前通过 diagnostics、构建和 git diff 检查降低线上问题风险。

## 后续规划

- 接入真实 HR 或 ATS API。
- 增加候选人搜索、筛选和排序能力。
- 增加更多招聘分析图表和趋势维度。
- 补充项目截图或演示 GIF。
- 增强移动端细节体验。
- 增加端到端测试与可访问性检查。

## License

MIT
