const p = new Promise((resolve, reject) => {
  resolve("Hello");
});

p.then((data) => {
  console.log(data);
});

//output
//hello

const promise = new Promise((resolve, reject) => {
  reject("Error");
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//output
//error

const data = axios
  .get("hbdxyubgd")
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });

//this is the example of the promise to call the api

async function getdata() {
  try {
    const data = await axios.get("localhost:8000");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// this is the example of the promise with async await
