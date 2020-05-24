(function() {

    wp.customize.bind('ready', function() {

        wp.customize.control('slider_banner', function(control) {

            // When Page Refresh
            if (control.params.value != 'slider') {
                jQuery('#customize-control-read_more_section_title, #customize-control-paginations_options, #customize-control-font_section_title, #customize-control-slider_height, #customize-control-opacity_slider').attr('style', 'display: none !important');
            } else {
                jQuery('#customize-control-read_more_section_title, #customize-control-paginations_options, #customize-control-font_section_title, #customize-control-slider_height, #customize-control-opacity_slider').attr('style', 'display: block !important');
            }

            // When user change the data
            control.setting.bind(function(value) {
                if (value != 'slider') {
                    jQuery('#customize-control-read_more_section_title, #customize-control-paginations_options, #customize-control-font_section_title, #customize-control-slider_height, #customize-control-opacity_slider').attr('style', 'display: none !important');
                } else {
                    jQuery('#customize-control-read_more_section_title, #customize-control-paginations_options, #customize-control-font_section_title, #customize-control-slider_height, #customize-control-opacity_slider').attr('style', 'display: block !important');
                }
            });

        });

        wp.customize.control('slider_height_desktop', function(control) {

            // When user change the data
            control.setting.bind(function(value) {
                jQuery('button.preview-desktop').click();
            });

        });

        wp.customize.control('slider_height_tablet', function(control) {

            // When user change the data
            control.setting.bind(function(value) {
                jQuery('button.preview-tablet').click();
            });

        });

        wp.customize.control('slider_height_mobile', function(control) {

            // When user change the data
            control.setting.bind(function(value) {
                jQuery('button.preview-mobile').click();
            });

        });

    });

})();