function changeColor(){
	for(i = 0; i<4; i++)
	if (form1.color[i].checked){
		document.body.style.background = form1.color[i].value;
	}
}
function checkIP(){//js����֤����
   var text=document.getElementById("url").value;//ͨ��id��ȡ��Ҫ��֤�ı�Ԫ�ص�ֵ
   if(text==""){//�������ȡ��ֵΪ��ʱ
     alert("����Ϊ��Ŷ��");//������ʾ
     return false;//����false�����ύ����
   }
   return true;//�ύ��
}
function hire(){
	alert("Ƹ����Ϣ�ѷ��ͣ�")
}