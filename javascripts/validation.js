function emailValidation() {
  const emailInput = document.getElementById('email');
  const emailConfirmInput = document.getElementById('email_confirm');
  const form = document.getElementById('form');

  // エラーメッセージを表示する要素を作成
  const errorMessageElement = document.createElement('p');
  errorMessageElement.textContent = "Eメールが一致しません";
  errorMessageElement.style.color = '#d14539'; // 文字色を設定
  errorMessageElement.style.display = 'none'; // 初期状態では非表示
  emailConfirmInput.parentNode.insertBefore(errorMessageElement, emailConfirmInput.nextSibling);

  emailConfirmInput.addEventListener('input', () => {
    if (emailInput.value !== emailConfirmInput.value) {
      // Eメールが一致しない場合
      errorMessageElement.style.display = 'block'; // エラーメッセージを表示
      emailConfirmInput.style.backgroundColor = 'rgba(230,169,171,.5)'; // 背景色を設定
    } else {
      // Eメールが一致する場合
      errorMessageElement.style.display = 'none'; // エラーメッセージを非表示
      emailConfirmInput.style.backgroundColor = ''; // 背景色をクリア
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (emailInput.value === emailConfirmInput.value) {
      // Eメールが一致する場合、フォームを送信
      form.submit();
    } else {
      // 一致しない場合は、エラーメッセージが表示されるので、ここでは何もしない
    }
  });
}

window.onload = emailValidation;
