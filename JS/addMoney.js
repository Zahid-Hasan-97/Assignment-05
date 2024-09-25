document.getElementById('donate-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');

        if(!isNaN(addMoney) && addMoney > 0){
            const addedDonation = getTextFieldValueById('donation-balance');
            // console.log(addedDonation, addMoney)
            const newDonation = addMoney + addedDonation;
            document.getElementById('donation-balance').innerText = newDonation;

            //main balance update
            const mainBalance = getMainBalanceValueById('main-balance');
            const updatedBalance = mainBalance - addMoney ;

            document.getElementById('main-balance').innerText = updatedBalance;

            //add to transaction history
            const div = document.createElement('div');
            div.classList.add();
            div.innerHTML = `
                <div class = "text-xl w-full border-x border-y rounded-md px-10 py-5">

                    <p class = "font-bold" >${addMoney} Taka is Donated for , Bangladesh </p>

                    <p class ="text-[#595959]">Date : ${new Date().toDateString()} ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time) </p>
                </div>
                
            `
            document.getElementById('transaction-container').appendChild(div);

        }
        else{
            alert("Invalid donation amount")
        }

    }
)