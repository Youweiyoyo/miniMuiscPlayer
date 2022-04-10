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

/**
 * 获取推荐歌曲
 * @param {number} idx
 * 0 ：新歌
 * 1 ：热歌
 * 2 ：原创
 * 3 ：飙升
 */
export function getHotMusic(idx){
  return baseServer.get('/top/list',{
    idx
  })
}

/**
 * 获取热门歌单
 * @param {number} limit 
 * @param {number} offset 
 * @param {number} cat 
 * cat 默认为全部,可选:['华语','古⻛','欧美','流⾏']
 */
export function getSongList(cat='全部',limit = 6,offset = 0){
  return baseServer.get('/top/playlist', {
    cat,
    limit,
    offset
  })
}

/**
 * 获取歌单详情
 * @param {string} id 
 */
export function getMusicInfoDetail(id){
  return baseServer.get(`/playlist/detail/dynamic?id=${id}`)
}