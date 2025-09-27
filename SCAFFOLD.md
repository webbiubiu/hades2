# Gaming News Website Scaffold

这是一个专为游戏资讯网站设计的 Next.js + Tailwind CSS 脚手架，可以快速复制并应用到不同的游戏项目。

## 🚀 快速开始

### 1. 复制项目
```bash
cp -r hades4 your-new-game-site
cd your-new-game-site
```

### 2. 安装依赖
```bash
npm install
```

### 3. 修改游戏配置
编辑 `src/config/gameConfig.ts` 文件，更改为你的游戏信息：

```typescript
export const gameConfig = {
  game: {
    name: "你的游戏名称",
    subtitle: "游戏副标题和开发商",
    developer: "开发商名称",
    // ... 其他配置
  },
  theme: {
    primary: "#your-color", // 更改主题色
    // ... 其他颜色
  },
  // ... 更多配置
}
```

### 4. 替换图片资源
将 `public/images/` 文件夹中的图片替换为你的游戏素材：
- `hero.png` - 英雄区域图片
- `background.jpg` - 背景图片
- `cover.png` - 封面图片
- 博客和特色图片

### 5. 启动开发服务器
```bash
npm run dev
```

## 📁 项目结构

```
src/
├── config/
│   └── gameConfig.ts          # 🔥 主配置文件
├── components/
│   ├── Navbar.tsx             # 导航栏组件
│   ├── Footer.tsx             # 页脚组件
│   ├── BackToTop.tsx          # 返回顶部按钮
│   ├── GameInfoCard.tsx       # 🆕 游戏信息卡片组件
│   ├── BlogCard.tsx           # 🆕 博客文章卡片组件
│   ├── VideoCard.tsx          # 🆕 视频卡片组件
│   └── FeatureCard.tsx        # 🆕 特色功能卡片组件
├── app/
│   ├── globals.css            # 全局样式（游戏主题）
│   ├── layout.tsx             # 页面布局
│   ├── page.tsx               # 首页
│   └── videos/
│       └── page.tsx           # 视频页面
public/
└── images/                    # 🔥 需要替换的图片资源
```

## 🎨 主题系统

### 颜色配置
在 `gameConfig.ts` 中修改主题色：
```typescript
theme: {
  primary: "#ff6b35",          // 主色调
  primaryLight: "#ff8f5d",     // 浅色变体
  primaryDark: "#c73a13",      // 深色变体
  background: "#0a0a0a",       // 背景色
  surface: "#1a1a1a",         // 卡片背景
}
```

### CSS 类命名规范
- `gaming-*` - 游戏主题相关的组件类
- `gaming-navbar` - 导航栏
- `gaming-hero` - 英雄区域
- `gaming-card` - 卡片组件
- `gaming-btn` - 按钮组件

## 🔧 自定义指南

### 1. 更改游戏信息
只需修改 `src/config/gameConfig.ts`：
```typescript
game: {
  name: "新游戏名称",
  subtitle: "新的副标题",
  developer: "新开发商",
  price: "$39.99 USD",
  // ...
}
```

### 2. 更新链接
```typescript
links: {
  steam: "你的Steam链接",
  epic: "你的Epic链接",
  official: "官方网站链接"
}
```

### 3. 修改系统要求
```typescript
systemRequirements: {
  minimum: {
    os: "Windows 11",
    processor: "新的处理器要求",
    // ...
  }
}
```

### 4. 自定义特色功能
```typescript
features: [
  {
    icon: "🎮",
    title: "新特色",
    description: "描述新特色功能"
  }
]
```

## 📱 响应式设计

脚手架已内置完整的响应式设计：
- 手机端：单列布局，汉堡菜单
- 平板端：2列布局
- 桌面端：多列布局

## 🛠️ 组件库

### 核心组件
脚手架提供了完整的可复用组件系统，所有组件都使用 `gameConfig.ts` 配置：

#### 游戏信息卡片
```tsx
import GameInfoCard from '@/components/GameInfoCard'

<GameInfoCard title="Release Date" content={gameConfig.game.releaseDate} />
<GameInfoCard title="Developer" content={gameConfig.game.developer} />
```

#### 博客文章卡片
```tsx
import BlogCard from '@/components/BlogCard'

<BlogCard
  title={post.title}
  excerpt={post.excerpt}
  image={post.image}
  date={post.date}
  slug={post.slug}
/>
```

#### 视频卡片
```tsx
import VideoCard from '@/components/VideoCard'

<VideoCard
  title={video.title}
  description={video.description}
  embedId={video.embedId}
/>
```

