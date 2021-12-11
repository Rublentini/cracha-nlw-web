function changePageName() {
  pageName.textContent = 'Rubem Lentini - DoWhile 2021'
}
changePageName()

const LinksSocialMedia = {
  github: 'Rublentini',
  youtube: 'channel/UCwUi9Ibd-6xitMFoFQ_wCGw',
  instagram: 'rubemlentini',
  facebook: 'rubem.lentini',
  twitter: 'rubemlentini'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
