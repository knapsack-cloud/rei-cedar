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
      d="M12.1699 17.7643L11.9684 17.6359L11.767 17.7643L6.37604 21.1984L7.81014
      14.6842L7.85664 14.473L7.69707 14.3269L2.8482 9.88945L9.21728 9.31204L9.44592
      9.29131L9.53144 9.07825L11.9684 3.00672L14.4055 9.07825L14.491 9.29131L14.7196
      9.31204L21.0887 9.88945L16.2398 14.3269L16.0803 14.473L16.1268 14.6842L17.5608
      21.1984L12.1699 17.7643Z"
      stroke-width="0.75"
    />
    <path
      :class="style['cdr-rating__star--filled']"
      d="M3.64532 10.1547L9.30735 9.65746V18.9355L6.87779 20.5068L8.2268 14.3511L3.64532 10.1547Z"
    />
    <path
      :class="style['cdr-rating__star--partial-stroke']"
      d="M9.60486 8.97247L9.60551 19.1315"
      stroke-width="0.75"
    />
    <path
      :class="style['cdr-rating__star--partial-stroke']"
      d="M9.44125 9.79321L4.01843 10.2804L8.40374 14.2981L7.11705 20.1342L9.78234 18.4339"
      stroke-width="1.75"
    />
  </svg>
</template>

<style lang="scss" module src="../styles/CdrRating.module.scss"></style>
