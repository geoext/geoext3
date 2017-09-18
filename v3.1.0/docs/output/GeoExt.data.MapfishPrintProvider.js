Ext.data.JsonP.GeoExt_data_MapfishPrintProvider({"tagname":"class","name":"GeoExt.data.MapfishPrintProvider","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"MapfishPrintProvider.js","href":"MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":["Ext.mixin.Observable","GeoExt.mixin.SymbolCheck"],"requires":["Ext.data.JsonStore","GeoExt.data.model.print.Capability"],"uses":[],"members":[{"name":"capabilities","tagname":"cfg","owner":"GeoExt.data.MapfishPrintProvider","id":"cfg-capabilities","meta":{"private":true}},{"name":"url","tagname":"cfg","owner":"GeoExt.data.MapfishPrintProvider","id":"cfg-url","meta":{"private":true}},{"name":"capabilityRec","tagname":"property","owner":"GeoExt.data.MapfishPrintProvider","id":"property-capabilityRec","meta":{"readonly":true}},{"name":"symbols","tagname":"property","owner":"GeoExt.data.MapfishPrintProvider","id":"property-symbols","meta":{}},{"name":"_checked","tagname":"property","owner":"GeoExt.mixin.SymbolCheck","id":"static-property-_checked","meta":{"private":true,"static":true}},{"name":"_serializers","tagname":"property","owner":"GeoExt.data.MapfishPrintProvider","id":"static-property-_serializers","meta":{"private":true,"static":true}},{"name":"constructor","tagname":"method","owner":"GeoExt.data.MapfishPrintProvider","id":"method-constructor","meta":{}},{"name":"fillCapabilityRec","tagname":"method","owner":"GeoExt.data.MapfishPrintProvider","id":"method-fillCapabilityRec","meta":{"private":true}},{"name":"getCapabilities","tagname":"method","owner":"GeoExt.data.MapfishPrintProvider","id":"method-getCapabilities","meta":{}},{"name":"getUrl","tagname":"method","owner":"GeoExt.data.MapfishPrintProvider","id":"method-getUrl","meta":{}},{"name":"onClassMixedIn","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"method-onClassMixedIn","meta":{"private":true}},{"name":"setCapabilities","tagname":"method","owner":"GeoExt.data.MapfishPrintProvider","id":"method-setCapabilities","meta":{}},{"name":"setUrl","tagname":"method","owner":"GeoExt.data.MapfishPrintProvider","id":"method-setUrl","meta":{}},{"name":"check","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-check","meta":{"static":true}},{"name":"checkSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-checkSymbol","meta":{"private":true,"static":true}},{"name":"findSerializerBySource","tagname":"method","owner":"GeoExt.data.MapfishPrintProvider","id":"static-method-findSerializerBySource","meta":{"static":true}},{"name":"getLayerArray","tagname":"method","owner":"GeoExt.data.MapfishPrintProvider","id":"static-method-getLayerArray","meta":{"static":true}},{"name":"getSerializedLayers","tagname":"method","owner":"GeoExt.data.MapfishPrintProvider","id":"static-method-getSerializedLayers","meta":{"static":true}},{"name":"isDefinedSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-isDefinedSymbol","meta":{"private":true,"static":true}},{"name":"normalizeSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-normalizeSymbol","meta":{"private":true,"static":true}},{"name":"registerSerializer","tagname":"method","owner":"GeoExt.data.MapfishPrintProvider","id":"static-method-registerSerializer","meta":{"static":true}},{"name":"renderPrintExtent","tagname":"method","owner":"GeoExt.data.MapfishPrintProvider","id":"static-method-renderPrintExtent","meta":{"static":true}},{"name":"unregisterSerializer","tagname":"method","owner":"GeoExt.data.MapfishPrintProvider","id":"static-method-unregisterSerializer","meta":{"static":true}},{"name":"ready","tagname":"event","owner":"GeoExt.data.MapfishPrintProvider","id":"event-ready","meta":{}}],"code_type":"ext_define","id":"class-GeoExt.data.MapfishPrintProvider","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>GeoExt.data.MapfishPrintProvider</strong></div></div><h4>Mixins</h4><div class='dependency'>Ext.mixin.Observable</div><div class='dependency'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='docClass'>GeoExt.mixin.SymbolCheck</a></div><h4>Requires</h4><div class='dependency'>Ext.data.JsonStore</div><div class='dependency'><a href='#!/api/GeoExt.data.model.print.Capability' rel='GeoExt.data.model.print.Capability' class='docClass'>GeoExt.data.model.print.Capability</a></div><h4>Files</h4><div class='dependency'><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider' target='_blank'>MapfishPrintProvider.js</a></div></pre><div class='doc-contents'><p>Provides an interface to a Mapfish or GeoServer print module.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-capabilities' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-cfg-capabilities' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-cfg-capabilities' class='name expandable'>capabilities</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-url' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-cfg-url' class='name expandable'>url</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>''</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance properties</h3><div id='property-capabilityRec' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-property-capabilityRec' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-property-capabilityRec' class='name expandable'>capabilityRec</a> : Object<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>The capabiltyRec is an instance of 'GeoExt.data.model.print.Capability'\nand contans the PrintCapabilities of the Prin...</div><div class='long'><p>The capabiltyRec is an instance of '<a href=\"#!/api/GeoExt.data.model.print.Capability\" rel=\"GeoExt.data.model.print.Capability\" class=\"docClass\">GeoExt.data.model.print.Capability</a>'\nand contans the PrintCapabilities of the Printprovider.</p>\n</div></div></div><div id='property-symbols' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-property-symbols' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-property-symbols' class='name expandable'>symbols</a> : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'><p><debug></p>\n<p>Defaults to: <code>['ol.Collection', 'ol.geom.Polygon.fromExtent', 'ol.Feature', 'ol.layer.Layer#getSource', 'ol.layer.Group', 'ol.source.Vector.prototype.addFeature', 'ol.View#calculateExtent']</code></p><p>Overrides: <a href=\"#!/api/GeoExt.mixin.SymbolCheck-property-symbols\" rel=\"GeoExt.mixin.SymbolCheck-property-symbols\" class=\"docClass\">GeoExt.mixin.SymbolCheck.symbols</a></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-_checked' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-property-_checked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-property-_checked' class='name expandable'>_checked</a> : Object<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>An object that we will use to store already looked up references in. ...</div><div class='long'><p>An object that we will use to store already looked up references in.</p>\n\n<p>The key will be a symbol (after it has been normalized by the\nmethod <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalizeSymbol</a>), and the value will be a boolean indicating\nif the symbol was found to be defined when it was checked.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='static-property-_serializers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-static-property-_serializers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-static-property-_serializers' class='name expandable'>_serializers</a> : Array<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>An array of objects specifying a serializer and a connected\nOpenLayers class. ...</div><div class='long'><p>An array of objects specifying a serializer and a connected\nOpenLayers class. This should not be manipulated by hand, but rather\nwith the method <a href=\"#!/api/GeoExt.data.MapfishPrintProvider-static-method-registerSerializer\" rel=\"GeoExt.data.MapfishPrintProvider-static-method-registerSerializer\" class=\"docClass\">registerSerializer</a>.</p>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.data.MapfishPrintProvider-method-constructor' class='name expandable'>GeoExt.data.MapfishPrintProvider</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/GeoExt.data.MapfishPrintProvider\" rel=\"GeoExt.data.MapfishPrintProvider\" class=\"docClass\">GeoExt.data.MapfishPrintProvider</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.data.MapfishPrintProvider\" rel=\"GeoExt.data.MapfishPrintProvider\" class=\"docClass\">GeoExt.data.MapfishPrintProvider</a></span><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/GeoExt.data.MapfishPrintProvider-event-ready\" rel=\"GeoExt.data.MapfishPrintProvider-event-ready\" class=\"docClass\">ready</a></li></ul></div></div></div><div id='method-fillCapabilityRec' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-method-fillCapabilityRec' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-method-fillCapabilityRec' class='name expandable'>fillCapabilityRec</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Creates the store from object or url. ...</div><div class='long'><p>Creates the store from object or url.</p>\n<h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/GeoExt.data.MapfishPrintProvider-event-ready\" rel=\"GeoExt.data.MapfishPrintProvider-event-ready\" class=\"docClass\">ready</a></li></ul></div></div></div><div id='method-getCapabilities' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-cfg-capabilities' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-method-getCapabilities' class='name expandable'>getCapabilities</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of capabilities. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.data.MapfishPrintProvider-cfg-capabilities\" rel=\"GeoExt.data.MapfishPrintProvider-cfg-capabilities\" class=\"docClass\">capabilities</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-method-getUrl' class='name expandable'>getUrl</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of url. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.data.MapfishPrintProvider-cfg-url\" rel=\"GeoExt.data.MapfishPrintProvider-cfg-url\" class=\"docClass\">url</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onClassMixedIn' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-method-onClassMixedIn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-method-onClassMixedIn' class='name expandable'>onClassMixedIn</a>( <span class='pre'>cls</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Whenever a class mixes in GeoExt.mixin.SymbolCheck, this method will be\ncalled and it actually runs the checks for al...</div><div class='long'><p>Whenever a class mixes in <a href=\"#!/api/GeoExt.mixin.SymbolCheck\" rel=\"GeoExt.mixin.SymbolCheck\" class=\"docClass\">GeoExt.mixin.SymbolCheck</a>, this method will be\ncalled and it actually runs the checks for all the defined <a href=\"#!/api/GeoExt.mixin.SymbolCheck-property-symbols\" rel=\"GeoExt.mixin.SymbolCheck-property-symbols\" class=\"docClass\">symbols</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : Ext.Class<div class='sub-desc'><p>The class that this mixin is mixed into.</p>\n</div></li></ul></div></div></div><div id='method-setCapabilities' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-cfg-capabilities' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-method-setCapabilities' class='name expandable'>setCapabilities</a>( <span class='pre'>capabilities</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of capabilities. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.data.MapfishPrintProvider-cfg-capabilities\" rel=\"GeoExt.data.MapfishPrintProvider-cfg-capabilities\" class=\"docClass\">capabilities</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>capabilities</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-method-setUrl' class='name expandable'>setUrl</a>( <span class='pre'>url</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of url. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.data.MapfishPrintProvider-cfg-url\" rel=\"GeoExt.data.MapfishPrintProvider-cfg-url\" class=\"docClass\">url</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-check' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-check' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-check' class='name expandable'>check</a>( <span class='pre'>cls</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks whether the required symbols of the given class are defined\nin the global context. ...</div><div class='long'><p>Checks whether the required symbols of the given class are defined\nin the global context. Will log to the console if a symbol cannot be\nfound.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : Ext.Base<div class='sub-desc'><p>An ext class defining a property <code>symbols</code> that\n    that this method will check.</p>\n</div></li></ul></div></div></div><div id='static-method-checkSymbol' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-checkSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-checkSymbol' class='name expandable'>checkSymbol</a>( <span class='pre'>symbolStr, [clsName]</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks the passed symbolStr and raises a warning if it cannot be\nfound. ...</div><div class='long'><p>Checks the passed symbolStr and raises a warning if it cannot be\nfound.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to check. Usually this string has\n    been <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalized</a> already.</p>\n</div></li><li><span class='pre'>clsName</span> : String (optional)<div class='sub-desc'><p>The optional name of the class that\n    requires the passed openlayers symbol.</p>\n</div></li></ul></div></div></div><div id='static-method-findSerializerBySource' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-static-method-findSerializerBySource' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-static-method-findSerializerBySource' class='name expandable'>findSerializerBySource</a>( <span class='pre'>source</span> ) : <a href=\"#!/api/GeoExt.data.serializer.Base\" rel=\"GeoExt.data.serializer.Base\" class=\"docClass\">GeoExt.data.serializer.Base</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns a GeoExt.data.serializer.Base capable of serializing the\npassed source instance or undefined, if no such seri...</div><div class='long'><p>Returns a <a href=\"#!/api/GeoExt.data.serializer.Base\" rel=\"GeoExt.data.serializer.Base\" class=\"docClass\">GeoExt.data.serializer.Base</a> capable of serializing the\npassed source instance or undefined, if no such serializer was\npreviously registered.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : ol.source.Source<div class='sub-desc'><p>The source instance to find a\n   serializer for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.data.serializer.Base\" rel=\"GeoExt.data.serializer.Base\" class=\"docClass\">GeoExt.data.serializer.Base</a></span><div class='sub-desc'><p>A serializer for the passed\n   source or <code>undefined</code>.</p>\n</div></li></ul></div></div></div><div id='static-method-getLayerArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-static-method-getLayerArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-static-method-getLayerArray' class='name expandable'>getLayerArray</a>( <span class='pre'>coll</span> ) : Array<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Will return an array of ol-layers by the given collection. ...</div><div class='long'><p>Will return an array of ol-layers by the given collection. Layers\ncontained in <code>ol.layer.Group</code>s get extracted and groups get removed\nfrom returning array</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>coll</span> : <a href=\"#!/api/GeoExt.data.store.Layers\" rel=\"GeoExt.data.store.Layers\" class=\"docClass\">GeoExt.data.store.Layers</a>|ol.Collection|ol.layer.Base[]<div class='sub-desc'><p>The 'collection' of layers to get as array. If passed as\n    ol.Collection, all items must be <code>ol.layer.Base</code>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>The flat layers array.</p>\n</div></li></ul></div></div></div><div id='static-method-getSerializedLayers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-static-method-getSerializedLayers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-static-method-getSerializedLayers' class='name expandable'>getSerializedLayers</a>( <span class='pre'>mapComponent, [filterFn], [filterScope]</span> ) : Array&lt;Object&gt;<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Will return an array of serialized layers for mapfish print servlet\nv3.0. ...</div><div class='long'><p>Will return an array of serialized layers for mapfish print servlet\nv3.0.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mapComponent</span> : <a href=\"#!/api/GeoExt.component.Map\" rel=\"GeoExt.component.Map\" class=\"docClass\">GeoExt.component.Map</a><div class='sub-desc'><p>The GeoExt map component\n    to get the the layers from.</p>\n</div></li><li><span class='pre'>filterFn</span> : Function (optional)<div class='sub-desc'><p>A function to filter the layers to be\n    serialized.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : ol.layer.Base<div class='sub-desc'><p>The layer to check for\n    inclusion.</p>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The index of the layer in the\n    flattened list.</p>\n</div></li><li><span class='pre'>array</span> : Array<div class='sub-desc'><p>The complete flattened array of layers.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Return a truthy value to keep the\n    layer and serialize it.</p>\n</div></li></ul></div></li><li><span class='pre'>filterScope</span> : Object (optional)<div class='sub-desc'><p>The scope in which the filtering\n    function will be executed.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array&lt;Object&gt;</span><div class='sub-desc'><p>An array of serialized layers.</p>\n</div></li></ul></div></div></div><div id='static-method-isDefinedSymbol' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-isDefinedSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol' class='name expandable'>isDefinedSymbol</a>( <span class='pre'>symbolStr</span> ) : Boolean<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks if the passed symbolStr is defined. ...</div><div class='long'><p>Checks if the passed symbolStr is defined.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to check. Usually this string has\n    been <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalized</a> already.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the symbol is defined or not.</p>\n</div></li></ul></div></div></div><div id='static-method-normalizeSymbol' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-normalizeSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol' class='name expandable'>normalizeSymbol</a>( <span class='pre'>symbolStr</span> ) : String<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Normalizes a short form of a symbol to a canonical one we use to\nstore the results of the isDefinedSymbol method. ...</div><div class='long'><p>Normalizes a short form of a symbol to a canonical one we use to\nstore the results of the <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol\" class=\"docClass\">isDefinedSymbol</a> method. The following two\nnormalizations take place:</p>\n\n<ul>\n<li>A <code>#</code> in the symbol is being replaced with <code>.prototype.</code> so that\ne.g. the symbol <code>'ol.Class#methodName'</code> turns into the symbol\n<code>'ol.Class.prototype.methodName'</code></li>\n<li>A <code>::</code> in the symbol is being replaced with <code>.</code> so that\ne.g. the symbol <code>'ol.Class::staticMethodName'</code> turns into the\nsymbol <code>'ol.Class.staticMethodName'</code></li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to normalize.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The normalized string.</p>\n</div></li></ul></div></div></div><div id='static-method-registerSerializer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-static-method-registerSerializer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-static-method-registerSerializer' class='name expandable'>registerSerializer</a>( <span class='pre'>olSourceCls, serializerCls</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Registers the passed serializer class as an appropriate serializer\nfor the passed OpenLayers source class. ...</div><div class='long'><p>Registers the passed serializer class as an appropriate serializer\nfor the passed OpenLayers source class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>olSourceCls</span> : ol.source.Source<div class='sub-desc'><p>The OpenLayers source class\n   that the passed serializer can serialize.</p>\n</div></li><li><span class='pre'>serializerCls</span> : <a href=\"#!/api/GeoExt.data.serializer.Base\" rel=\"GeoExt.data.serializer.Base\" class=\"docClass\">GeoExt.data.serializer.Base</a><div class='sub-desc'><p>The serializer\n   that can serialize the passed source.</p>\n</div></li></ul></div></div></div><div id='static-method-renderPrintExtent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-static-method-renderPrintExtent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-static-method-renderPrintExtent' class='name expandable'>renderPrintExtent</a>( <span class='pre'>mapComponent, extentLayer, clientInfo</span> ) : ol.Feature<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Renders the extent of the printout. ...</div><div class='long'><p>Renders the extent of the printout. Will ensure that the extent is\nalways visible and that the ratio matches the ratio that clientInfo\ncontains.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mapComponent</span> : <a href=\"#!/api/GeoExt.component.Map\" rel=\"GeoExt.component.Map\" class=\"docClass\">GeoExt.component.Map</a><div class='sub-desc'><p>The map component to\n    render the print extent to.</p>\n</div></li><li><span class='pre'>extentLayer</span> : ol.layer.Vector<div class='sub-desc'><p>The vector layer to render the\n    print extent to.</p>\n</div></li><li><span class='pre'>clientInfo</span> : Object<div class='sub-desc'><p>Information about the desired print\n    dimensions.</p>\n<ul><li><span class='pre'>width</span> : Number<div class='sub-desc'><p>The target width.</p>\n</div></li><li><span class='pre'>height</span> : Number<div class='sub-desc'><p>The target height.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.Feature</span><div class='sub-desc'><p>The feature representing the print extent.</p>\n</div></li></ul></div></div></div><div id='static-method-unregisterSerializer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-static-method-unregisterSerializer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-static-method-unregisterSerializer' class='name expandable'>unregisterSerializer</a>( <span class='pre'>serializerCls</span> ) : Boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Unregisters the passed serializer class from the array of available\nserializers. ...</div><div class='long'><p>Unregisters the passed serializer class from the array of available\nserializers. This may be useful if you want to register a new\nserializer that is different from a serializer that we provide.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>serializerCls</span> : <a href=\"#!/api/GeoExt.data.serializer.Base\" rel=\"GeoExt.data.serializer.Base\" class=\"docClass\">GeoExt.data.serializer.Base</a><div class='sub-desc'><p>The serializer\n   that can serialize the passed source.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether we could unregister the serializer.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-ready' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.MapfishPrintProvider'>GeoExt.data.MapfishPrintProvider</span><br/><a href='source/MapfishPrintProvider.html#GeoExt-data-MapfishPrintProvider-event-ready' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.MapfishPrintProvider-event-ready' class='name expandable'>ready</a>( <span class='pre'>provider, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires after the PrintCapability store is loaded. ...</div><div class='long'><p>Fires after the PrintCapability store is loaded.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>provider</span> : <a href=\"#!/api/GeoExt.data.MapfishPrintProvider\" rel=\"GeoExt.data.MapfishPrintProvider\" class=\"docClass\">GeoExt.data.MapfishPrintProvider</a><div class='sub-desc'><p>The\n    <a href=\"#!/api/GeoExt.data.MapfishPrintProvider\" rel=\"GeoExt.data.MapfishPrintProvider\" class=\"docClass\">GeoExt.data.MapfishPrintProvider</a> itself</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});