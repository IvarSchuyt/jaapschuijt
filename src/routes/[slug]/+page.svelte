<script>
import { onMount } from 'svelte';
import { Header } from '$lib/index.js';
// import { doTypesOverlap } from 'graphql';

    export let data;
    
    let cms;
    let previousPage;
    if (data.dataMediacollege.detailPageMediacolleges && data.dataMediacollege.detailPageMediacolleges.length > 0) {
        cms = data.dataMediacollege.detailPageMediacolleges[0];
        previousPage = 'mediacollege';
    } else if (data.dataOwnProjects.detailPageOwnProjectss && data.dataOwnProjects.detailPageOwnProjectss.length > 0) {
        cms = data.dataOwnProjects.detailPageOwnProjectss[0];
        previousPage = 'eigen-projectjes';
    } else if (data.dataGameArt.detailPageGameArts && data.dataGameArt.detailPageGameArts.length > 0) {
        cms = data.dataGameArt.detailPageGameArts[0];
        previousPage = 'game-art';
    }

    let images = cms.image.slice(0, -1);

    let pdfLink = cms.pdf ? cms.pdf : null;

    let popoverImage = '';

    function showPopover(imageUrl) {
        popoverImage = imageUrl;
    }
        
    // Add event listeners on mount
    onMount(() => {
        const leftButton = document.querySelector('.left-button');
        const rightButton = document.querySelector('.right-button');

        leftButton.addEventListener('click', () => scrollCarousel('left'));
        rightButton.addEventListener('click', () => scrollCarousel('right'));

        const fullscreenButtons = document.querySelectorAll('.fullscreen-button');
        fullscreenButtons.forEach((button, index) => {
            button.addEventListener('click', () => showPopover(images[index].url));
        });
    });

    // Function to scroll the carousel
    function scrollCarousel(direction) {
        const carousel = document.querySelector('.carousel');
        const scrollAmount = carousel.clientWidth;
        if (direction === 'left') {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (direction === 'right') {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
</script>

<Header 
    headerTitle="{cms.title}"
    headerSubtitle=""
/>

<main>
    <article>
        <div class="desktop-left">
            <a class="previous-page" href="/{previousPage}">Terug naar overzicht</a>
            <div class="text">
                <h2>{cms.subtitle}</h2>
                <time datetime="{cms.date}">{cms.date}</time>
            </div>
            <p>{cms.description}</p>

        <section class="final">
            <img src="{cms.image[cms.image.length - 1].url}" alt="" height="{cms.image[cms.image.length - 1].height}" width="{cms.image[cms.image.length - 1].width}" loading="lazy" decoding="async">
            <h3>{cms.imageTitle[cms.imageTitle.length - 1]}</h3>
        </section>
        </div>

        <div class="desktop-right">
            <section class="carousel-wrapper">
                <button class="left-button">
                    <img src="/assets/carousel-button.svg" alt="" class="left">
                </button>
                <section class="carousel">
                    <ul>
                        {#each images as img, index}
                            <li> 
                                <div class="carousel-image">
                                    <img src="{img.url}" alt="" height="{img.height}" width="{img.width}" loading="lazy" decoding="async">
                                    <button class="fullscreen-button" popovertarget="fullscreenImage"><img src="/assets/fullscreen.svg" alt=""></button>
                                </div>
                                <h3>{cms.imageTitle[index]}</h3>
                            </li>
                        {/each}
                        {#if pdfLink && pdfLink.length > 0}
                            {#each pdfLink as pdf}
                                <li>
                                    <a href="{pdf.url}" download target="_blank" class="pdf"> Open PDF </a>
                                    <h3>pdf</h3>
                                </li>
                            {/each}
                        {/if}
                    </ul>
                </section>
                <button class="right-button">
                    <img src="/assets/carousel-button.svg" alt="" class="right">
                </button>
            </section>
        </div>
    </article>

    <picture id="fullscreenImage" popover=manual>
        <div>
            <button popovertarget="fullscreenImage" popovertargetaction="hide" class="close-fullscreen-button"><img src="/assets/close-fullscreen.svg" alt=""></button>
            <img src="{popoverImage}" alt="">
        </div>
    </picture>

</main>

<style lang="scss">

    article{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        height: 100%;
    }

    .desktop-left, .desktop-right{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .desktop-left{
        p{
            max-width: 40rem;
            padding-bottom: 1rem;
        }
    }

    .previous-page{
            background-color: var(--lightmode-accent-color);
            padding: .5rem 1rem;
            border-radius: var(--card-border-radius);
            align-self: start;
            text-decoration: none;
    }

    .text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .carousel-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;

        .carousel{
            display: flex;
            justify-content: center;
            flex-direction: column;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            width: 20rem;

                ul{
                display: flex;
                list-style-type: none;
                gap: 2rem;

                    li {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        scroll-snap-align: start;
                        gap: 1rem;

                        img {
                            object-fit: contain;
                            width: 20rem;
                            max-height: 20rem;
                        }

                        .pdf{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 20rem;
                            max-height: 20rem;
                            height: 100%;
                            background-color: var(--lightmode-accent-color);
                        }

                        h3{
                            padding-bottom: 1rem;
                        }

                    }
                }
        }
    }

    .fullscreen-button, .close-fullscreen-button{
        display: none;
    }

    .final{
        display: flex;
		justify-content: center;
		flex-direction: column;
        align-items: center;
        gap: 1rem;

            img{
                object-fit: cover;
                width: 20rem;
                height: 100%;
                border-radius: var(--card-border-radius);
            }
    }

    @media (min-width: 650px) {
        article{
            flex-direction: row;

            .desktop-left, .desktop-right{
                width: 50%;
            }

            .desktop-left{
                .text {
                    display: flex;
                    justify-content: flex-start;
                    gap: 1rem;
                }

                .final{
                    align-self: flex-start;
                        img{
                            width: 100%;
                            max-width: 40rem;
                            max-height: 25rem;
                        }
                }
            }

            .desktop-right {
                .carousel-wrapper {
                    height: 100%;
                    width: 100%;

                    .carousel {
                        height: 100%;
                        width: 100%;

                        ul {
                            width: 100%;
                        }

                        li {
                            flex: 0 0 100%;

                            img {
                                width: 100%;
                                max-height: 25rem;
                            }

                            .pdf{
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                height: 100%;
                                width: 75%;
                                max-height: 25rem;
                                background-color: var(--lightmode-accent-color);
                            }

                            h3 {
                                padding-bottom: 1rem;
                            }
                        }
                    }
                }
            }
        }
}

@media (min-width: 1000px) {
    .carousel-image{
        position: relative;
        display: flex;
        flex-direction: column;
    }

    [popover]:popover-open{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);

        div{
            height: 75%;
            width: auto;
            display: flex;
            flex-direction: column;
            position: relative;

            img{
                object-fit: contain;
                max-height: 100%;
            }
        }
    }

    .fullscreen-button, .close-fullscreen-button{
        display: block;
        background-color: var(--lightmode-background-color);
        position: absolute;
        align-self: flex-end;

        img{
            width: 2rem;
            height: 2rem;
        }
    }
}

</style>