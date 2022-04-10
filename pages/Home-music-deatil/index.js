// pages/Home-music-deatil/index.js
import { rankingStore } from '../../store/index'
import { getMusicInfoDetail } from '../../api/api_music/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    RankingName: "",
    RankingInfo: {},
    type: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { Ranking } = options
    const { type } = options
    this.setData({type: type})
    if(type === 'Rank'){
      rankingStore.onState(Ranking, this.monitorStore)
      this.setData({RankingName: Ranking})
    }else if(type === 'menu'){
      const { id } = options 
      this.getmusicDetail(id)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    if(this.data.RankingName){
      rankingStore.offState(this.data.RankingName, this.monitorStore)
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  /**
   * store 监听事件
   */
  monitorStore(res){
    this.setData({RankingInfo: res})
  },

  /**
   * 获取歌单详情
   */
  async getmusicDetail(id){
    const result = await getMusicInfoDetail(id)
    this.setData({RankingInfo: result.playlist})
  }
})