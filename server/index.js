// 基础路径
const BASE_URL = 'http://123.207.32.32:9001'

// 封装网络请求

class Server {
    request(url, method, params){
        return new Promise((resolve, reject) => {
            wx.request({
                url: BASE_URL + url,
                method: method,
                data: params,
                success: function(res){
                    resolve(res.data)
                },
                fail: function(err){
                    reject(err.error)
                }
              })
        })
    }

    // 封装 get 方法
    get(url, params) {
        return this.request(url, 'GET', params)
    }

    // 封装 post 方法
    post(url, params){
        return this.request(url, 'POST', params)
    }
}

const baseServer = new Server()

export default baseServer