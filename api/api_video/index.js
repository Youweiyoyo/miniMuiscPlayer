import baseServer from '../../server/index'


// 获取视频信息
export function getTopMv(offset, limit = 10){
    return baseServer.get('/top/mv',{
        offset,
        limit
    })
}