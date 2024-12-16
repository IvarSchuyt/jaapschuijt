<script>

    import { Nav } from '$lib/index.js';
    export let headerTitle, headerSubtitle;

</script>


<header>
    <div>
        <h1>{headerTitle}</h1>
        <span>{headerSubtitle}</span>
    </div>
    <Nav />
</header>

<style lang="scss">

header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
        font-weight: 600;
    }
}

</style>