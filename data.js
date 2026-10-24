const FOUNDATION_R = ["Colouring","Tracing","Reading","Alphabets","Colours","Numbers","Shapes","Phonics"];
const INTER = ["Reading","Colouring","Maths","English","Life Skills","Geography","History","Afrikaans","Natural Sciences"];
const SENIOR = ["Reading","English","Afrikaans","Maths","Natural Sciences","Physics","Chemistry","Geography","History","EMS","Life Orientation"];

const GRADES = {
  "r": {name:"Grade R", subjects:FOUNDATION_R},
  "1": {name:"Grade 1", subjects:["Colouring","Alphabets","Reading","Numbers","Tracing","Maths","English","Life Skills"]},
  "2": {name:"Grade 2", subjects:["Colouring","Reading","Numbers","Maths","English","Life Skills"]},
  "3": {name:"Grade 3", subjects:["Maths","Numbers","Reading","Life Skills","English"]},
  "4": {name:"Grade 4", subjects:INTER},
  "5": {name:"Grade 5", subjects:INTER},
  "6": {name:"Grade 6", subjects:INTER},
  "7": {name:"Grade 7", subjects:SENIOR},
  "8": {name:"Grade 8", subjects:SENIOR},
  "9": {name:"Grade 9", subjects:SENIOR},
  "10": {name:"Grade 10", subjects:[]}
};

const TYPES = ["Worksheet","Study Guide","Notes & Explanations","Mind Map"];

const RESOURCES = [
  {grade:"r", subject:"Tracing", type:"Worksheet", title:"Tracing Lines", page:"grade-r-tracing-lines.html"},
  {grade:"1", subject:"Tracing", type:"Worksheet", title:"Tracing Lines", page:"grade-r-tracing-lines.html"}
];
{grade:"r", subject:"Colouring", type:"Worksheet", title:"Learning Colours", page:"grade-r-learning-colours.html"},
{grade:"r", subject:"Colours", type:"Worksheet", title:"Learning Colours", page:"grade-r-learning-colours.html"},
