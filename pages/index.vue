<template>
    <div>首页</div>
    <div class="w-36 bg-orange-300">
        <span class="text-theme text-5xl">文字</span>
    </div>
    <!-- <NuxtIcon name="search" class="text-[80px] "></NuxtIcon> -->
    <NuxtIcon name="logo" class="text-[80px]"></NuxtIcon>
    <svg src="../assets/icons/search.svg" class="text-[20px] "></svg>
    <van-button type="danger">按钮</van-button>
</template>
<script lang="ts" setup>
// seo
useSeoMeta({
    title: '首页',
    description: '',
    keywords: '',
    // 禁止搜索引擎抓取页面 防盗
    referrer: 'no-referrer'
})
</script>