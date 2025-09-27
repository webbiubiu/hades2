// Gaming Website Theme Configuration
// 修改这个文件来快速更换不同游戏的主题

export const gameConfig = {
  // 站点配置
  site: {
    title: "Hades2 News & Guides",
    description: "Your ultimate source for Hades2 news, guides, and reviews",
    domain: "hades2.org",
    url: "https://hades2.org"
  },

  // 基本信息
  game: {
    name: "Hades II",
    subtitle: "Immortal Rogue-like Action RPG by Supergiant Games",
    developer: "Supergiant Games",
    genre: "Action RPG, Roguelike",
    price: "$29.99 USD",
    releaseDate: "September 25, 2025",
    platforms: "PC, Switch, Switch 2, PlayStation, Xbox",
    introduction: {
      title: "Return to the Underworld",
      content: "Supergiant Games has officially launched Hades2, the highly anticipated rogue-like dungeon crawler and long-awaited sequel to the award-winning Hades. Hades2 v1.0 launches worldwide on September 25, 2025, bringing the full mythic adventure to Nintendo Switch, Switch 2, Steam, and Epic Games Store. Building on the strengths of the original, Hades2 introduces an expanded, dynamic world of Greek mythology, featuring the immortal Princess of the Underworld, Melinoë, as the lead protagonist. Players will tackle the sinister Titan of Time, explore new areas, encounter new characters, and unlock dozens of story events, voice lines, and achievements. The 1.0 release adds the final chapter of the story as well as new end-game activities and challenges after facing the game's multiple final bosses. Key features of this launch include cross-save support between PC and Switch family platforms, allowing seamless progress transfer. Hades2 on Switch 2 supports blazing-fast 120fps performance at 1080p in TV mode, while the original Switch maintains 60fps at 720p. Early Access players receive a free automatic upgrade to version 1.0, and a physical edition for Switch 2 is set for release later this year, featuring a character compendium, soundtrack download, and unique bonus content. Hades2 is already recognized as one of the highest-rated games of 2025, praised for its evolved rogue-like progression, engaging combat loop, rich narrative, and best-in-class writing and voice performances. Supergiant Games extends thanks to its global community for their feedback and support throughout development.",
      highlights: [
        "Play as Melinoë, the immortal Princess of the Underworld",
        "Master witchcraft and powerful magical abilities",
        "Battle the Titan Chronos in an epic mythological adventure",
        "Explore expanded regions beyond the original Hades",
        "Experience Supergiant Games' signature storytelling and art style"
      ]
    }
  },

  // 主题颜色 (对应 Tailwind 配置中的 primary 颜色)
  theme: {
    primary: "#ff6b35", // 主色调 - 橙红色
    primaryLight: "#ff8f5d",
    primaryDark: "#c73a13",
    background: "#0a0a0a", // 深黑背景
    surface: "#1a1a1a", // 卡片背景
    text: "#ffffff",
    textSecondary: "#cccccc"
  },

  // 图片资源
  images: {
    hero: "/images/Hades2_Logo.webp",
    heroBackground: "/images/Hades2_Wallpaper_Melinoe_4k_01.webp",
    logo: "/images/Hades2_Logo.webp",
    fallback: "/images/Hades2_Key_Art.webp"
  },

  // 角色展示
  characters: [
    {
      name: "Melinoë",
      title: "Princess of the Underworld",
      description: "The immortal daughter of Hades, wielding shadow and lunar magic to fight against Chronos and save her family.",
      image: "/images/Hades2_Melinoë_head.webp",
      fullImage: "/images/Hades2_Melinoë.webp"
    },
    {
      name: "Nemesis",
      title: "Goddess of Retribution",
      description: "A fierce ally in the fight against Chronos, bringing divine justice and vengeance to those who deserve it.",
      image: "/images/Hades2_Nemesis_head.webp",
      fullImage: "/images/Hades2_Nemesis.webp"
    },
    {
      name: "Hecate",
      title: "Goddess of Magic",
      description: "Melinoë's mentor in witchcraft, teaching her the ancient arts of shadow magic and mystical incantations.",
      image: "/images/Hades2_Hecate_head.webp",
      fullImage: "/images/Hades2_Hecate.webp"
    },
    {
      name: "Artemis",
      title: "Goddess of the Hunt",
      description: "The divine huntress who aids Melinoë with precise archery skills and knowledge of the wilderness.",
      image: "/images/Hades2_Artemis_head.webp",
      fullImage: "/images/Hades2_Artemis.webp"
    },
    {
      name: "Charon",
      title: "Ferryman of the Styx",
      description: "The enigmatic boatman who transports souls across the river Styx, offering guidance and mysterious aid.",
      image: "/images/Hades2_Charon_head.webp",
      fullImage: "/images/Hades2_Charon.webp"
    },
    {
      name: "Eris",
      title: "Goddess of Strife",
      description: "The personification of discord and chaos, whose powers can turn the tide of any battle.",
      image: "/images/Hades2_Eris_head.webp",
      fullImage: "/images/Hades2_Eris.webp"
    },
    {
      name: "Moros",
      title: "God of Doom",
      description: "The embodiment of impending doom and inevitable fate, wielding dark powers from the depths of destiny.",
      image: "/images/Hades2_Moros_head.webp",
      fullImage: "/images/Hades2_Moros.webp"
    },
    {
      name: "Odysseus",
      title: "Hero of the Odyssey",
      description: "The legendary Greek hero known for his cunning and strategic mind, offering wisdom from his epic journey.",
      image: "/images/Hades2_Odysseus_head.webp",
      fullImage: "/images/Hades2_Odysseu.webp"
    },
    {
      name: "Schelemeus",
      title: "Ancient Warrior",
      description: "A mysterious figure from the depths of the underworld, wielding ancient combat techniques and forgotten magic.",
      image: "/images/Hades2_Schelemeus_head.webp",
      fullImage: "/images/Hades2_Schelemeus.webp"
    },
    {
      name: "Selene",
      title: "Goddess of the Moon",
      description: "The luminous moon goddess who governs the night sky and enhances Melinoë's lunar magical abilities.",
      image: "/images/Hades2_Selene_head.webp",
      fullImage: "/images/Hades2_Selene.webp"
    }
  ],

  // 游戏截图
  screenshots: [
    {
      src: "/images/hades2_apr24_01.webp",
      alt: "Hades2 Combat Screenshot",
      caption: "Intense combat with magical abilities"
    },
    {
      src: "/images/hades2_apr24_02.webp", 
      alt: "Underworld Environment",
      caption: "Exploring the expanded Underworld"
    },
    {
      src: "/images/hades2_apr24_03.webp",
      alt: "Magic System",
      caption: "Witchcraft and shadow magic in action"
    }
  ],

  // 外部链接
  links: {
    steam: "https://store.steampowered.com/app/1145350/Hades_II/",
    epic: "https://store.epicgames.com/en-US/p/hades-ii",
    official: "https://www.supergiantgames.com/games/hades-ii/",
    trailer: "https://www.youtube.com/embed/sHPRBd7MdPg"
  },

  // 系统要求
  systemRequirements: {
    minimum: {
      os: "Windows 10 64-bit",
      processor: "Dual Core 3.0ghz+",
      memory: "8 GB RAM",
      graphics: "DirectX 11 compatible",
      directx: "Version 11",
      storage: "15 GB available space"
    },
    recommended: {
      os: "Windows 10/11 64-bit",
      processor: "Quad Core 3.5ghz+",
      memory: "16 GB RAM",
      graphics: "GTX 1060 / RX 580",
      directx: "Version 12",
      storage: "20 GB available space"
    }
  },

  // 游戏特色功能
  features: [
    {
      icon: "🌙",
      title: "Play as Melinoë",
      description: "Step into the role of the immortal Princess of the Underworld, wielding shadow and lunar magic."
    },
    {
      icon: "🔮",
      title: "Witchcraft & Magic",
      description: "Master powerful spells, incantations, and magical abilities in your fight against Chronos."
    },
    {
      icon: "🏛️",
      title: "Expanded Underworld",
      description: "Explore new regions beyond Hades, including the surface world and mysterious realms."
    },
    {
      icon: "⚔️",
      title: "Dynamic Combat",
      description: "Enhanced roguelike combat with new weapons, boons, and strategic depth."
    },
    {
      icon: "👥",
      title: "Rich Characters",
      description: "Meet new gods, allies, and enemies with fully voiced dialogue and compelling stories."
    },
    {
      icon: "🎵",
      title: "Epic Soundtrack",
      description: "Immerse yourself in Darren Korb's award-winning musical compositions."
    }
  ],

  // 示例内容 (可用于快速填充页面)
  sampleContent: {
    blogPosts: [
      {
        title: "Hades2 v1.0 Launch: Everything You Need to Know",
        excerpt: "The full release of Hades2 is finally here! Discover all the new content, features, and improvements in this comprehensive launch guide.",
        image: "/images/hades2_apr24_01.webp",
        date: "September 25, 2025",
        slug: "hades-2-v1-launch-guide"
      },
      {
        title: "Mastering Melinoë's Magic: A Complete Witchcraft Guide",
        excerpt: "Learn how to effectively use shadow magic, lunar spells, and powerful incantations to dominate your runs through the Underworld.",
        image: "/images/hades2_apr24_05.webp",
        date: "September 20, 2025",
        slug: "melinoe-witchcraft-guide"
      },
      {
        title: "All New Weapons and Combat Changes in Hades2",
        excerpt: "From the Nocturnal Arms to enhanced combat mechanics, explore every weapon type and fighting style available to Melinoë.",
        image: "/images/hades2_apr24_07.webp",
        date: "September 15, 2025",
        slug: "hades-2-weapons-combat-guide"
      },
      {
        title: "Hades2 Smashes Records with Phenomenal Full Release Launch",
        excerpt: "Hades2 officially exits early access and immediately breaks its predecessor's Steam concurrent player records, drawing over 60,000 players within the first hour.",
        image: "/images/H2_Olympic_NoLogo_4K.webp",
        date: "September 27, 2025",
        slug: "hades-2-full-release-record-breaking-launch"
      }
    ],
    videos: [
      {
        title: "The Unseen Update Trailer",
        description: "The third Major Update for Hades2 is finally here, focused on expanding core combat, Guardian encounters, and character relationships, with lots of new visual flair!",
        embedId: "2Gv0eQjJ-gY"
      },
      {
        title: "The Warsong Update Trailer",
        description: "The second Major Update for Hades2 has arrived, featuring all-new encounters at the end of the surface route, the arrival of violence-loving Ares, updates to Arcana and resource collection, and much more!",
        embedId: "yrpGYTlCjNQ"
      },
      {
        title: "The Olympic Update Trailer",
        description: "The first Major Update for Hades2 is finally here, featuring spectacular new places to explore, colorful new characters to meet, a wild new weapon to master, and much, much more! Take a peek:",
        embedId: "WH3jT53hIYM"
      }
    ]
  }
}

// 辅助函数 - 生成 YouTube 嵌入链接
export const getYouTubeEmbed = (videoId: string) => {
  return `https://www.youtube.com/embed/${videoId}`
}

// 辅助函数 - 生成 Canonical URL
export const getCanonicalUrl = (path: string = '') => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${gameConfig.site.url}${cleanPath}`
}

// 辅助函数 - 获取主题色彩
export const getThemeColors = () => {
  return gameConfig.theme
}

// 辅助函数 - 获取游戏信息
export const getGameInfo = () => {
  return gameConfig.game
}

export default gameConfig