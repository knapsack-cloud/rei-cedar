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
    :class="mapClasses(style,'cdr-rating__star', sizeClass)"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="style['cdr-rating__star--empty']"
      d="M12.1744 17.7643L11.9729 17.6359L11.7714 17.7643L6.3805 21.1984L7.81459
      14.6842L7.86109 14.4729L7.70153 14.3269L2.85265 9.88945L9.22174 9.31203L9.45038
      9.29131L9.53589 9.07825L11.9729 3.00672L14.4099 9.07825L14.4954 9.29131L14.7241
      9.31203L21.0931 9.88945L16.2443 14.3269L16.0847 14.4729L16.1312 14.6842L17.5653
      21.1984L12.1744 17.7643Z"
      stroke-width="0.75"
    />
    <path
      :class="style['cdr-rating__star--partial-fill']"
      d="M8.23125 14.3532L3.64978 10.1568L9.68773 9.60764L11.9729 3.91833L14.258
      9.6103V18.7978L11.9757 17.2303L6.88225 20.5089L8.23125 14.3532Z"
    />
    <path
      :class="style['cdr-rating__star--partial-stroke']"
      d="M14.0201 9.18207L14.0201 19.0141"
      stroke-width="0.75"
    />
    <path
      :class="style['cdr-rating__star--partial-stroke']"
      d="M14.3948 9.37474H13.9952L11.97 4.3423L9.79589 9.76077L4.01172 10.2823L8.40741
      14.292L7.12052 20.1371L11.97 17.0486L13.8259 18.2204"
      stroke-width="1.75"
    />
  </svg>
</template>

<style lang="scss" module src="../styles/CdrRating.module.scss">
</style>
