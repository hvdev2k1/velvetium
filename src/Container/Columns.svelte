<script>
    import Container from "./Container.svelte";

    export let reverse = false;
    export let gapless = false;
</script>

<Container>
    <div class:reverse class:gap={!gapless}>
        <slot />
    </div>
</Container>

<style>
    div {
        display: flex;
    }

    div.gap > :global(*) {
        box-sizing: border-box;
        margin: 0 0.75rem;
    }

    div.gap > :global(:first-child) {
        margin-left: 0;
    }

    div.gap > :global(:last-child) {
        margin-right: 0;
    }

    .reverse {
        flex-direction: row-reverse;
    }
</style>
