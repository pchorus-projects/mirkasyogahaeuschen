<script setup lang="ts"></script>

<template>
  <div>
    <main class="main">
      <NuxtPage />
    </main>

    <KontaktSection id="kontakt" />

    <MainNavigation class="navigation" :is-footer="true" />

    <footer class="footer">
      <div class="footer__social-links">
        <a
          class="footer__social-link"
          href="https://www.instagram.com/yogahaeuschen_aachen"
          target="_blank"
          rel="noopener"
        >
          <NuxtImg class="footer__social-link-image" src="logos/instagram.svg" alt="Instagram" :immediate="true" />
        </a>
        <a
          class="footer__social-link"
          href="https://www.facebook.com/mirkasyogahaeuschen"
          target="_blank"
          rel="noopener"
        >
          <NuxtImg class="footer__social-link-image" src="logos/facebook.svg" alt="Facebook" :immediate="true" />
        </a>
        <a class="footer__social-link" href="mailto:mirka@mirkasyogahaeuschen.de">
          <NuxtImg class="footer__social-link-image" src="logos/email.svg" alt="E-Mail" :immediate="true" />
        </a>
      </div>
      <NuxtLink to="/impressum-und-datenschutz" class="footer__imprint">Impressum | Datenschutz</NuxtLink>
      <span class="footer__copyright">© Mirkas Yogahäuschen</span>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@use './assets/variables';

.navigation {
  padding: variables.$space-m;
}

.footer {
  color: variables.$font-color-white;
  background-color: variables.$background-color-dark;
  font-size: variables.$font-size-l;
  padding: variables.$space-l;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: variables.$space-xxs;
    margin-bottom: variables.$space-xxs;
  }

  &__social-link {
    display: block;
    width: variables.$space-l;
  }

  &__social-link-image {
    width: 100%;
  }

  &__imprint {
    color: variables.$font-color-white;
    text-transform: uppercase;
    font-size: variables.$font-size-m;
    margin-bottom: variables.$space-m;
  }

  &__copyright {
    text-transform: uppercase;
    font-size: variables.$font-size-m;
  }
}
</style>