#### 特色功能卡片
```tsx
import FeatureCard from '@/components/FeatureCard'

<FeatureCard
  icon={feature.icon}
  title={feature.title}
  description={feature.description}
/>
```

### 按钮组件
```jsx
<button className="gaming-btn gaming-btn-primary">主要按钮</button>
<button className="gaming-btn gaming-btn-secondary">次要按钮</button>
```

### 卡片组件
```jsx
<div className="gaming-card">
  <h3 className="gaming-card-title">标题</h3>
  <p className="gaming-card-content">内容</p>
</div>
```

### 网格布局
```jsx
<div className="gaming-grid gaming-grid-3">
  <!-- 3列网格 -->
</div>
<div className="gaming-grid gaming-grid-auto">
  <!-- 自适应网格 -->
</div>
```

## 📊 数据驱动架构

### 配置优先设计
所有游戏内容和主题都通过 `gameConfig.ts` 集中管理：

#### 游戏信息显示
```tsx
// 自动从配置生成游戏信息卡片
{gameConfig.game.releaseDate} // "Early Access 2024"
{gameConfig.game.developer}   // "Supergiant Games"
{gameConfig.game.price}       // "$29.99 USD"
```

#### 内容数据循环
```tsx
// 博客文章自动循环
{gameConfig.sampleContent.blogPosts.map((post, index) => (
  <BlogCard key={index} {...post} />
))}

// 视频内容自动循环
{gameConfig.sampleContent.videos.map((video, index) => (
  <VideoCard key={index} {...video} />
))}

// 特色功能自动循环
{gameConfig.features.map((feature, index) => (
  <FeatureCard key={index} {...feature} />
))}
```

#### 链接和资源管理
```tsx
// 外部链接统一管理
<Link href={gameConfig.links.steam}>Steam Store</Link>
<Link href={gameConfig.links.epic}>Epic Games</Link>

// 图片资源路径统一
<Image src={gameConfig.images.hero} alt="Hero Image" />
```

## 🚀 部署

### Vercel (推荐)
```bash
npm run build
# 连接 GitHub 仓库到 Vercel
```

### Netlify
```bash
npm run build
# 上传 .next 文件夹到 Netlify
```

### 静态导出
```bash
npm run build
npm run export
# 使用生成的 out 文件夹
```

## 📝 SEO 优化

已内置 SEO 优化功能：
1. **meta 标签** - 自动从配置文件生成
2. **Open Graph** - 社交媒体分享优化
3. **结构化数据** - 游戏信息结构化
4. **sitemap** - 自动生成站点地图

## 🔄 版本控制建议

创建新游戏网站时：
1. Fork 或复制此仓库
2. 创建新分支：`git checkout -b new-game-site`
3. 修改配置文件
4. 提交更改：`git commit -m "Configure for [游戏名称]"`

## 📞 支持

如有问题或建议，请：
1. 查看配置文件中的注释
2. 检查 Tailwind CSS 文档
3. 参考 Next.js 官方文档

---

## 🎯 快速上线清单

### ✅ 核心配置（必需）
- [ ] 修改 `gameConfig.ts` 中的所有游戏信息
  - [ ] 游戏基本信息 (name, subtitle, developer)
  - [ ] 网站信息 (title, description, domain)
  - [ ] 外部链接 (steam, epic, official)
  - [ ] 系统要求 (minimum, recommended)
  - [ ] 游戏特色功能
- [ ] 替换 `public/images/` 中的所有图片资源
- [ ] 更新 `package.json` 中的项目名称

### ✅ 内容配置（可选）
- [ ] 更新 `sampleContent.blogPosts` 博客文章示例
- [ ] 更新 `sampleContent.videos` 视频内容示例
- [ ] 自定义主题颜色 (`theme` 配置)
- [ ] 调整图片路径 (`images` 配置)

### ✅ 部署配置
- [ ] 测试所有页面功能
- [ ] 配置域名和部署
- [ ] 验证 SEO 设置

**🎉 恭喜！你的游戏资讯网站脚手架已经准备就绪！**

---

## 💡 快速切换游戏主题示例

想要从 Hades II 切换到其他游戏？只需修改 `gameConfig.ts`：

```typescript
export const gameConfig = {
  game: {
    name: "Elden Ring",
    subtitle: "Rise, Tarnished - FromSoftware's Epic Fantasy RPG",
    developer: "FromSoftware",
    // ... 其他配置
  },
  theme: {
    primary: "#d4af37", // 金色主题
    // ... 其他颜色
  },
  // ... 更多配置
}
```

所有页面内容、链接、颜色都会自动更新！