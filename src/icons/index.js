import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon) // 全局注册组件

// require.context（目标目录，是否扫描子目录，正则表达式）扫描目录中的文件
// 引入所有的svg图标
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

// webpack loader 打包svg
