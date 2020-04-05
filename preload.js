/**
 * 在预加载进程中，所有Node API均有效
 * 类似于Chrome插件的沙盒环境
 */
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        element && (element.innerHTML = text);
    };
    for (const type of ['node', 'chrome', 'electron']) {
        replaceText(`${type}-version`, process.versions[type]);
    }
});
