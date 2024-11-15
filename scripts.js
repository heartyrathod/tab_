jQuery(document).ready(function() {
    updateTabAndDropdown();
    handleTabClick();
    handleDropdownChange();
    
   
  });
  
  jQuery(window).on('load', function() {
    updateTabAndDropdown();
    handleTabClick();
    handleDropdownChange();
    
   
   
  });
  
  jQuery(window).resize(function() {             
    updateTabAndDropdown();
   
  });
  











    function updateTabAndDropdown() {
        var $tabs = $('.nav-tabs.mobile-tabs .nav-item');
        var $dropdown = $('.tab-dropdown');

        if ($(window).width() < 992) {
            
            $dropdown.show();
            $tabs.hide();
        } else {
            
            $dropdown.hide();
            $tabs.show();
        }
    }

    function handleTabClick() {
        var $tabs = $('.nav-tabs.mobile-tabs .nav-item');
        var $dropdown = $('.tab-dropdown');

        $tabs.on('click', function() {

            var target = $(this).data('tab');            
            $tabs.removeClass('active');
            $(this).addClass('active');
            $('.tab-pane').removeClass('active');
            $('#' + target).addClass('active');
            $dropdown.val(target);
        });
    }

    function handleDropdownChange() {
        $('.tab-dropdown').on('change', function() {
            var target = $(this).val();
            if (target) {
                $('.nav-tabs.mobile-tabs .nav-item[data-tab="' + target + '"]').trigger('click');
            }
        });
    }

   
  
    

