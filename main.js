
const SocialMediaLinks = {
  github:"JhemersonLincon",
  youtube:"",
  facebook:"",
  instagram:"jhemerson.lincon",
  twitter:"LinhoHa"
}
function ChangeSocialMediaLinks(){
  for(let li of SocialMedia.children){
  const social = li.getAttribute("class");
  li.children[0].href = `https://${social}.com/${SocialMediaLinks[social]}`
}
}
ChangeSocialMediaLinks()

function getGithubProfileInfos(){
  const url = `https://api.github.com/users/${SocialMediaLinks.github}`;

  fetch(url)
  .then( response => response.json())
  .then(data => {
    UserName.textContent = data.name;
    UserImage.src = data.avatar_url;
    UserLink.href = data.html_url; 
    Userlogin.textContent = data.login;
    bio.textContent = data.bio;
  })
}
getGithubProfileInfos()