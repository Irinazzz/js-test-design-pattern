const Mock = require("mockjs");
import { BASE_URL } from "@/configs/env.js";

Mock.mock(
  `${BASE_URL}/dictionaries`,
  [{
    type: 1,
    name: "超危",
    id: "1",
  },
  {
    type: 1,
    name: "高危",
    id: "2",
  },
  {
    type: 2,
    name: "未处理",
    id: "1",
  },
  {
    type: 2,
    name: "处理中",
    id: "2",
  },
  {
    type: 2,
    name: "已完成",
    id: "3",
  }]
);

Mock.mock(`${BASE_URL}/getUserInfo`, {
  name: "zzr",
});
