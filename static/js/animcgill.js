function toggleMenu() {
	var nav = $( '#nav-panel' );
	var main = $( '#main' );
	if (nav.hasClass( 'nav-open' )) {
		nav.removeClass( 'nav-open' );
		nav.addClass( 'nav-closed' );
		main.removeClass( 'nav-open' );
		main.addClass( 'nav-closed' );
	} else {
		main.removeClass( 'nav-closed' );
		main.addClass( 'nav-open' );
		nav.removeClass( 'nav-closed' );
		nav.addClass( 'nav-open' );
	}
}
