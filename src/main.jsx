import React from 'react'
import ReactDOM from 'react-dom/client'
import 'amfe-flexible'

/* REDUX */
import { Provider, useSelector } from 'react-redux'
import store from './store'

/* ANTD-MOBILE */
import { ConfigProvider } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'

import { IntlProvider } from 'react-intl'
import { loadLocale } from './locales/index'

import App from './App.jsx'
import './styles/common.scss'
import './styles/free.scss'

/* 处理最大宽度 */
;(function () {
  const handleMax = function handleMax() {
    let html = document.documentElement,
      root = document.getElementById('root'),
      deviceW = html.clientWidth
    root.style.maxWidth = '750px'
    if (deviceW >= 750) {
      html.style.fontSize = '75px'
    }
  }
  handleMax()
})()

function ContentRoot() {
  const lang = useSelector((state) => state.baseStore.lang)
  const { locale, message } = loadLocale(lang)
  return (
    <ConfigProvider locale={locale}>
      <IntlProvider locale={locale} messages={message}>
        <App />
      </IntlProvider>
    </ConfigProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ContentRoot />
  </Provider>
)
