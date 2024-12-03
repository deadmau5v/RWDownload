

export type GameVersion = {
    version: string // 版本号
    releaseDate: string  // 发布日期
    description: string  // 版本描述
    thirdParty?: boolean // 第三方版本
    beta?: boolean  // 是否为测试版
    recommended?: boolean  // 是否为推荐版本
    downloads: { [key: string]: string } // 下载链接
}


export const gameVersions: GameVersion[] = [
    {
        "version": "铁锈战争 1.15",
        "beta": false,
        "recommended": true,
        "releaseDate": "2022-11-10",
        "description": "1.15版本更新了少量单位与游戏内容，以及大量Mod特性。",
        "downloads": {
            "Windows": "https://pan.seeoss.com/f/RpYyHa/Rusted%20Warfare%201.15.exe",
            "Android": "https://pan.seeoss.com/f/jp5ocx/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.15.apk",
            "Linux": "https://pan.seeoss.com/f/QRGxUe/RustedWarfare1.15.tar"
        }
    },
    {
        "version": "铁锈战争 1.14",
        "beta": false,
        "releaseDate": "2020-8-29",
        "description": "1.14版本是自1.13.3b以来的一次重大更新，其更新包含大量Mod特性，界面更新以及新单位。", 
        "downloads": {
            "Windows": "https://pan.seeoss.com/f/JDW4Hx/Rusted%20Warfare%201.14.exe",
            "Android": "https://pan.seeoss.com/f/x9Yyiq/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.14.apk",
            "Linux": "https://pan.seeoss.com/f/8yd6fk/RustedWarfare1.14.tar"
        }
    },
    {
        "version": "铁锈战争 1.14 [30人版]",
        "beta": false,
        "releaseDate": "2020-8-29",
        "description": "1.14版本是自1.13.3b以来的一次重大更新，其更新包含大量Mod特性，界面更新以及新单位。",
        "thirdParty": true,
        "downloads": {
            "Android": "https://pan.seeoss.com/f/qrdaS4/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.14%20%5B30%E4%BA%BA%E7%89%88%5D.apk",
        }
    },
    {
        "version": "铁锈战争 1.14 [20人版]",
        "beta": false,
        "releaseDate": "2020-8-29",
        "description": "1.14版本是自1.13.3b以来的一次重大更新，其更新包含大量Mod特性，界面更新以及新单位。",
        "thirdParty": true,
        "downloads": {
            "Android": "https://pan.seeoss.com/f/EbQ1cw/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.14%20%5B20%E4%BA%BA%E7%89%88%5D.apk",
        }
    },
    {
        "version": "RWPP 1.3.0",
        "beta": false,
        "thirdParty": true,
        "releaseDate": "2024-10-4",
        "description": "现代化的第三方版本，拥有更现代化的UI，更多开房选项，以及更稳定的游戏体验。",
        "downloads": {
            "Windows": "https://pan.seeoss.com/f/Ag1gCm/RWPP-1.3.0.zip",
            "Github": "*https://github.com/Minxyzgo/RWPP",
        }
    },
    {
        "version": "铁锈战争 1.15p11",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "https://pan.seeoss.com/f/a9J7he/Rusted%20Warfare%201.15%20p11+%20beta.exe",
            "Android": "https://pan.seeoss.com/f/NE1wIa/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.15%20p11.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p10",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "https://pan.seeoss.com/f/YN1jtO/Rusted%20Warfare%201.15p10.exe",
            "Android": "https://pan.seeoss.com/f/ZapRcE/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.15%20p10.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p9",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "https://pan.seeoss.com/f/G0LoFa/Rusted%20Warfare%201.15p9.exe",
            "Android": "https://pan.seeoss.com/f/L0Rkfq/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.15%20p9.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p8",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Windows": "https://pan.seeoss.com/f/VNr7Hj/Rusted%20Warfare%201.15p8.exe",
            "Android": "https://pan.seeoss.com/f/gjNqhg/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.15%20p8.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p7",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "https://pan.seeoss.com/f/e8YJhE/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.15%20p7.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p6",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "https://pan.seeoss.com/f/XeQQTE/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.15%20p6.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p5",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "https://pan.seeoss.com/f/b95lTO/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.15%20p5.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p4",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "https://pan.seeoss.com/f/4zxVHE/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.15%20p4.apk"
        }
    },
    {
        "version": "铁锈战争 1.15p3",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "https://pan.seeoss.com/f/mWpxU5/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.15%20p3.apk"
        }
    },
    {
        "version": "铁锈战争 1.14p9",
        "beta": true,
        "releaseDate": "",
        "description": "",
        "downloads": {
            "Android": "https://pan.seeoss.com/f/5ayohD/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.14%20p9.apk"
        }
    },
    {
        "version": "铁锈战争 1.13",
        "beta": false,
        "releaseDate": "2018-10-28",
        "description": "1.13版本是一次有较大改动的更新，主要更新MOD相关以及优化，与其它更新相同，此次也有单位更新。",
        "downloads": {
            "Windows": "https://pan.seeoss.com/f/w9Gntr/Rusted%20Warfare%201.13.exe",
            "Android": "https://pan.seeoss.com/f/D6z5sv/%E9%93%81%E9%94%88%E6%88%98%E4%BA%89%E5%85%A8%E6%B1%89%E5%8C%96%E7%89%88%201.13.4.apk",
            "Linux": "https://pan.seeoss.com/f/rlRGul/RustedWarfare1.13.tar"
        }
    },
    {
        "version": "铁锈战争 1.12",
        "beta": false,
        "releaseDate": "2018-1-26",
        "description": "",
        "downloads": {
            "Windows": "https://pan.seeoss.com/f/ndrkCp/Rusted%20Warfare%201.12.exe",
            "Linux": "https://pan.seeoss.com/f/7aWjck/RustedWarfare1.12.tar"
        }
    },
    {
        "version": "铁锈战争 1.11",
        "beta": false,
        "releaseDate": "很久很久以前",
        "description": "",
        "downloads": {
            "Windows": "https://pan.seeoss.com/f/dzGWce/Rusted%20Warfare%201.11.exe",
            "Linux": "https://pan.seeoss.com/f/yLAmtq/RustedWarfare1.11.tar"
        }
    },
    {
        "version": "铁锈战争 1.10",
        "beta": false,
        "releaseDate": "很久很久以前",
        "description": "",
        "downloads": {
            "Windows": "https://pan.seeoss.com/f/Wdzgta/Rusted%20Warfare%201.10.exe",
            "Linux": "https://pan.seeoss.com/f/pkW4sl/RustedWarfare1.10.tar"
        }
    },
    {
        "version": "铁锈战争 1.09",
        "beta": false,
        "releaseDate": "很久很久以前",
        "description": "",
        "downloads": {
            "Linux": "https://pan.seeoss.com/f/z9NYfO/RustedWarfare1.09.tar",
        }
    },
]