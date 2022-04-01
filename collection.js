/*
    В текстовое поле input (class docBaseSum) доступен ввод только цифр и точки
    Точка может встретиться только один раз, а также может быть на первой позиции
 */
$(".docBaseSum").keypress(function(event){
    event = event || window.event;
    let val = event.target.value;
    let key = event.keyCode || event.which;
    let regex = /\d*\.?\d*/;

    key = String.fromCharCode(key);
    if((val + key).match(regex)[0] !== (val + key)) {
        return false;
    }
});

/*
    В текстовое поле input (class docBaseSum) доступна вставка только цифр и точки
    Точка может встретиться только один раз, а также может быть на первой позиции
    Все остальные символы игнорируются.
 */
$(".docBaseSum").on('paste', function(event) {
    event = event || window.event;
    let val = event.target.value;
    let clipboardData = event.clipboardData || window.clipboardData || event.originalEvent.clipboardData;
    clipboardData = clipboardData.getData('Text');
    let regex = /\d*\.?\d*/;

    if((val + clipboardData).match(regex)[0] !== (val + clipboardData)) {
        return false;
    }
});