let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// Ubahlah data  tersebut menggunakan spread operator menjadi:
// name: nama anda
// email: email anda
// hobby: hobi anda

const dataNew = {
  ...data,
  hobbies: ["memancing", "berenang", "membaca buku"],
};

dataNew.name = "Eka Fajhari Adwar";
dataNew.email = "ekafajhariadwar@gmail.com";

console.log(dataNew);

// Ambilah data “street dan city” tersebut menggunakan destructuring
const { street } = data.address;
const { city } = data.address;
console.log(`${street}
${city}
`);
