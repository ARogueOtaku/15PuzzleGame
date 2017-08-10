var stats = 'UNFINISHED', moves = 0;

function move(currentElement){
	if(currentElement.innerHTML == '-') return;
	var neighbourElement, id = parseInt(currentElement.id);
	neighbourElement = document.getElementById(id+1);
	if(neighbourElement && neighbourElement.innerHTML == '-') swap(currentElement,neighbourElement);
	neighbourElement = document.getElementById(id-1);
	if(neighbourElement && neighbourElement.innerHTML == '-') swap(currentElement,neighbourElement);
	neighbourElement = document.getElementById(id+4);
	if(neighbourElement && neighbourElement.innerHTML == '-') swap(currentElement,neighbourElement);
	neighbourElement = document.getElementById(id-4);
	if(neighbourElement && neighbourElement.innerHTML == '-') swap(currentElement,neighbourElement);
}
	
function swap(currentElement,neighbourElement){
	temp = currentElement.innerHTML;
	currentElement.style.opacity = '.0';
	setTimeout(function(){
		currentElement.innerHTML = neighbourElement.innerHTML;
		currentElement.style.visibility = 'hidden';
		currentElement.style.opacity = '1';
	},300);
	neighbourElement.style.opacity = '.0';
	setTimeout(function(){
		neighbourElement.innerHTML = temp;
		neighbourElement.style.visibility = 'visible';
		neighbourElement.style.opacity = '1';
	},300);
	moves++;
	
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function check(){
	for(i = 1; i <= 15; i++)
		if(document.getElementById(i.toString()).innerHTML != i  || document.getElementById('16').innerHTML != '-'){
			alert('Status: '+ stats +' ,Moves: ' + moves);
			return;
		}
	stats = 'VICTORY';
	alert('Status: '+ stats +' ,Moves: ' + moves);
	location.reload();
}

var arr = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','-'];
while(true){
	shuffle(arr);
	var row = 5 - Math.ceil((arr.indexOf('-')+1)/4), inversions = getInversions(arr);
	
	console.log(row);
	if((row%2)!=(inversions%2)) break;
}

window.onload = function(){
	var h = document.getElementById('1');
	for(i = 1; i <= 16; i++){
		try{
			document.getElementById(i).innerHTML = arr[i-1];
			if (arr[i-1] == '-') document.getElementById(i).style.visibility = 'hidden';
		}
		catch(e){
			console.log(i + "  " + e.toString());
		}
	}
}

function getInversions(arr){
	var clone = arr.slice(0);
	clone.splice(clone.indexOf('-'),1);
	var n = clone.length;
	var inv = 0;
	for (i = 0; i < n - 1; i++)
        for (j = i+1; j < n; j++)
          if (clone[i] > clone[j])
            inv++;
	console.log(clone);
	console.log(inv);
	return inv;
}