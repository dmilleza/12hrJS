const socials = ['twitter', 'facebook', 'instagram']

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr))
// 0 - twitter[('twitter', 'facebook', 'instagram')]
// 1 - facebook[('twitter', 'facebook', 'instagram')]
// 2 - instagram[('twitter', 'facebook', 'instagram')]

function logSocials(social) {
  console.log(social)
}

// don't want to include parentheses to execute
// socials.forEach(logSocials)
// twitter
// facebook
// instagram

const socialObjs = [
  { name: 'twitter', url: 'https://twitter.com' },
  { name: 'twitter', url: 'https://twitter.com' },

  { name: 'facebook', url: 'https://facebook.com' },
  { name: 'instagram', url: 'https://instagram.com' },
]

socialObjs.forEach((item) => console.log(item.url))
// https://twitter.com
// https://facebook.com
// https://instagram.com
