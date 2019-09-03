
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconXFill',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M12 22C6.4771525 22 2 17.5228475 2 12S6.4771525 2 12 2s10 4.4771525 10 10-4.4771525 10-10 10zm1.4061423-9.9944425l3.2972044-3.29508076c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0l-3.2968194 3.29469613-3.28520692-3.29469613c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0-.39052429.3905243-.39052429 1.02368927 0 1.41421357l3.28482218 3.29431116-3.28482218 3.2886203c-.39052429.3905243-.39052429 1.0236893 0 1.4142136.39052429.3905242 1.02368927.3905242 1.41421356 0l3.28443732-3.2882356 3.297589 3.2882356c.3905243.3905242 1.0236893.3905242 1.4142136 0 .3905243-.3905243.3905243-1.0236893 0-1.4142136l-3.2972044-3.2878507z"></path>
    </cdr-icon>)
  },
};
