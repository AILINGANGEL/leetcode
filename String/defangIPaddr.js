var defangIPaddr = function(address) {
    // 注意正则表达式中要对.进行转义
    return address.replace(/\./, '[.]');
};