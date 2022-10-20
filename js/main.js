const data = {
  numbers: [
    { id: "customers", value: "15K" },
    { id: "visotors", value: "150K" },
    { id: "worldwides", value: "15" },
    { id: "partners", value: "100+" },
  ],
  description: "Lorem ipsum dolor sit amet consectetur ",
};

// function put_number(id, value) {
//   document.getElementById(id).textContent = value;
// }

const btn = document.getElementById("btn");
const block_description = document.getElementById("block_description");

function show_hide_text() {
  if (btn.textContent === "Hide") {
    btn.textContent = "Learn More";
    block_description.classList.add("hide");
    block_description.textContent = "";
  } else {
    block_description.classList.remove("hide");
    btn.textContent = "Hide";
    block_description.textContent = data.description;
  }
}

btn.addEventListener("click", () => {
  show_hide_text();
});

// for (let i = 0; i < data.numbers.length; i++) {
//   put_number(data.numbers[i].id, data.numbers[i].value);
// }
