// pages/Home-music-search/index.js
import { getHotSearch, getSearchSuggest } from '../../api/api-search/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotSearchList: [],
    searchValue: "",
    SuggestMusicList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getHotMusicSearch()
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
   * 获取热门歌曲搜索
   */
  async getHotMusicSearch(){
    const res = await getHotSearch()
    const { hots } = res.result
    this.setData({hotSearchList: hots})
  },

  /**
   * 当前输入框的数据 
   */
  searchChange(event){
    const { detail } = event
    this.setData({searchValue: detail})
    if(!detail.lengt){
      this.searchSuggest(detail)
    }
  },

  /**
   * 搜索建议
   */
  async searchSuggest(keyword){
    const res = await getSearchSuggest(keyword)
    const { allMatch } = res.result
    this.setData({SuggestMusicList: allMatch})
  }
})