!function(w, d, _, __, S, A, H) {

	init(w, d, _, __, S, A, H);

	UI = {
		initialize_demo: function() {
			// _("#navigation").style.opacity = "0";

			// _(".intro-image img").style.marginRight = "-300px";

			setTimeout(function() {
				// _("#navigation").classList.add("sudo");

				_(".header .brand .brand-text").classList.add("dark");

				// _("#navigation").style.display = "none";
				// _("#navigation").style.opacity = "1";
				_("#navigation").style.bottom = "-50%";


				// _("#homescreen").replaceClass("visible-screen", "hidden-screen");
				_("#homescreen").style.opacity  = "0";




				setTimeout(function() {
					_("#homescreen").style.display = "none";

					_(".demo").style.display = "block";
					_(".demo").style.opacity = "1";
					
					setTimeout(function() {
						_(".demo iframe").setAttribute("src", "demo.html");
					}, 500);
				}, 500);

				// _("#specsscreen").replaceClass("hidden-screen", "visible-screen");

				
			}, 1000);
		},

		currentScreen: "home",

		navigateTo: function(p) {

			if (UI.currentScreen != p) {
				if (UI.currentScreen == "home") {
					_("#navigation").style.opacity = "0";
					setTimeout(function() {
						
						_("#navigation").classList.add("sudo");

						_("#navigation").style.opacity = "1";
						
						_(["#", UI.currentScreen, "screen"].j()).replaceClass("visible-screen", "hidden-screen");
						_(["#", p, "screen"].j()).replaceClass("hidden-screen", "visible-screen");

						_(".header-wrapper").style.opacity = "0";
						
					}, 500);
				} else if (p != "home") {
					_(["#", UI.currentScreen, "screen"].j()).replaceClass("visible-screen", "hidden-screen");
					_(["#", p, "screen"].j()).replaceClass("hidden-screen", "visible-screen");
					_(".header-wrapper").style.opacity = "0";
				} else if (p == "home") {
					_("#navigation").style.opacity = "0";
					setTimeout(function() {
						
						_("#navigation").classList.remove("sudo");

						_("#navigation").style.opacity = "1";

						console.log(UI.currentScreen, p);
						
						_(["#", UI.currentScreen, "screen"].j()).replaceClass("visible-screen", "hidden-screen");
						_(["#", p, "screen"].j()).replaceClass("hidden-screen", "visible-screen");

						_(".header-wrapper").style.opacity = "1";
						
					}, 500);
				}

				UI.currentScreen = p;
			}

		},

		initialize_navigation: function() {
			var j = __(".navigation .nav-holder a");
			
			for (var i = 0; j[i]; i++) {
				j[i].addEventListener("click", function() {
					UI.navigateTo(this.getAttribute("data-p"));
				});
			}
		}
 	};

	
	w.addEventListener("load", function() {
		
		_("#showdemo").addEventListener("click", UI.initialize_demo);

		UI.initialize_navigation();

	});

	function key(el, ac, k, fn, aditionalKey) {
		var allowed_ac = ["up", "down", "press"];
		if (allowed_ac.contains(ac))
			el.addEventListener(["key", ac].j(), function() {
				var e = window.event;
				if (e.keyCode == k) {
					if (aditionalKey && aditionalKey instanceof S) {
						if (e[aditionalKey])
							fn(el);
					} else {
						fn(el);
					}
				}
			});
	};

}(window, document, function(el) {
	return document.querySelector(el);
}, function(el) {
	return document.querySelectorAll(el);
}, String, Array, HTMLElement);	

function init(w, d, _, __, S, A, H) {

	A.prototype.j = function(k) {
		k = k || "";
		return this.join(k);
	};

	A.prototype.contains = function(needle) {
		if (this.indexOf(needle) == -1)
			return false;
		return true;
	};

	H.prototype.html = function(h, a, bef) {
		a = a || false;
		bef = bef || false;
		if (!a) this.innerHTML = h;
		else {
			if (bef == "before") this.innerHTML = h + this.innerHTML;
			else this.innerHTML += h;
		}
	};

	Date.prototype.timeNow = function () {
	    var hours = this.getHours(), minutes = this.getMinutes(), ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		hours = hours < 10 ? '0'+hours : hours;
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + ':' + minutes + ' ' + ampm;
		return strTime;
	};

	H.prototype.replaceClass = function(f, t) {
		this.classList.remove(f);
		this.classList.add(t);
	};

}