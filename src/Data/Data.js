//sidebar produvt   
import { 
    UilHome,
    UilClipboardAlt,
    UilUsersAlt,
     UilPackage ,
     UilChart ,
     UilUsdSquare,
     UilMoneyWithdrawal, 

 } from '@iconscout/react-unicons'
 import img1 from '../images/img1.jpg'
 import img2 from '../images/img2.jpg'
 import img3 from '../images/img3.jpg'

// //sidebar data
export const SidebarData =[
    {
        icon: UilHome, 
        heading:"Dashbord",
    },
    {
        icon: UilClipboardAlt, 
        heading:"Orders",
    },
    {
        icon: UilUsersAlt, 
        heading:"Customer",
    },
    {
        icon:UilPackage, 
        heading:"Product",
    },
    {
        icon: UilChart , 
        heading:"analytics",
    },
];

export const CardsData=[
    {
        title: "Sales",
        color:{
          backGround:'linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)',
          boxShadow:"0px 10px 20px 0px #e0c6fs"
        }, 
        barValue:70,
        value:"25,970",
        png:UilUsdSquare,
        series:[
            {
                name:"Sales",
                data:[31,40,28,51,42,109,100],
            },
        ],
    } ,
    {
       title:"Revenue",
       color:{
        backGround:"linear-gradient(180deg, #FF919D 0%,#FC929D 100%)",
        boxShadow:"0px 10px 20px 0px #FDC0C7",
       },
       barValue:80,
       value:"14,270",
       png:UilMoneyWithdrawal ,
       series:[
        {
            name:"Revenue",
            data:[10,100,50,70,80,30,40],
        },
       ],
    },
    {
        title:"Expenses",
        color:{
         backGround:"linear-gradient(rgb(248,212,154) -146.42%, rgb(255 202 113) -46.42% )",
         boxShadow:"0px 10px 20px 0px #F9D59B",
        },
        barValue:60,
        value:"4,270",
        png:UilClipboardAlt ,
        series:[
         {
             name:"Expenses",
             data:[10,25,15,30,12,15,20],
         },
        ],
    },
]

export const UpdateData=[
    {
        img:img1,
        name:"Aman dhtttawal",
        noti:"has order apple starr compant charging battry",
        time:"25 second ago,"
    },
    {
        img:img2,
        name:"Spider man",
        noti:"has order apple starr compant charging battry",
        time:"30 minute ago,"
     },
    {
        img:img3,
        name:"Iron man",
        noti:"has order apple starr compant charging battry",
        time:"2 hour ago,"
    },   
]