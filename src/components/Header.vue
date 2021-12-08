<script setup>
    import { ref } from 'vue';
    import moment from 'moment';

    defineProps({
        msg: String
    });

    const totalTime = ref(0);
</script>

<template>
    <div class="header" >
        <h2>{{ timer }}</h2>
        <p></p>
    </div>
</template>

<style scoped>
    
</style>
