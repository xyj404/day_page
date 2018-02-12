function fastSort(arry, first, end ){
	if(first < end){
		var k = onceSort(arry, first, end);
		fastSort(arry, first, k-1);
		fastSort(arry, k+1, end);

	}
	return arry;

}

function onceSort(arry, first, end){
	while( first < end){
		while( first < end && arry[first] < arry[end]){
			end--;
		}
		if( first < end){
			swap(arry, first, end);
			first++;
		}
		while(first < end && arry[first] < arry[end]){
			first++;
		}
		if(first<end){
			swap(arry, first, end);
			end--;
		}
	}
	return first;

}

function swap(arry, first, end){
	var temp;
	temp = arry[first];
	arry[first] = arry[end];
	arry[end] = temp;
	return arry;
}