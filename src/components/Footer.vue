<script setup>

</script>

<template>
    <footer class="footer">
        <p class="footer__copyright">&copy; 2026 Travel diary</p>
    </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;

.footer {
    box-sizing: border-box;
    min-height: 74px;
    margin-top: auto;
}

.footer__copyright {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.2;
    color: $gray;
    padding-top: 50px;
    padding-bottom: 36px;
    padding-left: 19px;
    margin: 0;
}

@media screen and (min-width: 1024px) {
    .footer__copyright {
        padding-left: 0;
        padding-bottom: 60px;
        padding-top: 68px;
        font-size: 18px;
        line-height: 1.22;
    }
}
</style>
