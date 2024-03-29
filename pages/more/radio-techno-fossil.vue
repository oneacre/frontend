<template>
<div class="shop-wrapper">
  <div class="shop-side">
    <LogoCircle />
    <PurchaseButton :product="product"/>
  </div>

  <div class="product">
    <!-- Title -->
    <h1>More by <span>Sophie Dyer</span></h1>

    <!-- Description -->
    <ProductDescription>
      <h4>Description</h4>
      <p>Since 2013, Concrete Flux 流泥 has been a platform for self-determined and unsolicited investigations into urban spaces across China. For Issue 5 we shift focus from the region to explore the possibilities of aesthetic journalism. The
        micro-issue inaugurates a new direction for the publishing project, towards a sustained investigation into experimental documentary practices that address new visualities and vocabularies. Around this theme, we have gathered dissatisfied
        journalists, amateur filmmakers, former student leaders, poets and community activists. The resulting articles are experiments in aesthetic journalism as media activism – through a restructuring of the “sensuous parameters of reality
        itself”. (Bulter, 2010)</p>
    </ProductDescription>

    <!-- Images -->
    <ProductImages>
      <h4>Images</h4>
      <div class="image-content">
        <figure>
          <img src="~/assets/shop/concrete-flux/concrete-flux-01.jpg">
        </figure>
        <figure>
          <img src="~/assets/shop/concrete-flux/concrete-flux-02.jpg">
        </figure>
        <figure>
          <img src="~/assets/shop/concrete-flux/concrete-flux-03.jpg">
        </figure>
      </div>
    </ProductImages>

    <!-- Specifications -->
    <ProductSpecs>
      <h4>Information</h4>
      <ul class="info-section">
        <li>
          <p>Title</p>
          <p>Concrete Flux: Issue 5 Aesthetic Journalism</p>
        </li>
        <li>
          <p>Size</p>
          <p>210 x 297 mm</p>
        </li>
        <li>
          <p>Languague</p>
          <p>Simplified Chinese/English</p>
        </li>
        <li>
          <p>Contributors</p>
          <p>Franco ‘Bifo’ Berardi, Alfredo Cramerotti, Ana Naomi de Sousa and Twist Qu</p>
        </li>
        <li>
          <p>Editors</p>
          <p>Sophie Dyer and Solveig Suess</p>
        </li>
        <li>
          <p>Special Editors</p>
          <p>Ifor Duncan and Yugong 宫羽</p>
        </li>
        <li>
          <p>Translation</p>
          <p>Ceres Shi 时苒析, Yugong 宫羽 and Jennifer Zhang 张萃</p>
        </li>
        <li>
          <p>Proofing</p>
          <p>Miranda Johnson, Nicola Locatelli and Kevin Xing 邢凯新</p>
        </li>
        <li>
          <p>Price</p>
          <p>€3 / £3 / 30元 + VAT + Shipping</p>
        </li>
        <li>
          <p>More info</p>
          <p><a target="_blank" href="http://concreteflux.com">http://concreteflux.com</a></p>
        </li>
        <li>
          <p>Image credit</p>
          <p>Concrete Flux 流泥 CC BY</p>
        </li>
      </ul>
    </ProductSpecs>
  </div>
</div>
</template>

<script>
import LogoCircle from '~/components/S2/identity/LogoCircle.vue'
import ProductDescription from '~/components/S2/shop/ProductDescription.vue'
import ProductImages from '~/components/S2/shop/ProductImages.vue'
import ProductSpecs from '~/components/S2/shop/ProductSpecs.vue'
import PurchaseButton from '~/components/S2/shop/PurchaseButton.vue'

export default {
  components: {
    ProductDescription,
    ProductImages,
    ProductSpecs,
    LogoCircle,
    PurchaseButton,
  },
  data() {
    return {
      product: {
        name: 'Concrete Flux: Issue 5 Aesthetic Journalism',
        price: 3,
        quantity: 1,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-wrapper {
    width: 100%;
    max-width: 1600px;
    padding: 2rem 2rem 4rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: fit-content(15rem) fit-content(80rem);
    grid-gap: 4rem;
    align-items: flex-start;
    justify-content: center;
    @include respond-until($screen-lg) {
        grid-gap: 3rem;
    }
    @include respond-until($screen-md) {
        grid-template-columns: fit-content(12.5rem) fit-content(80rem);
    }
    @include respond-until($screen-sm) {
        grid-template-columns: 1fr;
        padding: 0 2rem 10rem;
    }
    @include respond-until($screen-xs) {
        padding: 0 1rem 10rem;
    }

    .shop-side {
        height: calc(100vh - 2rem);
        position: sticky;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        top: 2rem;
        padding: 0 0 2rem;
        @include respond-until($screen-sm) {
            top: 0;
            height: auto;
        }
    }

    .product {
        display: grid;
        grid-auto-rows: auto;
        grid-gap: 6rem;
        padding-top: 1rem;
        border-top: 1px solid;
        @include respond-until($screen-sm) {
            border-top: 0;
            padding-top: 15vh;
            grid-gap: 4rem;
        }
        h1 {
            width: 100%;
            font-size: 6rem;
            font-family: $font-nova;
            line-height: 1em;
            padding-bottom: 4rem;
            text-transform: lowercase;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            color: rgba($black,0.25);
            margin: 0;
            @include respond-until($screen-lg) {
                font-size: 5.5rem;
            }
            @include respond-until($screen-md) {
                font-size: 5rem;
            }
            @include respond-until($screen-sm) {
                padding-bottom: 0;
            }
            @include respond-until($screen-xs) {
                font-size: 4rem;
            }

            span {
                color: $black;
            }
        }

        section {
            border-top: 1px solid;
            padding-top: 0.75rem;
            padding-bottom: 2rem;
            h4 {
                margin: 0;
                font-size: 1rem;
                line-height: 1em;
                text-transform: uppercase;
                letter-spacing: 2px;
                padding-bottom: 2rem;
                @include respond-until($screen-xs) {
                    padding-bottom: 2.5rem;
                }
            }
        }
    }
}
</style>
