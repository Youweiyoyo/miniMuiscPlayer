import baseServer from '../../server/index'


/**
 * 获取轮播图数据
 * @param {number} type 数据类型
 * 0 ：pc
 * 1 ：android
 * 2 ：iphone
 * 3 ：ipad
 */
export function getBannerData(type){
  return baseServer.get('/banner',{
    type
  })
}