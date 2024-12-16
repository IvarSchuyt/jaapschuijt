
<script>
    import { onMount } from 'svelte';

    onMount(() => {
    const detailsElement = document.querySelector('nav > details');

    function checkWindowSize() {
        if (window.innerWidth >= 650) {
        detailsElement.setAttribute('open', '');
        } else {
        detailsElement.removeAttribute('open');
        }
    }

    // Run once on mount
    checkWindowSize();

    // Update when window is resized
    window.addEventListener('resize', checkWindowSize);

    // Cleanup function
    return () => {
        window.removeEventListener('resize', checkWindowSize);
    };
    });

</script>
 
<nav>
     <details open>
        <summary>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="closed">
                <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opened">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
                
        </summary>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/archive">Archief</a></li>
            <li><a href="/cv">CV</a></li>
        </ul>
    </details>
</nav>

<style>

    nav{
        display: flex;
        justify-content: space-between;
        z-index: 3;
    }

    summary {
        list-style: none;
    }

    summary::-webkit-details-marker {
    display: none; 
    }

    ul{
        list-style: none;
        position: absolute;
        width: 100%;
        padding: 0.75em 0;
        top: 6rem;
        left: 0;
        background-color: var(--lightmode-background-color);
    }

    a{
        text-decoration: none;
        color: var(--lightmode-color);
        display: block;
        padding: 0.5rem 1rem;
        text-align: right;
        position: relative;
        font-weight: 600;
    }
    details:not([open]) .opened {
        display: none;
    }

    details[open] .closed {
        display: none;
    }


    @media  (min-width: 650px) {

        summary{
            display: none;
        }

        ul{
            display: flex;
            position: relative;
            top: 0;
            width: auto;
            align-items: center;
            background-color: var(--lightmode-accent-color);
            border-radius: var(--card-border-radius);
        }

        li{
            padding-right: none;
        }

        a::after{
            content: "";
            opacity: 0;
            background-color: var(--lightmode-text-color);
            transition: all 400ms ease-out;
            position: absolute;
            height: 2px;
            width: calc(100% - 1.5rem);
            left: 0;
            top: 2rem;
            box-sizing: border-box;
            transform: translateX(.75rem);
        }

        a:hover::after{
            opacity: .8;
        }
    }

</style>
