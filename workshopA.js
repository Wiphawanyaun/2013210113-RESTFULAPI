const user = {
  name: "Wiphawan",
  nickname: "Yaun",
  hobby: "Playing Game",
  address: "22/13 ",
  province: { name: "Bangkok", postcode: 10220 },
};


const showuser = () => {
    const {
        nickname,
        hobby,
        province:{postcode}
      } = user;
    return `"My nickname is ${nickname} ,My hobby is ${hobby}
    and my postcode is ${user.province.postcode}"`

    }
console.log(showuser())

