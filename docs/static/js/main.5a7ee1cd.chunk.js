(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(35)},30:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),l=a.n(i),c=(a(30),a(24)),o=a(5),s=a(6),m=a(8),u=a(7),p=a(14),h=a(9),f=a(11),d=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pokeInfo,a=e.filterName;return r.a.createElement("ul",{className:"pokeList"},t.filter(function(e){return e.name.includes(a)}).map(function(e){return r.a.createElement("li",{className:"item",key:e.id},r.a.createElement(f.b,{className:"item__link",to:"/pokemon/".concat(e.id)},r.a.createElement("div",{className:"item__img",style:{backgroundImage:"url(".concat(e.sprites.front_default,")")}}),r.a.createElement("div",{className:"item__down"},r.a.createElement("h1",{className:"item__name"},e.name),r.a.createElement("ul",{className:"item__types__list"},e.types.map(function(e,t){return r.a.createElement("li",{className:"types",key:t},r.a.createElement("h2",{className:"type"},e.type.name))})),null!==e.evolution.evolves_from_species?r.a.createElement("h2",{className:"item__evolution"},"Evoluciona de: ",e.evolution.evolves_from_species.name):"")))}))}}]),t}(r.a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.handleFilterName;return r.a.createElement("div",{className:"filter-name"},r.a.createElement("label",{htmlFor:"filterName",className:"filter__label"},"Filtra por nombre"),r.a.createElement("input",{type:"text",id:"filterName",onChange:e}))}}]),t}(r.a.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleFilterName,a=e.pokeInfo,n=e.filterName;return r.a.createElement("div",{className:"app"},r.a.createElement(b,{handleFilterName:t}),r.a.createElement(d,{pokeInfo:a,filterName:n}))}}]),t}(r.a.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.props.handleResetFilter()}},{key:"render",value:function(){var e=this.props.pokeInfo,t=this.props.match.params.id,a=e.find(function(e){return parseInt(t)===e.id});return r.a.createElement("div",{className:"detail__container"},void 0!==a?r.a.createElement("div",{className:"detail__card"},r.a.createElement("h2",{className:"newPoke__name"},a.name),r.a.createElement("h2",{className:"newPoke__height"},"Height: ",a.height," cm"),r.a.createElement("h2",{className:"newPoke__weight"},"Weight: ",a.weight," gr"),r.a.createElement("ul",{className:"newPoke__hability__List"},"Abilities:",a.abilities.map(function(e,t){return r.a.createElement("li",{className:"ability__item",key:t},r.a.createElement("h2",{className:"ability__name"},e.ability.name))})),r.a.createElement("div",{className:"newPoke__images"},r.a.createElement("div",{className:"image image1",style:{backgroundImage:"url(".concat(a.sprites.front_default,")")}}),r.a.createElement("div",{className:"image image2",style:{backgroundImage:"url(".concat(a.sprites.back_default,")")}}))):r.a.createElement("p",null,"No ha dado timepo a recoger la info que solicitas"),r.a.createElement(f.b,{className:"return",to:"/"},"RETURN"))}}]),t}(r.a.Component),v=function(e){return fetch(e).then(function(e){return e.json()})},k=a(10),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={pokeInfo:[],filterName:""},a.handleFilterName=a.handleFilterName.bind(Object(p.a)(a)),a.handleResetFilter=a.handleResetFilter.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchPetition()}},{key:"fetchPetition",value:function(){var e=this;v("https://pokeapi.co/api/v2/pokemon?limit=25").then(function(e){var t=e.results.map(function(e){return v(e.url).then(function(e){return v(e.species.url).then(function(t){return Object(c.a)({},e,{evolution:t})})})});return Promise.all(t)}).then(function(t){e.setState({pokeInfo:t}),console.log(e.state.pokeInfo)})}},{key:"handleFilterName",value:function(e){var t=e.currentTarget.value;this.setState({filterName:t})}},{key:"handleResetFilter",value:function(){this.setState({filterName:""})}},{key:"render",value:function(){var e=this,t=this.state,a=t.pokeInfo,n=t.filterName;return r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/",render:function(){return r.a.createElement(N,{handleFilterName:e.handleFilterName,pokeInfo:a,filterName:n})}}),r.a.createElement(k.a,{path:"/pokemon/:id",render:function(t){return r.a.createElement(_,{match:t.match,pokeInfo:a,handleResetFilter:e.handleResetFilter})}}))}}]),t}(r.a.Component);l.a.render(r.a.createElement(f.a,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5a7ee1cd.chunk.js.map