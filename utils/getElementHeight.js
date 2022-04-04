/**
 * 获取组件的高度
 * 通过调用 wx.createSelectorQuery() 在图片加载完的事件中，
 * 拿到图片的高度，对 swiper 的高度进行动态赋值
 * @param {element} ele 
 */

export default function getElmHeight(ele){
  return new Promise((resolve) => {
    const query = wx.createSelectorQuery()
    query.select(ele).boundingClientRect()
    // query.selectViewport().scrollOffset()
    query.exec((res)=>{
      const rect =  res[0]      // #the-id节点的上边界坐标
      // res[1].scrollTop // 显示区域的竖直滚动位置
      resolve(rect)
    })
  })
}