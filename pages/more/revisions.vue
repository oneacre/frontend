<template>
  <div class="shop-wrapper">
    <div class="shop-side">
      <LogoCircle />
      <PurchaseButton v-if="product" :product="product" />
    </div>

    <div class="product">
      <!-- Title -->
      <h1>More by <span>George Knegtel</span></h1>

      <!-- Description -->
      <ProductDescription>
        <h4>Description</h4>
        <p>
          ‘Revisions’ is a visual exploration into The Diagnostic and
          Statistical Manual of Mental Disorders (often referred to as DSM), a
          critical tool used in classifying and standardising mental disorders
          since its original publication in 1952. By focusing on the simplistic
          and rigid design of the DSM manual bookcovers, the images reflect on
          the psychiatric efforts of conceptualising and continuously revising a
          universal systemic framework that captures the boundaries between
          normality and abnormality
        </p>
        <p>
          The print captures the cover of the 5th edition of the Diagnostic and
          Statistical Manual of Mental Disorders (DSM-5) and its 11 companion
          guides DSM-5 Classification, DSM-5 Handbook on the Cultural
          Formulation Interview, DSM-5 Pocket Guide for Child and Adolescent
          Mental Health, Study Guide to DSM-5, DSM-5 Clinical Cases, DSM-5
          Guidebook, DSM-5 Handbook of Differential Diagnosis, DSM-5 Self-Exam
          Questions, Desk Reference to the Diagnostic Criteria From DSM-5,
          Pocket Guide to the DSM-5 Diagnostic Exam.
        </p>
      </ProductDescription>

      <!-- Images -->
      <ProductImages>
        <h4>Images</h4>
        <div class="image-content portrait">
          <figure>
            <img src="~/assets/shop/revisions/revisions-01.jpg" />
          </figure>
        </div>
      </ProductImages>

      <!-- Specifications -->
      <ProductSpecs>
        <h4>Information</h4>
        <ul class="info-section">
          <li>
            <p>Title</p>
            <p>Revisions</p>
          </li>
          <li>
            <p>Artist</p>
            <p>George Knegtel</p>
          </li>
          <li>
            <p>Format</p>
            <p>A4 Digital Print</p>
          </li>
          <li>
            <p>Price</p>
            <p>€10 + VAT + Shipping</p>
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
        name: 'Revisions',
        price: 10,
        quantity: 1,
      },
    }
  },
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
    padding: 0 2rem 10rem;
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

    .shop-purchase {
      border-top: 1px solid;
      padding-top: 0.75rem;
      margin-top: 4rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @include respond-until($screen-sm) {
        width: 100%;
        position: fixed;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        padding: 1rem 2rem 2rem;
        border-top: 0;
        background: $white;
        @include respond-until($screen-xs) {
          padding: 1rem 1rem 2rem;
        }

        &:before {
          content: '';
          width: calc(100% - 4rem);
          height: 1px;
          background: $black;
          position: absolute;
          top: 0;
          @include respond-until($screen-xs) {
            width: calc(100% - 2rem);
          }
        }
      }

      p {
        color: rgba($black, 0.4);
        font-size: 1.375rem;

        &.price {
          color: $black;
        }
      }

      a {
        width: 100%;
        padding: 1rem 1.5rem 0.875rem;
        line-height: 1em;
        text-transform: uppercase;
        color: $white;
        background: $black;
        letter-spacing: 2px;
        border-radius: 0.375rem;
        margin-top: 2rem;
        @include flex-center;
        @include respond-until($screen-sm) {
          margin-top: 1.5rem;
        }
        @include respond-until($screen-xs) {
          margin-top: 1rem;
        }
      }
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
      color: rgba($black, 0.25);
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

    &-images {
      img {
        border: 1px solid $grey;
      }
    }
  }
}
</style>
