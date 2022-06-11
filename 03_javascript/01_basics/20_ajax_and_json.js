document.getElementById('button1').addEventListener('click', loadCustomerData);
document.getElementById('button2').addEventListener('click', loadCustomersData);

function loadCustomerData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '20_ajax_and_json_customer.json', true);
  xhr.onload = function () {
    if (this.status == 200) {
      // console.log(customer);
      // console.log(customer.name);
      // console.log(customer.age);

      var customer = JSON.parse(this.responseText);
      const output = `
        <ul>
            <li>${customer.name}</li>
            <li>${customer.age}</li>
        </ul>`;
      document.getElementById('customer').innerHTML = output;
    }
  };
  xhr.send();
}

function loadCustomersData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '20_ajax_and_json_customers.json', true);
  xhr.onload = function () {
    if (this.status == 200) {
      var customers = JSON.parse(this.responseText);
      console.log(customers);

      const customersDiv = document.getElementById('customers');

      for (const customer of customers) {
        const customerDiv = document.createElement('div');
        customerDiv.classList.add('customer');
        customerDiv.innerHTML = `<h2>${customer.name}</h2><h2>${customer.age}</h2>`;
        customersDiv.appendChild(customerDiv);
      }
    }
  };
  xhr.send();
}
