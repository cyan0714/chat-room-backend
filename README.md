# Chat Room Backend

基于 [NestJS](https://nestjs.com/) 的高效、可扩展的聊天室后端服务，支持用户管理、好友关系、实时聊天、聊天室、消息记录、收藏、邮件验证码、文件上传等功能。前端项目见：[chat-room-frontend](https://github.com/cyan0714/chat-room-frontend)

---

## 主要功能

- **用户系统**：注册、登录、信息修改、密码重置、邮箱验证码
- **好友关系**：添加/删除好友、好友请求、同意/拒绝、好友列表
- **聊天室**：一对一/群聊聊天室创建、成员管理、加入/退出、聊天室信息
- **实时聊天**：基于 WebSocket 的消息收发，支持文本、图片、文件
- **聊天记录**：消息历史存储与查询
- **消息收藏**：收藏/取消收藏聊天消息，收藏列表
- **邮件服务**：注册、密码修改等场景下的邮箱验证码发送
- **文件上传**：集成 MinIO，支持生成上传链接
- **缓存服务**：基于 Redis，支持验证码、临时数据缓存

---

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 配置环境

请参考 `.env.example` 文件，配置数据库、Redis、MinIO 等相关环境变量。

### 3. 数据库迁移

建议使用 [Prisma](https://www.prisma.io/) 进行数据库迁移和管理。

### 4. 启动服务

```bash
# 开发模式
pnpm run start:dev
```

## 主要模块说明

- `user` 用户管理模块
- `friendship` 好友关系模块
- `chatroom` 聊天室模块
- `chat` 实时聊天（WebSocket）模块
- `chat-history` 聊天记录模块
- `favorite` 消息收藏模块
- `email` 邮件验证码模块
- `minio` 文件上传模块
- `redis` 缓存服务模块
- `prisma` 数据库 ORM 模块

---

## 依赖环境

- Node.js >= 18.x
- pnpm >= 7.x
- MySQL
- Redis
- MinIO

---

## 目录结构简述

```
src/
  ├── user/           # 用户相关
  ├── friendship/     # 好友关系
  ├── chatroom/       # 聊天室
  ├── chat/           # 实时聊天
  ├── chat-history/   # 聊天记录
  ├── favorite/       # 消息收藏
  ├── email/          # 邮件服务
  ├── minio/          # 文件上传
  ├── redis/          # 缓存服务
  └── prisma/         # 数据库 ORM
```

---

## 贡献

欢迎提交 Issue 或 PR 参与贡献。

## 协议

[MIT License](LICENSE)
