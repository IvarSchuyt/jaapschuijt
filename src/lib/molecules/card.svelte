<script>
    export let cardTitle, cardImage, cardLink, cardImageHeight, cardImageWidth;
</script>

<a href="{cardLink}">
    <img src="{cardImage}" alt="" height="{cardImageHeight}" width="{cardImageWidth}" loading="lazy" decoding="async">
    <h3>{cardTitle}</h3>
</a>

<style lang="scss">

    a{  
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        gap: 1rem;
        height: 100%;
        width: 100%;

            img{
                object-fit: cover;
                height: 100%;
                width: 100%;
                border-radius: var(--card-border-radius);
                aspect-ratio: 1/1;
            }
    }

    @media (min-width: 450px){

    }

</style>