
	function memberInfoView(){
		var member = document.createElement("div");
			member.className="member";			
		var html = '';

		for(var i = 0; i < memberInfo.length; i++ ){
			html += `<p class="member_a_name" onclick="memberinfomodify(${memberInfo[i].num_idx})" >${memberInfo[i].memname}</p>`
			
				
		}
		member.innerHTML = html;
		document.getElementById("number_list").appendChild(member);	
		
	}

	function memberinfomodify(num){
		document.getElementById("write_btn").style.display = 'none';
		document.getElementById("modify_btn").style.display = 'inline-block';

		document.getElementById("modal_header").innerHTML = '전화번호 수정';
		location.href="#open";
		document.frm.modify_num.val = num;
		document.frm.people_name.value = memberInfo[num-1].memname;
		document.frm.phone_number.value = memberInfo[num-1].mem_hp;
		document.frm.home_number.value = memberInfo[num-1].mem_number;
		document.frm.email.value = memberInfo[num-1].mem_email;

		memberInfo[num-1].memname = document.frm.people_name.value;
		memberInfo[num-1].mem_hp = document.frm.phone_number.value;
		memberInfo[num-1].mem_number = document.frm.home_number.value;
		memberInfo[num-1].mem_email = document.frm.email.value; 
	}

	function phone_number_send(){
		document.getElementById("write_btn").style.display = 'inline-block';
		document.getElementById("modify_btn").style.display = 'none';

		document.getElementById("modal_header").innerHTML = '전화번호 등록';
		 document.frm.phone_number.value = document.getElementById("input_num").value

		document.frm.people_name.value = '';
		document.frm.home_number.value = '';
		document.frm.email.value = '';		 

	}

	var input_number = document.getElementById("input_num");

	for(var i =0 ; i< 12; i++){
		document.getElementsByClassName("number_btn")[i].onclick = function () {
			input_number.value += this.innerHTML;
			if( input_number.value.substring(0,2) == '02'  )    {
				if(input_number.value.length == 2 || input_number.value.length == 6){
					input_number.value += '-';
				}
			}else{
				if( (input_number.value.length == 3 || input_number.value.length == 8 )  ){
			 		input_number.value += '-';
			 	}	
			}
			document.getElementById("delete_btn").style.display = 'inline-block';
		};
	}

	
	document.getElementById("delete_btn").onclick = function(){
		
		input_number.value = input_number.value.substring(0,input_number.value.length -1)
		if( input_number.value.length == 0 ){
			document.getElementById("delete_btn").style.display = 'none'
		}
	}

	function phoneBook_Write(){
		var numberReg = new RegExp ( /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g);
		var emailReg = new RegExp ( /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/g);

		

		memberInfo.push({
			num_idx : memberInfo[memberInfo.length-1].num_idx +1,
			memname : document.frm.people_name.value ,
			mem_hp		: document.frm.phone_number.value,
			mem_number : document.frm.home_number.value,
			mem_email  : document.frm.email.value
		});

		var member = document.createElement("div");
		member.className="member";

		var html = "";
			html += `<p class="member_a_name" onclick="memberinfomodify(${memberInfo[memberInfo.length-1].num_idx})" >${document.frm.people_name.value}</p>`

		member.innerHTML = html;
		document.getElementById("number_list").appendChild(member);

		document.frm.people_name.value = '';
		document.frm.phone_number.value = '';
		document.frm.home_number.value = '';
		document.frm.email.value = '';
		location.href = '#close';
	}

	function phoneBook_Modify(){
		var modifynum = document.frm.modify_num.val;

		memberInfo[modifynum-1].memname = document.frm.people_name.value;
		memberInfo[modifynum-1].mem_hp = document.frm.phone_number.value;
		memberInfo[modifynum-1].mem_number = document.frm.home_number.value;
		memberInfo[modifynum-1].mem_email = document.frm.email.value; 

		
		document.frm.people_name.value = '';
		document.frm.phone_number.value = '';
		document.frm.home_number.value = '';
		document.frm.email.value = '';
		$('.member_a_name').remove();
		memberInfoView();
		location.href = '#close';	

	}

	document.addEventListener("DOMContentLoaded", function() {
	  memberInfoView();
	});