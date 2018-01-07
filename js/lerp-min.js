//! Lerp
//! Version : 1.0.0
//! Author  : Dominic Khac @dominickhacnguyen
//! License : MIT
//! https://dominickhac.com/Lerp

var lerp={debug:!1,s:{pt:function(e,r,n,t,o){return e==r?(n+t)/2:n+(o-e)*(t-n)/(r-e)},arr:function(e,r,n){var t=e.getLerpIndices(n);try{var o=e[t.lowIndex],l=e[t.highIndex],i=r[t.lowIndex],d=r[t.highIndex];return lerp.debug&&console.log("a1: "+o,"| a2: "+l,"| b1: "+i,"| b2: "+d),lerp.s.pt(o,l,i,d,n)}catch(g){console.log("%cError: Search El must be within Array A.","color:red")}}},d:{pt:function(e,r,n,t,o,l,i,d,g,c){return slerp1=lerp.s.pt(e,r,o,l,g),slerp2=lerp.s.pt(e,r,i,d,g),lerp.s.pt(n,t,slerp1,slerp2,c)},arr:function(e,r,n,t,o){var l=e.getLerpIndices(t),i=r.getLerpIndices(o);try{var d=e[l.lowIndex],g=e[l.highIndex],c=r[i.lowIndex],p=r[i.highIndex],s=lerp.getMatrixCol(n,i.lowIndex),h=lerp.getMatrixCol(n,i.highIndex),I=s[l.lowIndex],a=s[l.highIndex],x=h[l.lowIndex],u=h[l.highIndex];return lerp.debug&&console.log("a1: "+d,"| a2: "+g,"| b1: "+c,"| b2: "+p),lerp.debug&&console.log("c1: "+I,"| c2: "+a,"| c3: "+x,"| c4: "+u),lerp.d.pt(d,g,c,p,I,a,x,u,t,o)}catch(f){console.log("%cError: Search elements must be within arrays.","color:red")}}},getLerpIndices:function(e){var r,n,t=0,o=this.length-1;if(this[o]==e)return lerp.debug&&console.log("Same Index:"+o.toString()),{lowIndex:o,highIndex:o};if(!(e>this[o]||e<this[t])){for(;o>=t;)if(r=(t+o)/2|0,n=this[r],e>n)t=r+1;else{if(!(n>e))return lerp.debug&&console.log("Same Index:"+r.toString()),{lowIndex:r,highIndex:r};o=r-1}return lerp.debug&&console.log("Different Indices: "+(o-1).toString()+", "+(o+1).toString()),{lowIndex:o,highIndex:o+1}}},getMatrixCol:function(e,r){for(var n=[],t=0;t<e.length;t++)n.push(e[t][r]);return n}};Array.prototype.getLerpIndices=lerp.getLerpIndices;