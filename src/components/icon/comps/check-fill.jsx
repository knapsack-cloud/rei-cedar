import CdrIcon from '../CdrIcon';
export default {
  name: 'IconCheckFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.77-13.357a1 1 0 10-1.533-1.286l-5.95 7.083-1.52-1.817a1 1 0 00-1.533 1.285l2.227 2.66a.999.999 0 001.565.1l6.743-8.025z"></path>
    </cdr-icon>)
  },
};
