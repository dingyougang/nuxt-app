<!--
 * new page
 * @author: dingyougang
 * @since: 2024-11-05
 * AppHeader.vue
-->
<template>
    <div>
        header{{ message?.message }}
    </div>
</template>

<script lang='ts' setup>
const { data: message } = await useFetch('/api/video')
console.log();

</script>
<style scoped lang='scss'></style>