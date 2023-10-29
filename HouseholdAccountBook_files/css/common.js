/** 共通 **/
/* ローダーを表示する関数 */
function showLoader() {
    const loader = document.createElement('div');
    loader.classList.add('com_loader');
    const body = document.body;
    body.appendChild(loader);
}

/* ローダーを非表示にする関数 */
function hideLoader() {
    // ローダーの要素を取得
    const loader = document.getElementsByClassName('com_loader')[0];
    // ローダーを非表示
    loader.classList.add('com_loader_hidden');
}