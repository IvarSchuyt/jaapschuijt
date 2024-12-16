<footer>
    <ul>
        <li>
            <img src="" alt="">
            <a href="">email</a>
        </li>
    </ul>
</footer>

<style lang="scss">

footer{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: fit-content;
    height: 5rem;

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--card-border-radius);
        background-color: var(--lightmode-accent-color);
        gap: 1rem;
        width: fit-content;
        padding: .5rem;

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .5rem;

            a{
            display: flex;
            gap: .5rem;
            align-items: center;
            text-decoration: none;
            color: var(--lightmode-text-color);
            }

        }
    }
}

</style>