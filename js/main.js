function prettyURL(){
	var u,s,fs;
	u = window.location.href;
	fs = u.indexOf('/');
	if(fs != -1) {
		s = u.substring(fs+2);
	} else {
		s = u;
	}
	return s;
}