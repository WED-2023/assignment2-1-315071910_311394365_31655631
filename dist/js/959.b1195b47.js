"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[959],{2959:(a,e,r)=>{r.r(e),r.d(e,{default:()=>h});var n=function(){var a=this,e=a._self._c;return e("div",[e("br"),e("br"),e("div",{staticClass:"container d-flex align-items-center justify-content-center"},[e("b-card",{staticClass:"register-card shadow-sm p-4"},[e("h1",{staticClass:"title text-center mb-4"},[a._v("Register")]),e("b-form",{on:{submit:function(e){return e.preventDefault(),a.onRegister.apply(null,arguments)},reset:function(e){return e.preventDefault(),a.onReset.apply(null,arguments)}}},[e("b-form-group",{attrs:{label:"Username:","label-for":"username","label-cols-sm":"3"}},[e("b-form-input",{staticClass:"rounded-pill",attrs:{id:"username",type:"text",state:!a.usernameTaken&&a.validateState("username"),placeholder:"Enter your username"},on:{blur:a.checkUsername},model:{value:a.$v.form.username.$model,callback:function(e){a.$set(a.$v.form.username,"$model",e)},expression:"$v.form.username.$model"}}),a.$v.form.username.required?a.$v.form.username.length?a.$v.form.username.alpha?a.usernameTaken?e("b-form-invalid-feedback",[a._v(" Username is already taken ")]):a._e():e("b-form-invalid-feedback",[a._v(" Username must contain only letters ")]):e("b-form-invalid-feedback",[a._v(" Username must be between 3-8 characters long ")]):e("b-form-invalid-feedback",[a._v(" Username is required ")])],1),e("b-form-group",{attrs:{label:"First Name:","label-for":"firstName","label-cols-sm":"3"}},[e("b-form-input",{staticClass:"rounded-pill",attrs:{id:"firstName",type:"text",state:a.validateState("firstName"),placeholder:"Enter your first name"},model:{value:a.$v.form.firstName.$model,callback:function(e){a.$set(a.$v.form.firstName,"$model",e)},expression:"$v.form.firstName.$model"}}),a.$v.form.firstName.required?a.$v.form.firstName.alpha?a._e():e("b-form-invalid-feedback",[a._v(" First name must contain only letters ")]):e("b-form-invalid-feedback",[a._v(" First name is required ")])],1),e("b-form-group",{attrs:{label:"Last Name:","label-for":"lastName","label-cols-sm":"3"}},[e("b-form-input",{staticClass:"rounded-pill",attrs:{id:"lastName",type:"text",state:a.validateState("lastName"),placeholder:"Enter your last name"},model:{value:a.$v.form.lastName.$model,callback:function(e){a.$set(a.$v.form.lastName,"$model",e)},expression:"$v.form.lastName.$model"}}),a.$v.form.lastName.required?a.$v.form.lastName.alpha?a._e():e("b-form-invalid-feedback",[a._v(" Last name must contain only letters ")]):e("b-form-invalid-feedback",[a._v(" Last name is required ")])],1),e("b-form-group",{attrs:{label:"Country:","label-for":"country","label-cols-sm":"3"}},[e("b-form-select",{staticClass:"rounded-pill",attrs:{id:"country",options:a.countries,state:a.validateState("country")},model:{value:a.$v.form.country.$model,callback:function(e){a.$set(a.$v.form.country,"$model",e)},expression:"$v.form.country.$model"}}),a.$v.form.country.required?a._e():e("b-form-invalid-feedback",[a._v(" Country is required ")])],1),e("b-form-group",{attrs:{label:"Email Address:","label-for":"email","label-cols-sm":"3"}},[e("b-form-input",{staticClass:"rounded-pill",attrs:{id:"email",type:"email",state:a.validateState("email"),placeholder:"Enter your email address"},model:{value:a.$v.form.email.$model,callback:function(e){a.$set(a.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}}),a.$v.form.email.required?a.$v.form.email.email?a._e():e("b-form-invalid-feedback",[a._v(" Email must be valid ")]):e("b-form-invalid-feedback",[a._v(" Email is required ")])],1),e("b-form-group",{attrs:{label:"Password:","label-for":"password","label-cols-sm":"3"}},[e("b-form-input",{staticClass:"rounded-pill",attrs:{id:"password",type:"password",state:a.validateState("password"),placeholder:"Enter your password"},model:{value:a.$v.form.password.$model,callback:function(e){a.$set(a.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),a.$v.form.password.required?a.$v.form.password.length?a.$v.form.password.hasNumber?a.$v.form.password.hasSpecial?a._e():e("b-form-invalid-feedback",[a._v(" Password must contain at least one special character ")]):e("b-form-invalid-feedback",[a._v(" Password must contain at least one number ")]):e("b-form-invalid-feedback",[a._v(" Password must be between 5-10 characters long ")]):e("b-form-invalid-feedback",[a._v(" Password is required ")])],1),e("b-form-group",{attrs:{label:"Confirm Password:","label-for":"confirmedPassword","label-cols-sm":"3"}},[e("b-form-input",{staticClass:"rounded-pill",attrs:{id:"confirmedPassword",type:"password",state:a.validateState("confirmedPassword"),placeholder:"Confirm your password"},model:{value:a.$v.form.confirmedPassword.$model,callback:function(e){a.$set(a.$v.form.confirmedPassword,"$model",e)},expression:"$v.form.confirmedPassword.$model"}}),a.$v.form.confirmedPassword.required?a.$v.form.confirmedPassword.sameAsPassword?a._e():e("b-form-invalid-feedback",[a._v(" Passwords do not match ")]):e("b-form-invalid-feedback",[a._v(" Password confirmation is required ")])],1),e("div",{staticClass:"d-flex justify-content-between"},[e("b-button",{staticClass:"rounded-pill px-4",attrs:{type:"reset",variant:"outline-danger"}},[a._v("Reset")]),e("b-button",{staticClass:"rounded-pill px-4",attrs:{type:"submit",variant:"primary"}},[a._v("Register")])],1),e("div",{staticClass:"text-center mt-3"},[a._v(" Already have an account? "),e("router-link",{staticClass:"text-primary font-weight-bold",attrs:{to:"/login"}},[a._v(" Log in here")])],1)],1)],1),a.form.submitError?e("b-alert",{staticClass:"mt-3",attrs:{variant:"danger",dismissible:""}},[a._v(" Registration failed: "+a._s(a.form.submitError)+" ")]):a._e()],1),e("br"),e("br")])},t=[],s=r(124),i=r(8534);r(2222),r(7658);const o=["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","United States Minor Outlying Islands","Virgin Islands (British)","Virgin Islands (U.S.)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cabo Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo (Democratic Republic of the)","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Côte d'Ivoire","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia (the former Yugoslav Republic of)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Korea (Democratic People's Republic of)","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of Kosovo","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Korea (Republic of)","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];var l=r(379),m=r(9669),d=r.n(m),u=l.BM.regex("hasNumber",/\d/),c=l.BM.regex("hasSpecial",/[\W_]/);const f={name:"Register",data:function(){return{form:{username:"",firstName:"",lastName:"",country:null,email:"",password:"",confirmedPassword:"",submitError:void 0},countries:[{value:null,text:"Select your country",disabled:!0}].concat(o),usernameTaken:!1}},validations:{form:{username:{required:l.C1,length:function(a){return(0,l.Ei)(3)(a)&&(0,l.BS)(8)(a)},alpha:l.Fq},firstName:{required:l.C1,alpha:l.Fq},lastName:{required:l.C1,alpha:l.Fq},country:{required:l.C1},email:{required:l.C1,email:l.Do},password:{required:l.C1,length:function(a){return(0,l.Ei)(5)(a)&&(0,l.BS)(10)(a)},hasNumber:u,hasSpecial:c},confirmedPassword:{required:l.C1,sameAsPassword:(0,l.sH)("password")}}},methods:{validateState:function(a){var e=this.$v.form[a],r=e.$dirty,n=e.$error;return r?!n:null},checkUsername:function(){var a=this;return(0,i.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.form.username){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,d().get("/check-username",{params:{username:a.form.username}});case 5:a.usernameTaken=!1,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),e.t0.response&&409===e.t0.response.status?a.usernameTaken=!0:console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))()},Register:function(){var a=this;return(0,i.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.$v.form.$touch(),!a.$v.form.$anyError&&!a.usernameTaken){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,d().post("http://localhost:80/Register",{username:a.form.username,password:a.form.password,firstname:a.form.firstName,lastname:a.form.lastName,country:a.form.country,email:a.form.email});case 6:e.sent,a.$router.push("/login"),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),a.form.submitError=e.t0.response?e.t0.response.data.message:"Unknown error";case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))()},onRegister:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.usernameTaken||this.Register()},onReset:function(){this.form={username:"",firstName:"",lastName:"",country:null,email:"",password:"",confirmedPassword:"",submitError:void 0},this.usernameTaken=!1,this.$v.$reset()}},watch:{"form.username":"checkUsername"}},b=f;var v=r(1001),p=(0,v.Z)(b,n,t,!1,null,null,null);const h=p.exports}}]);
//# sourceMappingURL=959.b1195b47.js.map