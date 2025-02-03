

export type GameVersion = {
    version: string // 版本号
    releaseDate: string  // 发布日期
    description: string  // 版本描述
    thirdParty?: boolean // 第三方版本
    beta?: boolean  // 是否为测试版
    recommended?: boolean  // 是否为推荐版本
    downloads: { [key: string]: string } // 下载链接
}

// export const downloadNodes: { [key: string]: string }= {
//     "node1": "https://file-01.d5v.cc",
//     "node2": "https://file-02.d5v.cc",
//     "node3": "https://file-03.d5v.cc",
// }

export const gameVersions: GameVersion[] = [
    {
        "version": "铁锈战争 1.15",
        "beta": false,
        "recommended": true,
        "releaseDate": "2022-11-10",
        "description": "1.15版本更新了少量单位与游戏内容，以及大量Mod特性。",
        "downloads": {
            "Windows": "%HOST%/d/local/pc/Rusted%20Warfare%201.15.exe",
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.15.apk",
            "Linux": "%HOST%/d/local/pe/RustedWarfare1.15.tar"
        }
    },
    {
        "version": "铁锈战争 1.14",
        "beta": false,
        "releaseDate": "2020-8-29",
        "description": "1.14版本是自1.13.3b以来的一次重大更新，其更新包含大量Mod特性，界面更新以及新单位。",
        "downloads": {
            "Windows": "%HOST%/d/local/pc/Rusted%20Warfare%201.14.exe",
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.14.apk",
            "Linux": "%HOST%/d/local/linux/RustedWarfare1.14.tar"
        }
    },
    {
        "version": "铁锈战争 1.14 [30人版]",
        "beta": false,
        "releaseDate": "2020-8-29",
        "description": "1.14版本是自1.13.3b以来的一次重大更新，其更新包含大量Mod特性，界面更新以及新单位。",
        "thirdParty": true,
        "downloads": {
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.14-30players.apk",
        }
    },
    {
        "version": "铁锈战争 1.14 [20人版]",
        "beta": false,
        "releaseDate": "2020-8-29",
        "description": "1.14版本是自1.13.3b以来的一次重大更新，其更新包含大量Mod特性，界面更新以及新单位。",
        "thirdParty": true,
        "downloads": {
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.14-20players.apk",
        }
    },
    {
        "version": "RWPP 1.3.0",
        "beta": false,
        "thirdParty": true,
        "releaseDate": "2024-10-4",
        "description": "现代化的第三方版本，拥有更现代化的UI，更多开房选项，以及更稳定的游戏体验。",
        "downloads": {
            "Windows": "%HOST%/d/local/pc/RWPP-1.3.0.zip",
            "Github": "*https://github.com/Minxyzgo/RWPP",
        }
    },
    {
        "version": "铁锈战争 1.15p11",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "%HOST%/d/local/pc/Rusted%20Warfare%201.15%20p11%2B%20beta.exe",
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.15%20p11.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p10",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "%HOST%/d/local/pc/Rusted%20Warfare%201.15p10.exe",
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.15%20p10.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p9",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "%HOST%/d/local/pc/Rusted%20Warfare%201.15p9.exe",
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.15%20p9.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p8",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "%HOST%/d/local/pc/Rusted%20Warfare%201.15p8.exe",
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.15%20p8.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p7",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.15%20p7.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p6",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.15%20p6.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p5",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.15%20p5.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p4",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.15%20p4.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p3",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.15%20p3.apk"
        }
    },
    {
        "version": "铁锈战争 1.14p9",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.14%20p9.apk"
        }
    },
    {
        "version": "铁锈战争 1.13",
        "beta": false,
        "releaseDate": "2018-10-28",
        "description": "1.13版本是一次有较大改动的更新，主要更新MOD相关以及优化，与其它更新相同，此次也有单位更新。",
        "downloads": {
            "Windows": "%HOST%/d/local/pc/Rusted%20Warfare%201.13.exe",
            "Android": "%HOST%/d/local/pe/RustedWarfare-1.13.4.apk",
            "Linux": "%HOST%/d/local/linux/RustedWarfare1.13.tar"
        }
    },
    {
        "version": "铁锈战争 1.12",
        "beta": false,
        "releaseDate": "2018-1-26",
        "description": "",
        "downloads": {
            "Windows": "%HOST%/d/local/pc/Rusted%20Warfare%201.12.exe",
            "Linux": "%HOST%/d/local/linux/RustedWarfare1.12.tar"
        }
    },
    {
        "version": "铁锈战争 1.11",
        "beta": false,
        "releaseDate": "很久很久以前",
        "description": "",
        "downloads": {
            "Windows": "%HOST%/d/local/pc/Rusted%20Warfare%201.11.exe",
            "Linux": "%HOST%/d/local/linux/RustedWarfare1.11.tar"
        }
    },
    {
        "version": "铁锈战争 1.10",
        "beta": false,
        "releaseDate": "很久很久以前",
        "description": "",
        "downloads": {
            "Windows": "%HOST%/d/local/pc/Rusted%20Warfare%201.10.exe",
            "Linux": "%HOST%/d/local/linux/RustedWarfare1.10.tar"
        }
    },
    {
        "version": "铁锈战争 1.09",
        "beta": false,
        "releaseDate": "很久很久以前",
        "description": "",
        "downloads": {
            "Linux": "%HOST%/d/local/linux/RustedWarfare1.09.tar",
        }
    },
]