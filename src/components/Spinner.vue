<template>
    <main>
        <div class="loader" />
    </main>
</template>

<script>
export default {
    name: "Spinner",
}
</script>

<style scoped>
main {
    display: flex;
    justify-content: center;
    margin: 3rem;
}
.loader {
    border: 0.5rem solid rgb(228, 228, 228);
    border-top: 0.5rem solid var(--primary-color);
    border-radius: 50%;
    width: 3.5em;
    height: 3.5em;
    animation: spin 1.5s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
