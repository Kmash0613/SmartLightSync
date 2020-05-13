// JavaScript Document
{
	var m=null;
	var inputs=null;
	var input=null;
	var input_device=0;
	var input_menu_id=null;
	
//Midi API 判定
	function runTest(){navigator.requestMIDIAccess().then( success, failure );}
	function success(midiAccess)
	{
		m=midiAccess;
		inputs=m.inputs();
		setInputDeviceSelect();
	}
	function failure(error){alert( "NG" )}
//インプットデバイス	
	function setInputMenuID(parts){
		input_menu_id = parts;
	}
	function setInputDeviceSelect(){
		var i=0;
		if(m!=null){
			if(inputs.length>0){
				for(i=0; i<inputs.length; i++)
					input_menu_id.options[i+1] = new Option(inputs[i].name, i+1);
			}
		} 
	}

	function inputDeviceSelect(item){
		input_device = item.options[item.selectedIndex].value-1;
		if(input_device==-1) input_device=0;
		input= inputs[input_device];			
		input.onmidimessage = handleMIDIMessage1; 
	}

	
//イベント処理
function raw_event(){
	
	var raw_str ="<tr><td>" +event.data[1]+ "</td><td>|</td><td>" +event.data[2]+ " </td><td>|</td><td>" +event.data[0] +"</td></tr>\n";
		$('table#rawlog').prepend(raw_str)
	
	}
	
function change_bg(){
	if(event.data[1]==0)
	{ch_r=parseInt(event.data[2])*2;
	}
	if(event.data[1]==1)
	{ch_g=parseInt(event.data[2])*2;}
	if(event.data[1]==2)
	{ch_b=parseInt(event.data[2])*2;}
	sendMessage(ch_r,ch_g,ch_b);
	//$('body').css({"backgroundColor":"rgb("+ch_r+","+ch_g+","+ch_b+")"})
	//
	//var str2 ="<tr><td>" + ch_r+ "</td><td>|</td><td>"+ch_g+"</td><td>|</td><td>"+ch_b+"</td></tr>\n";
	//$('table#log').prepend(str2);
	}
	function handleMIDIMessage1( event ) {
		//
		//raw_event()
		change_bg()
		//ノートオンオフ判定
		
		
		
			//
		

		
	}
}









