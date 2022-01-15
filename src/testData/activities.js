import moment from "moment";

// eslint-disable-next-line import/no-anonymous-default-export
export default [{
  username: "johndoe.near",
  content: "%username% signed the contract successfully",
  timestamp: moment().subtract(1, "days").fromNow(),
  avatar: "http://placehold.jp/35x25.png",
}, {
  username: "CryptoKing.near",
  content: "%username% requested to sign the contract",
  timestamp: moment().subtract(2, "days").fromNow(),
  avatar: "http://placehold.jp/35x25.png",
}, {
  username: "maxwell.near",
  content: "%username% requested to sign the contract",
  timestamp: moment().subtract(20, "days").fromNow(),
  avatar: "http://placehold.jp/35x25.png",
},]
