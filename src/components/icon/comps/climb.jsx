import CdrIcon from '../CdrIcon';
export default {
  name: 'IconClimb',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <path d="M19.24 11.306a1 1 0 01.729 1.212l-1.078 3.979a1 1 0 01-1.212.728l-.51-.127c-.182.61-.377 1.244-.585 1.902a5.001 5.001 0 01-9.12.106c-1.992-4.486-3.142-8.23-3.451-11.232A5.5 5.5 0 019.5 2c1.205 0 3.043.237 5.513.71A5.502 5.502 0 0119 8c0 .85-.115 1.903-.346 3.16l.587.146h-.001zM17 8a3.502 3.502 0 00-2.46-3.343C12.233 4.217 10.536 4 9.5 4a3.5 3.5 0 00-3.493 3.721c.293 2.755 1.383 6.29 3.27 10.542a3 3 0 005.436.02c.182-.576.353-1.132.513-1.67l-.458-.113a1 1 0 01-.728-1.213l1.078-3.979a1 1 0 011.212-.728l.38.095C16.904 9.597 17 8.703 17 8zm-.76 6.806l.97.242.555-2.049-.97-.241-.555 2.048z"></path>
    </cdr-icon>)
  },
};
