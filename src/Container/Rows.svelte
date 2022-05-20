<script>
    export let reverse = false;
</script>

<div class="container">
    <div class:reverse class="rows">
        <slot />
    </div>
</div>

<style>
    .container {
        flex: 1 1 0;
    }

    .rows {
        display: flex;
        flex-direction: column;
    }

    .reverse {
        flex-direction: column-reverse;
    }
</style>
