//--------------------------------------------------------------------------
// Snippet Aos Animation customize Options and Expertise Progress bar 
//--------------------------------------------------------------------------
odoo.define('theme_clarico.snippetEpt', function (require) {
	'use strict';
	
	var SnippetOption = require('web_editor.snippets.options');

 SnippetOption.Class.include({
		selectClass: function (previewMode, value, $opt) {
	        var $group = $opt && $opt.closest('.dropdown-submenu');
	        if (!$group || !$group.length) {
	            $group = this.$el;
	        }
	        var $lis = $group.find('[data-select-class]').addBack('[data-select-class]');
	        var classes = $lis.map(function () {return $(this).data('selectClass');}).get().join(' ');
	
	        this.$target.removeClass(classes);
	        if (value) {
	        	var data_aos_ept = this.$target.attr('data_aos_ept');
	        	var data_aos = this.$target.attr('data-aos');
	        	
	        	if(data_aos_ept){
		            this.$target.addClass(value);
		            this.$target.attr('data_aos_ept',value);
		        }
		        else if(data_aos){
		        	this.$target.addClass(value);
		            this.$target.attr('data-aos',value);
		        }
		        else{
		            this.$target.addClass(value);
		            this.$target.attr('data_aos_ept',value);
		        }
		    }
	    },
	});
	/*expertise progress bar*/ 
	$(window).load(function(){
	$('.progress').each(function(){ 
		    	var area_val = $(this).find('.progress-bar').attr("aria-valuenow")
		    	$(this).find('.progress-bar').css("max-width",area_val+ "%")
		    })
	})
});
