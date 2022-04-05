import { HYEventStore } from 'hy-event-store'
import { getHotMusic } from '../api/api_music/index'

const rankingStore = new HYEventStore({
  state: {
    HotMusicList: {}
  },
  actions: {
    getRankingDataAction(ctx, payload){
      getHotMusic(1).then((res) => {
        ctx.HotMusicList = res.playlist;
      })
    }
  }
})

// 由于导入方式的不同，所以不可以使用 默认导出
// export default rankingStore
export { rankingStore }