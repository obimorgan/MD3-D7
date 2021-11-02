const displayUsers = (usersInfo) => 
`
<tr>
<th scope="row">1</th>
<td>${usersInfo.name}</td>
<td>Otto</td>
<td>@mdo</td>
</tr>
`

const getusersInfo = async () => {
    try {
        const userInfoResp = await fetch("https://jsonplaceholder.typicode.com/users")
        const userInfoRespData = await userInfoResp.json()
        console.log(userInfoRespData)

        const tableBody = document.querySelector('.table-body')
        tableBody.innerHTML = ""
        userInfoRespData.forEach(info => {
            tableBody.innerHTML += displayUsers(info)
        })
    
    
    } catch (err) {
        console.log(err)
      }
}
window.onload = () => {
    getusersInfo()
}



