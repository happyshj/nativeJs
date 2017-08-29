// 查询字符串
function getQueryStringArgs() {
    // 获取查询字符串并去掉问号
    let qs = ( location.search.length > 0 ? location.search.slice(1) : ""),
        // 保存的数据对象
        args = {},
        items = qs.length ? qs.split("&") : [];

    for(let i = 0; i < items.length; i++){
        let item = items[i].split("="),
            name = decodeURIComponent(item[0]),
            value = decodeURIComponent(item[1]);
        if (name.length){
            args[name] = value;
        }
    }
    return args;
}
