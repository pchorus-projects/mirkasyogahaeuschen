<template>
  <div>
    <main class="main">
      <slot />
    </main>

    <Navigation class="navigation" :is-footer="true"></Navigation>

    <footer class="footer">
      <div class="footer__social-links">
        <a
          class="footer__social-link"
          href="https://www.instagram.com/mirkasyogahaeuschen"
          target="_blank"
          rel="noopener"
        >
          <g-image
            class="footer__social-link-image"
            src="@/assets/logos/instagram.svg"
            alt="Instagram"
            :immediate="true"
          >
          </g-image>
        </a>
        <a
          class="footer__social-link"
          href="https://www.facebook.com/mirkasyogahaeuschen"
          target="_blank"
          rel="noopener"
        >
          <g-image class="footer__social-link-image" src="@/assets/logos/facebook.svg" alt="Facebook" :immediate="true">
          </g-image>
        </a>
        <a class="footer__social-link" href="mailto:mirka.carlsen@mirkasyogahaeuschen.de">
          <g-image class="footer__social-link-image" src="@/assets/logos/email.svg" alt="E-Mail" :immediate="true">
          </g-image>
        </a>
      </div>
      <span class="footer__copyright">© Mirkas Yogahäuschen</span>
    </footer>
  </div>
</template>

<script>
import Navigation from '../components/Navigation';

export default {
  components: { Navigation },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.navigation {
  padding: $space-m;
}

.footer {
  color: $font-color-white;
  background-color: $background-color-dark;
  font-size: $font-size-l;
  padding: $space-l;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $space-s;
    margin-bottom: $space-s;
  }

  &__social-link {
    display: block;
    width: $space-l;
  }

  &__social-link-image {
    width: 100%;
  }

  &__copyright {
    text-transform: uppercase;
    font-size: $font-size-m;
  }
}
</style>
