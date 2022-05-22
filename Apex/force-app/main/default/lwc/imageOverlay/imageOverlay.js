import { LightningElement } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import jQuery from '@salesforce/resourceUrl/JQuery';

export default class ImageOverlay extends LightningElement {
    renderedCallback(){
        loadScript(this, jQuery)
        .then(() => {
            console.log('JQuery loaded.');
        })
        .catch(error=>{
            console.log('Failed to load the JQuery : ' +error);
        });
    }

    connectedcallback() {
        var $src = $('.grid-source');
        console.log('$src ' + $src);
        var $wrap = $('<div class="grid-overlay"></div>');
        var $gsize = 10;

        var $cols = Math.ceil($src.find('img').innerWidth() / $gsize);
        var $rows = Math.ceil($src.find('img').innerHeight() / $gsize);

    // create overlay
        var $tbl = $('<table></table>');
        for (var y = 1; y <= $rows; y++) {
            var $tr = $('<tr></tr>');
            for (var x = 1; x <= $cols; x++) {
                var $td = $('<td></td>');
                $td.css('width', $gsize+'px').css('height', $gsize+'px');
                $td.addClass('unselected');
                $tr.append($td);
            }
            $tbl.append($tr);
        }
        $src.css('width', $cols*$gsize+'px').css('height', $rows*$gsize+'px')
        // attach overlay
        $wrap.append($tbl);
        $src.after($wrap);

        $('.grid-overlay').hover(function() {
            $(this).toggleClass('hover');
        });
        
        $('.grid-overlay').click(function() {
            $(this).toggleClass('selected').toggleClass('unselected');
        });
        

        }

}