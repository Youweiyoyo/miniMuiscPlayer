import baseServer from '../../server/index'


/**
 * 热门搜索
 */
export function getHotSearch(){
  return baseServer.get("/search/hot")
}

/**
 * 获取搜索建议
 * @param {string} keywords 
 * @param {string} type 
 * type = 'mobile' 表示返回移动端数据
 */
export function getSearchSuggest(keywords, type="mobile"){
  return baseServer.get(`/search/suggest?keywords=${keywords}&type=${type}`)
} 