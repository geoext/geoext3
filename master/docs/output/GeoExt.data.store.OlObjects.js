Ext.data.JsonP.GeoExt_data_store_OlObjects({"tagname":"class","name":"GeoExt.data.store.OlObjects","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"OlObjects.js","href":"OlObjects.html#GeoExt-data-store-OlObjects"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.data.Store","mixins":["GeoExt.mixin.SymbolCheck"],"requires":["GeoExt.data.model.OlObject"],"uses":[],"members":[{"name":"listeners","tagname":"property","owner":"GeoExt.data.store.OlObjects","id":"property-listeners","meta":{"private":true}},{"name":"model","tagname":"property","owner":"GeoExt.data.store.OlObjects","id":"property-model","meta":{"private":true}},{"name":"olCollection","tagname":"property","owner":"GeoExt.data.store.OlObjects","id":"property-olCollection","meta":{}},{"name":"proxy","tagname":"property","owner":"GeoExt.data.store.OlObjects","id":"property-proxy","meta":{"private":true}},{"name":"symbols","tagname":"property","owner":"GeoExt.data.store.OlObjects","id":"property-symbols","meta":{}},{"name":"_checked","tagname":"property","owner":"GeoExt.mixin.SymbolCheck","id":"static-property-_checked","meta":{"private":true,"static":true}},{"name":"constructor","tagname":"method","owner":"GeoExt.data.store.OlObjects","id":"method-constructor","meta":{}},{"name":"add","tagname":"method","owner":"GeoExt.data.store.OlObjects","id":"method-add","meta":{"private":true}},{"name":"destroy","tagname":"method","owner":"GeoExt.data.store.OlObjects","id":"method-destroy","meta":{}},{"name":"onClassMixedIn","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"method-onClassMixedIn","meta":{"private":true}},{"name":"remove","tagname":"method","owner":"GeoExt.data.store.OlObjects","id":"method-remove","meta":{"private":true}},{"name":"check","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-check","meta":{"static":true}},{"name":"checkSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-checkSymbol","meta":{"private":true,"static":true}},{"name":"isDefinedSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-isDefinedSymbol","meta":{"private":true,"static":true}},{"name":"normalizeSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-normalizeSymbol","meta":{"private":true,"static":true}}],"code_type":"ext_define","id":"class-GeoExt.data.store.OlObjects","component":false,"superclasses":["Ext.data.Store"],"subclasses":["GeoExt.data.store.Features"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><strong>GeoExt.data.store.OlObjects</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='docClass'>GeoExt.mixin.SymbolCheck</a></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.data.model.OlObject' rel='GeoExt.data.model.OlObject' class='docClass'>GeoExt.data.model.OlObject</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/GeoExt.data.store.Features' rel='GeoExt.data.store.Features' class='docClass'>GeoExt.data.store.Features</a></div><h4>Files</h4><div class='dependency'><a href='source/OlObjects.html#GeoExt-data-store-OlObjects' target='_blank'>OlObjects.js</a></div></pre><div class='doc-contents'><p>Simple store that maps a ol.Collection to a Ext.data.Store.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance properties</h3><div id='property-listeners' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.store.OlObjects'>GeoExt.data.store.OlObjects</span><br/><a href='source/OlObjects.html#GeoExt-data-store-OlObjects-property-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.store.OlObjects-property-listeners' class='name expandable'>listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-model' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.store.OlObjects'>GeoExt.data.store.OlObjects</span><br/><a href='source/OlObjects.html#GeoExt-data-store-OlObjects-property-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.store.OlObjects-property-model' class='name expandable'>model</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'GeoExt.data.model.OlObject'</code></p></div></div></div><div id='property-olCollection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.store.OlObjects'>GeoExt.data.store.OlObjects</span><br/><a href='source/OlObjects.html#GeoExt-data-store-OlObjects-property-olCollection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.store.OlObjects-property-olCollection' class='name expandable'>olCollection</a> : ol.Collection<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The ol collection this store syncs with.</p>\n</div><div class='long'><p>The ol collection this store syncs with.</p>\n</div></div></div><div id='property-proxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.store.OlObjects'>GeoExt.data.store.OlObjects</span><br/><a href='source/OlObjects.html#GeoExt-data-store-OlObjects-property-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.store.OlObjects-property-proxy' class='name expandable'>proxy</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{type: 'memory', reader: 'json'}</code></p></div></div></div><div id='property-symbols' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.store.OlObjects'>GeoExt.data.store.OlObjects</span><br/><a href='source/OlObjects.html#GeoExt-data-store-OlObjects-property-symbols' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.store.OlObjects-property-symbols' class='name expandable'>symbols</a> : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'><p><debug></p>\n<p>Defaults to: <code>['ol.Collection', 'ol.Collection#getArray', 'ol.Collection#insertAt', 'ol.Collection#removeAt']</code></p><p>Overrides: <a href=\"#!/api/GeoExt.mixin.SymbolCheck-property-symbols\" rel=\"GeoExt.mixin.SymbolCheck-property-symbols\" class=\"docClass\">GeoExt.mixin.SymbolCheck.symbols</a></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-_checked' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-property-_checked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-property-_checked' class='name expandable'>_checked</a> : Object<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>An object that we will use to store already looked up references in. ...</div><div class='long'><p>An object that we will use to store already looked up references in.</p>\n\n<p>The key will be a symbol (after it has been normalized by the\nmethod <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalizeSymbol</a>), and the value will be a boolean indicating\nif the symbol was found to be defined when it was checked.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.store.OlObjects'>GeoExt.data.store.OlObjects</span><br/><a href='source/OlObjects.html#GeoExt-data-store-OlObjects-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.data.store.OlObjects-method-constructor' class='name expandable'>GeoExt.data.store.OlObjects</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/GeoExt.data.store.OlObjects\" rel=\"GeoExt.data.store.OlObjects\" class=\"docClass\">GeoExt.data.store.OlObjects</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructs a new OlObjects store. ...</div><div class='long'><p>Constructs a new OlObjects store.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The configuration object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.data.store.OlObjects\" rel=\"GeoExt.data.store.OlObjects\" class=\"docClass\">GeoExt.data.store.OlObjects</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-add' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.store.OlObjects'>GeoExt.data.store.OlObjects</span><br/><a href='source/OlObjects.html#GeoExt-data-store-OlObjects-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.store.OlObjects-method-add' class='name expandable'>add</a>( <span class='pre'>store, records, index</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Forwards changes on the Ext.data.Store to the ol.Collection. ...</div><div class='long'><p>Forwards changes on the Ext.data.Store to the ol.Collection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>records</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.store.OlObjects'>GeoExt.data.store.OlObjects</span><br/><a href='source/OlObjects.html#GeoExt-data-store-OlObjects-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.store.OlObjects-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onClassMixedIn' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-method-onClassMixedIn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-method-onClassMixedIn' class='name expandable'>onClassMixedIn</a>( <span class='pre'>cls</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Whenever a class mixes in GeoExt.mixin.SymbolCheck, this method will be\ncalled and it actually runs the checks for al...</div><div class='long'><p>Whenever a class mixes in <a href=\"#!/api/GeoExt.mixin.SymbolCheck\" rel=\"GeoExt.mixin.SymbolCheck\" class=\"docClass\">GeoExt.mixin.SymbolCheck</a>, this method will be\ncalled and it actually runs the checks for all the defined <a href=\"#!/api/GeoExt.mixin.SymbolCheck-property-symbols\" rel=\"GeoExt.mixin.SymbolCheck-property-symbols\" class=\"docClass\">symbols</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : Ext.Class<div class='sub-desc'><p>The class that this mixin is mixed into.</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.store.OlObjects'>GeoExt.data.store.OlObjects</span><br/><a href='source/OlObjects.html#GeoExt-data-store-OlObjects-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.store.OlObjects-method-remove' class='name expandable'>remove</a>( <span class='pre'>store, records, index</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Forwards changes on the Ext.data.Store to the ol.Collection. ...</div><div class='long'><p>Forwards changes on the Ext.data.Store to the ol.Collection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>records</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-check' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-check' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-check' class='name expandable'>check</a>( <span class='pre'>cls</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks whether the required symbols of the given class are defined\nin the global context. ...</div><div class='long'><p>Checks whether the required symbols of the given class are defined\nin the global context. Will log to the console if a symbol cannot be\nfound.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : Ext.Base<div class='sub-desc'><p>An ext class defining a property <code>symbols</code> that\n    that this method will check.</p>\n</div></li></ul></div></div></div><div id='static-method-checkSymbol' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-checkSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-checkSymbol' class='name expandable'>checkSymbol</a>( <span class='pre'>symbolStr, [clsName]</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks the passed symbolStr and raises a warning if it cannot be\nfound. ...</div><div class='long'><p>Checks the passed symbolStr and raises a warning if it cannot be\nfound.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to check. Usually this string has\n    been <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalized</a> already.</p>\n</div></li><li><span class='pre'>clsName</span> : String (optional)<div class='sub-desc'><p>The optional name of the class that\n    requires the passed openlayers symbol.</p>\n</div></li></ul></div></div></div><div id='static-method-isDefinedSymbol' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-isDefinedSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol' class='name expandable'>isDefinedSymbol</a>( <span class='pre'>symbolStr</span> ) : Boolean<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks if the passed symbolStr is defined. ...</div><div class='long'><p>Checks if the passed symbolStr is defined.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to check. Usually this string has\n    been <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalized</a> already.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the symbol is defined or not.</p>\n</div></li></ul></div></div></div><div id='static-method-normalizeSymbol' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-normalizeSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol' class='name expandable'>normalizeSymbol</a>( <span class='pre'>symbolStr</span> ) : String<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Normalizes a short form of a symbol to a canonical one we use to\nstore the results of the isDefinedSymbol method. ...</div><div class='long'><p>Normalizes a short form of a symbol to a canonical one we use to\nstore the results of the <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol\" class=\"docClass\">isDefinedSymbol</a> method. The following two\nnormalizations take place:</p>\n\n<ul>\n<li>A <code>#</code> in the symbol is being replaced with <code>.prototype.</code> so that\ne.g. the symbol <code>'ol.Class#methodName'</code> turns into the symbol\n<code>'ol.Class.prototype.methodName'</code></li>\n<li>A <code>::</code> in the symbol is being replaced with <code>.</code> so that\ne.g. the symbol <code>'ol.Class::staticMethodName'</code> turns into the\nsymbol <code>'ol.Class.staticMethodName'</code></li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to normalize.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The normalized string.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});