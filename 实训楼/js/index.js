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



        var bodyHide=document.getElementsByClassName('body-hide');  //�Ҳ�����
        var loginRegisterBox=document.getElementsByClassName('login-register-box');  //����div
        var LoginBtn=document.getElementsByClassName('login-btn');  //��¼��ť
        var RegisterBtn=document.getElementsByClassName('register-btn');  //ע�ᰴť
        var BottomLine=document.getElementsByClassName('bottom-line'); //��ť�»���
        var LoginPage=document.getElementsByClassName('login-page'); //��¼ҳ��
        var  RegisterPage=document.getElementsByClassName('register-page'); //ע��ҳ��
        var chaHao=document.getElementById('chaHao'); //�������ϽǵĲ��

        var a=document.getElementById('submit01');   //�������ϵĵ�¼��ť
        var b=document.getElementById('submit02');  //�������ϵ�ע�ᰴť
        a.onclick=function(){
            bodyHide[0].style.display='block'; //�Ҳ���������
            loginRegisterBox[0].style.opacity='1';   //���ݳ���
            LoginPage[0].style.display='block';  //��¼ҳ�����
            RegisterPage[0].style.display='none'; //ע��ҳ�治����
        };
        b.onclick=function(){
            bodyHide[0].style.display='block'; //�Ҳ���������
            loginRegisterBox[0].style.opacity='1'; //���ݳ���
            LoginPage[0].style.display='none'; //��¼ҳ�治����
            RegisterPage[0].style.display='block'; //ע��ҳ�����
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

