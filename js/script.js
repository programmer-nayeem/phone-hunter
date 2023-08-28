const loadPhone = async (searchText) => {
    const res = await fetch(` https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
};

const displayPhones = (phones) => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    // clear phone container
    phoneContainer.textContent = '';

    // display show all button 12 phone
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden');
    }

    // first 15 phone
    phones = phones.slice(0,15);


    phones.forEach((phone) => {
        console.log(phone);

        // Create a div
        const phoneCard = document.createElement("div");
        phoneCard.classList = `card bg-gray-100 shadow-xl pt-5`;

        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
        `;

        // Step 4 appendChild
        phoneContainer.appendChild(phoneCard);
    });

    toggleLoadingSpinner(false);
};



// handel search button
const handelSearch = () =>{
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText);
}

const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }else{
        loadingSpinner.classList.add('hidden');
    }
}

// loadPhone();
