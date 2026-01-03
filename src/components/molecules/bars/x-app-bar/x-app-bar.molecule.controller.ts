import { defineComponent } from 'vue';

export default defineComponent({
  name: 'XAppBarMolecule',
  props: {
    title: {
      type: String,
      default: '',
    },
    pluginIcon: {
      type: String,
      default: '',
    },
  },
  emits: ['toggle-nav'],
  setup(props, { emit }) {
    const toggleNav = () => {
      emit('toggle-nav');
    };

    return {
      toggleNav,
    };
  },
});
