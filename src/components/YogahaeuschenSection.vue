<template>
  <section>
    <h2 class="u-heading">Mirka & das Yogahäuschen</h2>
    <div class="illustration">
      <g-image class="illustration__image" src="@/assets/images/mirka-by-the-sea.svg" :immediate="true"></g-image>
    </div>
    <p class="image-subtitle">
      "When you do things from your soul, you feel a river moving in you. Listen to your soul, trust your heart, feel,
      believe, ..."
    </p>
    <p class="text">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
      duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis
      autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
      nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
      duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.illustration {
  text-align: center;

  &__image {
    width: 100%;
    max-width: 1090px;
  }
}

.image-subtitle {
  text-align: center;
  padding: $space-m $space-xl;
}

.text {
  padding: 0 $space-xl $space-xl $space-xl;
}
</style>
