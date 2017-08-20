<template>
    <div class="login">
        <div class="login-wrap" v-show="showLogin">
            <p v-show="msg" class="tip">{{msg}}</p>
            <input type="text" placeholder="请输入手机号" v-model="loginModel.tel" class="login-text">
            <input type="password" placeholder="请输入密码" v-model="loginModel.password" class="login-text">
            <button class="login-button" @click="login">登录</button>
            <span @click="hideLogin">没有账号？马上注册</span>
        </div>

        <div class="login-wrap" v-show="showRegister">
            <p v-show="msg" class="tip">{{msg}}</p>
            <input type="text" placeholder="请输入用户名" v-model="registerModel.username" class="login-text">
            <input type="text" placeholder="请输入手机号" v-model="registerModel.tel" class="login-text">
            <input type="password" placeholder="请输入密码" v-model="registerModel.password" class="login-text">
            <input type="password" placeholder="请再次输入密码" v-model="registerModel.confirmPassword" class="login-text">
            <button class="login-button" @click="register">注册</button>
            <span @click="hideRegister">已有账号？马上登录</span>
        </div>
    </div>
</template>

<style scoped>
    .login{
        text-align: center;
        background: #DDD;
        width: 100%;
        height: 800px;
        z-index: 1300;
    }
    .login-wrap{

        padding: 200px 50px 0 50px;
    }
    .login-button{
        display: block;
        width: 100%;
        margin: 10px auto;
        height: 35px;
        background-color:#20a0ff;
        color: #fff;
        border-radius: 5px;
    }
    .login-text{
        border: 1px solid #fff;
        width: 100%;
        margin: 10px 0;
        height: 35px; 
    }

</style>

<script>
    export default{
        data(){
            return{
                registerUrl:"http://180932h3r5.51mypc.cn:26110/api.json",
                loginUrl: "http://180932h3r5.51mypc.cn:26110/api.json",
                logout:"http://180932h3r5.51mypc.cn:26110/api.json",
                userInforUrl:"http://180932h3r5.51mypc.cn:26110/api.json",
                registerModel: {
                    tel:"",
                    password:"",
                    confirmPassword:"",
                    username:""
                },
                loginModel:{
                    tel:"",
                    password:""
                },
                msg:"",
                userName:"",
                showLogin:true,
                showRegister:false
            }
        },
        mounted:function(){
            this.$nextTick(function(){
                this.userName=sessionStorage.getItem("userName");
            })
        },
        methods:{
            register:function(){
                var vm=this;
                vm.msg=""
                if(!this.isregisterEmpty()){
                vm.$http.post(vm.registerUrl,{
                    url:vm.registerUrl,
                    body:vm.registerModel
                }).then(function(res){
                    vm.msg="注册成功";
                    this.$router.push("/orginaztions")
                    console.log(vm.registerModel);
                },vm.requestError);
                }else{
                    vm.msg="信息不能为空";
                }
            },
            login:function(){
                var vm=this;
                    vm.msg="";
                    if(!this.isloginEmpty()){

                    vm.$http.post(vm.loginUrl,{
                        url:vm.loginUrl,
                        body:vm.loginModel
                    }).then(function(res){
                        vm.msg="登录成功";
                        vm.userName=res.data.userName;
                        sessionStorage.setItem("token",res.data.token);
                        sessionStorage.setItem("userName",vm.userName);
                        this.getUserInfor();
                        this.$router.push("/home");
                    },vm.requestError);
                 }else{
                    vm.msg="账号密码错误";
                 }

                    
            },
            isloginEmpty:function(){
                if(this.loginModel.password&&this.loginModel.tel){
                    return false
                }else{
                    return true;
                }
            },
            isregisterEmpty:function(){
                if((this.registerModel.password===this.registerModel.confirmPassword)&&this.registerModel.tel&&this.this.registerModel.username){
                    return false;
                }else{
                    return true;
                }
            },
            hideLogin:function(){
                this.showLogin=false;
                this.showRegister=true;
                this.msg="";
            },
            hideRegister:function(){
                this.showLogin=true;
                this.showRegister=false;
                this.msg="";
            },
            requestError:function(xhr,errType,err){
                this.msg=xhr.responseText;
            },
            getUserInfor:function(){
                   this.$http.get(this.userInforUrl,{
                        url:this.userInforUrl,
                    }).then(function(res){
                        
                        
                    },this.requestError);
            }
        }
    }
</script>