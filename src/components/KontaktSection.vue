<template>
  <section class="kontakt-section">
    <g-image
      class="kontakt-section__image"
      src="@/assets/images/kontakt.jpg"
      alt="Mirka liegt auf einem Baum"
    ></g-image>

    <g-image
      class="kontakt-section__logo"
      src="@/assets/logos/mirkas-yogahaeuschen.svg"
      alt="Mirka liegt auf einem Baum"
      :immediate="true"
    ></g-image>

    <p class="kontakt-section__saying">
      Yoga is like an instrument that you play<br />
      and sink deeper and deeper into your own melody,<br />
      into your deepest being.
    </p>

    <p class="u-uppercase">Kontakt</p>
    <p class="kontakt-section__kontakt">
      <a class="kontakt-section__link" href="mailto:mirka@mirkasyogahaeuschen.de">mirka@mirkasyogahaeuschen.de</a>
      | Landgraben 65,52072 Aachen
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.kontakt-section {
  position: relative;
  color: $font-color-white;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );

  &__image {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
    z-index: -1;
  }

  &__logo {
    padding-top: 240px;
    width: 240px;
  }

  &__saying {
    font-family: $font-family-header-default;
    font-size: $font-size-xl;
    text-align: center;
    margin-top: $space-m;
    margin-bottom: $space-xl;
  }

  &__kontakt {
    font-size: $font-size-m;
    margin-bottom: $space-xl;
    text-align: center;
    text-transform: uppercase;
  }

  &__link {
    color: $font-color-white;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: $max-width-tablet) {
  .kontakt-section {
    &__saying {
      font-size: $font-size-l;
    }

    &__kontakt {
      font-size: $font-size-s;
    }
  }
}
</style>
