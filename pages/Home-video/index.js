import { getTopMv } from '../../api/api_video/index'

// pages/Home-video/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        videoInfoList:[],
        hasMore: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getVideoInfoList(0)
    },

    // 封装网络请求方法
    async getVideoInfoList(offset){
        if(!this.data.hasMore) return
        // 添加动画
        wx.showNavigationBarLoading()
        const { hasMore, data: res } = await getTopMv(offset)
        if(offset === 0){
            this.setData({videoInfoList: res})
        }else {
            this.setData({videoInfoList: this.data.videoInfoList.concat(res)})
        }
        this.setData({hasMore: hasMore})
        // 关闭动画
        wx.hideNavigationBarLoading()
        if(offset === 0) {
            wx.stopPullDownRefresh()
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

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        this.getVideoInfoList(0)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        this.getVideoInfoList(this.data.videoInfoList.length)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})