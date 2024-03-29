<template>
  <div class="shop-wrapper">
    <LogoCircle />

    <div class="form-content">
      <h1>Customer details</h1>
      <Form :submitData="submitData">
        <FormItem
          placeholder="Emma Dearborn"
          v-bind:label="form.name.label"
          v-bind:value.sync="form.name.value"
          v-bind:type="form.name.type"
        />
        <FormItem
          placeholder="emma.dearborn@oneacre.online"
          v-bind:label="form.email.label"
          v-bind:value.sync="form.email.value"
          v-bind:type="form.email.type"
        />
        <FormItem
          placeholder="Mainstreet"
          v-bind:label="form.address.label"
          v-bind:value.sync="form.address.value"
          v-bind:type="form.address.type"
        />
        <FormItem
          placeholder="231A"
          v-bind:label="form.number.label"
          v-bind:value.sync="form.number.value"
          v-bind:type="form.number.type"
        />
        <FormItem
          placeholder="1234 AB"
          v-bind:label="form.postalcode.label"
          v-bind:value.sync="form.postalcode.value"
          v-bind:type="form.postalcode.type"
        />
        <FormItem
          placeholder="The Hague"
          v-bind:label="form.city.label"
          v-bind:value.sync="form.city.value"
          v-bind:type="form.city.type"
        />
        <FormItem class="country" v-bind:label="form.country.label">
          <v-select
            label="name"
            v-model="form.country.value"
            :options="countries"
          />
        </FormItem>
        <ProductList
          :country="form.country"
          :city="form.city"
          :shippingRates="rates"
          v-bind:pricing.sync="pricing"
        />
      </Form>
    </div>
  </div>
</template>

<script>
// TODO: Name should be First name + Last name
// TODO: House number

import LogoCircle from '~/components/S2/identity/LogoCircle.vue'
import ProductList from '~/components/S2/shop/ProductList'
import FormItem from '~/components/S2/shop/FormItem'
import Form from '~/components/S2/shop/Form'
import * as _ from 'lodash'

export default {
  components: {
    LogoCircle,
    Form,
    FormItem,
    ProductList,
  },
  data() {
    return {
      form: {
        name: {
          label: 'Full Name',
          type: 'text',
          value: '',
        },
        email: {
          label: 'Email',
          type: 'email',
          value: '',
        },
        address: {
          label: 'Address',
          type: 'text',
          value: '',
        },
        number: {
          label: 'House number',
          type: 'text',
          value: '',
        },
        city: {
          label: 'City',
          type: 'text',
          value: '',
        },
        postalcode: {
          label: 'Postal Code',
          type: 'text',
          value: '',
        },
        country: {
          label: 'Country',
          value: { iso: '', name: '' },
          type: 'vue-select',
        },
      },
      countries: [],
      rates: {},
      pricing: {
        vat: 0,
        shipping: 0,
        total: 0,
        productTotal: 0,
      },
    }
  },
  async asyncData({ $axios }) {
    try {
      const countries = await $axios.$get('/shop/shipping/countries')
      const rates = await $axios.$get('/shop/shipping/rates')
      return {
        countries,
        rates,
      }
    } catch (err) {
      console.log(err)
    }
  },
  computed: {
    submitData() {
      const customer = {}

      _.forEach(this.form, (item, key) => {
        customer[key] = item.value
      })

      return {
        ...customer,
        products: this.products,
        pricing: this.pricing,
        redirectUrl: '/more/success',
      }
    },
    products() {
      return this.$store.state.shop.products
    },
  },
}
</script>

<style lang="scss" scoped>
.shop-wrapper {
  width: 100%;
  max-width: 1600px;
  padding: 2rem 2rem 6rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 15rem minmax(min-content, 80rem);
  grid-gap: 4rem;
  align-items: flex-start;
  justify-content: center;
  @include respond-until($screen-lg) {
    grid-gap: 3rem;
  }
  @include respond-until($screen-md) {
    grid-template-columns: 12.5rem minmax(min-content, 80rem);
  }
  @include respond-until($screen-sm) {
    grid-template-columns: 1fr;
    padding: 0 2rem 6rem;
  }
  @include respond-until($screen-xs) {
    padding: 0 1rem 6rem;
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
    margin: 0;
    @include respond-until($screen-lg) {
      font-size: 5.5rem;
    }
    @include respond-until($screen-md) {
      font-size: 5rem;
    }
    @include respond-until($screen-sm) {
      width: 60%;
      padding-bottom: 0;
    }
    @include respond-until($screen-xs) {
      font-size: 4rem;
    }
  }
  .form-content {
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 4rem;
    border-top: 1px solid;
    padding-top: 0.75rem;
    @include respond-until($screen-sm) {
      border-top: 0;
      padding-top: 10vh;
    }
  }
}
</style>
