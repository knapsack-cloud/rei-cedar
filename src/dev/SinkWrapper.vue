<template>
  <div
    :class="backgroundClass"
  >
    Toggle background color:
    <cdr-radio
      v-for="bg in backgrounds"
      :custom-value="bg"
      :key="bg"
      name="background"
      v-model="background"
      class="background-toggle"
    >
      {{ capitalize(bg) }}
    </cdr-radio>
    <slot />
  </div>
</template>

<script>

import { CdrRadio } from 'srcdir/lib';
import { upperFirst } from 'lodash-es';

export default {
  name: 'SinkWrapper',
  components: {
    CdrRadio,
  },
  data() {
    return {
      background: this.$route.query.background || 'primary',
      backgrounds: [
        'primary', 'secondary',
        //  'success', 'info', 'warning', 'error',
        'brand',
      ],
    };
  },
  computed: {
    backgroundClass() {
      return `background-${this.background}`;
    },
  },
  watch: {
    background() {
      this.$router.replace({
        path: this.$route.path,
        query: {
          background: this.background,
        },
      });
    },
  },
  methods: {
    capitalize(str) {
      return upperFirst(str);
    },
  },
};
</script>

<style>
.background-toggle {
  display: inline-block;
  margin: 0 8px;
}

</style>
