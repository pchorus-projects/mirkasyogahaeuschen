<template>
  <div>
    <main class="main">
      <slot />
    </main>

    <KontaktSection id="kontakt"></KontaktSection>

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
        <a class="footer__social-link" href="mailto:mirka@mirkasyogahaeuschen.de">
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
import KontaktSection from '../components/KontaktSection';

export default {
  components: { KontaktSection, Navigation },
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
    gap: $space-xs;
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
