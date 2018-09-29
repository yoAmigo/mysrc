(function (ext) {

    // shutdown時に実行される。
    ext._shutdown = function () { };

    // 外部デバイスなどとの接続を行うものは、ここでステータスを返却
    ext._getStatus = function () {
        return { status: 2, msg: 'Ready' };
    };

    // ブロック実行時の処理内容
    ext.command_example = function (callback) {
        confirm.log('Hello World!');
    };

    // ブロックの形や表示する命令、上で作成した関数との紐付け
    var descriptor = {
        blocks: [
            [' ', '%s を実行', 'command_example', 'デフォルト表示'],
        ]
    };

    // ブロックを登録
    ScratchExtensions.register('Example Extension', descriptor, ext);
})({});
