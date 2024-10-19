

export type GameVersion = {
    version: string // 版本号
    releaseDate: string  // 发布日期
    description: string  // 版本描述
    thirdParty?: boolean // 第三方版本
    beta?: boolean  // 是否为测试版
    recommended?: boolean  // 是否为推荐版本
    downloads: { [key: string]: string } // 下载链接
}



//     {
//     "version": "铁锈战争 1.15",   // 显示名称 (名称+版本号)
//     "beta": false,  // 是否为测试版
//     "recommended": true, // 是否为推荐版本
//     "releaseDate": "2022-11-10", // 发布日期
//     "description": "1.15版本更新了少量单位与游戏内容，以及大量Mod特性。", // 版本描述
//     "downloads": {  // 下载链接 如果要跳转 使用 * 开头
//         "Windows": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [电脑版💻]/Rusted Warfare 1.15.exe",
//         "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15.apk",
//         "Linux": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [Linux版🐧]/RustedWarfare1.15.tar",
//         "Steam": "*https://store.steampowered.com/app/644444444/Rusted_Warfare/"
//     }
// },

// 所有数据
export const gameVersions: GameVersion[] = [
    {
        "version": "铁锈战争 1.15",
        "beta": false,
        "recommended": true,
        "releaseDate": "2022-11-10",
        "description": "1.15版本更新了少量单位与游戏内容，以及大量Mod特性。",
        "downloads": {
            "Windows": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [电脑版💻]/Rusted Warfare 1.15.exe",
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15.apk",
            "Linux": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [Linux版🐧]/RustedWarfare1.15.tar"
        }
    },
    {
        "version": "铁锈战争 1.14",
        "beta": false,
        "releaseDate": "2020-8-29",
        "description": "1.14版本是自1.13.3b以来的一次重大更新，其更新包含大量Mod特性，界面更新以及新单位。",
        "downloads": {
            "Windows": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [电脑版💻]/Rusted Warfare 1.14.exe",
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.14.apk",
            "Linux": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [Linux版🐧]/RustedWarfare1.14.tar"
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
        "releaseDate": "很久很久以前",
        "description": "现代化的第三方版本，拥有更现代化的UI，更多开房选项，以及更稳定的游戏体验。",
        "downloads": {
            "Windows": "https://cdn1.d5v.cc/pan.d5v.cc/%F0%9F%8E%AE%20%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%20%5B%E7%94%B5%E8%84%91%E7%89%88%F0%9F%92%BB%5D/RWPP-1.3.0.zip",
            "Github": "*https://github.com/Minxyzgo/RWPP",
        }
    },
    {
        "version": "铁锈战争 1.15p11",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [电脑版💻]/Rusted Warfare 1.15 p11+ beta.exe",
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15 p11.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p10",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [电脑版💻]/Rusted Warfare 1.15p10.exe",
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15 p10.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p9",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [电脑版💻]/Rusted Warfare 1.15p9.exe",
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.15 p9.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p8",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [电脑版💻]/Rusted Warfare 1.15p8.exe",
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
            "Windows": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [电脑版💻]/Rusted Warfare 1.13.exe",
            "Android": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [手机版📱]/铁锈战争全汉化版 1.13.4.apk",
            "Linux": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [Linux版🐧]/RustedWarfare1.13.tar"
        }
    },
    {
        "version": "铁锈战争 1.12",
        "beta": false,
        "releaseDate": "2018-1-26",
        "description": "",
        "downloads": {
            "Windows": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [电脑版💻]/Rusted Warfare 1.12.exe",
            "Linux": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [Linux版🐧]/RustedWarfare1.12.tar"
        }
    },
    {
        "version": "铁锈战争 1.11",
        "beta": false,
        "releaseDate": "很久很久以前",
        "description": "",
        "downloads": {
            "Windows": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [电脑版💻]/Rusted Warfare 1.11.exe",
            "Linux": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [Linux版🐧]/RustedWarfare1.11.tar"
        }
    },
    {
        "version": "铁锈战争 1.10",
        "beta": false,
        "releaseDate": "很久很久以前",
        "description": "",
        "downloads": {
            "Windows": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [电脑版💻]/Rusted Warfare 1.10.exe",
            "Linux": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [Linux版🐧]/RustedWarfare1.10.tar"
        }
    },
    {
        "version": "铁锈战争 1.09",
        "beta": false,
        "releaseDate": "2024-10-4",
        "description": "",
        "downloads": {
            "Linux": "https://cdn1.d5v.cc/pan.d5v.cc/🎮 铁锈战争 [Linux版🐧]/RustedWarfare1.09.tar",
        }
    },
]