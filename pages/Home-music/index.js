// pages/Home-music/index.js
import { rankingStore } from '../../store/index'
import { getBannerData, getSongList } from "../../api/api_music/index";
import getElmHeight from "../../utils/getElementHeight";
import throttle from "../../utils/throttle";

const throttleGetEleHeight = throttle(getElmHeight)
Page({

    /**
     * 页面的初始数据
     */
    data: {
      bannerList: [],
      swiperHeight: 0,
      hotMusicList: [],
      songMusic: [],
      recommendSongMusic: [],
      rankings: {0: {}, 2: {}, 3: {}}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      this.getBannerDataInfo()
      this.getSoneMusisDate()
      this.getRecommendDate()
      // 发起异步请求
      rankingStore.dispatch('getRankingDataAction')
      // 监听获取 store 中的数据
      rankingStore.onState('HotMusicList', (res) => {
        if(!res.tracks) return;
        const recommend = res.tracks.slice(0,6)
        this.setData({hotMusicList: recommend})
      })
      rankingStore.onState('newRankingMusicList', this.getRankingStoreDataMethods(0))
      rankingStore.onState('originMusicList', this.getRankingStoreDataMethods(2))
      rankingStore.onState('upMusicList',this.getRankingStoreDataMethods(3))
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 获取轮播图数据
     */
    async getBannerDataInfo(){
      const result = await getBannerData(2)
      this.setData({bannerList: result.banners})
    },

    /**
     * image 组件 图片加载完成事件
     */
    imageLoad(){    
      throttleGetEleHeight('.swiper-image').then(res => {
        this.setData({swiperHeight: res.height})
      })
    },

    /**
     * 获取热门歌单 
     */
    async getSoneMusisDate(){
      const result = await getSongList()
      this.setData({songMusic: result.playlists})
    },

    /**
     * 获取推荐歌单
     */
    async getRecommendDate(){
      const result = await getSongList('华语')
      this.setData({recommendSongMusic: result.playlists})
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
     * 跳转搜索详情页
     */
    toSearchPage(){
      wx.navigateTo({
        url: '/pages/Home-music-search/index',
      })
    },

    /**
     * 封装统一监听 store 的方法
     */
    getRankingStoreDataMethods(idx){
      return (res) => {
        console.log(res, "Res~~~");
        if(Object.keys(res).length === 0) return;
        const name = res.name
        const coverImageUrl = res.coverImgUrl
        const playCount = res.playCount
        const songList = res.tracks.slice(0, 3)
        const rankingObj = {name, coverImageUrl, songList, playCount}
        const newRankings = {...this.data.rankings, [idx]: rankingObj}
        this.setData({rankings: newRankings})
      }
    }
})