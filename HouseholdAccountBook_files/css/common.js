/** 共通 **/
/* ローダーを作成する関数 */
function createLoader() {
    const loader = document.createElement('div');
    loader.classList.add('com_loader');
    const body = document.body;
    body.appendChild(loader);
}

/* ローダーを表示する関数 */
function showLoader() {
    const loader = document.getElementsByClassName('com_loader')[0];
    if (loader.classList.contains('com_loader_hidden')) {
        loader.classList.remove('com_loader_hidden');
    }
}

/* ローダーを非表示にする関数 */
function hideLoader() {
    // ローダーの要素を取得
    const loader = document.getElementsByClassName('com_loader')[0];
    // ローダーを非表示
    if (!loader.classList.contains('com_loader_hidden')) {
        loader.classList.add('com_loader_hidden');
    }
}