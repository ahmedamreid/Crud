var urlName = document.getElementById('siteName')
var urlLink = document.getElementById('siteUrl')
var urlList;

if (localStorage.getItem("dataUrlList") !== null) {
    urlList = JSON.parse(localStorage.getItem("dataUrlList"))
    displayData()
}
else {
    urlList = []

}

function addx() {
    var linkData = {
        name: urlName.value,
        link: urlLink.value
    }

    urlList.push(linkData)
    localStorage.setItem("dataUrlList", JSON.stringify(urlList))
    displayData()
}

function clearForm() {
    document.getElementById('siteName').value = ' '
    document.getElementById('siteUrl').value = ' '

}

function displayData() {
    var temp = ""
    for (i = 0; i < urlList.length; i++) {
        temp = temp + `<tr>
        <td>`+ (i + 1) + `</td>
        <td>`+ urlList[i].name + `</td>
        <td><a target='_blank' href="`+ urlList[i].link + `"><button class="btn btn-success px-4"><span><i class="fa-solid fa-eye me-3"></i></span>Visit</button></a></td>
        <td><button onclick="deleteUrl(`+ i + `)" class="btn btn-danger px-4"><span><i class="fa-solid fa-trash me-3"></i></span>Delete</button></td>
      </tr>`
    }
    document.getElementById('myData').innerHTML = temp
}



function deleteUrl(index) {

    urlList.splice(index, 1)
    localStorage.setItem("dataUrlList", JSON.stringify(urlList))
    displayData()

}







