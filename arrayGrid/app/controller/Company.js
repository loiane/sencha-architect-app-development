/*
 * File: app/controller/Company.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Sencha.controller.Company', {
    extend: 'Ext.app.Controller',

    models: [
        'Company'
    ],
    stores: [
        'Companies'
    ],
    views: [
        'CompanyGrid'
    ],

    handleActionColumn: function(column, action, view, rowIndex, colIndex, item, e) {
        var rec = view.getRecords(view.getNodes())[rowIndex];
        if (action == 'sell'){
            Ext.Msg.alert('', "Sell " + rec.get('company'));
        } else {
            Ext.Msg.alert('', (rec.get('change') < 0 ? "Hold " : "Buy ") + rec.get('company'));
        }    
    },

    init: function(application) {
        this.control({
            "companygrid actioncolumn": {
                itemclick: this.handleActionColumn
            }
        });
    }

});
