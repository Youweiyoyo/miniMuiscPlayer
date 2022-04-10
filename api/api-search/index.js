import baseServer from '../../server/index'


/**
 * 热门搜索
 */
export function getHotSearch(){
  return baseServer.get("/search/hot")
}