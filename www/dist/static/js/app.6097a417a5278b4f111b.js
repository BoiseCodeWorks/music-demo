webpackJsonp([1],{"/kTu":function(t,e){},"4CAO":function(t,e){},GuHY:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},i=s("VU/8")({name:"App"},a,!1,null,null,null).exports,n=s("/ocq"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"itunes-search"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{type:"submit"}},[e("i",{staticClass:"fa fa-fw fa-search"})])}]};var c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-results"},[s("h4",[t._v("Search Results")]),t._v(" "),s("ul",t._l(t.results,function(e){return s("li",[t._v("\n      "+t._s(e.title)+" "),s("i",{staticClass:"fa fa-fw fa-plus-square action",on:{click:function(s){t.addSongToActivePlaylist(e)}}})])}))])},staticRenderFns:[]};var o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-playlist"},[s("h4",[t._v("My Tunes: "+t._s(t.playlist.title))]),t._v(" "),s("ul",t._l(t.playlist.songs,function(e){return s("li",[t._v("\n      "+t._s(e.title)+" "),s("i",{staticClass:"fa fa-fw fa-minus-square action",on:{click:function(s){t.removeSongFromPlaylist(e)}}})])}))])},staticRenderFns:[]};var u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"all-playlists"},[s("h4",[t._v("All Playlists")]),t._v(" "),s("ul",{staticClass:"playlists"},t._l(t.allPlaylists,function(e){return s("li",{key:e._id,staticClass:"playlist",on:{click:function(s){t.setActivePlaylist(e)}}},[t._v(t._s(e.title))])}))])},staticRenderFns:[]};var p={name:"HelloWorld",components:{itunesSearch:s("VU/8")({name:"itunes-search",data:function(){return{query:""}},computed:{},methods:{search:function(){this.$store.dispatch("getSearchResults",this.query)}}},r,!1,function(t){s("OWEl")},null,null).exports,searchResults:s("VU/8")({name:"search-results",computed:{results:function(){return this.$store.state.searchResults}},methods:{addSongToActivePlaylist:function(t){this.$store.dispatch("addSongToActivePlaylist",t)}}},c,!1,function(t){s("GuHY")},null,null).exports,userPlaylist:s("VU/8")({name:"user-playlist",computed:{playlist:function(){return this.$store.state.activePlaylist}},methods:{removeSongFromPlaylist:function(t){this.$store.dispatch("removeSongFromPlaylist",t)}}},o,!1,function(t){s("/kTu")},null,null).exports,allPlaylists:s("VU/8")({name:"all-playlists",mounted:function(){this.$store.dispatch("getAllPlaylists")},computed:{allPlaylists:function(){return this.$store.state.allPlaylists}},methods:{setActivePlaylist:function(t){this.$store.dispatch("selectActivePlaylist",t)}}},u,!1,function(t){s("4CAO")},null,null).exports},data:function(){return{}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("itunes-search"),this._v(" "),e("search-results"),this._v(" "),e("user-playlist"),this._v(" "),e("all-playlists")],1)},staticRenderFns:[]},m=s("VU/8")(p,d,!1,null,null,null).exports;l.a.use(n.a);var f=new n.a({routes:[{path:"/",name:"HelloWorld",component:m}]}),h=s("NYxO"),v=s("mtWM"),y=s.n(v),_=!window.location.host.includes("localhost")?"//music-demo.herokuapp.com/":"//localhost:3000/",P=y.a.create({baseURL:"https://itunes.apple.com/search?media=music&term=",timeout:3e3}),g=y.a.create({baseURL:_+"api/",timeout:3e3});l.a.use(h.a);var A=new h.a.Store({state:{searchResults:[],activePlaylist:{title:"demo",songs:[{title:"demo song"}]},allPlaylists:[]},mutations:{setSearchResults:function(t,e){t.searchResults=e},setActivePlaylist:function(t,e){t.activePlaylist=e},setAllPlaylists:function(t,e){t.allPlaylists=e},addPlaylist:function(t,e){t.allPlaylists.push(e)}},actions:{getSearchResults:function(t,e){t.dispatch;var s=t.commit;P.get(e).then(function(t){var e=t.data.results.map(function(t){return{title:t.trackName,albumArt:t.artworkUrl100?t.artworkUrl100.replace("100x100","250x250"):"//placehold.it/250x250",artist:t.artistName,album:t.collectionName,price:t.collectionPrice,preview:t.previewUrl}});s("setSearchResults",e)})},getAllPlaylists:function(t){var e=t.commit;t.dispatch;g.get("playlists").then(function(t){e("setAllPlaylists",t.data)})},createPlaylist:function(t,e){t.dispatch;var s=t.commit;g.post("playlists",e).then(function(t){s("addPlaylist",e)})},selectActivePlaylist:function(t,e){var s=t.commit;t.dispatch;s("setActivePlaylist",e)},addSongToActivePlaylist:function(t,e){var s=t.commit,l=t.dispatch,a=t.state;if(!a.activePlaylist._id)return l("showError","please select a playlist");g.put("playlists/"+a.activePlaylist._id+"/songs",e).then(function(t){s("setActivePlaylist",t.data)})},removeSongFromPlaylist:function(t,e){var s=t.commit,l=(t.dispatch,t.state);g.delete("/playlists/"+l.activePlaylist._id+"/songs/"+e._id).then(function(t){s("setActivePlaylist",t.data)})},showError:function(t,e){t.commit;console.log(e)}}});l.a.config.productionTip=!1,new l.a({el:"#app",store:A,router:f,components:{App:i},template:"<App/>"})},OWEl:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6097a417a5278b4f111b.js.map