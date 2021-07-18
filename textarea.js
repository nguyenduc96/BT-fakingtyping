let text = ['X','i','n',' ','c','h','à','o',
    ' ', 'm', 'ọ','i',' ', 'n','g','ư','ờ','i',
    ' ', 't','ô','i',' ', 'l','à',' ', 'N','g','u','y','ễ','n',
    ' ', 'H','u','ỳ','n','h',' ', 'Đ','ứ','c','.',' ','Q', 'u',
    'ê', ' ', 'ở',' ', 'V', 'ĩ', 'n','h',' ', 'P', 'h', 'ú', 'c', '!', '!', '!'];
let pRint ='';
function typeTextarea(){
    let t =document.keY.fakeid.value;
    let j= t.length;
    if (j>=0){
        for (let i = 0; i < j; i++) {
            pRint += text[i];
            if (i == text.length -1){
                document.keY.fakeid.value='';
                pRint='';
            }
        }
    }
    document.keY.fakeid.value= pRint;
    pRint ='';
    setTimeout('typeTextarea()',1);
}
