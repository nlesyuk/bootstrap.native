// MISC
// scrollTo
var offCanvasCollapse = document.getElementsByClassName('offcanvas-collapse')[0],
		sideNav = document.getElementById('side-nav'),
		topNav = document.getElementById('top-nav'),
		sideLinks = Array.from(sideNav.getElementsByTagName("A")).concat(Array.from(topNav.getElementsByTagName("A"))),
		// scrollTarget = /(EDGE|Mac)/i.test(navigator.userAgent) ? document.body : document.documentElement;
		scrollTarget = document.documentElement;

sideLinks.map( function(x,i) {x.addEventListener('click', function(e){ 
	var target = document.getElementById(x.getAttribute('href').replace('#', ''));
	e.preventDefault();
	scrollTarget.scrollTop = target.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) -  70;
	topNav.contains(x) && offCanvasCollapse.classList.toggle('open')
})}) 
// offcanvas
document.querySelector('[data-toggle="offcanvas"]').addEventListener('click', function () {
	offCanvasCollapse.classList.toggle('open')
})

// COMPONENTS
// ==========

//demo alert fun
var dangerAlert = document.querySelector('.alert-danger'),
	alertParent = dangerAlert.parentNode,
	siblings = dangerAlert.parentNode.childNodes;
dangerAlert.addEventListener('closed.bs.alert', function(e) {
	var successAlert = document.createElement('div');
	successAlert.setAttribute('class','alert alert-success fade');
	successAlert.setAttribute('role','alert');
	successAlert.innerHTML = '<h4>Wow you REALLY got no error!</h4><p>Javascript isn\'t fun? Well, think again.</p>';
	successAlert.innerHTML += '<p>I just didn\'t want this section to be empty, looks awful..</p>';
	alertParent.insertBefore(successAlert,siblings[siblings.length-2]);
	successAlert.classList.add('show');
});

// Alert events
document.getElementById('alertDemo').addEventListener('close.bs.alert', function(e) {	console.log( 'The "close.bs.alert" event fired for #' + e.target.id ); });
document.getElementById('alertDemo').addEventListener('closed.bs.alert', function(e) {	console.log( 'The "closed.bs.alert" event fired for #' + e.target.id ); });

// MODAL
var myModal = document.getElementById('myModal'); // we need a blank modal to fill up and target our object function
myModal.addEventListener('show.bs.modal', function (e) {
	e.target && console.log('show.bs.modal triggered for #' + e.target.id);
	e.relatedTarget && console.log('event.relatedTarget is ' + e.relatedTarget.tagName + '.' + e.relatedTarget.className.replace(/\s/g, '.'));
}, false);
myModal.addEventListener('shown.bs.modal', function (e) {
	e.target && console.log('shown.bs.modal triggered for #' + e.target.id);
	e.relatedTarget && console.log('event.relatedTarget is ' + e.relatedTarget.tagName + '.' + e.relatedTarget.className.replace(/\s/g, '.'));
}, false);
myModal.addEventListener('hide.bs.modal', function (e) {
	e.target && console.log('hide.bs.modal triggered for #' + e.target.id);
	e.relatedTarget && console.log('event.relatedTarget is ' + e.relatedTarget.tagName + '.' + e.relatedTarget.className.replace(/\s/g, '.'));
}, false);
myModal.addEventListener('hidden.bs.modal', function (e) {
	e.target && console.log('hidden.bs.modal triggered for #' + e.target.id);
	e.relatedTarget && console.log('event.relatedTarget is ' + e.relatedTarget.tagName + '.' + e.relatedTarget.className.replace(/\s/g, '.'));
}, false);

// Modal initialized with JavaScript
var btnModal = document.getElementById('openModalViaJS');
var myModalJS = document.getElementById('myModalJS');

var modalInitJS = new BSN.Modal(myModalJS, {
	backdrop: 'static'
});

btnModal.addEventListener('click', function (e) {
	modalInitJS.show();
}, false);


// Tab events
var tabEventsExample = document.getElementById('tabEventsExample'),
	tabEventsExampleInit = new BSN.Tab(tabEventsExample, {preserve: true});
