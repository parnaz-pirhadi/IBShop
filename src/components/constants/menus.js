import {SIDE_NAVIGATION_TYPES} from "./index";

export const menus = [
    {
        title: "home",
        path: "/",
        componentName: "Home"
    },
    {
        title: "products",
        type: SIDE_NAVIGATION_TYPES.MENU_CATEGORY,
        categoryPath:"Products",
        // getIcon: (styles) => <SearchTerminalIcon {...styles}/>,
        subPaths: {
            male: {
                title: "male",
                type: SIDE_NAVIGATION_TYPES.MENU_CATEGORY,
                categoryPath:"Male",
                subPaths:{
                    iphoneMobile: {
                        title: "iphoneMobile",
                        path: "/iphone-mobile",
                        componentName: "IphoneMobile",
                        type: SIDE_NAVIGATION_TYPES.MENU_ITEM,
                    }
                }

            },
            female: {
                title: "female",
                type: SIDE_NAVIGATION_TYPES.MENU_CATEGORY,
                categoryPath:"Female",
                subPaths:{
                    iphoneMobile: {
                        title: "samsungMobile",
                        path: "/samsung-mobile",
                        componentName: "SamsungMobile",
                        type: SIDE_NAVIGATION_TYPES.MENU_ITEM,
                    }
                }
            }
            // iphoneMobile: {
            //     title: "iphoneMobile",
            //     path: "/iphone-mobile",
            //     componentName: "IphoneMobile",
            //     type: SIDE_NAVIGATION_TYPES.MENU_ITEM,
            // },
            // samsungMobile: {
            //     title: "samsungMobile",
            //     path: "/samsung-mobile",
            //     componentName: "SamsungMobile",
            //     type: SIDE_NAVIGATION_TYPES.MENU_ITEM,
            // }
        }
    }
]
