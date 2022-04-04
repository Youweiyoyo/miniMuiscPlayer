// pages/Home-video-deatil/index.js

import { getMVInfo, getMvUrl, getMvDetail } from '../../api/api_video/index'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        MvInfo: {},
        MvUrlInfo: {},
        MvDateil: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options, "options");
        const { id } = options
        this.getPageInfo(id)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 获取视频信息
     */
    getPageInfo(id){ 
        getMVInfo(id).then((res)=> {
            this.setData({MvInfo: res.data})
        })
        getMvUrl(id).then((res) => {
            this.setData({MvUrlInfo: res.data})
        })
        getMvDetail(id).then((res) => {
            this.setData({MvDateil: res.data})
        })
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

    }
})