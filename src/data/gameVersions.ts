

export type GameVersion = {
    version: string // 版本号
    releaseDate: string  // 发布日期
    description: string  // 版本描述
    thirdParty?: boolean // 第三方版本
    beta?: boolean  // 是否为测试版
    recommended?: boolean  // 是否为推荐版本
    downloads: { [key: string]: string } // 下载链接
}


// 所有数据
export const gameVersions: GameVersion[] = [
    {
        "version": "铁锈战争 1.15",
        "beta": false,
        "recommended": true,
        "releaseDate": "2022-11-10",
        "description": "1.15版本更新了少量单位与游戏内容，以及大量Mod特性。",
        "downloads": {
            "Windows": "https://www.123684.com/s/KjZjVv-IBxD3",
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15.apk",
            "Linux": "https://www.123684.com/s/KjZjVv-JBxD3"
        }
    },
    {
        "version": "铁锈战争 1.14",
        "beta": false,
        "releaseDate": "2020-8-29",
        "description": "1.14版本是自1.14以来的一次重大更新，其更新包含大量Mod特性，界面更新以及新单位。",
        "downloads": {
            "Windows": "https://www.123684.com/s/KjZjVv-RBxD3",
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.14.apk",
            "Linux": "https://www.123684.com/s/KjZjVv-PBxD3"
        }
    },
    {
        "version": "铁锈战争 1.14 [30人版]",
        "beta": false,
        "releaseDate": "2020-8-29",
        "description": "1.14版本是自1.13.3b以来的一次重大更新，其更新包含大量Mod特性，界面更新以及新单位。",
        "thirdParty": true,
        "downloads": {
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.14 [30人版].apk",
        }
    },
    {
        "version": "铁锈战争 1.14 [20人版]",
        "beta": false,
        "releaseDate": "2020-8-29",
        "description": "1.14版本是自1.13.3b以来的一次重大更新，其更新包含大量Mod特性，界面更新以及新单位。",
        "thirdParty": true,
        "downloads": {
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.14 [20人版].apk",
        }
    },
    {
        "version": "RWPP 1.3.0",
        "beta": false,
        "thirdParty": true,
        "releaseDate": "2024-10-4",
        "description": "现代化的第三方版本，拥有更现代化的UI，更多开房选项，以及更稳定的游戏体验。",
        "downloads": {
            "Windows": "https://www.123684.com/s/KjZjVv-XBxD3",
            "Github": "*https://github.com/Minxyzgo/RWPP",
        }
    },
    {
        "version": "铁锈战争 1.15p11",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "https://www.123684.com/s/KjZjVv-NBxD3",
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15 p11.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p10",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "https://www.123684.com/s/KjZjVv-rBxD3",
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15 p10.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p9",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "https://www.123684.com/s/KjZjVv-DBxD3",
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15 p9.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p8",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "https://www.123684.com/s/KjZjVv-nBxD3",
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15 p8.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p7",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15 p7.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p6",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15 p6.apk"
        }
    },

    {
        "version": "铁锈战争 1.15p5",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15 p5.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p4",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15 p4.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p3",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15 p3.apk"
        }
    },
    {
        "version": "铁锈战争 1.14p9",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.14 p9.apk"
        }
    },
    {
        "version": "铁锈战争 1.13",
        "beta": false,
        "releaseDate": "2018-10-28",
        "description": "1.13版本是一次有较大改动的更新，主要更新MOD相关以及优化，与其它更新相同，此次也有单位更新。",
        "downloads": {
            "Windows": "https://www.123684.com/s/KjZjVv-CBxD3",
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.13.4.apk",
            "Linux": "https://www.123684.com/s/KjZjVv-wBxD3"
        }
    },
    {
        "version": "铁锈战争 1.12",
        "beta": false,
        "releaseDate": "2018-1-26",
        "description": "",
        "downloads": {
            "Windows": "https://www.123684.com/s/KjZjVv-OBxD3",
            "Linux": "https://www.123684.com/s/KjZjVv-MBxD3"
        }
    },
    {
        "version": "铁锈战争 1.11",
        "beta": false,
        "releaseDate": "很久很久以前",
        "description": "",
        "downloads": {
            "Windows": "https://www.123684.com/s/KjZjVv-WBxD3",
            "Linux": "https://www.123684.com/s/KjZjVv-gBxD3"
        }
    },
    {
        "version": "铁锈战争 1.10",
        "beta": false,
        "releaseDate": "很久很久以前",
        "description": "",
        "downloads": {
            "Windows": "https://www.123684.com/s/KjZjVv-sBxD3",
            "Linux": "https://www.123684.com/s/KjZjVv-FBxD3"
        }
    },
    {
        "version": "铁锈战争 1.09",
        "beta": false,
        "releaseDate": "很久很久以前",
        "description": "",
        "downloads": {
            "Linux": "https://www.123684.com/s/KjZjVv-GBxD3",
        }
    },
]