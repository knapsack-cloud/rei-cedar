<script setup lang="ts">
import mapClasses from '../../../utils/mapClasses';
import validateProp from "../../../utils/propValidator";
import { useStar } from '../composables/useStar';

const props = defineProps({
  size: {
      type: String,
      default: 'medium',
      validator: (value: string) => validateProp(
        value,
        ['small', 'medium', 'large'],
      ),
    },
})
const { style, sizeClass } = useStar(props.size);
</script>

<template>
  <svg
    :class="mapClasses(style, 'cdr-rating__star', sizeClass)"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="style['cdr-rating__star--empty']"
      d="M12.1744 17.7643L11.9729 17.6359L11.7714 17.7643L6.3805 21.1984L7.81459
      14.6842L7.8611 14.473L7.70153 14.3269L2.85265 9.88945L9.22174 9.31204L9.45038
      9.29131L9.53589 9.07825L11.9729 3.00672L14.4099 9.07825L14.4954 9.29131L14.7241
      9.31204L21.0931 9.88945L16.2443 14.3269L16.0847 14.473L16.1312 14.6842L17.5653
      21.1984L12.1744 17.7643Z"
      stroke-width="0.75"
    />
    <path
      :class="style['cdr-rating__star--partial-fill']"
      d="M3.64978 10.1548L9.3118 9.65756L11.9821 3.92165V17.2275L6.88225 20.5069L8.23125
      14.3512L3.64978 10.1548Z"
    />
    <path
      :class="style['cdr-rating__star--partial-stroke']"
      d="M11.9822 3.92163L11.9831 17.6424"
      stroke-width="0.75"
    />
    <path
      :class="style['cdr-rating__star--partial-stroke']"
      d="M11.3498 5.89038L9.79225 9.76097L4.01752 10.2828L8.406 14.2935L7.12489
      20.1383L12.0741 16.9881"
      stroke-width="1.75"
    />
    <path
      :class="style['cdr-rating__star--partial-stroke']"
      d="M11.9208 4.59326L11.3589 6.31024"
    />
  </svg>
</template>

<style lang="scss" module src="../styles/CdrRating.module.scss"></style>
