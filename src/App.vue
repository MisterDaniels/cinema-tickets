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
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap');

    :root {
        --neutral-text-color: #2A2A2A;
    }

    #app {
        font-family: 'Oswald', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
</style>