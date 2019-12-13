/**
 * Created by uid on 2019/5/17.
 */

    window.onload=function(){
        var dropdown=document.getElementById('dropdown');
        dropdown.onmouseover=function(){
            dropdown.classList.add('open');
        }
        dropdown.onmouseout=function(){
            dropdown.classList.remove('open');
        }



        var bodyHide=document.getElementsByClassName('body-hide');  //灰布背景
        var loginRegisterBox=document.getElementsByClassName('login-register-box');  //整个div
        var LoginBtn=document.getElementsByClassName('login-btn');  //登录按钮
        var RegisterBtn=document.getElementsByClassName('register-btn');  //注册按钮
        var BottomLine=document.getElementsByClassName('bottom-line'); //按钮下划线
        var LoginPage=document.getElementsByClassName('login-page'); //登录页面
        var  RegisterPage=document.getElementsByClassName('register-page'); //注册页面
        var chaHao=document.getElementById('chaHao'); //盒子右上角的叉号

        var a=document.getElementById('submit01');   //导航栏上的登录按钮
        var b=document.getElementById('submit02');  //导航栏上的注册按钮
        a.onclick=function(){
            bodyHide[0].style.display='block'; //灰布背景出现
            loginRegisterBox[0].style.opacity='1';   //内容出现
            LoginPage[0].style.display='block';  //登录页面出现
            RegisterPage[0].style.display='none'; //注册页面不出现
        };
        b.onclick=function(){
            bodyHide[0].style.display='block'; //灰布背景出现
            loginRegisterBox[0].style.opacity='1'; //内容出现
            LoginPage[0].style.display='none'; //登录页面不出现
            RegisterPage[0].style.display='block'; //注册页面出现
            loginRegisterBox[0].style.height='347px';
            BottomLine[0].style.left='55px';
        };



        LoginBtn[0].onclick=function(){
            BottomLine[0].style.left='0px';
            LoginPage[0].style.display='block';
            RegisterPage[0].style.display='none';
            loginRegisterBox[0].style.height='302px';
        }
        RegisterBtn[0].onclick=function(){
            BottomLine[0].style.left='55px';
            LoginPage[0].style.display='none';
            RegisterPage[0].style.display='block';
            loginRegisterBox[0].style.height='347px';
        }
        chaHao.onclick=function(){
            loginRegisterBox[0].style.opacity='0';
            bodyHide[0].style.display='none';
        }

    }

