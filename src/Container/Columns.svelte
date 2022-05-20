<script>
    export let reverse = false;
</script>

<div class="container">
    <div class:reverse class="columns">
        <slot />
    </div>
</div>

<style>
    .container {
        flex: 1 1 0;
    }

    .columns {
        display: flex;
    }

    .reverse {
        flex-direction: row-reverse;
    }
</style>
