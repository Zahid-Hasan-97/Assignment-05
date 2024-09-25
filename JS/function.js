function getInputFieldValueById (id){
    const inputMoney = document.getElementById(id).value ;
    const inputValue = parseFloat(inputMoney); // whatever we take from input we will always get is as String.
    return inputValue;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function getMainBalanceValueById(id){
    const balance = document.getElementById(id).innerText;
    const updatedMainBalance = parseFloat(balance);
    return updatedMainBalance;
}

function showSectionById(id){
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('transaction-container').classList.add('hidden');

    // showing id by given parameter
    document.getElementById(id).classList.remove('hidden');
}

function blogPage(){
    window.location.replace('blog.html')
}