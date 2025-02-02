#!/bin/bash

# 主循环
while true; do
    echo "$(date '+%Y-%m-%d %H:%M:%S') - 开始拉取最新代码..."
    git pull

    echo "$(date '+%Y-%m-%d %H:%M:%S') - 开始安装依赖..."
    bun install

    echo "$(date '+%Y-%m-%d %H:%M:%S') - 开始构建项目..."
    bun run build

    echo "$(date '+%Y-%m-%d %H:%M:%S') - 启动项目..."
    bun run start --port 5009

    # 等待一段时间后检查是否需要重启
    sleep 5
done