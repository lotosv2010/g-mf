# Webpack 5 模块联邦示例项目

这是一个使用 Webpack 5 模块联邦（Module Federation）特性的示例项目，展示了如何在不同应用之间共享组件和模块。

## 项目概述

本项目包含两个独立的应用程序：

- 主机应用（Host）：运行在 3000 端口
- 远程应用（Remote）：运行在 3001 端口

主机应用可以动态加载和使用远程应用提供的组件，展示了模块联邦的核心功能。

## 目录结构

```text
.
├── host/                 # 主机应用
│   ├── public/          # 静态资源
│   │   └── index.html
│   ├── src/            # 源代码
│   │   ├── components/ # 组件
│   │   │   └── Header.js
│   │   ├── App.js     # 主应用组件
│   │   ├── bootstrap.js # 应用引导文件
│   │   └── index.js   # 入口文件
│   ├── package.json   # 依赖配置
│   └── webpack.config.js # Webpack 配置
│
├── remote/              # 远程应用
│   ├── public/         # 静态资源
│   │   └── index.html
│   ├── src/           # 源代码
│   │   ├── components/ # 组件
│   │   │   └── Button.js
│   │   ├── App.js    # 主应用组件
│   │   ├── bootstrap.js # 应用引导文件
│   │   └── index.js  # 入口文件
│   ├── package.json  # 依赖配置
│   └── webpack.config.js # Webpack 配置
│
├── README.md          # 项目说明文档
└── .gitignore        # Git 忽略文件
```

## 功能特性

1. **模块联邦**
   - 远程应用暴露 Button 组件
   - 主机应用动态加载远程组件
   - 共享 React 和 ReactDOM 依赖

2. **主机应用功能**
   - 自定义 Header 组件
   - 集成远程 Button 组件
   - 响应式布局

3. **远程应用功能**
   - 提供可复用的 Button 组件
   - 独立运行能力
   - 模块化设计

## 技术栈

- Webpack 5
- React 18
- Babel
- Module Federation

## 开始使用

1.安装依赖

```bash
# 安装主机应用依赖
cd host
npm install

# 安装远程应用依赖
cd ../remote
npm install
```

2.启动应用

```bash
# 启动远程应用（端口 3001）
cd remote
npm start

# 启动主机应用（端口 3000）
cd ../host
npm start
```

3.访问应用

- 主机应用：<http://localhost:3000>
- 远程应用：<http://localhost:3001>

## 开发说明

1. **添加新组件**
   - 在远程应用中添加新组件后，需要在 webpack.config.js 中配置 exposes
   - 在主机应用中通过 import() 动态加载远程组件

2. **共享依赖**
   - 在 webpack.config.js 中配置 shared 选项
   - 确保版本兼容性

3. **开发模式**
   - 两个应用可以独立开发和测试
   - 支持热更新

## 注意事项

1. 确保两个应用使用相同版本的共享依赖
2. 远程应用需要先启动
3. 开发时注意跨域问题
