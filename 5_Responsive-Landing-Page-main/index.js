// Form Validator
// var form = document.getElementById("form");
// var inputfields = document.getElementsByClassName("inputfield");

// var elementsvars = [];
// var errorvars = [];


// function createVar(element){
//     var createdelement = document.getElementById(`"${element}"`);
//     console.log(createdelement);
// }

// elementsArray.forEach(function(element){
//     var element = document.getElementById(element); 
//     elementsvars.push(element)
// });


// smallidArray.forEach((element) => {
//     var element = document.getElementById(element); 
//     errorvars.push(element)
// });


// Main Variables
var submit = document.getElementById("btn");
let inputFeilds = document.querySelectorAll(".inputfield");

//small error feild 
// console.log("--------------");


// Input elements Variables
var firstname = document.getElementById("fname");
var lastname = document.getElementById("lname");
var email = document.getElementById("email");
var phonenumber = document.getElementById("phone");
var company = document.getElementById("company");
var jobtitle = document.getElementById("title");
var state = document.getElementById("state");
var country = document.getElementById("country");
var companysize = document.getElementById("cmpsize");
var industry = document.getElementById("industry");
var cq1 = document.getElementById("cq1");
var cq2 = document.getElementById("cq2");
var cq3 = document.getElementById("cq3");
var cq4 = document.getElementById("cq4");

// small elements Variables
var errfirstname = document.getElementById("errfname");
var errlastname = document.getElementById("errlname");
var erremail = document.getElementById("erremail");
var errphonenumber = document.getElementById("errphone");
var errcompany = document.getElementById("errcompany");
var errjobtitle = document.getElementById("errtitle");
var errstate = document.getElementById("errstate");
var errcountry = document.getElementById("errcountry");
var errcompanysize = document.getElementById("errcmpsize");
var errindustry = document.getElementById("errindustry");
var errcq1 = document.getElementById("errcq1");
var errcq2 = document.getElementById("errcq2");
var errcq3 = document.getElementById("errcq3");
var errcq4 = document.getElementById("errcq4");

// let errors = [errcq1,errcq2,errcq3,errcq4];
// console.log("-------"+errors);

// console.log(errors.forEach((error) => {
//     console.log(error);
// }));

function validator(element,errvar,label){
    if(element.value=="" || element.value==null){
        errvar.innerHTML = `${label} should not be blanked.`;
        element.style.border = "1px solid #F23636";

        element.addEventListener("keydown",(element)=>{
            // e.preventDefault();
            if(element.value !="" || element.value){
                
            }
        })
    }    
}    
                          

// inputFeilds.forEach(element => {
//     element.addEventListener("keydown",(e) => {
//         e.preventDefault();
//         if(e.value != "" || e.value != null){
//             if()
//         }
//     })
// })


// elementsArray contains id of the input elements
var initelements = [firstname,lastname,email,phonenumber,company,jobtitle,state,country,companysize,industry,cq1,cq2,cq3,cq4];


// smallidArray contains id of the small tags
var initsmalltags = [errfirstname,errlastname,erremail,errphonenumber,errcompany,errjobtitle,errstate,errcountry,errcompanysize,errindustry,errcq1,errcq2,errcq3,errcq4];

var arraylen = initelements.lenth;


submit.addEventListener('click',(e)=>{
        e.preventDefault();
        validator(initelements[0],initsmalltags[0],"First name");
        validator(initelements[1],initsmalltags[1],"Last name");
        validator(initelements[2],initsmalltags[2],"Email");
        validator(initelements[3],initsmalltags[3],"Contact");
        validator(initelements[4],initsmalltags[4],"Company");
        validator(initelements[5],initsmalltags[5],"Job-title");
        validator(initelements[6],initsmalltags[6],"State");
        validator(initelements[7],initsmalltags[7],"Country");
        validator(initelements[8],initsmalltags[8],"Company size");
        validator(initelements[9],initsmalltags[9],"Industry");
        validator(initelements[10],initsmalltags[10],"Coustom Question 1");
        validator(initelements[11],initsmalltags[11],"Coustom Question 2");
        validator(initelements[12],initsmalltags[12],"Coustom Question 3");
        validator(initelements[13],initsmalltags[13],"Coustom Question ");
})
