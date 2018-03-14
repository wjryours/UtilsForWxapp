let Flag = '_deadline'
//cookie
function SetCookie(key,value,time){
  //key为键名，value为值，time是存储时间
  wx.setStorageSync(key, value)
  let seconds = parseInt(time)

  if(seconds>0){
    let timestamp = Date.parse(new Date())
    timestamp = timestamp / 1000 + seconds
    wx.setStorageSync(key + Flag, timestamp)
  }else{
    wx.removeStorageSync(key + Flag)
  }

}

function GetCookie(key,Default){
  //key为读取键名，Default为无缓存数据时的返回数据，Default为可选参数
  let deadline = parseInt(wx.getStorageSync(key + Flag))  //是否有时间限制
  let reslut = wx.getStorageSync(key) //获取存储的value值
  if (reslut){
    if (deadline){
      //若存在时间限制
      let NowDate = Date.parse(new Date()) / 1000 //当前时间戳
      if (NowDate >deadline){
        //时间过期,清除数据缓存,返回
        wx.removeStorageSync(key)
        wx.removeStorageSync(key + Flag)
        if (Default){
          return Default
        }else{
          return
        }
      }else{
        return reslut
      }
    }else{
      return reslut
    }
  }else{
    //键值不存在时返回值
    if (Default){
      return Default
    }else{
      return 
    }

  }
}

function RemoveCookie(key){
  wx.removeStorageSync(key)
  wx.removeStorageSync(key + Flag)
}

module.exports= {
  SetCookie: SetCookie,
  GetCookie: GetCookie,
  RemoveCookie: RemoveCookie
}