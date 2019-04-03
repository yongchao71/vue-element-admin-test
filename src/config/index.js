// 常规配置
import envConfig from './env'
var oConfig = {
  appName: '',
  localHost: location.origin
}
Object.assign(oConfig, envConfig)
export default oConfig
