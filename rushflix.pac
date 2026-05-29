function FindProxyForURL(url, host) {
    var PROXY = "PROXY 208.85.23.122:80";
    var streaming = [
        "play.max.com","max.com","hbo.com","hbomax.com",
        "api.hbo.com","sessions.max.com","cdn.max.com",
        "hbomaxcdn.com","wbd-streaming.com","warnermedia.com"
    ];
    for (var i = 0; i < streaming.length; i++) {
        if (dnsDomainIs(host, streaming[i]) ||
            shExpMatch(host, "*." + streaming[i])) {
            return PROXY;
        }
    }
    return "DIRECT";
}