tabEventsExample.addEventListener('show.bs.tab', function() { console.log('The show.bs.tab event fired for #' + tabEventsExample.id); }, false);
tabEventsExample.addEventListener('shown.bs.tab', function() { console.log('The shown.bs.tab event fired for #' + tabEventsExample.id); }, false);
tabEventsExample.addEventListener('hide.bs.tab', function() { console.log('The hide.bs.tab event fired for #' + tabEventsExample.id); }, false);
tabEventsExample.addEventListener('hidden.bs.tab', function() { console.log('The hidden.bs.tab event fired for #' + tabEventsExample.id); }, false);


// Tooltip events
var tooltipEvents = document.getElementById('tooltipWithEvents');
tooltipEvents.addEventListener('show.bs.tooltip', function(){ console.log('The show.bs.tooltip event fired for #' + tooltipEvents.id); }, false);
tooltipEvents.addEventListener('shown.bs.tooltip', function(){ console.log('The shown.bs.tooltip event fired for #' + tooltipEvents.id); }, false);
tooltipEvents.addEventListener('hide.bs.tooltip', function(){ console.log('The hide.bs.tooltip event fired for #' + tooltipEvents.id); }, false);
tooltipEvents.addEventListener('hidden.bs.tooltip', function(){ console.log('The hidden.bs.tooltip event fired for #' + tooltipEvents.id); }, false);
// Tooltip template example
var tooltipTemplateExample = new BSN.Tooltip('#tooltipTemplateExample', {
	template: '<div class="tooltip custom-class" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	position: top,
	container: '#tooltipExamples'
})

// Popover 
var popover1 = new BSN.Popover('#popover-via-click', { container: '#popoverExamples',	trigger: 'click' } );

// demo popover, using template
var someTitleFromOtherCode = 'Popover via JavaScript <span class="label label-primary">Template</span>';
var someContentFromOuterSpace = '<p>This Popover is using FOCUS event option. Some sample message from outer space wrapped in &lt;p&gt; tags.</p>';

var popover2 = new BSN.Popover('.popover-via-template', {
	trigger: 'focus',
	title: someTitleFromOtherCode,
	content: someContentFromOuterSpace,
	template: '<div class="popover border-dark" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header bg-dark border-secondary text-white"></h3><div class="popover-body bg-secondary text-light"></div></div>'
});

var popoverEvents = document.getElementById('popoverWithEvents');
popoverEvents.addEventListener('show.bs.popover', function(){ console.log('The show.bs.popover event fired for #' + popoverEvents.id); }, false);
popoverEvents.addEventListener('shown.bs.popover', function(){ console.log('The shown.bs.popover event fired for #' + popoverEvents.id); }, false);
popoverEvents.addEventListener('hide.bs.popover', function(){ console.log('The hide.bs.popover event fired for #' + popoverEvents.id); }, false);
popoverEvents.addEventListener('hidden.bs.popover', function(){ console.log('The hidden.bs.popover event fired for #' + popoverEvents.id); }, false);

// TOAST
var toastBTN = document.getElementById('myTastyToastBTN');
var showToastBTN = document.getElementById('showToastBTN');
toastBTN.closest('.toast').addEventListener('show.bs.toast',function(e){
	console.log( 'The "show.bs.toast" event fired for #' + toastBTN.id );
},false)
toastBTN.closest('.toast').addEventListener('shown.bs.toast',function(e){
	console.log( 'The "shown.bs.toast" event fired for #' + toastBTN.id );
	showToastBTN.classList.add('d-none')
},false)
toastBTN.closest('.toast').addEventListener('hide.bs.toast',function(e){
	console.log( 'The "hide.bs.toast" event fired for #' + toastBTN.id );
},false)
toastBTN.closest('.toast').addEventListener('hidden.bs.toast',function(e){
	console.log( 'The "hidden.bs.toast" event fired for #' + toastBTN.id );
	showToastBTN.classList.remove('d-none')
},false)

showToastBTN.addEventListener('click',function(){
	toastBTN.Toast ? toastBTN.Toast.show() : console.log( 'DISPOSED!' )
},false)

// ScrollSpy
function toggleScrollSpy(){
	var disposableSpy = document.getElementById('disposableSpy')

	if ( disposableSpy.ScrollSpy ){
		disposableSpy.ScrollSpy.dispose()
		this.innerHTML = 'Init'
		this.classList.remove( 'btn-outline-danger' )
		this.classList.add( 'btn-outline-primary' )
	} else {
		new BSN.ScrollSpy(disposableSpy)
		this.innerHTML = 'Dispose'
		this.classList.remove( 'btn-outline-primary' )                        
		this.classList.add( 'btn-outline-danger' )
	}
}