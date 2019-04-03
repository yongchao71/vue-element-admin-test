// 环境配置
console.log('process.env.ENV_CONFIG-------', process.env.ENV_CONFIG)
const envConfig = {
  dev: {
    oBaseRoute: {
      wxapi: '//wxapi.lexiang2018.com',
      wxtest: '//wxtest.lexiang2018.com'
    },
    oAppId: {
      yydlWx: 'wx166b854b06778233'// 多利鱼平台
    }
  },
  sit: {
    oBaseRoute: {
      wxapi: '//wxapi.lexiang2018.com',
      wxtest: '//wxtest.lexiang2018.com'
    },
    oAppId: {
      yydlWx: 'wx166b854b06778233' // 多利鱼平台开发
    }
  },
  uat: {
    oBaseRoute: {
      wxapi: '//testwxapi.lexiang2018.com',
      wxtest: '//wechattest.lexiang2018.com'
    },
    oAppId: {
      yydlWx: 'wx166b854b06778233' // / /多利鱼测试
    }
  },
  prod: {
    oBaseRoute: {
      wxapi: '//wxty.happyshare.com',
      wxtest: '//store.happyshare.com'
    },
    oAppId: {
      yydlWx: 'wx0a75eb0542151b1e' // 优优多利平台
    }
  }
}
export default envConfig[process.env.ENV_CONFIG] || {}
