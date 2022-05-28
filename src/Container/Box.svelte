<script>
    import Container from "./Container.svelte";
</script>

<Container>
    <div>
        <slot />
    </div>
</Container>

<style>
    div {
        border: 1px solid rgba(0, 0, 0, 0.02);
        background-color: rgba(0, 0, 0, 0.02);
        padding: 5px;
        border-radius: 5px 5px 5px 5px;
    }
</style>
