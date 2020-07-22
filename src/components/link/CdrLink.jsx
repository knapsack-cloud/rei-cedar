import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import space from '../../mixins/space';
import style from './styles/CdrLink.scss';

export default {
  name: 'CdrLink',
  mixins: [
    modifier,
    space,
  ],
  props: {
    inset: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'a',
    },
    href: {
      type: String,
      default: '#',
    },
    inheritColor: {
      type: Boolean,
      default: false,
    },
    /** @ignore */
    target: String,
    /** @ignore */
    rel: String,
  },
  data() {
    return {
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-link';
    },
    computedRel() {
      if (this.target === '_blank') {
        return this.rel || 'noopener noreferrer';
      }
      return this.rel;
    },
    inheritColorClass() {
      return this.inheritColor ? this.style['cdr-link--inherit-color'] : '';
    },
    insetClass() {
      return this.tag === 'button' && this.inset ? this.style['cdr-link--inset'] : '';
    },
  },
  render() {
    const Component = this.tag;
    return (<Component
      class={clsx(
        this.style[this.baseClass],
        this.modifierClass,
        this.insetClass,
        this.space,
        this.inheritColorClass,
      )}
      target={this.target}
      rel={this.computedRel}
      href={this.tag === 'a' ? this.href : null}
      {...{ on: this.$listeners }}
    >
      {this.$slots.default || this.href}
    </Component>);
  },
};
