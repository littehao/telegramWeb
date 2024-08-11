
import zh_CN from './zh_CN';
import en_US from './en_US';

function loadLocale(lang) {
    let locale = null;
    let message = null;
    switch (lang) {
        case 'en-US':
            locale = 'en-US';
            message = en_US;
            break;
        case 'zh-CN':
            locale = 'zh-CN';
            message = zh_CN;
                break;
        default:
            locale = 'zh-CN';
            message = zh_CN;
            break;
    }
    return { locale, message };
}
export { loadLocale };
