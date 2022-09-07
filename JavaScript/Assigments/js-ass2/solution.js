//! https://www.youtube.com/watch?v=b7vfp5G4brE
//! https://youtu.be/b7vfp5G4brE

const youtube = 'https://www.youtube.com/watch?v=b7vfp5G4brE';
const splitedLink = youtube.split('=');
console.log(splitedLink);
const shortLink = `https://youtu.be/${splitedLink[1]}`;
console.log(shortLink);
alert(shortLink);
