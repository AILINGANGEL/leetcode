var subdomainVisits = function(cpdomains) {
    let visits = {};
    cpdomains.forEach(item=>{
        let tmp = item.split(' ');
        let num = +tmp[0];
        let domains = [];
        calParentDomain(domains, tmp[1]);
        domains.forEach(domain=>{
           if(domain in visits) {
               visits[domain] += num;
           } else {
               visits[domain] = num;
           }
        });
    });
   return Object.keys(visits).map(item=> visits[item] + ' ' + item);
};

var calParentDomain = function(arr, domain) {
    if(domain) {
        arr.push(domain);
        let pDomain = domain.split('.').slice(1).join('.');
        calParentDomain(arr, pDomain);
    }    
}
