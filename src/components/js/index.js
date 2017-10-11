import Input from '../../items/InputItem';

export default {
  components: {
    't-input': Input,
  },
  data() {
    return {
      inputText: '',
      showInputBox: true,
      headerBoxHeight: 0,

      activeStar: false,
      largeStar: true,
      smallStar: false,

    };
  },
  computed: {
    getBGC() {
      return this.activeStar ? '#54afff' : '#ddeefd';
    },
  },
  created() {
    const self = this;
    let lastScroll = 0;

    window.onscroll = function () {
      const flag = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body.scrollTop;
      if (flag - lastScroll > 0 && flag > 0) {
        // down, flag > 0位了防止ios的橡皮筋效果造成输入框隐藏
        self.showInputBox = false;
      } else {
        // up
        self.showInputBox = true;
      }
      lastScroll = flag;
    };
  },
  mounted() {
    const self = this;
    if (document.documentElement.offsetHeight >= document.documentElement.clientHeight) {
      self.showInputBox = true;
    } else {
      self.showInputBox = false;
    }
    self.headerBoxHeight = document.getElementsByClassName('input-box')[0].clientHeight + 5;
  },
  methods: {
    onInputImp(e) {
      this.inputText = e.value;
    },
    starThis() {
      this.activeStar = !this.activeStar;
      setTimeout(() => {
        this.largeStar = !this.largeStar;
        this.smallStar = !this.smallStar;
      }, 500);
    },
  },
};
