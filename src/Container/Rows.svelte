<script>
    import Container from "./Container.svelte";

    export let reverse = false;
</script>

<Container>
    <div class:reverse>
        <slot />
    </div>
</Container>

<style>
    div {
        display: flex;
        flex-direction: column;
    }

    .reverse {
        flex-direction: column-reverse;
    }
</style>
