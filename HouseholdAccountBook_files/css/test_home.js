/** テストホーム **/
// ローダーを表示
showLoader();

// 画面読込完了時、ローダーを非表示
window.addEventListener('load', hideLoader);

// 日付をYYYY-MM-DDの書式で返す関数
function formatDate(dt) {
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth() + 1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);
}

// 支払日の初期値を設定する関数
function setInitialDay() {
    // 支払日の入力欄要素を取得
    const dayInputElm = document.getElementById('hh_inputDay');
    // 初期値を今日に設定
    dayInputElm.value = formatDate(new Date());
}
window.addEventListener('DOMContentLoaded', setInitialDay);

// 確定ボタン押下時の処理
function clickConfirmBtn() {
    // 支払日の入力欄の要素を取得
    const dayInputElm = document.getElementById('hh_inputDay');
    // 支払金額の入力欄の要素を取得
    const amountInputElm = document.getElementById('hh_inputAmount');
    // 支払内容の入力欄の要素を取得
    const contentInputElm = document.getElementById('hh_inputContent');
    // 支払分類の入力欄の要素を取得
    const categoryInputElm = document.getElementById('hh_inputCategory');
    // 支払方法の入力欄の要素を取得
    const methodInputElm = document.getElementById('hh_inputMethod');
    // 備考の入力欄の要素を取得
    const noteInputElm = document.getElementById('hh_inputNote');

    // 支払日を取得
    paymentDay = dayInputElm.value;
    // 支払金額を取得
    paymentAmount = amountInputElm.value;
    // 支払内容を取得
    paymentContent = contentInputElm.value;
    // 支払分類を取得
    paymentCategory = categoryInputElm.value;
    // 支払方法を取得
    paymentMethod = methodInputElm.value;
    // 備考を取得
    paymentNote = noteInputElm.value;

    // 送信用データの定義
    sendDate = {
        paymentDay: paymentDay,
        paymentAmount: paymentAmount,
        paymentContent: paymentContent,
        paymentCategory: paymentCategory,
        paymentMethod: paymentMethod,
        paymentNote: paymentNote
    }

    // 送信用URLの定義
    const postUrl = '';


}
// 確定ボタンの要素を取得
const confirmBtn = document.getElementById('hh_confirmBtn');
confirmBtn.addEventListener('click', clickConfirmBtn);