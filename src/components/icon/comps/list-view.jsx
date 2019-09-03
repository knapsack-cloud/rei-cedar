
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconListView',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M4 3h2c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1H4c-.55228475 0-1-.44771525-1-1V4c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1H4c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1zm0 7h2c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1H4c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1zm6-13h10c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H10c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h10c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1H10c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm0 7h10c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1H10c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1z"></path>
    </cdr-icon>)
  },
};
