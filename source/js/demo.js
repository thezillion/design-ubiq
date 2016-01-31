

!function(w, d, _, __, S, A, H) {

	init(w, d, _, __, S, A, H);

	function setImage(v, src) {
		_("#panelimg"+v).src = ["img/demo/", src].j();

		if (_(".extra-panel"+v))
			_(".extra-panel"+v).style.opacity = "1";
	}

	function switchPanel(n)  {
		_("#panelimg"+n).style.opacity = "0";
		_("#panelimg"+(n+1)).style.opacity = "1";

		setTimeout(function() {
			if (_("#panel-desc-"+(n))) _("#panel-desc-"+(n)).style.opacity = "0";
			if (_("#panel-desc-"+(n+1))) _("#panel-desc-"+(n+1)).style.opacity = "1";
		}, 100);
	}

	var anim = {
		isAnim: false,
		initialize_demo: function() {

			anim.isAnim = true;

			n = 0;

			if (_("#panel-desc-"+(n))) _("#panel-desc-"+(n)).style.opacity = "0";
			if (_("#panel-desc-"+(n+1))) _("#panel-desc-"+(n+1)).style.opacity = "1";

			setTimeout(function() {
				setImage("1", "1/one.gif");

				setTimeout(function() {
					_("#sizer_vkdjk").style.opacity = "1";
					_("#sizer_vkdjk").style.width = "391px";
					_("#sizer_vkdjk").style.left = "446px";

					setTimeout(function() {
						_("#sizer_vkdjk span").style.opacity = "1";

						anim.isAnim = false;
					}, 500);
				}, 3000);
			}, 500);

			// setTimeout(anim.phase1, 5000);
			// currentScreen++;
		},
		phase1: function() {

			anim.isAnim = true;

			_("#sizer_vkdjk").style.opacity = "0";

			switchPanel(1);
			setImage("2", "2/two.gif");

			setTimeout(function() {
				_("#sizer_dssdf").style.opacity = "1";
				_("#sizer_dssdf").style.height = "255px";
				_("#sizer_dssdf").style.top = "133px";

				setTimeout(function() {
					_("#sizer_dssdf span").style.opacity = "1";

					anim.isAnim = false;
				}, 500);

				_("#sizer_nfsdjk").style.opacity = "1";
				_("#sizer_nfsdjk").style.left = "447px";
				_("#sizer_nfsdjk").style.width = "474px";

				setTimeout(function() {
					_("#sizer_nfsdjk span").style.opacity = "1";

					anim.isAnim = false;
				}, 500);


			}, 3000);


		},
		phase2: function() {

			anim.isAnim = true;

			_("#sizer_dssdf").style.opacity = "0";
			_("#sizer_nfsdjk").style.opacity = "0";

			// _("#sizer_vkdjk").style.opacity = "1";
			switchPanel(2);
			setImage("3", "3/three.gif");

			setTimeout(function() {
				anim.phase3();
				anim.isAnim = false;
			}, 4000);

			currentScreen++;
		},
		phase3: function() {
			switchPanel(3);
			setImage("4", "4/four.gif");

			// setTimeout(anim.phase3, 4000);
		},
		phase4: function() {
			switchPanel(4);
			setImage("5", "5/five.gif");

			// setTimeout(anim.phase3, 4000);
		},
		phase5: function() {
			switchPanel(5);
			setImage("6", "6/six.gif");

			// setTimeout(anim.phase3, 4000);
		}
	};

	w.addEventListener("load", function() {
		
		anim.initialize_demo();

	});

	var currentScreen = 0;

	w.addEventListener("keyup", function(e) {

		if (e.keyCode == 40 && !anim.isAnim) {
			anim[["phase", ++currentScreen].j()]();

			console.log(currentScreen);

			if (currentScreen == 1) {
				_(".extra-panel1").style.opacity = "0";
			} else if (currentScreen == 3) {
				_(".extra-panel2").style.opacity = "0";
			} else if (currentScreen == 4) {
				_(".extra-panel3").style.opacity = "0";
			} else if (currentScreen == 5) {
				_(".extra-panel5").style.opacity = "0";
			}
		}

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