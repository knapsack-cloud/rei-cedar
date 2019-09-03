
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconXLg',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M13.4152358 12.0055575l5.2948014-5.29192072c.3905243-.39052429.3905243-1.02368927 0-1.41421356-.3905243-.39052429-1.0236892-.39052429-1.4142135 0l-5.2944166 5.29153608-5.29192071-5.29480146c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0-.39052429.39052429-.39052429 1.02368927 0 1.41421356l5.29153607 5.2944165-5.29480145 5.2919208c-.3905243.3905243-.3905243 1.0236892 0 1.4142135.39052429.3905243 1.02368927.3905243 1.41421356 0l5.29441649-5.291536 5.2919208 5.2948014c.3905243.3905243 1.0236893.3905243 1.4142136 0 .3905242-.3905243.3905242-1.0236892 0-1.4142135l-5.2915361-5.2944166z"></path>
    </cdr-icon>)
  },
};
