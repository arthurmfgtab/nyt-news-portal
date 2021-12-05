<template>
    <footer>
        <div class="footer-left">
            <h2 data-test="footer-logo">Vue <span>News</span></h2>
            <p data-test="copyright">&copy; Copyright 2000-2021 Vue News.</p>
        </div>
        <div class="footer-right">
            <ul>
                <li><p data-test="section-top-viewed">Top Viewed</p></li>
                <li><p data-test="section-us">United States</p></li>
                <li><p data-test="section-science">Science</p></li>
                <li><p data-test="section-arts">Arts</p></li>
                <li><p data-test="section-world">World</p></li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>
footer {
    display: flex;
    background-color: var(--primary-color);
    height: 7rem;
    padding: 0.7rem 5rem;
}

.footer-left {
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.footer-left h2 {
    font-weight: 300;
    font-size: 2rem;
}

.footer-left h2 span {
    font-weight: 700;
}

.footer-left p,
.footer-right p {
    font-size: 0.85rem;
    letter-spacing: 0.09rem;
}

.footer-right {
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.footer-right ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
}

.footer-right li {
    cursor: pointer;
}

.footer-right li:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-out;
}

.footer-right li:not(:last-of-type) {
    margin-right: 1rem;
}

@media only screen and (max-width: 1020px) {
    .footer-right li:not(:last-of-type) {
        margin-right: 0.7rem;
    }

    .footer-right li p {
        font-size: 0.75rem;
    }
}

@media only screen and (max-width: 900px) {
    .footer-right li:not(:last-of-type) {
        margin-right: 0.5rem;
    }

    .footer-right li p {
        font-size: 0.7rem;
    }
}

@media only screen and (max-width: 800px) {
    .footer-right {
        display: none;
    }
}

@media only screen and (max-width: 600px) {
    footer {
        padding: 0.7rem 2rem;
    }
}
</style>
