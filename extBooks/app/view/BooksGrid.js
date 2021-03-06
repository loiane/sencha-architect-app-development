/*
 * File: app/view/BooksGrid.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
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

Ext.define('Packt.view.BooksGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.booksgrid',

    title: 'Books',
    store: 'Books',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 53,
                    dataIndex: 'id',
                    text: 'Id'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'author',
                    text: 'Author'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'language',
                    text: 'Language'
                },
                {
                    xtype: 'gridcolumn',
                    width: 180,
                    dataIndex: 'paperback',
                    text: 'Paperback'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'releaseDate',
                    text: 'Release Date'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'isbn',
                    text: 'Isbn'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'isbn13',
                    text: 'Isbn13'
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true,
                    store: 'Books'
                }
            ]
        });

        me.callParent(arguments);
    }

});