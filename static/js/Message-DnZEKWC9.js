var k=Object.defineProperty;var g=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var y=(r,s,t)=>s in r?k(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t,m=(r,s)=>{for(var t in s||(s={}))L.call(s,t)&&y(r,t,s[t]);if(g)for(var t of g(s))_.call(s,t)&&y(r,t,s[t]);return r};import{M as v}from"./MainWrap-BLJUqnAI.js";import{C as d}from"./index-ZJ_jh8k3.js";import{m as b}from"./index-M4BwUxJJ.js";import{r as S,I as f,o as h,v as P,z as o,f as a,g as n,J as i,t as C,u as p}from"./chunks/@vue-k1McLpBC.js";import"./chunks/prismjs-q4AeMOAZ.js";import"./chunks/nprogress-BoRHhhMm.js";import"./chunks/vue-router-QhFutdZn.js";const M={class:"Block",id:"Messsage-Type"},F=a("p",{class:"Title"},"组件使用",-1),j=a("span",{class:"Desc"}," 引入组件的方式使用 ",-1),T=a("div",{class:"Preview-Block"}," 类型 ",-1),V={class:"Preview-Block"},N=a("div",{class:"Preview-Block"}," 停留时间 ",-1),q={class:"Preview-Block"},x=a("div",{class:"Preview-Block"}," 加载 ",-1),D={class:"Preview-Block"},z={class:"Block",id:"Messsage-Fn"},A=a("p",{class:"Title"},"函数调用",-1),E=a("span",{class:"Desc"}," 使用函数的形式调用 ",-1),O=a("div",{class:"Preview-Block"}," 类型 ",-1),U={class:"Preview-Block"},H={class:"Block",id:"Messsage-Attr"},I=a("p",{class:"Title"},"Message属性",-1),Z={__name:"Message",setup(r){const s=S({show:!1,type:"info",closeable:!1,duration:3e3,message:"操作成功！"}),t=c=>{s.show=!0,s.closeable=!1,s.duration=3e3,Object.keys(c).forEach(e=>{s[e]=c[e]})},u=c=>{s.show=!1,b(m({type:"info",closeable:!1,duration:3e3,message:"操作成功！"},c))};return(c,e)=>{const l=f("LButton"),w=f("LMessage");return h(),P(v,{list:[{id:"Messsage-Type",label:"组件使用"},{id:"Messsage-Fn",label:"函数调用"},{id:"Messsage-Attr",label:"属性"}]},{default:o(()=>[a("div",M,[F,j,n(d,{codes:`    <!-- script -->
    <script setup>
      const messageProps = reactive({
        show: false,
        type: 'info',
        closeable: false,
        duration: 3000,
        message: '操作成功！'
      })
      const onShow = (obj) => {
        messageProps.show = true
        Object.keys(obj).forEach(k => {
          messageProps[k] = obj[k]
        })
      }
    <\/script>

    <!-- template -->
    <template>
      <!-- 类型 -->
      <LButton type='primary' @click='() => {
        onShow({ type: 'info', message: '操作提示！' })
      }'>操作提示</LButton>
      <LButton type='success' @click='() => {
        onShow({ type: 'success', message: '操作成功！' })
      }'>操作成功</LButton>
      <LButton type='warning' @click='() => {
        onShow({ type: 'warning', message: '操作警告！' })
      }'>操作警告</LButton>
      <LButton type='warning' @click='() => {
        onShow({ type: 'question', message: '操作帮助！' })
      }'>操作帮助</LButton>
      <LButton type='danger' @click='() => {
        onShow({ type: 'danger', message: '操作严重后果！' })
      }'>操作严重后果</LButton>

      <!-- 停留时间 -->
      <LButton type='primary' @click='() => {
        onShow({ type: 'info', message: '操作提示！', duration: 0 })
      }'>提示保持停留</LButton>
      <LButton type='success' @click='() => {
        onShow({ type: 'success', message: '操作成功！', duration: 5000 })
      }'>提示停留5s</LButton>

      <!-- 加载 -->
      <LButton type='primary' @click='() => {
        onShow({ type: 'loading', message: '加载中...', duration: 0, closeable: true })
      }'>加载中</LButton>

      <!-- Message组件实例 -->
      <LMessage 
        v-model='messageProps.show' 
        :duration='messageProps.duration' 
        :type='messageProps.type'
        :closeable='messageProps.closeable'
      >{{ messageProps.message }}</LMessage>
    </template>
      `},{default:o(()=>[T,a("div",V,[n(l,{type:"primary",onClick:e[0]||(e[0]=()=>{t({type:"info",message:"操作提示！"})})},{default:o(()=>[i("操作提示")]),_:1}),n(l,{type:"success",onClick:e[1]||(e[1]=()=>{t({type:"success",message:"操作成功！"})})},{default:o(()=>[i("操作成功")]),_:1}),n(l,{type:"warning",onClick:e[2]||(e[2]=()=>{t({type:"warning",message:"操作警告！"})})},{default:o(()=>[i("操作警告")]),_:1}),n(l,{type:"warning",onClick:e[3]||(e[3]=()=>{t({type:"question",message:"操作帮助！"})})},{default:o(()=>[i("操作帮助")]),_:1}),n(l,{type:"danger",onClick:e[4]||(e[4]=()=>{t({type:"danger",message:"操作严重后果！"})})},{default:o(()=>[i("操作严重后果")]),_:1})]),N,a("div",q,[n(l,{type:"primary",onClick:e[5]||(e[5]=()=>{t({type:"info",message:"操作提示！",duration:0})})},{default:o(()=>[i("提示保持停留")]),_:1}),n(l,{type:"success",onClick:e[6]||(e[6]=()=>{t({type:"success",message:"操作成功！",duration:5e3})})},{default:o(()=>[i("提示停留5s")]),_:1})]),x,a("div",D,[n(l,{type:"primary",onClick:e[7]||(e[7]=()=>{t({type:"loading",message:"加载中...",duration:0,closeable:!0})})},{default:o(()=>[i("加载中")]),_:1})])]),_:1})]),a("div",z,[A,E,n(d,{codes:`    <!-- script -->
    <script setup>
      import { useLMessage } from 'llj-vue3-ui'

      const onShowFn = (obj) => {
        useLMessage({
          type: 'info',
          closeable: false,
          duration: 3000,
          message: '操作成功！',
          ...obj
        })
      }

    <\/script>

    <!-- template -->
    <template>
      <LButton type='primary' @click='() => {
        onShowFn({ type: 'info', message: '操作提示！' })
      }'>操作提示</LButton>
      <LButton type='success' @click='() => {
        onShowFn({ type: 'success', message: '操作成功！' })
      }'>操作成功</LButton>
      <LButton type='warning' @click='() => {
        onShowFn({ type: 'warning', message: '操作警告！' })
      }'>操作警告</LButton>
      <LButton type='warning' @click='() => {
        onShowFn({ type: 'question', message: '操作帮助！' })
      }'>操作帮助</LButton>
      <LButton type='danger' @click='() => {
        onShowFn({ type: 'danger', message: '操作严重后果！' })
      }'>操作严重后果</LButton>
    </template>
      `},{default:o(()=>[O,a("div",U,[n(l,{type:"primary",onClick:e[8]||(e[8]=()=>{u({type:"info",message:"操作提示！"})})},{default:o(()=>[i("操作提示")]),_:1}),n(l,{type:"success",onClick:e[9]||(e[9]=()=>{u({type:"success",message:"操作成功！"})})},{default:o(()=>[i("操作成功")]),_:1}),n(l,{type:"warning",onClick:e[10]||(e[10]=()=>{u({type:"warning",message:"操作警告！"})})},{default:o(()=>[i("操作警告")]),_:1}),n(l,{type:"warning",onClick:e[11]||(e[11]=()=>{u({type:"question",message:"操作帮助！"})})},{default:o(()=>[i("操作帮助")]),_:1}),n(l,{type:"danger",onClick:e[12]||(e[12]=()=>{u({type:"danger",message:"操作严重后果！"})})},{default:o(()=>[i("操作严重后果")]),_:1})])]),_:1})]),a("div",H,[I,n(d,{codes:`    const props = defineProps({
        // 是否显示 - 组件引用时使用
        modelValue: {
          default: false,
          type: Boolean
        },
        // 样式类型
        type: {
          type: String,
          default: 'primary',
          validator: function (value: string) {
            return ['question', 'warning', 'success', 'info', 'loading', 'danger'].includes(value)
          },
        },
        // 显示位置
        placement: {
          type: String,
          default: 'center',
          validator: function (value: string) {
            return ['center', 'right'].includes(value)
          },
        },
        // 文本内容
        message: {
          type: String,
          default: '',
        },
        // 停留时间
        duration: {
          type: Number,
          default: 3000,
        },
        // 是否显示关闭
        closeable: {
          type: Boolean,
          default: false,
        },
        // 层叠值
        zindex: {
          type: Number,
          default: 10000,
        },
        offset: {
          type: Number,
          default: 16,
        },
        // 是否插入html字符串
        dangerouslyUseHTMLString: {
          type: Boolean,
          default: false,
        },
        // 同一时间是否只显示一个
        isSingle: {
          type: Boolean,
          default: true,
        },
        onClose: Function,
        onDestroy: Function,
      })`})]),n(w,{modelValue:p(s).show,"onUpdate:modelValue":e[13]||(e[13]=B=>p(s).show=B),duration:p(s).duration,type:p(s).type,closeable:p(s).closeable},{default:o(()=>[i(C(p(s).message),1)]),_:1},8,["modelValue","duration","type","closeable"])]),_:1})}}};export{Z as default};
