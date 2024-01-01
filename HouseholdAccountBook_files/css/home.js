/** テストホーム **/
// ローダーを作成
createLoader();

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

window.addEventListener('DOMContentLoaded', function () {
    // 支払日の初期値を設定
    setInitialDay();

    // 支配日の入力欄の要素を取得
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

    // 支払日を選択時に次の入力欄か確定ボタンへ自動フォーカス
    dayInputElm.addEventListener('change', function () {
        // 支払金額の入力欄の要素を取得
        const amountInputElm = document.getElementById('hh_inputAmount');
        // 入力判定
        if (amountInputElm.value.trim().length == 0) {
            // 支払金額が空またはスペースのみの場合
            // 支払金額の入力欄へフォーカス
            amountInputElm.focus();
        } else {
            // 支払金額が入力済の場合
            // 支払内容の入力欄の要素を取得
            const contentInputElm = document.getElementById('hh_inputContent');
            if (contentInputElm.value.trim().length == 0) {
                // 支払内容が空またはスペースのみの場合
                // 支払内容の入力欄へフォーカス
                contentInputElm.focus();
            } else {
                // 支払内容が入力済の場合
                // 支払分類の入力欄の要素を取得
                const categoryInputElm = document.getElementById('hh_inputCategory');
                if (categoryInputElm.value.trim().length == 0) {
                    // 支払分類が空またはスペースのみの場合
                    // 支払分類の入力欄へフォーカス
                    categoryInputElm.open = true;
                } else {
                    // 支払分類が入力済の場合
                    // 支払方法の入力欄の要素を取得
                    const methodInputElm = document.getElementById('hh_inputMethod');
                    if (methodInputElm.value.trim().length == 0) {
                        // 支払方法が空またはスペースのみの場合
                        // 支払方法の入力欄へフォーカス
                        methodInputElm.open = true;
                    } else {
                        // 支払方法が入力済の場合
                        // 確定ボタンの要素を取得
                        const confirmBtn = document.getElementById('hh_confirmBtn');
                        // 確定ボタンへフォーカス
                        confirmBtn.focus();
                    }
                }
            }
        }
    });

    // 支払金額でEnter押下時に次の入力欄か確定ボタンへ自動フォーカス
    amountInputElm.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            // 支払金額の入力欄の要素を取得
            const amountInputElm = document.getElementById('hh_inputAmount');
            // 入力判定
            if (amountInputElm.value.trim().length == 0) {
                // 支払金額が空またはスペースのみの場合
                // 支払金額の入力欄へフォーカス
                amountInputElm.focus();
            } else {
                // 支払金額が入力済の場合
                // 支払内容の入力欄の要素を取得
                const contentInputElm = document.getElementById('hh_inputContent');
                if (contentInputElm.value.trim().length == 0) {
                    // 支払内容が空またはスペースのみの場合
                    // 支払内容の入力欄へフォーカス
                    contentInputElm.focus();
                } else {
                    // 支払内容が入力済の場合
                    // 支払分類の入力欄の要素を取得
                    const categoryInputElm = document.getElementById('hh_inputCategory');
                    if (categoryInputElm.value.trim().length == 0) {
                        // 支払分類が空またはスペースのみの場合
                        // 支払分類の入力欄へフォーカス
                        categoryInputElm.open = true;
                    } else {
                        // 支払分類が入力済の場合
                        // 支払方法の入力欄の要素を取得
                        const methodInputElm = document.getElementById('hh_inputMethod');
                        if (methodInputElm.value.trim().length == 0) {
                            // 支払方法が空またはスペースのみの場合
                            // 支払方法の入力欄へフォーカス
                            methodInputElm.open = true;
                        } else {
                            // 支払方法が入力済の場合
                            // 確定ボタンの要素を取得
                            const confirmBtn = document.getElementById('hh_confirmBtn');
                            // 確定ボタンへフォーカス
                            confirmBtn.focus();
                        }
                    }
                }
            }
        }
    });

    // 支払金額でEnter押下時に次の入力欄か確定ボタンへ自動フォーカス
    contentInputElm.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            // 支払金額の入力欄の要素を取得
            const amountInputElm = document.getElementById('hh_inputAmount');
            // 入力判定
            if (amountInputElm.value.trim().length == 0) {
                // 支払金額が空またはスペースのみの場合
                // 支払金額の入力欄へフォーカス
                amountInputElm.focus();
            } else {
                // 支払金額が入力済の場合
                // 支払内容の入力欄の要素を取得
                const contentInputElm = document.getElementById('hh_inputContent');
                if (contentInputElm.value.trim().length == 0) {
                    // 支払内容が空またはスペースのみの場合
                    // 支払内容の入力欄へフォーカス
                    contentInputElm.focus();
                } else {
                    // 支払内容が入力済の場合
                    // 支払分類の入力欄の要素を取得
                    const categoryInputElm = document.getElementById('hh_inputCategory');
                    if (categoryInputElm.value.trim().length == 0) {
                        // 支払分類が空またはスペースのみの場合
                        // 支払分類の入力欄へフォーカス
                        categoryInputElm.open = true;
                    } else {
                        // 支払分類が入力済の場合
                        // 支払方法の入力欄の要素を取得
                        const methodInputElm = document.getElementById('hh_inputMethod');
                        if (methodInputElm.value.trim().length == 0) {
                            // 支払方法が空またはスペースのみの場合
                            // 支払方法の入力欄へフォーカス
                            methodInputElm.open = true;
                        } else {
                            // 支払方法が入力済の場合
                            // 確定ボタンの要素を取得
                            const confirmBtn = document.getElementById('hh_confirmBtn');
                            // 確定ボタンへフォーカス
                            confirmBtn.focus();
                        }
                    }
                }
            }
        }
    });

    // 支払分類を選択時に次の入力欄か確定ボタンへ自動フォーカス
    categoryInputElm.addEventListener('change', function () {
        if (this.options[this.selectedIndex].value == '') {
            // 支払分類が未選択状態に戻った場合
            // 何もしない
        } else {
            // 支払分類を選択した場合
            // 支払金額の入力欄の要素を取得
            const amountInputElm = document.getElementById('hh_inputAmount');
            if (amountInputElm.value.trim().length == 0) {
                // 支払金額が空またはスペースのみの場合
                // 支払金額の入力欄へフォーカス
                amountInputElm.focus();
            } else {
                // 支払金額が入力済の場合
                // 支払内容の入力欄の要素を取得
                const contentInputElm = document.getElementById('hh_inputContent');
                if (contentInputElm.value.trim().length == 0) {
                    // 支払内容が空またはスペースのみの場合
                    // 支払内容の入力欄へフォーカス
                    contentInputElm.focus();
                } else {
                    // 支払内容が入力済の場合
                    // 支払方法の入力欄の要素を取得
                    const methodInputElm = document.getElementById('hh_inputMethod');
                    if (methodInputElm.value.trim().length == 0) {
                        // 支払方法が空またはスペースのみの場合
                        // 支払方法の入力欄へフォーカス
                        methodInputElm.open = true;
                    } else {
                        // 支払方法が入力済の場合
                        // 確定ボタンの要素を取得
                        const confirmBtn = document.getElementById('hh_confirmBtn');
                        // 確定ボタンへフォーカス
                        confirmBtn.focus();
                    }
                }
            }
        }
    });

    // 支払方法を選択時に次の入力欄か確定ボタンへ自動フォーカス
    methodInputElm.addEventListener('change', function () {
        if (this.options[this.selectedIndex].value == '') {
            // 支払方法が未選択状態に戻った場合
            // 何もしない
        } else {
            // 支払方法を選択した場合
            // 支払金額の入力欄の要素を取得
            const amountInputElm = document.getElementById('hh_inputAmount');
            if (amountInputElm.value.trim().length == 0) {
                // 支払金額が空またはスペースのみの場合
                // 支払金額の入力欄へフォーカス
                amountInputElm.focus();
            } else {
                // 支払金額が入力済の場合
                // 支払内容の入力欄の要素を取得
                const contentInputElm = document.getElementById('hh_inputContent');
                if (contentInputElm.value.trim().length == 0) {
                    // 支払内容が空またはスペースのみの場合
                    // 支払内容の入力欄へフォーカス
                    contentInputElm.focus();
                } else {
                    // 支払内容が入力済の場合
                    // 支払分類の入力欄の要素を取得
                    const categoryInputElm = document.getElementById('hh_inputCategory');
                    if (categoryInputElm.value.trim().length == 0) {
                        // 支払分類が空またはスペースのみの場合
                        // 支払分類の入力欄へフォーカス
                        categoryInputElm.open = true;
                    } else {
                        // 支払分類が入力済の場合
                        // 確定ボタンの要素を取得
                        const confirmBtn = document.getElementById('hh_confirmBtn');
                        // 確定ボタンへフォーカス
                        confirmBtn.focus();
                    }
                }
            }
        }
    });

    // 備考の入力欄をオフフォーカス時に未入力の入力欄か確定ボタンへ自動フォーカスする処理
    noteInputElm.addEventListener('blur', function () {
        // 支払金額の入力欄の要素を取得
        const amountInputElm = document.getElementById('hh_inputAmount');
        // 入力判定
        if (amountInputElm.value.trim().length == 0) {
            // 支払金額が空またはスペースのみの場合
            // 支払金額の入力欄へフォーカス
            amountInputElm.focus();
        } else {
            // 支払金額が入力済の場合
            // 支払内容の入力欄の要素を取得
            const contentInputElm = document.getElementById('hh_inputContent');
            if (contentInputElm.value.trim().length == 0) {
                // 支払内容が空またはスペースのみの場合
                // 支払内容の入力欄へフォーカス
                contentInputElm.focus();
            } else {
                // 支払内容が入力済の場合
                // 支払分類の入力欄の要素を取得
                const categoryInputElm = document.getElementById('hh_inputCategory');
                if (categoryInputElm.value.trim().length == 0) {
                    // 支払分類が空またはスペースのみの場合
                    // 支払分類の入力欄へフォーカス
                    categoryInputElm.open = true;
                } else {
                    // 支払分類が入力済の場合
                    // 支払方法の入力欄の要素を取得
                    const methodInputElm = document.getElementById('hh_inputMethod');
                    if (methodInputElm.value.trim().length == 0) {
                        // 支払方法が空またはスペースのみの場合
                        // 支払方法の入力欄へフォーカス
                        methodInputElm.open = true;
                    } else {
                        // 支払方法が入力済の場合
                        // 確定ボタンの要素を取得
                        const confirmBtn = document.getElementById('hh_confirmBtn');
                        // 確定ボタンへフォーカス
                        confirmBtn.focus();
                    }
                }
            }
        }
    });

    // 確定ボタン押下時の処理
    function clickConfirmBtn() {
        // ローダーを表示
        showLoader();

        // 確定ボタンの要素を取得
        const confirmBtn = document.getElementById('hh_confirmBtn');
        // 確定ボタンを非活性化
        confirmBtn.disabled = true;

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
        paymentDay = dayInputElm.value.replaceAll('-', '/');
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

        // 送信用URLの定義
        const postUrl = 'https://script.google.com/macros/s/AKfycbwYvz7mfR70woGg4yUnox8y4NnHTF3ZfLhLKShpWqyUVxBB3XCsoc3BqesqlW-KH7Bt/exec';

        // 送信用データの定義
        postData = {
            'Day': paymentDay,
            'Amount': paymentAmount,
            'Content': paymentContent,
            'Category': paymentCategory,
            'Method': paymentMethod,
            'Note': paymentNote
        }

        // 送信パラメータ
        let postParam = {
            "method": "POST",
            "mode": "no-cors",
            "Content-Type": "application/x-www-form-urlencoded",
            "body": JSON.stringify(postData)
        };

        // データの送信
        fetch(postUrl, postParam).then(function () {
            // ローダーを非表示
            hideLoader();
            // 確定ボタンを活性化
            confirmBtn.disabled = false;
            // 一番上まで画面スクロール
            document.getElementById('hh_header').scrollIntoView({ behavior: 'smooth' });
        }).catch(function (error) {
            window.alert('通信エラーが発生しました。\n\n' + error);
        });
    }
    // 確定ボタンの要素を取得
    const confirmBtn = document.getElementById('hh_confirmBtn');
    confirmBtn.addEventListener('click', clickConfirmBtn);
});