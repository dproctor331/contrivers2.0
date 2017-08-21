var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Page Model
 * ==========
 */

var Page = new keystone.List('Page', {
    map: { name: 'title' }
});

Page.add({
    title: { type: String, required: true },
    publishedDate: { type: Types.Date, index: true },
    image: { type: Types.CloudinaryImage },
    content: { type: Types.Html, wysiwyg: true, height: 400 },
    tags: { type: Types.TextArray },
});

Page.defaultColumns = 'title, publishedDate';
Page.register();