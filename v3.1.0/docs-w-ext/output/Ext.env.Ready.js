Ext.data.JsonP.Ext_env_Ready({"tagname":"class","name":"Ext.env.Ready","autodetected":{"members":true},"files":[{"filename":"Ready.js","href":"Ready.html#Ext-env-Ready"}],"singleton":true,"private":true,"since":"5.0.0","members":[{"name":"blocks","tagname":"property","owner":"Ext.env.Ready","id":"property-blocks","meta":{"private":true}},{"name":"bound","tagname":"property","owner":"Ext.env.Ready","id":"property-bound","meta":{"private":true}},{"name":"delay","tagname":"property","owner":"Ext.env.Ready","id":"property-delay","meta":{"private":true}},{"name":"events","tagname":"property","owner":"Ext.env.Ready","id":"property-events","meta":{"private":true}},{"name":"firing","tagname":"property","owner":"Ext.env.Ready","id":"property-firing","meta":{"private":true}},{"name":"generation","tagname":"property","owner":"Ext.env.Ready","id":"property-generation","meta":{"private":true}},{"name":"listeners","tagname":"property","owner":"Ext.env.Ready","id":"property-listeners","meta":{"private":true}},{"name":"nextId","tagname":"property","owner":"Ext.env.Ready","id":"property-nextId","meta":{"private":true}},{"name":"readyStatesRe","tagname":"property","owner":"Ext.env.Ready","id":"property-readyStatesRe","meta":{"private":true}},{"name":"scrollTimer","tagname":"property","owner":"Ext.env.Ready","id":"property-scrollTimer","meta":{"private":true}},{"name":"sortGeneration","tagname":"property","owner":"Ext.env.Ready","id":"property-sortGeneration","meta":{"private":true}},{"name":"state","tagname":"property","owner":"Ext.env.Ready","id":"property-state","meta":{"private":true}},{"name":"timer","tagname":"property","owner":"Ext.env.Ready","id":"property-timer","meta":{"private":true}},{"name":"bind","tagname":"method","owner":"Ext.env.Ready","id":"method-bind","meta":{"private":true}},{"name":"block","tagname":"method","owner":"Ext.env.Ready","id":"method-block","meta":{"private":true}},{"name":"doInvokeAll","tagname":"method","owner":"Ext.env.Ready","id":"method-doInvokeAll","meta":{"private":true}},{"name":"doReadyEvent","tagname":"method","owner":"Ext.env.Ready","id":"method-doReadyEvent","meta":{"private":true}},{"name":"fireReady","tagname":"method","owner":"Ext.env.Ready","id":"method-fireReady","meta":{"private":true}},{"name":"handleReady","tagname":"method","owner":"Ext.env.Ready","id":"method-handleReady","meta":{"private":true}},{"name":"handleReadySoon","tagname":"method","owner":"Ext.env.Ready","id":"method-handleReadySoon","meta":{"private":true}},{"name":"invoke","tagname":"method","owner":"Ext.env.Ready","id":"method-invoke","meta":{}},{"name":"invokeAll","tagname":"method","owner":"Ext.env.Ready","id":"method-invokeAll","meta":{}},{"name":"makeListener","tagname":"method","owner":"Ext.env.Ready","id":"method-makeListener","meta":{"private":true}},{"name":"on","tagname":"method","owner":"Ext.env.Ready","id":"method-on","meta":{"private":true}},{"name":"onReadyEvent","tagname":"method","owner":"Ext.env.Ready","id":"method-onReadyEvent","meta":{"private":true}},{"name":"onReadyStateChange","tagname":"method","owner":"Ext.env.Ready","id":"method-onReadyStateChange","meta":{"private":true}},{"name":"pollScroll","tagname":"method","owner":"Ext.env.Ready","id":"method-pollScroll","meta":{"private":true}},{"name":"sortFn","tagname":"method","owner":"Ext.env.Ready","id":"method-sortFn","meta":{"private":true}},{"name":"unbind","tagname":"method","owner":"Ext.env.Ready","id":"method-unbind","meta":{"private":true}},{"name":"unblock","tagname":"method","owner":"Ext.env.Ready","id":"method-unblock","meta":{"private":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Ext.env.Ready","short_doc":"This class manages ready detection and handling. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Ready.html#Ext-env-Ready' target='_blank'>Ready.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>This class manages ready detection and handling. Direct use of this class is not\nrecommended. Instead use <code><a href=\"#!/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">Ext.onReady</a></code>:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">Ext.onReady</a>(function () {\n     // DOM and Framework are ready...\n });\n</code></pre>\n\n<h2>DOM Ready</h2>\n\n<p>The lowest-level of readiness is DOM readiness. This level implies only that the document\nbody exists. Many things require the DOM to be ready for manipulation. If that is all\nthat is required, the <code><a href=\"#!/api/Ext-method-onDocumentReady\" rel=\"Ext-method-onDocumentReady\" class=\"docClass\">Ext.onDocumentReady</a></code> method can be called to register a callback\nto be called as soon as the DOM is ready:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-onDocumentReady\" rel=\"Ext-method-onDocumentReady\" class=\"docClass\">Ext.onDocumentReady</a>(function () {\n     // the document body is ready\n });\n</code></pre>\n\n<h2>Framework Ready</h2>\n\n<p>In production builds of applications it is common to have all of the code loaded before\nDOM ready, so the need to wait for \"onReady\" is often confused with only that concern.\nThis is easy to understand, at least in part because historically <code><a href=\"#!/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">Ext.onReady</a></code> only\nwaited for DOM ready.</p>\n\n<p>With the introduction of <code><a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a></code>, however, it became common for DOM ready to occur\nin the middle of dynamically loading code. If application code were executed at that\ntime, any use of the yet-to-be-loaded classes would throw errors. As a consequence of\nthis, the <code><a href=\"#!/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">Ext.onReady</a></code> mechanism was extended to wait for both DOM ready <em>and</em> all of\nthe required classes to be loaded.</p>\n\n<p>When the framework enters or leaves a state where it is not ready (for example, the\nfirst dynamic load is requested or last load completes), <code><a href=\"#!/api/Ext.env.Ready\" rel=\"Ext.env.Ready\" class=\"docClass\">Ext.env.Ready</a></code> is informed.\nFor example:</p>\n\n<pre><code> <a href=\"#!/api/Ext.env.Ready-method-block\" rel=\"Ext.env.Ready-method-block\" class=\"docClass\">Ext.env.Ready.block</a>();\n\n //...\n\n <a href=\"#!/api/Ext.env.Ready-method-unblock\" rel=\"Ext.env.Ready-method-unblock\" class=\"docClass\">Ext.env.Ready.unblock</a>();\n</code></pre>\n\n<p>When there are no blocks and the DOM is ready, the Framework is ready and the \"onReady\"\ncallbacks are called.</p>\n\n<p>Priority can be used to control the ordering of onReady listeners, for example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">Ext.onReady</a>(function() {\n\n}, null, {\n    priority: 100\n});\n</code></pre>\n\n<p>Ready listeners with higher priorities will run sooner than those with lower priorities,\nthe default priority being <code>0</code>.  Internally the framework reserves priorities of 1000\nor greater, and -1000 or lesser for onReady handlers that must run before or after\nany application code.  Applications should stick to using priorities in the -999 - 999\nrange. The following priorities are currently in use by the framework:</p>\n\n<ul>\n<li>Element_scroll rtl override: <code>1001</code></li>\n<li>Event system initialization: <code>2000</code></li>\n<li><a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.dom.Element</a>: <code>1500</code></li>\n</ul>\n\n        <p>Available since: <b>5.0.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-blocks' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-property-blocks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-property-blocks' class='name expandable'>blocks</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>The number of Framework readiness blocks.</p>\n</div><div class='long'><p>The number of Framework readiness blocks.</p>\n</div></div></div><div id='property-bound' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-property-bound' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-property-bound' class='name expandable'>bound</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This property stores the state of event listeners bound\nto the document or window to detect ready state. ...</div><div class='long'><p>This property stores the state of event listeners bound\nto the document or window to detect ready state.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-delay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-property-delay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-property-delay' class='name expandable'>delay</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This allows the DOM listener thread to complete (usually desirable with mobWebkit,\nGecko) before firing the entire on...</div><div class='long'><p>This allows the DOM listener thread to complete (usually desirable with mobWebkit,\nGecko) before firing the entire onReady chain (high stack load on Loader). For mobile\ndevices when running from Home Screen, the splash screen will not disappear until\nall external resource requests finish. This delay clears the splash screen.</p>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='property-events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-property-events' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-property-events' class='name expandable'>events</a> : Event[]<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>An array of events that have triggered ready state. ...</div><div class='long'><p>An array of events that have triggered ready state. This\nis for diagnostic purposes only and is only available in debug builds.\nAn array</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-firing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-property-firing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-property-firing' class='name expandable'>firing</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This property is true when we currently calling the\nlisteners. ...</div><div class='long'><p>This property is <code>true</code> when we currently calling the\nlisteners.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-generation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-property-generation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-property-generation' class='name expandable'>generation</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>A counter of the number of mutations of listeners. ...</div><div class='long'><p>A counter of the number of mutations of <code>listeners</code>.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-listeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-property-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-property-listeners' class='name expandable'>listeners</a> : Object[]<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The set of listeners waiting for ready. ...</div><div class='long'><p>The set of listeners waiting for ready.</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-nextId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-property-nextId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-property-nextId' class='name expandable'>nextId</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>A counter so we can assign listeners an id to keep\nthem in FIFO order. ...</div><div class='long'><p>A counter so we can assign listeners an <code>id</code> to keep\nthem in FIFO order.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-readyStatesRe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-property-readyStatesRe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-property-readyStatesRe' class='name expandable'>readyStatesRe</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/complete/i</code></p></div></div></div><div id='property-scrollTimer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-property-scrollTimer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-property-scrollTimer' class='name expandable'>scrollTimer</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Timer for doScroll polling</p>\n</div><div class='long'><p>Timer for doScroll polling</p>\n</div></div></div><div id='property-sortGeneration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-property-sortGeneration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-property-sortGeneration' class='name expandable'>sortGeneration</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>A captured value of generation that indicates\nwhen the listeners were last sorted. ...</div><div class='long'><p>A captured value of <code>generation</code> that indicates\nwhen the <code>listeners</code> were last sorted.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-state' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-property-state' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-property-state' class='name expandable'>state</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Holds the current ready state as managed by this class. ...</div><div class='long'><p>Holds the current ready state as managed by this class. The values possible are:</p>\n\n<ul>\n<li>0 - Not ready.</li>\n<li>1 - Ready detected but listeners are not yet notified.</li>\n<li>2 - Ready detected and listeners are notified. See also <code>firing</code>.</li>\n</ul>\n\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-timer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-property-timer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-property-timer' class='name expandable'>timer</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>The handle from <code>setTimeout</code> for the delayed notification\nof ready.</p>\n</div><div class='long'><p>The handle from <code>setTimeout</code> for the delayed notification\nof ready.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-bind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-bind' class='name expandable'>bind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Binds the appropriate browser event for checking if the DOM has loaded. ...</div><div class='long'><p>Binds the appropriate browser event for checking if the DOM has loaded.</p>\n</div></div></div><div id='method-block' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-block' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-block' class='name expandable'>block</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-doInvokeAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-doInvokeAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-doInvokeAll' class='name expandable'>doInvokeAll</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-doReadyEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-doReadyEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-doReadyEvent' class='name expandable'>doReadyEvent</a>( <span class='pre'>ev</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ev</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-fireReady' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-fireReady' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-fireReady' class='name expandable'>fireReady</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method starts the process of firing the ready event. ...</div><div class='long'><p>This method starts the process of firing the ready event. This may be delayed based\non the <code>delay</code> property.</p>\n</div></div></div><div id='method-handleReady' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-handleReady' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-handleReady' class='name expandable'>handleReady</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method iterates over the listeners and invokes them. ...</div><div class='long'><p>This method iterates over the <code>listeners</code> and invokes them. This advances the\n<code>state</code> from 1 to 2 and ensure the proper subset of <code>listeners</code> are invoked.</p>\n</div></div></div><div id='method-handleReadySoon' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-handleReadySoon' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-handleReadySoon' class='name expandable'>handleReadySoon</a>( <span class='pre'>[delay]</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method is called to schedule a call to handleReady using a setTimeout. ...</div><div class='long'><p>This method is called to schedule a call to <code>handleReady</code> using a <code>setTimeout</code>. It\nensures that only one timer is pending.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>delay</span> : Number (optional)<div class='sub-desc'><p>If passed, this overrides the <code>delay</code> property.</p>\n</div></li></ul></div></div></div><div id='method-invoke' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-invoke' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-invoke' class='name expandable'>invoke</a>( <span class='pre'>listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method invokes the given listener instance based on its options. ...</div><div class='long'><p>This method invokes the given <code>listener</code> instance based on its options.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listener</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-invokeAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-invokeAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-invokeAll' class='name expandable'>invokeAll</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Invokes as many listeners as are appropriate given the current state. ...</div><div class='long'><p>Invokes as many listeners as are appropriate given the current state. This should\nonly be called when DOM ready is achieved. The remaining business of <code>blocks</code> is\nhandled here.</p>\n</div></div></div><div id='method-makeListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-makeListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-makeListener' class='name expandable'>makeListener</a>( <span class='pre'>fn, [scope], [options]</span> ) : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method wraps the given listener pieces in a proper object for the listeners\narray and invoke methods. ...</div><div class='long'><p>This method wraps the given listener pieces in a proper object for the <code>listeners</code>\narray and <code>invoke</code> methods.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The method to call.</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the <code>fn</code> executes.\nDefaults to the browser window.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object with extra options.</p>\n<ul><li><span class='pre'>delay</span> : Number (optional)<div class='sub-desc'><p>A number of milliseconds to delay.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>priority</span> : Number (optional)<div class='sub-desc'><p>Relative priority of this callback. A larger\nnumber will result in the callback being sorted before the others.  Priorities\n1000 or greater and -1000 or lesser are reserved for internal framework use only.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>dom</span> : Boolean (optional)<div class='sub-desc'><p>Pass <code>true</code> to only wait for DOM ready, <code>false</code>\nmeans full Framework and DOM readiness.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The listener instance.</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-on' class='name expandable'>on</a>( <span class='pre'>fn, [scope], [options]</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Adds a listener to be notified when the document is ready (before onload and before\nimages are loaded). ...</div><div class='long'><p>Adds a listener to be notified when the document is ready (before onload and before\nimages are loaded).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The method to call.</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the <code>fn</code> executes.\nDefaults to the browser window.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object with extra options.</p>\n<ul><li><span class='pre'>delay</span> : Number (optional)<div class='sub-desc'><p>A number of milliseconds to delay.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>priority</span> : Number (optional)<div class='sub-desc'><p>Relative priority of this callback. A larger\nnumber will result in the callback being sorted before the others.  Priorities\n1000 or greater and -1000 or lesser are reserved for internal framework use only.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>dom</span> : Boolean (optional)<div class='sub-desc'><p>Pass <code>true</code> to only wait for DOM ready, <code>false</code>\nmeans full Framework and DOM readiness.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul></div></li></ul></div></div></div><div id='method-onReadyEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-onReadyEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-onReadyEvent' class='name expandable'>onReadyEvent</a>( <span class='pre'>[ev]</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This is a generic event handler method attached to all of the various events that\nmay indicate ready state. ...</div><div class='long'><p>This is a generic event handler method attached to all of the various events that\nmay indicate ready state. The first call to this method indicates ready state has\nbeen achieved.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ev</span> : Event (optional)<div class='sub-desc'><p>The event instance.</p>\n</div></li></ul></div></div></div><div id='method-onReadyStateChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-onReadyStateChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-onReadyStateChange' class='name expandable'>onReadyStateChange</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This event handler is called when the readyState changes. ...</div><div class='long'><p>This event handler is called when the readyState changes.</p>\n</div></div></div><div id='method-pollScroll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-pollScroll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-pollScroll' class='name expandable'>pollScroll</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This strategy has minimal benefits for Sencha solutions that build\nthemselves (ie. ...</div><div class='long'><p>This strategy has minimal benefits for Sencha solutions that build\nthemselves (ie. minimal initial page markup). However, progressively-enhanced\npages (with image content and/or embedded frames) will benefit the most\nfrom it. Browser timer resolution is too poor to ensure a doScroll check\nmore than once on a page loaded with minimal assets (the readystatechange\nevent 'complete' usually beats the doScroll timer on a 'lightly-loaded'\ninitial document).</p>\n</div></div></div><div id='method-sortFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-sortFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-sortFn' class='name expandable'>sortFn</a>( <span class='pre'>a, b</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Sorts the listeners array by phase and priority such that the first listener\nto fire can be determined using pop on t...</div><div class='long'><p>Sorts the <code>listeners</code> array by <code>phase</code> and <code>priority</code> such that the first listener\nto fire can be determined using <code>pop</code> on the <code>listeners</code> array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>a</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>b</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-unbind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-unbind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-unbind' class='name expandable'>unbind</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method is called to remove all event listeners that may have been set up to\ndetect ready state. ...</div><div class='long'><p>This method is called to remove all event listeners that may have been set up to\ndetect ready state.</p>\n</div></div></div><div id='method-unblock' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.env.Ready'>Ext.env.Ready</span><br/><a href='source/Ready.html#Ext-env-Ready-method-unblock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Ready-method-unblock' class='name expandable'>unblock</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{"private":true}});