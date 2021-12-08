<script>
    import { ref, computed } from 'vue';
    import { useRoute } from 'vue-router';
    
    export default {
        name: 'App',
        components: {

        },
        setup() {
            const route = useRoute();
            const viewName = ref('default');
            const currentLocation = computed(() => {
                const { matched, ...rest } = route;
                return rest;
            });

            return {
                currentLocation,
                viewName
            }
        }
    }
</script> 

<template>
    <Suspense>
        <template #default>
            <router-view :name="viewName" v-slot="{ Component, route }">
                <keep-alive>
                    <component
                        :is="Component"
                        :key="route.name === 'repeat' ? route.path : undefined"
                    />
                </keep-alive>
            </router-view>
        </template>
        <template #fallback>Loading...</template>
    </Suspense>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>