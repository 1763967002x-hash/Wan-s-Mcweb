// 网站全局配置文件 JungleS Minecraft服务器官网
export const websiteConfig = {
  // 站点基础SEO信息
  site: {
    title: "JungleS",
    description: "欢迎来到JungleS，探索无限可能的方块世界！",
    keywords: "Minecraft,服务器,我的世界,Java版,生存,pvp,建筑,FZ生存数据包",
    author: "JungleX",
    language: "zh-CN"
  },

  // 顶部导航栏配置
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
            texts: ["游戏相册", "JungleS Game Gallery"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "浏览服务器的精彩游戏截图和玩家建筑作品"
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
            texts: ["JungleS服务器历程", "JungleS History"],
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
            texts: ["玩家排行榜", "JungleS Leaderboard"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "看看谁是最活跃的玩家，展示你的游戏成就"
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
            texts: ["关于服务器", "About JungleS Server"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "了解服务器配置、管理团队、游戏规则与加入方式"
        }
      }
    ],
    autoHide: true,
    hideThreshold: 100,
    showThreshold: 50
  },

  // 页面轮播背景图配置
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

  // 内置网易云音乐播放器配置
  musicPlayer: {
    enabled: true,
    metingApi: "https://api.injahow.cn/meting/",
    server: "netease",
    type: "playlist",
    id: "5186526688",
    autoPlay: false,
    volume: 0.8
  },

  // 全局像素字体配置
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

  // 明暗主题配色方案
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

  // Minecraft服务器连接信息
  server: {
    displayAddress: "mm.rainplay.cn:58211",
    apiAddress: "ipv4.mm.rainplay.cn",
    port: "58211",
    version: "1.21.11",
    apiEndpoint: "https://api.mcstatus.io/v2/status/java"
  },

  // 页面底部版权信息
  footer: {
    copyright: "© 2022-2026 JungleS服务器管理团队保留所有权利.",
    customHtml: ``
  },

  // FZ生存数据包排行榜配置
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

  // 服务器历程页面资源路径
  history: {
    imagesFolder: "/assets/history-images"
  },

  // 相册页面资源路径
  gallery: {
    imagesFolder: "/assets/gallery-images"
  },

  // 关于页面全部模块配置
  about: {
    sections: {
      serverInfo: {
        enabled: true,
        title: "服务器硬件信息",
        icon: "information",
        items: [
          { label: "服务器类型", value: "独立物理机" },
          { label: "CPU", value: "i9-13900KF" },
          { label: "运行内存", value: "128GB DDR5" },
          { label: "服务器玩法", value: "生存、生电、大型建筑" },
          { label: "最大在线人数", value: "100人" },
          { label: "运行状态", value: "7×24小时不间断运行" }
        ]
      },

      features: {
        enabled: true,
        title: "服务器特色功能",
        icon: "cog",
        items: [
          { label: "IPv4优质线路", value: "✓" },
          { label: "IPv6双栈支持", value: "✓" },
          { label: "线路节点镜像", value: "✓" },
          { label: "世界数据双重备份", value: "✓" },
          { label: "群组服互通", value: "✓" },
          { label: "专属联机加速工具", value: "✓" }
        ]
      },

      team: {
        enabled: true,
        title: "管理团队",
        icon: "shield-account",
        items: [
          { label: "JungleX", value: "腐竹-物理服主！" },
          { label: "JungleB", value: "腐竹-不务正业" }
        ]
      },

      rules: {
        enabled: true,
        title: "服务器游戏规则",
        description: "服务器基本规则与玩家行为规范",
        items: [
          {
            title: "友好共处",
            icon: "heart",
            description: "尊重所有玩家，禁止辱骂、骚扰、恶意拆毁他人建筑"
          },
          {
            title: "严禁作弊",
            icon: "shield",
            description: "禁止使用外挂、作弊客户端，禁止恶意利用BUG破坏服务器平衡"
          },
          {
            title: "文明公屏聊天",
            icon: "chat",
            description: "禁止广告、刷屏、低俗言论，保持聊天环境整洁"
          }
        ]
      },

      contact: {
        enabled: true,
        title: "加入我们社区",
        description: "交流建筑、生电技巧，反馈服务器问题",
        items: [
          {
            title: "官方QQ群",
            subtitle: "加入群聊交流互动",
            icon: "qqchat",
            buttonText: "立即加群",
            buttonType: "secondary",
            url: "https://qm.qq.com/q/mVvrLcbLvU"
          },
          {
            title: "联系邮箱",
            subtitle: "BUG反馈、商务合作发送邮件",
            icon: "email",
            buttonText: "发送邮件",
            buttonType: "secondary",
            url: "mc@jungle.cc.cd"
          }
        ]
      },

      members: {
        enabled: true,
        title: "服主白名单成员",
        description: "服务器核心成员名单",
        dataSource: "localFile",
        localFile: {
          path: "/assets/memberlist/whitelist.json",
          cacheTimeout: 300000
        },
        manualList: [
          "JungleX"
        ]
      }
    }
  },

  // MDI图标统一映射表，解决组件找不到图标问题
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
      image: "mdi-image",

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

  // 网站图标favicon配置
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

// 页面路由模板定义
export const pageTemplates = {
  home: { title: "主页", description: "JungleS服务器主页", layout: "default" },
  gallery: { title: "游戏相册", description: "服务器玩家作品截图", layout: "default" },
  history: { title: "服务器历程", description: "服务器发展时间线", layout: "default" },
  leaderboard: { title: "玩家排行榜", description: "FZ数据包数据统计排行", layout: "default" },
  about: { title: "关于我们", description: "服务器详细介绍", layout: "default" }
};

/**
 * 动态新增页面方法
 * @param {Object} pageConfig 页面配置参数
 */
export function addNewPage(pageConfig) {
  websiteConfig.navigation.items.push({
    name: pageConfig.name,
    path: pageConfig.path,
    icon: pageConfig.icon,
    enabled: true,
    external: false,
    externalUrl: "",
    pageTitle: pageConfig.pageTitle || {}
  });

  pageTemplates[pageConfig.key] = {
    title: pageConfig.title,
    description: pageConfig.description,
    layout: pageConfig.layout || "default"
  };
}
