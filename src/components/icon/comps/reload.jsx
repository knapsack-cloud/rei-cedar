
import { CdrIcon } from '../CdrIcon';

export default {
  name: 'IconReload',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M8.3923883 6.00001512C9.44593659 5.36518597 10.6803214 5 12 5c3.8659932 0 7 3.13400675 7 7 0 3.8659932-3.1340068 7-7 7-3.86599325 0-7-3.1340068-7-7 0-.5522847-.44771525-1-1-1s-1 .4477153-1 1c0 4.9705627 4.02943725 9 9 9 4.9705627 0 9-4.0294373 9-9 0-4.97056275-4.0294373-9-9-9-1.8499736 0-3.56958018.55816721-4.99959862 1.51528038v-.51896534C6.99799938 3.44572561 6.55104942 3 5.99999468 3 5.44771287 3 5 3.44771287 5 3.99999468c0 .00646318.00013734-1.71711704.00041202 2.97124456-.00759826.26543115.08989495.53331132.29247964.73589601.19338945.19338945.44628142.29101103.69974374.29286475l3.00736992-.00000532C9.55228713 7.99999468 10 7.55228181 10 7s-.44771287-.99999468-.99999468-.99999468l-.60761702.0000098z"></path>
    </cdr-icon>)
  },
};