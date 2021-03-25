import { v4 } from "uuid";
import { Avatar, Badge, Button, Card } from "./Components/LibComponents";

export const componentList = [
  {
    id: v4(),
    name: "AVATAR",
    component: Avatar,
    selected: false
  },
  {
    id: v4(),
    name: "BADGE",
    component: Badge,
    selected: false
  },
  {
    id: v4(),
    name: "BUTTON",
    component: Button,
    selected: false
  },
  {
    id: v4(),
    name: "CARD",
    component: Card,
    selected: false
  },
];

