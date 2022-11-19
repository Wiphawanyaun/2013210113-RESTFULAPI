const users = [
  {
    name: "Wiphawan",
    nickname: "Yaun",
    hobby: "Playing Game",
    address: "22/13 ",
    province: { name: "Bangkok", postcode: 10220 },
  },
  {
    name: "Wiphawan",
    nickname: "Yuan",
    hobby: "Eating",
    address: "22/13 ",
    province: { name: "Bangkok", postcode: 10221 },
  },
  {
    name: "Wiphawan",
    nickname: "Ynua",
    hobby: "Sleep",
    address: "22/13 ",
    province: { name: "Bangkok", postcode: 10222 },
  },
];

for (const u of users) {
  console.log(`"My nickname is ${u.nickname} , My hobby is ${u.hobby}
  and my postcode is ${u.province.postcode}"`);
}
