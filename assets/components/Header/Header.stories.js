import { fn } from "storybook/test";

import Header from "./index";

export default {
    title: "Components/Header",
    component: Header,
    argTypes: {
        backgroundColor: { control: "color" },
        title: { control: "text" },
        subtitle: { control: "text" },
        leftIcon: { control: "text" },
        rightIcon1: { control: "text" },
        rightIcon2: { control: "text" },
        avatar: { control: "text" },
    },
};

export const Default = {
    args: {
        backgroundColor: "#F2F2F2",
        title: "Header Label",
        subtitle: "Lorem text",
    },
};

export const WithIcons = {
    args: {
        title: "Header Label",
        subtitle: "Lorem text",
        leftIcon: "https://cdn-icons-png.flaticon.com/512/93/93634.png",
        rightIcon1: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
        rightIcon2: "https://cdn-icons-png.flaticon.com/512/61/61112.png",
    },
};

export const WithAvatar = {
    args: {
        title: "Header Label",
        subtitle: "Lorem text",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rightIcon1: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    },
};