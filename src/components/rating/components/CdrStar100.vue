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
      :class="style['cdr-rating__star--filled']"
      d="M12.4389 17.3426L11.9688 17.0431L11.4986 17.3426L7.12363 20.1295L8.29875
      14.7917L8.40726 14.2988L8.03494 13.9581L4.02151 10.2852L9.26273 9.80999L9.79622
      9.76163L9.99576 9.2645L11.9688 4.34901L13.9417 9.2645L14.1413 9.76163L14.6748
      9.80999L19.916 10.2852L15.9026 13.9581L15.5302 14.2988L15.6388 14.7917L16.8139
      20.1295L12.4389 17.3426Z"
      stroke-width="1.75"
    />
  </svg>
</template>

<style lang="scss" module src="../styles/CdrRating.module.scss">
</style>
