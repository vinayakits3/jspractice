// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id ="123abc"
tinderUser.name ="Sammy "
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "somegmail@gmail.com",
    fullname:{
        userFullName:{
            firstName:'vinayak verma',
            lastName :'verma',
        }
    }
}
console.log(`regular user ${regularUser.fullname?.userFullName.lastName}`)

const obj1 ={1 : "a" , 2: "b"}
const obj2 ={3 : "a" , 4: "b"}
const obj4 ={5 : "a" , 6: "b"}

// const obj3 ={obj1 ,obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4);
const obj3 ={...obj1,...obj2,...obj4};
console.log(obj3)

const users =[
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    }
];
console.log(users[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const data = {
    "All_statuses": [
        {
            "all_total": {
                "TotalProject_Project_major": "37",
                "TotalProject_Project_medium": "6",
                "TotalProject_Project_micor": "0",
                "TotalProject_Project_small": "7"
            }
        },
        {
            "TotalProjectall": "50"
        },
        {
            "all_Active": {
                "ActiveProject_Project_major": "31",
                "ActiveProject_Project_medium": "2",
                "ActiveProject_Project_micor": "0",
                "ActiveProject_Project_small": "4"
            }
        },
        {
            "ActiveProjectall": "37"
        },
        {
            "all_Completed": {
                "CompletedProject_Project_major": "6",
                "CompletedProject_Project_status_medium": "0",
                "CompletedProject_Project_status_micor": "0",
                "CompletedProject_Project_status_small": "3"
            }
        },
        {
            "CompletedProjectall": "13"
        }
    ],
    "on time": [
        {
            "All on time": {
                "TotalProject_Project_major": "5",
                "TotalProject_Project_medium": "2",
                "TotalProject_Project_micor": "0",
                "TotalProject_Project_small": "2"
            }
        },
        {
            "TotalProjectontime": "9"
        },
        {
            "Active on time": {
                "ActiveProject_Project_major": "3",
                "ActiveProject_Project_medium": "1",
                "ActiveProject_Project_micor": "0",
                "ActiveProject_Project_small": "1"
            }
        },
        {
            "ActiveProjectontime": "5"
        },
        {
            "Completed on time": {
                "completedProject_Project_major": "2",
                "completedProject_Project_medium": "1",
                "completedProject_Project_micor": "0",
                "completedProject_Project_small": "1"
            }
        },
        {
            "completedProjectontime": "4"
        }
    ],
    "Late": [
        {
            "All late": {
                "TotalProject_Project_major": "14",
                "TotalProject_Project_medium": "2",
                "TotalProject_Project_micor": "0",
                "TotalProject_Project_small": "2"
            }
        },
        {
            "TotalProjectlate": "18"
        },
        {
            "Active late": {
                "ActiveProject_Project_major": "11",
                "ActiveProject_Project_medium": "0",
                "ActiveProject_Project_micor": "0",
                "ActiveProject_Project_small": "1"
            }
        },
        {
            "ActiveProjectlate": "12"
        },
        {
            "Completed late": {
                "CompletedProject_Project_major": "3",
                "CompletedProject_Project_medium": "2",
                "CompletedProject_Project_micor": "0",
                "CompletedProject_Project_small": "1"
            }
        },
        {
            "CompletedProjectlate": "6"
        }
    ],
    "Early": [
        {
            "All early": {
                "TotalProject_Project_major": "18",
                "TotalProject_Project_medium": "2",
                "TotalProject_Project_micor": "0",
                "TotalProject_Project_small": "3"
            }
        },
        {
            "TotalProjectearly": "23"
        },
        {
            "Active early": {
                "ActiveProject_Project_major": "17",
                "ActiveProject_Project_medium": "1",
                "ActiveProject_Project_micor": "0",
                "ActiveProject_Project_small": "2"
            }
        },
        {
            "ActiveProjectearly": "20"
        },
        {
            "Compeleted early": {
                "CompletedProject_Project_major": "1",
                "CompletedProject_Project_medium": "1",
                "CompletedProject_Project_micor": "0",
                "CompletedProject_Project_small": "1"
            }
        },
        {
            "CompletedProjectearly": "3"
        }
    ]
};

// console.log(Object.values());
// -------------------------------------------------------------
// 1st pie chart ka data jo ki total hai
// all tab ka data of total projects
console.log(data.All_statuses[0].all_total.TotalProject_Project_major)
console.log(data.All_statuses[0].all_total.TotalProject_Project_medium)
console.log(data.All_statuses[0].all_total.TotalProject_Project_micor)
console.log(data.All_statuses[0].all_total.TotalProject_Project_small)

// onTime tab ka data of total projects
console.log(data["on time"][0]["All on time"].TotalProject_Project_major)
console.log(data["on time"][0]["All on time"].TotalProject_Project_medium)
console.log(data["on time"][0]["All on time"].TotalProject_Project_micor)
console.log(data["on time"][0]["All on time"].TotalProject_Project_small)

// Late tab ka data of total projects
console.log(data.Late[0]["All late"].TotalProject_Project_major)
console.log(data.Late[0]["All late"].TotalProject_Project_medium)
console.log(data.Late[0]["All late"].TotalProject_Project_micor)
console.log(data.Late[0]["All late"].TotalProject_Project_small)

//Early tab ka data of total projects

console.log(data.Early[0]["All early"].TotalProject_Project_major)
console.log(data.Early[0]["All early"].TotalProject_Project_medium)
console.log(data.Early[0]["All early"].TotalProject_Project_micor)
console.log(data.Early[0]["All early"].TotalProject_Project_small)


// 2nd pie chart ka data jo ki Active hai
// -------------------------------------------------------------
// all tab ka data of inprocess projects
console.log(data.All_statuses[2].all_Active.ActiveProject_Project_major)
console.log(data.All_statuses[2].all_Active.ActiveProject_Project_medium)
console.log(data.All_statuses[2].all_Active.ActiveProject_Project_micor)
console.log(data.All_statuses[2].all_Active.ActiveProject_Project_small)

// ontime tab ka data of inprocess projects

console.log(data["on time"][2]["Active on time"].ActiveProject_Project_major)
console.log(data["on time"][2]["Active on time"].ActiveProject_Project_medium)
console.log(data["on time"][2]["Active on time"].ActiveProject_Project_micor)
console.log(data["on time"][2]["Active on time"].ActiveProject_Project_small)

// Late tab ka data of inprocess projects

console.log(data.Late[2]["Active late"].ActiveProject_Project_major)
console.log(data.Late[2]["Active late"].ActiveProject_Project_medium)
console.log(data.Late[2]["Active late"].ActiveProject_Project_micor)
console.log(data.Late[2]["Active late"].ActiveProject_Project_small)

// Early tab ka data of inprocess projects

console.log(data.Early[2]["Active early"].ActiveProject_Project_major)
console.log(data.Early[2]["Active early"].ActiveProject_Project_medium)
console.log(data.Early[2]["Active early"].ActiveProject_Project_micor)
console.log(data.Early[2]["Active early"].ActiveProject_Project_small)

// 3nd pie chart ka data jo ki completed hai
// -------------------------------------------------------------
// for all tab 
console.log(data.All_statuses[4].all_Completed.CompletedProject_Project_major)
console.log(data.All_statuses[4].all_Completed.CompletedProject_Project_status_medium)
console.log(data.All_statuses[4].all_Completed.CompletedProject_Project_status_micor)
console.log(data.All_statuses[4].all_Completed.CompletedProject_Project_status_small)

//for on time tab 
console.log(data["on time"][4]["Completed on time"].completedProject_Project_major)
console.log(data["on time"][4]["Completed on time"].completedProject_Project_medium)
console.log(data["on time"][4]["Completed on time"].completedProject_Project_micor)
console.log(data["on time"][4]["Completed on time"].completedProject_Project_small)


// for late tab kae liye 
console.log(data.Late[4]["Completed late"].CompletedProject_Project_major)
console.log(data.Late[4]["Completed late"].CompletedProject_Project_medium)
console.log(data.Late[4]["Completed late"].CompletedProject_Project_micor)
console.log(data.Late[4]["Completed late"].CompletedProject_Project_small)

// for early tab kae liye

console.log(data.Early[4]["Compeleted early"].CompletedProject_Project_major)
console.log(data.Early[4]["Compeleted early"].CompletedProject_Project_medium)
console.log(data.Early[4]["Compeleted early"].CompletedProject_Project_micor)
console.log(data.Early[4]["Compeleted early"].CompletedProject_Project_small)

// ------------------------------------------------------------------------------
// total center text
console.log(data.All_statuses[1].TotalProjectall)
console.log(data["on time"][1].TotalProjectontime)
console.log(data.Late[1].TotalProjectlate)
console.log(data.Early[1].TotalProjectearly)

// ------------------------------------------------------------------------------
// Ontime center text
console.log(data.All_statuses[3].ActiveProjectall)
console.log(data["on time"][3].ActiveProjectontime)
console.log(data.Late[3].ActiveProjectlate)
console.log(data.Early[3].ActiveProjectearly)

// ------------------------------------------------------------------------------
// Late center text

console.log(data.All_statuses[5].CompletedProjectall)
console.log(data["on time"][5].completedProjectontime)
console.log(data.Late[5].CompletedProjectlate)
console.log(data.Early[5].CompletedProjectearly)

//Early


