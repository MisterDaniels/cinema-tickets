<template>
    <div class="countdown" >
        <h1>04:32</h1>
        <p>Mins to buy your tickets</p>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'Countdown'
    }
</script>

<style scoped>
    h1, p {
        color: var(--neutral-text-color);
    }

    p {
        text-transform: uppercase;
    }
</style>
