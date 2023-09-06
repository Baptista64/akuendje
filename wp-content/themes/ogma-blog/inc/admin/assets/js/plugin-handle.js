/**
 * Get Started button on dashboard notice.
 *
 * @package Ogma Blog
 */

jQuery(document).ready(function($) {
    var WpAjaxurl = ogAdminObject.ajax_url;
    var _wpnonce = ogAdminObject._wpnonce;
    var buttonStatus = ogAdminObject.buttonStatus;

    /**
     * Popup on click demo import if mysterythemes demo importer plugin is not activated.
     */
    if( buttonStatus === 'disable' ) $( '.ogma-blog-demo-import' ).addClass( 'disabled' );

    switch( buttonStatus ) {
        case 'activate' :
            $( '.ogma-blog-get-started' ).on( 'click', function() {
                var _this = $( this );
                ogma_blog_do_plugin( 'ogma_blog_activate_plugin', _this );
            });
            $( '.ogma-blog-activate-demo-import-plugin' ).on( 'click', function() {
                var _this = $( this );
                ogma_blog_do_plugin( 'ogma_blog_activate_plugin', _this );
            });
            break;
        case 'install' :
            $( '.ogma-blog-get-started' ).on( 'click', function() {
                var _this = $( this );
                ogma_blog_do_plugin( 'ogma_blog_install_plugin', _this );
            });
            $( '.ogma-blog-install-demo-import-plugin' ).on( 'click', function() {
                var _this = $( this );
                ogma_blog_do_plugin( 'ogma_blog_install_plugin', _this );
            });
            break;
        case 'redirect' :
            $( '.ogma-blog-get-started' ).on( 'click', function() {
                var _this = $( this );
                location.href = _this.data( 'redirect' );
            });
            break;
    }
    
    ogma_blog_do_plugin = function ( ajax_action, _this ) {
        $.ajax({
            method : "POST",
            url : WpAjaxurl,
            data : ({
                'action' : ajax_action,
                '_wpnonce' : _wpnonce
            }),
            beforeSend: function() {
                var loadingTxt = _this.data( 'process' );
                _this.addClass( 'updating-message' ).text( loadingTxt );
            },
            success: function( response ) {
                if( response.success ) {
                    var loadedTxt = _this.data( 'done' );
                    _this.removeClass( 'updating-message' ).text( loadedTxt );
                    console.log( response.data.message );
                } else {
                    console.log( response.data.message );
                }
                location.href = _this.data( 'redirect' );
            }
        });
    }
});