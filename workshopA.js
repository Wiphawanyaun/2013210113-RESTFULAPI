const user = {
  name: "Wiphawan",
  nickname: "Yaun",
  hobby: "Playing Game",
  address: "22/13 ",
  province: { province: "Bangkok", postcode: 10220 },
};


const showuser = () => {
    const {
        nickname,
        hobby,
        province: { province },
      } = user;
    return `"My nickname is ${nickname} ,My hobby is ${hobby}
    and my postcode is ${province.postcode}"`

    }
console.log(showuser())

