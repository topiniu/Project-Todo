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

      resData:
        {
          user: {
            name: 'topiniu',
            id: '98976',
          },
          list: [
            {
              id: '2016091602',
              createtime: '2016-09-16',
              content: '夜晚煮面记得打两个鸡蛋，小心油溅到身上了哦',
              started: true,
              finished: false,
              animateStarted: false,
            }, {
              id: '2016091682',
              createtime: '2016-09-16',
              content: '天气阴晴不定，一定要随身带把伞哦',
              started: false,
              finished: true,
              animateStarted: true,
            }, {
              id: '2016091658',
              createtime: '2016-09-16',
              content: '中午还吃烤肉饭吗，都吃不腻吗',
              started: false,
              finished: false,
              animateStarted: true,
            }, {
              id: '2016091638',
              createtime: '2016-09-16',
              content: '我决定中午换换口味',
              started: true,
              finished: true,
              animateStarted: false,
            },
          ],
        },
    };
  },
  computed: {

  },
  created() {
    const self = this;
    let lastScroll = 0;

    window.onscroll = () => {
      const flag = document.body.scrollTop === 0 ? document.documentElement.scrollTop : document.body.scrollTop;
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
    starThis(item) {
      // this.activeStar = !this.activeStar;
      setTimeout(() => {
        // item.started = !item.started;
        // this.smallStar = !this.smallStar;
      }, 500);

      item.started = !item.started;
      item.animateStarted = item.started;
      setTimeout(() => {
        item.animateStarted = !item.animateStarted;
      }, 500);
    },
    getBGC(e) {
      // console.log(this);
      return e ? '#54afff' : '#ddeefd';
    },
  },
};
