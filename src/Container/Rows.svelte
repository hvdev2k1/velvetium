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
        flex-direction: column;
    }

    div.gap > :global(*) {
        box-sizing: border-box;
        margin: 0.75rem 0;
    }

    div.gap > :global(:first-child) {
        margin-top: 0;
    }

    div.gap > :global(:last-child) {
        margin-bottom: 0;
    }

    .reverse {
        flex-direction: column-reverse;
    }
</style>
