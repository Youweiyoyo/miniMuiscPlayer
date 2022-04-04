import baseServer from '../../server/index'


/**
 * 获取视频信息
 * @param {number} offset 偏移量
 * @param {number} limit 条数
 */
export function getTopMv(offset, limit = 10){
    return baseServer.get('/top/mv',{
        offset,
        limit
    })
}

/**
 * 获取 mv 数据
 * @param {number} id 
 */
export function getMVInfo(mvid){
    return baseServer.get('/mv/detail', {
        mvid
    })
}


/**
 * 获取 mv url
 * @param {number} id 
 */
export function getMvUrl(id){
    return baseServer.get('/mv/url', {
        id
    })
}

/**
 * 
 * @param {number} id 
 */
export function getMvDetail(id){
    return baseServer.get('/related/allvideo', {
        id
    })
}