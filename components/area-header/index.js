// components/area-header/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '推荐歌曲'
    },

    rightText: {
      type: String,
      value: '更多'
    },
    
    showRight: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 右侧点击更多时向外抛出的方法
    handleClick(){
      this.triggerEvent('RightClick')
    }
  }
})
