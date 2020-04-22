<template>
<div>
  <div style="padding:20px;">
    <h1 style="font-size:20px;">Send Message</h1>
  </div>
  
   <div class="box">
    <form >
      <div class="row">
        <div class="col-25">
          <label for="fname">Phone Number</label>
        </div>
        <div class="col-75">
          <textarea type="text" id="email" v-model="email"  rows="4" name="email"
          :class="[(submitted==false ? 'notsubmitted':((email==''||isemailvalid==false) && submitted ? 'error':'success'))]"  ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="lname">Message</label>
        </div>
        <div class="col-75">
          <textarea type="text" v-model="message"  id="lname" name="lastname" rows="8" ></textarea>
        </div>
      </div>

      <div class="row" style="padding:10px;">
       <button type="button" style="float:right;width:10%;padding:8px;" class="btn btn-default" v-on:click="sendMail(email,message)">Send</button>
      </div>
    </form>
  </div>
</div>
 
</template>

<script>
   import Api from '../services/ApiService'

    export default {
         name: "SendMessage.vue",

        data: () => {
          return {
              email: '',
              message: '',
              submitted:false,
              splitedStr: "",
              isemailvalid:true,
              api: new Api()
          }
        },
        methods:{
          sendMail(email, message){
            this.submitted=true;
            this.splitedStr = this.email.split(",");
            var i;
            for(i=0;i<this.splitedStr.length;i++){
                let isInvalidValid=this.validEmail(this.splitedStr[i]);
                if(!isInvalidValid){
                  this.isemailvalid=false;
                  break;
                }else{
                   this.isemailvalid=true;
                }
            }
            if(this.isemailvalid){
              this.api.sendSms(email, message)
            }
            },

            validEmail: function (email) {
              if(email.length==10){
                return true;
              }else{
                return false;
              }
      //var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //  return re.test(email);
    }
        }
    }
</script>

<style scoped>

* {
  box-sizing: border-box;
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
.error{
  border:2px solid red !important;
}
.success{
  border:2px solid green !important;
}
notsubmitted{
   border: 1px solid #ccc !important;
}
</style>
