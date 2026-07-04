// 网站配置文件
export const websiteConfig = {
  // 网站基本信息
  site: {
    title: "JungleS",
    description: "欢迎来到JungleS，探索无限可能的方块世界！",
    keywords: "Minecraft,服务器,我的世界,Java版,生存,pvp,建筑",
    author: "JungleX",
    language: "zh-CN"
  },

  // 导航栏配置
  navigation: {
    items: [
      {
        name: "主页",
        path: "/",
        icon: "mdi-home",
        enabled: true,
        external: false,
        externalUrl: "",
        pageTitle: {
          mainTitle: {
            texts: ["欢迎来到 JungleS服务器", "Welcome to JungleS"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "探索无限可能的方块世界，与朋友一起创造属于你们的冒险故事"
        }
      },
      {
        name: "相册",
        path: "/gallery",
        icon: "mdi-image",
        enabled: true,
        external: false,
        externalUrl: "",
        pageTitle: {
          mainTitle: {
            texts: ["游戏相册", "DCS Game Gallery"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "浏览服务器的精彩游戏截图和玩家作品"
        }
      },
      {
        name: "历程",
        path: "/history",
        icon: "mdi-history",
        enabled: true,
        external: false,
        externalUrl: "",
        pageTitle: {
          mainTitle: {
            texts: ["JungleS服务器历程", "DCS History"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "回顾服务器的发展历程，见证每一个重要的里程碑"
        }
      },
      {
        name: "排行榜",
        path: "/leaderboard",
        icon: "mdi-trophy",
        enabled: true,
        external: false,
        externalUrl: "",
        pageTitle: {
          mainTitle: {
            texts: ["玩家排行榜", "DCS Leaderboard"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "看看谁是最活跃的玩家，展示你的成就"
        }
      },
      {
        name: "关于",
        path: "/about",
        icon: "mdi-information",
        enabled: true,
        external: false,
        externalUrl: "",
        pageTitle: {
          mainTitle: {
            texts: ["关于服务器", "About DCServer"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "了解我们的服务器信息、管理团队和游戏规则"
        }
      }
    ],
    autoHide: true,
    hideThreshold: 100,
    showThreshold: 50
  },

  // 背景图片配置
  background: {
    images: [
      "/backgrounds/desktopWallpaper_1.webp",
      "/backgrounds/desktopWallpaper_2.webp",
      "/backgrounds/desktopWallpaper_3.webp",
      "/backgrounds/desktopWallpaper_4.webp",
      "/backgrounds/desktopWallpaper_5.webp",
      "/backgrounds/desktopWallpaper_6.webp",
      "/backgrounds/desktopWallpaper_7.webp"
    ],
    defaultImage: "/backgrounds/default.webp"
  },

  // 音乐播放器配置
  musicPlayer: {
    enabled: true,
    metingApi: "https://api.injahow.cn/meting/",
    server: "netease",
    type: "playlist",
    id: "5186526688",
    autoPlay: false,
    volume: 0.8
  },

  // 字体配置
  fonts: {
    main: {
      family: "像素体",
      file: "/fonts/像素体.ttf",
      fallback: "'Quicksand', 'Noto Sans SC', sans-serif",
      weight: "normal"
    },
    title: {
      family: "像素体",
      file: "/fonts/像素体.ttf",
      fallback: "'Quicksand', 'Noto Sans SC', sans-serif",
      weight: "normal"
    }
  },

  // 主题配置
  theme: {
    light: {
      primary: "#ff8eb7",
      secondary: "#a6e3e9",
      accent: "#ffd166",
      background: "#f8f5ff",
      card: "rgba(255, 255, 255, 0.85)",
      text: "#5a4b81",
      glass: "rgba(255, 255, 255, 0.35)"
    },
    dark: {
      primary: "#ff8eb7",
      secondary: "#a6e3e9",
      accent: "#ffd166",
      background: "#1a1a2e",
      card: "rgba(30, 30, 46, 0.85)",
      text: "#cdd6f4",
      glass: "rgba(30, 30, 46, 0.35)"
    }
  },

  // 服务器配置
  server: {
    displayAddress: "mm.rainplay.cn:58211",
    apiAddress: "ipv4.mm.rainplay.cn",
    port: "58211",
    version: "1.21.11",
    apiEndpoint: "https://api.mcstatus.io/v2/status/java"
  },

  // 页脚配置
  footer: {
    copyright: "© 2022-2026 JungleX服务器管理团队保留所有权利.",
    customHtml: `
      <!-- 在这里插入自定义HTML代码，比如备案信息 -->
    `
  },

  // 排行榜配置
  leaderboard: {
    localFile: {
      path: "/assets/leaderboard/count_export.json",
      cacheTimeout: 300000
    },
    
    objectives: {
      "fzsd.module.scoreboard.display.activation": {
        enabled: true,
        displayName: "活跃时间",
        icon: "clock",
        unit: "小时",
        showTotal: true
      },
      "fzsd.module.scoreboard.display.aviating_distance": {
        enabled: false,
        displayName: "飞行距离",
        icon: "airplane",
        unit: "米",
        showTotal: true
      },
      "fzsd.module.scoreboard.display.damage_taken": {
        enabled: true,
        displayName: "受伤害数",
        icon: "heartbroken",
        unit: "点",
        showTotal: true
      },
      "fzsd.module.scoreboard.display.death_count": {
        enabled: true,
        displayName: "死亡次数",
        icon: "skull",
        unit: "次",
        showTotal: true
      },
      "fzsd.module.scoreboard.display.dig_count": {
        enabled: true,
        displayName: "方块挖掘",
        icon: "pickaxe",
        unit: "个",
        showTotal: true
      },
      "fzsd.module.scoreboard.display.fishing_count": {
        enabled: true,
        displayName: "钓鱼次数",
        icon: "fish",
        unit: "次",
        showTotal: true
      },
      "fzsd.module.scoreboard.display.kill_count": {
        enabled: true,
        displayName: "玩家击杀",
        icon: "sword",
        unit: "个",
        showTotal: true
      },
      "fzsd.module.scoreboard.display.placement_count": {
        enabled: true,
        displayName: "放置数量",
        icon: "placement",
        unit: "个",
        showTotal: true
      },
      "fzsd.module.scoreboard.display.trade_count": {
        enabled: false,
        displayName: "交易次数",
        icon: "trade",
        unit: "次",
        showTotal: true
      }
    },
    
    display: {
      itemsPerPage: 10,
      showPlayerCount: true,
      showUpdateTime: true,
      showTotalScore: true
    }
  },

  // 历程配置
  history: {
    imagesFolder: "/assets/history-images"
  },

  // 相册配置
  gallery: {
    imagesFolder: "/assets/gallery-images"
  },

  // 关于页面配置
  about: {
    sections: {
      serverInfo: {
        enabled: true,
        title: "服务器信息",
        icon: "information",
        items: [
          { label: "服务器类别", value: "物理机" },
          { label: "CPU", value: "i9-13900kf" },
          { label: "内存", value: "128GB DDR5" },
          { label: "类型", value: "生存，生电，建筑" },
          { label: "最大玩家", value: "100人" },
          { label: "在线时间", value: "7X24小时" }
        ]
      },
      
      features: {
        enabled: true,
        title: "服务器特色",
        icon: "cog",
        items: [
          { label: "IPV4网络", value: "✓" },
          { label: "IPV6网络", value: "✓" },
          { label: "镜像服务器", value: "✓" },
          { label: "双重备份", value: "✓" },
          { label: "群服互通", value: "✓" },
          { label: "联机工具提供", value: "✓" }
        ]
      },
      
      team: {
        enabled: true,
        title: "管理团队",
        icon: "shield-account",
        items: [
          { label: "JungleX", value: "腐竹-物理服主！" }
          { label: "JungleB", value: "腐竹-不务正业" }
        ]
      }
    },
    
    rules: {
      enabled: true,
      title: "游戏规则",
      description: "服务器基本规则和玩家行为准则",
      items: [
        {
          title: "友好相处",
          icon: "heart",
          description: "尊重其他玩家，禁止任何形式的骚扰和歧视行为"
        },
        {
          title: "禁止作弊",
          icon: "shield",
          description: "严禁使用任何作弊客户端或利用游戏漏洞"
        },
        {
          title: "文明聊天",
          icon: "chat",
          description: "保持聊天频道文明，禁止发布广告和不当内容"
        }
      ]
    },
    
    contact: {
      enabled: true,
      title: "联系我们",
      description: "加入我们的社区，与我们一起畅游方块世界",
      items: [
        {
          title: "QQ群",
          subtitle: "加入官方 QQ 群交流",
          icon: "qqchat",
          buttonText: "加入 QQ 群",
          buttonType: "secondary",
          url: "https://qm.qq.com/q/mVvrLcbLvU"
        },
        {
          title: "邮箱",
          subtitle: "发送邮件联系我们",
          icon: "email",
          buttonText: "发送邮件",
          buttonType: "secondary",
          url: "mc@jungle.cc.cd"
        }
      ]
    },
    
    members: {
      enabled: true,
      title: "服务器成员",
      description: "我们的服务器大家庭",
      
      dataSource: "localFile",
      
      localFile: {
        path: "/assets/memberlist/whitelist.json",
        cacheTimeout: 300000
      },
      
      manualList: [
        "JungleX"
      ]
    }
  },

  icons: {
    source: "https://icones.js.org",
    mappings: {
      home: "mdi-home",
      history: "mdi-history",
      trophy: "mdi-trophy",
      information: "mdi-information",
      music: "mdi-music",
      sun: "mdi-white-balance-sunny",
      moon: "mdi-weather-night",
      menu: "mdi-menu",
      close: "mdi-close",

      clock: "mdi-clock",
      airplane: "mdi-airplane",
      heartbroken: "mdi-heart-broken",
      skull: "mdi-skull",
      pickaxe: "mdi-pickaxe",
      fish: "mdi-fish",
      sword: "mdi-sword",
      placement: "mdi-arrow-down-bold-circle",
      trade: "mdi-currency-usd",
      cog: "mdi-cog",
      "shield-account": "mdi-shield-account",
      heart: "mdi-heart",
      shield: "mdi-shield",
      chat: "mdi-chat",
      qqchat: "mdi-qqchat",
      email: "mdi-email"
    }
  },

  favicon: {
    enabled: true,
    default: "/favicon/favicon.ico",
    sizes: {
      "16x16": "/favicon/favicon-16x16.png",
      "32x32": "/favicon/favicon-32x32.png",
      "192x192": "/favicon/android-chrome-192x192.png",
      "512x512": "/favicon/android-chrome-512x512.png"
    },
    appleTouch: "/favicon/apple-touch-icon.png"
  }
};

export const pageTemplates = {
  home: {
    title: "主页",
    description: "服务器主页",
    layout: "default"
  },
  gallery: {
    title: "相册",
    description: "服务器相册",
    layout: "default"
  },
  history: {
    title: "服务器历程",
    description: "服务器发展历史",
    layout: "default"
  },
  leaderboard: {
    title: "排行榜",
    description: "玩家排行榜",
    layout: "default"
  },
  about: {
    title: "关于我们",
    description: "服务器信息",
    layout: "default"
  }
};

export function addNewPage(pageConfig) {
  websiteConfig.navigation.items.push({
    name: pageConfig.name,
    path: pageConfig.path,
    icon: pageConfig.icon,
    enabled: true
  });
  
  pageTemplates[pageConfig.key] = {
    title: pageConfig.title,
    description: pageConfig.description,
    layout: pageConfig.layout || "default"
  };
}
