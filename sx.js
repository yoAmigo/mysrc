(function (ext) {

    // shutdown時に実行される。
    ext._shutdown = function () { };

    // 外部デバイスなどとの接続を行うものは、ここでステータスを返却
    ext._getStatus = function () {
        return { status: 2, msg: 'Ready' };
    };

    // ブロック実行時の処理内容
    ext.command_example = function (callback) {
        console.log('Hello World!');
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            // ここでサーバーからの応答を処理します。
            console.log('okOK');
        };
        httpRequest.open('GET', 'http://localhost:8001', true);
        httpRequest.send();
        console.log('sent');
    };

    ext.command_example2 = function (callback) {

    };

    // ブロックの形や表示する命令、上で作成した関数との紐付け
    var descriptor = {
        blocks: [
            [' ', '%s を実行', 'command_example', 'デフォルト表示'],
            [' ', 'aa を実行', 'command_example2', 'デフォルト2表示'],
        ]
    };

    // ブロックを登録
    ScratchExtensions.register('Example Extension', descriptor, ext);
})({});
