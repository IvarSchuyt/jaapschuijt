<script>

    import { Header } from '$lib/index.js';

    export let data;
    // console.log(data.artikels[0]);

    const artikels = data.artikels;

</script>

<Header 
    headerTitle="Jaap Schuijt"
    headerSubtitle=""
/>

<main>
    <ul>
        {#each artikels as artikel}
            <li>    
                <h1>€{artikel.prijs} {artikel.naam}</h1>
                <div>
                    <img src="{artikel.foto[0].url}" alt="">
                    <p>{artikel.beschrijving}</p>
                </div>
            </li>
        {/each}
    </ul>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
    }

    ul {
        list-style-type: none;
        max-width: 50vw;
    }

    li {
        border: 1px solid black;
    }

    div{
        display: flex;
        gap: 1rem;
    }

    img{
        max-width: 25rem;
    }

</style>