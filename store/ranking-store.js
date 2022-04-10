import { HYEventStore } from 'hy-event-store'
import { getHotMusic } from '../api/api_music/index'

const rankMap = {0:'newRankingMusicList', 1:'HotMusicList', 2:'originMusicList', 3:'upMusicList'}
const rankingStore = new HYEventStore({
  state: {
    newRankingMusicList: {}, // 0
    HotMusicList: {}, // 1
    originMusicList: {}, // 2
    upMusicList: {} // 3
  },
  actions: {
    getRankingDataAction(ctx, payload){
      // 0:新歌榜  1:热歌榜 2:原创榜 3:飙升榜
      for(let i = 0; i < 4; i++){
        getHotMusic(i).then((res) => {
          const listName = rankMap[i]
          ctx[listName] = res.playlist;
          // switch(i){
          //   case 0:
          //     ctx.newRankingMusicList = res.playlist;
          //     break;  
          //   case 1:
          //     ctx.HotMusicList = res.playlist;
          //     break;  
          //   case 2:
          //     ctx.originMusicList = res.playlist;
          //     break;  
          //   case 3:
          //     ctx.upMusicList = res.playlist;
          //     break;  
          // }
        })
      }
     
    }
  }
})

// 由于导入方式的不同，所以不可以使用 默认导出
// export default rankingStore
export { rankingStore, rankMap }