<template>
    <div>
        <h1>bu sponsors page</h1>
        <p>UserId {{ $route.params.id}} => {{ userName }} </p>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const userName = computed(() => {
    return route.query.name;
});

const userId = computed(() => {
    return route.params.id
})

</script>
