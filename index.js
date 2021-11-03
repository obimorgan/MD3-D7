const getusersInfo = async () => {
    try {
        const userInfoResp = await fetch("https://jsonplaceholder.typicode.com/users")
        
        if ( response.ok) {
            const userInfoRespData = await userInfoResp.json()
            console.log(userInfoRespData)
            return result
        } else {
            throw Error("Users are not fetched!")
        }
    } catch (err) {
        throw err
      }
}


const options = ["username", "email", "phone"]

let selectedFilter = "username"
let originalArray = []

const displayUsers = (user) => 
`
<tr>
<th scope="row">1</th>
<td>${user.name}</td>
<td>${user.username}</td>
<td>${user.email}</td>
</tr>
`
const changeFilter = (filter) => {
    selectedFilter = filter;
    const toggle = document.querySelector(".dropdown-toggle");
    toggle.innerHTML = filter;
};
  
const populateFilters = () => {
  options.forEach((option) => {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const a = document.createElement("a");
    a.className = "dropdown-item";
    a.innerHTML = option;
    a.onclick = function () {
      changeFilter(option);
    };
    dropdownMenu.appendChild(a);
  });
};
  
  const renderUsers = (users) => {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    users.forEach((user) => {
      tbody.innerHTML += Row(user);
    });
  };
  
  const onLoad = async () => {
    populateFilters();
    const input = document.querySelector("#user-filter-input");
    input.onkeydown = function (e) {
      if (e.key === "Enter") {
        const filteredUsers = originalArray.filter((user) =>
          user[selectedFilter]
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
        renderUsers(filteredUsers);
      }
    };
    try {
      const users = await fetchUsers();
      originalArray = users;
      renderUsers(users);
    } catch (error) {
      const content = document.querySelector(".content");
      content.innerHTML = ErrorMessage(error.message);
      console.log("request is failed");
    }
  };
  
  window.onload = onLoad;
  



