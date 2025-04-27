const o=defineEventHandler(e=>{const t=e.node.req,r=t.headers.host,n=t.url||"/";if(r==="www.dezalroletypoznan.pl")return sendRedirect(e,"https://dezalroletypoznan.pl"+n,301)});export{o as default};
